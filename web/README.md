# SJMSOM Landing Page

Cinematic landing page for the Shailesh J. Mehta School of Management, IIT Bombay.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Chakra UI v2 · Framer Motion · React Three Fiber · Lenis smooth scroll.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000  (or PORT=3535 npm run dev)
npm run build   # production build
npm start       # serve the production build
```

## Page structure

Top-down flow on `/`:

| Section | File | Notes |
|---|---|---|
| Nav | `src/components/Nav.tsx` | Scroll-reactive blur, mobile drawer |
| Hero | `src/components/Hero.tsx` + `HeroScene.tsx` | R3F: glass torus-knot crest, particle sphere, studio env |
| Marquee | `src/components/Marquee.tsx` | Infinite pedigree ticker |
| Programs | `src/components/ProgramStack.tsx` | MBA / EMBA / PhD / ExecEd cards |
| Pedigree | `src/components/Pedigree.tsx` | Animated counter stats |
| Alumni | `src/components/AlumniGlobe.tsx` + `AlumniGlobeScene.tsx` | Rotating 3D globe, 320 alumni points |
| Day at SJMSOM | `src/components/DayAtSJMSOM.tsx` | Sticky scroll: 5 beats from 06:20 to 22:10 |
| Faculty | `src/components/FacultyWall.tsx` | Gradient portrait stand-ins + pull quotes |
| Research | `src/components/ResearchUniverse.tsx` + `ResearchUniverseScene.tsx` | UMAP-style 3D paper cloud |
| Placements | `src/components/Placements.tsx` | Sector bars + recruiter chips |
| Footer CTA | `src/components/FooterCTA.tsx` | "Apply 2026" + sitelinks |

Theme tokens live in `src/theme/index.ts` (dark by default, `brand.*` palette). Global resets in `src/app/globals.css`.

## Asset pipeline (H200 server)

Server: `r4id@10.195.102.52` · 4 × H200. Inference runs **offline** — outputs land in `web/public/media/**` or R2.

| Asset | Model | Target |
|---|---|---|
| Campus Gaussian splat | 3DGS (Luma/Inria) | `public/media/campus.splat` → mount into `HeroScene` |
| Hero cinematic B-roll | Wan 2.2 / HunyuanVideo / LTX-Video | `public/media/hero.mp4` + `hero-poster.jpg` |
| "Day at SJMSOM" moment stills | Flux.1-dev + SUPIR upscale | `public/media/day/{06-20,09-00,13-30,17-45,22-10}.jpg` → swap the gradient placeholders in `DayAtSJMSOM.tsx` |
| Faculty portraits | Flux + LivePortrait (later, for video) | `public/media/faculty/<slug>.jpg` → swap the gradient panels in `FacultyWall.tsx` |
| Narration | F5-TTS / XTTS-v2 | `public/media/audio/*.mp3` |
| OG image | Flux + typography template | `public/og.jpg` → referenced in `layout.tsx` metadata |

Bake everything to static files — the web server serves a CDN-friendly build; no runtime inference.

## Accessibility & performance

- Dark initial colour mode (Chakra `ColorModeScript`).
- Every R3F canvas is `dynamic(..., { ssr: false })` and hydrates on the client only.
- `prefers-reduced-motion` is respected in `globals.css` and in `SmoothScroll` (Lenis is skipped).
- All 3D geometry is procedural (no asset downloads) — first paint is HTML + fonts only; canvases mount lazily.
- `robots.ts` and `sitemap.ts` are in place. Replace `metadataBase` in `layout.tsx` with the real domain before launch.

## Known placeholders

- Faculty portraits, campus splat, hero cinematic, Day-moment photography — all currently gradient/procedural stand-ins. Swap as the H200 asset factory produces real files.
- Stats (NIRF rank, CTC, placement %) are illustrative — wire to actual SJMSOM numbers before publishing.
- Nav CTA, "Apply 2026" button, and footer links go to `#`. Wire to the real admissions flow.

## Next phases (from brainstorm, not in this landing)

1. **Admit Mirror** — CV upload → Qwen/Llama on H200 → 3D skills radar + program suggestion.
2. **AI Campus Tour Guide** — voice chat with stylized mascot (ASR → LLM → TTS → lip-sync).
3. **"Design Your Two Years" configurator** — live 3D crest rebuild + personalized PDF.
4. **Interactive Ranking Timeline** — 60 years of SJMSOM, horizontally scrubbable.
5. **Night Mode (real)** — relight entire scene to Powai-at-night during Oct–Nov.

Each wants its own route/feature flag; they are out of scope for the landing page.
