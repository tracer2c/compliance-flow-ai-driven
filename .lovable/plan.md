# Hero polish — cursor gradient + first-load motion sweep

Three small additions to the hero. No other surfaces touched.

## 1. Cursor-tracking gradient (hero only)
- Add a pointer-aware radial gradient layer inside `HeroSection`, sitting above the parallax grid but below content.
- Implementation: a single `<div>` with CSS variables `--mx` / `--my` updated via a throttled `pointermove` listener attached to the hero section. Background:
  `radial-gradient(420px circle at var(--mx) var(--my), hsl(var(--ocean-primary) / 0.10), transparent 70%)`.
- Subtle by design: max opacity ~10%, fades fully at 70% radius, `mix-blend-mode: screen`, `transition: background-position 200ms` for smoothing.
- Disabled when `prefers-reduced-motion` is set and on touch devices (no `pointermove`).
- Cleanup on unmount.

## 2. Animate the "floating line" on first load
The thin teal supply-chain path that crosses the top of the hero (passing visually through the header band) currently draws, but the user reads it as static at first paint because the eye lands on the headline. Fix:
- Delay the draw by 150ms so it begins after the headline first word, making the motion legible.
- Add a soft traveling highlight along the path: a short bright dash that runs left→right once on load (GSAP `to` on a second `<path>` with the same `d`, animating `strokeDashoffset` from full length to `-length` over ~2.2s, opacity fades out at the end). One-shot, no loop.
- Also animate the small `TRACE PATH` indicator line at the bottom: scale-y from 0→1 with origin-top, 600ms, delayed until 1.6s so it lands after the manifest reveal.

## 3. Extend hero motion beyond card + text
Currently animated: headline words, manifest card, rows, status pill, supply path. Add these restrained extras (all transform/opacity, all one-shot):
- Eyebrow pill: fade + slight y-from-8 on mount (delay 0.1s).
- CTA buttons: fade + y-from-12, staggered 80ms, delay 0.9s.
- Trust micro-grid (SOC 2 / ISO blocks): fade + y-from-10, stagger 100ms, delay 1.1s.
- Corner brackets around the manifest: scale-from-0.6 + fade, delay 0.65s (currently only fade).
- Audit-ready ribbon: slide-in from right + fade, delay 1.95s (after Verified state change).
- Right-side radial glow: fade in from 0 to current opacity over 1.4s.

All gated by `prefersReducedMotion()` like the existing GSAP block. No infinite loops added.

## Files touched
- modify: `src/components/home/HeroSection.tsx` (only file)

## Out of scope
Header, Footer, other sections, color tokens, copy. No new dependencies.
