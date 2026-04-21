#!/usr/bin/env python3
"""SJMSOM asset factory — submits jobs to the 4×ComfyUI workers.

Usage:
    python orchestrator.py jobs/*.yaml            # run one or more job files
    python orchestrator.py --list                 # dry-run, show what would run
    python orchestrator.py --port 8188 jobs/x.yaml  # force a single worker

Design:
  - Each ComfyUI worker on ports 8188-8191 is one GPU.
  - A simple round-robin queue distributes jobs across workers (I/O-bound wait).
  - For each job: render the workflow template with prompt/input-image/output-prefix,
    POST to /prompt, then poll /history until the job's outputs appear.
  - Outputs are fetched via /view and saved under out/<slug>/.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
import time
import uuid
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from urllib import error as urlerr
from urllib import parse as urlparse
from urllib import request as urlreq

import yaml  # type: ignore

try:
    from prompts import NEGATIVE, VIDEO_MOTION_HINTS, build_prompt
except ImportError:
    sys.path.insert(0, str(Path(__file__).parent))
    from prompts import NEGATIVE, VIDEO_MOTION_HINTS, build_prompt

ROOT = Path(__file__).parent.resolve()
WORKFLOWS = ROOT / "workflows"
OUT = ROOT / "out"
REFERENCES = ROOT / "references"
COMFY_INPUT = Path("/home/r4id/ComfyUI/input")  # ComfyUI's input dir on this host

WORKER_PORTS = [8188, 8189, 8190, 8191]
POLL_INTERVAL = 2.0
TIMEOUT_S = 60 * 30


@dataclass
class Job:
    slug: str
    kind: str  # flux_t2i | flux_i2i | wan_i2v
    subject: str
    input_image: str | None = None
    motion: str | None = None
    width: int | None = None
    height: int | None = None
    seed: int | None = None
    steps: int | None = None
    denoise: float | None = None
    extra: str = ""
    negative_extra: str = ""
    length: int | None = None  # video frames
    guidance: float | None = None


def load_job(path: Path) -> Job:
    with path.open() as f:
        d = yaml.safe_load(f)
    return Job(slug=path.stem, **d)


def stable_seed(slug: str) -> int:
    return int(hashlib.sha1(slug.encode()).hexdigest()[:7], 16)


def stage_input_image(name: str) -> str:
    """Copy a reference image into ComfyUI's input dir (where LoadImage reads from)."""
    src = REFERENCES / name
    if not src.exists():
        raise FileNotFoundError(f"reference image not found: {src}")
    COMFY_INPUT.mkdir(parents=True, exist_ok=True)
    # Namespace with sjm_ to avoid collisions with other ComfyUI users
    staged_name = f"sjm_{src.name}"
    dst = COMFY_INPUT / staged_name
    if not dst.exists() or dst.stat().st_size != src.stat().st_size:
        shutil.copy2(src, dst)
    return staged_name


def render_workflow(job: Job) -> dict:
    tpl_path = WORKFLOWS / f"{job.kind}.json"
    wf: dict[str, Any] = json.loads(tpl_path.read_text())

    seed = job.seed if job.seed is not None else stable_seed(job.slug)
    prompt = build_prompt(job.subject, extra=job.extra)
    out_prefix = f"sjm_{job.slug}"

    def inject(obj, key, value):
        """Recursively replace placeholder strings anywhere in the workflow."""
        if isinstance(obj, dict):
            for k, v in obj.items():
                if isinstance(v, str) and v == key:
                    obj[k] = value
                else:
                    inject(v, key, value)
        elif isinstance(obj, list):
            for v in obj:
                inject(v, key, value)

    inject(wf, "__PROMPT__", prompt)
    inject(wf, "__OUTPUT_PREFIX__", out_prefix)

    if job.kind == "flux_t2i":
        w = job.width or 2048
        h = job.height or 1152
        wf["5"]["inputs"]["width"] = w
        wf["5"]["inputs"]["height"] = h
        wf["9"]["inputs"]["width"] = w
        wf["9"]["inputs"]["height"] = h
        wf["10"]["inputs"]["seed"] = seed
        if job.steps:
            wf["10"]["inputs"]["steps"] = job.steps
        if job.guidance is not None:
            wf["8"]["inputs"]["guidance"] = job.guidance

    elif job.kind == "flux_i2i":
        if not job.input_image:
            raise ValueError(f"flux_i2i job {job.slug} requires input_image")
        staged = stage_input_image(job.input_image)
        inject(wf, "__INPUT_IMAGE__", staged)
        w = job.width or 2048
        h = job.height or 1152
        wf["4"]["inputs"]["width"] = w
        wf["4"]["inputs"]["height"] = h
        wf["9"]["inputs"]["width"] = w
        wf["9"]["inputs"]["height"] = h
        wf["10"]["inputs"]["seed"] = seed
        if job.steps:
            wf["10"]["inputs"]["steps"] = job.steps
        if job.denoise is not None:
            wf["10"]["inputs"]["denoise"] = job.denoise
        if job.guidance is not None:
            wf["8"]["inputs"]["guidance"] = job.guidance

    elif job.kind == "wan_i2v":
        if not job.input_image:
            raise ValueError(f"wan_i2v job {job.slug} requires input_image")
        staged = stage_input_image(job.input_image)
        inject(wf, "__INPUT_IMAGE__", staged)
        if job.motion and job.motion in VIDEO_MOTION_HINTS:
            hint = VIDEO_MOTION_HINTS[job.motion]
            current = wf["6"]["inputs"]["text"]
            wf["6"]["inputs"]["text"] = f"{current}. Motion: {hint}"
        w = job.width or 1280
        h = job.height or 720
        wf["8"]["inputs"]["width"] = w
        wf["8"]["inputs"]["height"] = h
        wf["8"]["inputs"]["length"] = job.length or 81
        wf["11"]["inputs"]["noise_seed"] = seed
        wf["12"]["inputs"]["noise_seed"] = seed
        if job.steps:
            half = job.steps // 2
            wf["11"]["inputs"]["steps"] = job.steps
            wf["12"]["inputs"]["steps"] = job.steps
            wf["11"]["inputs"]["end_at_step"] = half
            wf["12"]["inputs"]["start_at_step"] = half
        if job.negative_extra:
            current = wf["7"]["inputs"]["text"]
            wf["7"]["inputs"]["text"] = f"{current}, {job.negative_extra}"

    else:
        raise ValueError(f"unknown kind: {job.kind}")

    return wf


