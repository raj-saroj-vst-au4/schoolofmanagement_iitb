SERVER := r4id@10.195.102.52
REMOTE := ~/sjmsom-asset-factory
LOCAL  := $(shell pwd)
WEB    := $(LOCAL)/../web/public/media

# Sync factory code + references to server
sync:
	rsync -az --exclude 'out/' --exclude '__pycache__/' ./ $(SERVER):$(REMOTE)/
	rsync -az ./references/ $(SERVER):$(REMOTE)/references/

# Upload fresh reference images from ../usable assets/ (run before sync)
refresh-refs:
	rsync -az "../usable assets/" ./references/

# List resolved prompts without running
list:
	ssh $(SERVER) "cd $(REMOTE) && python3 orchestrator.py --list jobs/*.yaml"

# Run one job: make run JOB=og_image
run:
	ssh $(SERVER) "cd $(REMOTE) && python3 orchestrator.py jobs/$(JOB).yaml"

# Run all jobs across all 4 GPUs in parallel
run-all:
	ssh $(SERVER) "cd $(REMOTE) && python3 orchestrator.py jobs/*.yaml"

# Pull raw PNG/WEBP outputs back to local out/
pull:
	rsync -az $(SERVER):$(REMOTE)/out/ ./out/

# Convert generated PNGs/WEBPs to web-ready JPG/WEBM and drop into web/public/media/
publish:
	@mkdir -p $(WEB)/day $(WEB)/faculty
	@for d in day_06-20 day_09-00 day_13-30 day_17-45 day_22-10; do \
	  f="out/$$d/sjm_$${d}_00001_.png"; \
	  [ -f "$$f" ] && sips -s format jpeg -s formatOptions 88 "$$f" --out "$(WEB)/day/$$d.jpg" >/dev/null && echo "→ $(WEB)/day/$$d.jpg"; \
	done
	@[ -f out/hero_still/sjm_hero_still_00001_.png ] && \
	  sips -s format jpeg -s formatOptions 90 out/hero_still/sjm_hero_still_00001_.png --out "$(WEB)/hero_still.jpg" >/dev/null && \
	  echo "→ $(WEB)/hero_still.jpg"
	@[ -f out/og_image/sjm_og_image_00001_.png ] && \
	  sips -s format jpeg -s formatOptions 88 out/og_image/sjm_og_image_00001_.png --out "$(LOCAL)/../web/public/og.jpg" >/dev/null && \
	  echo "→ web/public/og.jpg"
	@for f in out/hero_broll/sjm_hero_broll_00001_.webp; do \
	  [ -f "$$f" ] && cp "$$f" "$(WEB)/hero_broll.webp" && echo "→ $(WEB)/hero_broll.webp"; \
	done

# Tail ComfyUI logs for a specific GPU (usage: make logs GPU=3)
GPU ?= 3
logs:
	ssh $(SERVER) "tail -f /tmp/comfyui-logs/gpu$(GPU).log"

# Show GPU VRAM free on each worker
status:
	ssh $(SERVER) 'for p in 8188 8189 8190 8191; do printf "port %s: " $$p; curl -s -m 3 http://localhost:$$p/system_stats | python3 -c "import sys,json;d=json.load(sys.stdin);print(d[\"devices\"][0][\"name\"],\"free=\",round(d[\"devices\"][0][\"vram_free\"]/1024**3),\"GB\")"; done'

clean-local:
	rm -rf out/

.PHONY: sync refresh-refs list run run-all pull publish logs status clean-local