def http_json(url: str, payload: dict | None = None) -> dict:
    data = json.dumps(payload).encode() if payload is not None else None
    req = urlreq.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"} if data else {},
        method="POST" if data else "GET",
    )
    with urlreq.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def http_bytes(url: str) -> bytes:
    with urlreq.urlopen(url, timeout=60) as r:
        return r.read()


def submit_job(job: Job, port: int) -> Path:
    """Submit a job to a ComfyUI worker and return path to the final output."""
    wf = render_workflow(job)
    client_id = str(uuid.uuid4())
    base = f"http://localhost:{port}"

    print(f"[{job.slug}] → port {port} ({job.kind})")
    resp = http_json(f"{base}/prompt", {"prompt": wf, "client_id": client_id})
    prompt_id = resp.get("prompt_id")
    if not prompt_id:
        raise RuntimeError(f"no prompt_id in response: {resp}")

    # Poll /history until outputs appear
    start = time.time()
    last_print = 0.0
    while True:
        if time.time() - start > TIMEOUT_S:
            raise TimeoutError(f"[{job.slug}] timeout after {TIMEOUT_S}s")
        try:
            hist = http_json(f"{base}/history/{prompt_id}")
        except urlerr.URLError:
            time.sleep(POLL_INTERVAL)
            continue
        entry = hist.get(prompt_id)
        if entry and "outputs" in entry:
            outputs = entry["outputs"]
            break
        elapsed = time.time() - start
        if elapsed - last_print > 20:
            print(f"  [{job.slug}] {int(elapsed)}s elapsed, still rendering...")
            last_print = elapsed
        time.sleep(POLL_INTERVAL)

    # Find the output file(s) — look for 'images' or 'gifs' in any output node
    dest_dir = OUT / job.slug
    dest_dir.mkdir(parents=True, exist_ok=True)
    saved: list[Path] = []
    for node_id, node_out in outputs.items():
        for kind in ("images", "gifs"):
            for item in node_out.get(kind, []) or []:
                q = urlparse.urlencode(
                    {"filename": item["filename"], "subfolder": item.get("subfolder", ""), "type": item.get("type", "output")}
                )
                data = http_bytes(f"{base}/view?{q}")
                dest = dest_dir / item["filename"]
                dest.write_bytes(data)
                saved.append(dest)
    if not saved:
        raise RuntimeError(f"[{job.slug}] no outputs found in {outputs}")
    print(f"[{job.slug}] ✓ saved {len(saved)} file(s): {', '.join(p.name for p in saved)}")
    return saved[0]


def run_all(jobs: list[Job], ports: list[int], max_parallel: int | None = None) -> dict[str, Path]:
    """Distribute jobs across workers. Uses one worker per job at a time."""
    max_parallel = max_parallel or len(ports)
    results: dict[str, Path] = {}
    with ThreadPoolExecutor(max_workers=max_parallel) as ex:
        futs = {}
        for i, job in enumerate(jobs):
            port = ports[i % len(ports)]
            futs[ex.submit(submit_job, job, port)] = job
        for fut in as_completed(futs):
            job = futs[fut]
            try:
                results[job.slug] = fut.result()
            except Exception as e:
                print(f"[{job.slug}] ✗ FAILED: {e}", file=sys.stderr)
    return results


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("jobs", nargs="+", help="paths to job YAML files")
    ap.add_argument("--port", type=int, action="append", help="limit to specific worker port(s)")
    ap.add_argument("--list", action="store_true", help="dry-run, show resolved prompts and exit")
    ap.add_argument("--parallel", type=int, default=None)
    args = ap.parse_args()

    ports = args.port or WORKER_PORTS
    job_paths = [Path(p) for p in args.jobs]
    missing = [p for p in job_paths if not p.exists()]
    if missing:
        print(f"missing: {missing}", file=sys.stderr)
        return 1
    jobs = [load_job(p) for p in job_paths]

    if args.list:
        for job in jobs:
            prompt = build_prompt(job.subject, extra=job.extra)
            print(f"=== {job.slug} ({job.kind}) ===")
            print(f"  seed: {job.seed if job.seed is not None else stable_seed(job.slug)}")
            if job.input_image:
                print(f"  input_image: {job.input_image}")
            if job.motion:
                print(f"  motion: {job.motion}")
            print(f"  prompt: {prompt[:240]}...")
            print()
        return 0

    print(f"running {len(jobs)} job(s) across ports {ports}")
    results = run_all(jobs, ports, args.parallel)
    print(f"\ndone: {len(results)}/{len(jobs)} jobs succeeded")
    print(f"outputs in {OUT}/")
    return 0 if len(results) == len(jobs) else 1


if __name__ == "__main__":
    sys.exit(main())
