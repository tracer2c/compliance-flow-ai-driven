# Plan — Fix HowItWorks, Synced Pin-Scroll Flow, New 404

## 1. Fix "How TraceR2C Works" (runtime crash)

The console shows a GSAP `Cannot read properties of null (reading 'map')` crash inside `splitColor` / `_formatColors`. GSAP cannot parse CSS `var(--token)` strings used as colors when it tweens `stroke`, `boxShadow`, `textShadow`, `borderColor`, etc. Footer's recent additions use `hsl(var(--ocean-primary) / 0.5)` inside scrubbed tweens, which throws during render and kills downstream ScrollTrigger setup — that's why the HowItWorks section visually breaks (path never draws, cards stay hidden).

Fixes:
- Replace every animated color string that uses `var(--...)` with a resolved color string (read the computed CSS var once via `getComputedStyle` and build `hsla(...)`), or move the color to a static class and animate only `opacity`/`transform`.
- Audit `Footer.tsx` (`textShadow`, `boxShadow`, pulse path stroke), `HeroSection.tsx` (supply trail), and `HowItWorksSection.tsx` (path stroke is set as attribute, fine; verify nothing else tweens color).
- In `HowItWorksSection`, also guard with `ScrollTrigger.refresh()` after fonts load so pinning math matches new layout.

## 2. Scroll-Synced Pin Flow Between Home Sections

Goal: as the user scrolls the homepage, each major section briefly "holds" (pins) while its own internal animation plays in lock-step with scroll, then releases into the next section. Animations must be scrubbed — never time-based — so visuals stay perfectly in sync with the scroll wheel/trackpad.

Sections in flow (order from `Index.tsx`):
1. Hero (already pinned-feeling, leave as is)
2. TrustStats — pin ~80vh, scrub counters from 0 → target, fade columns in with stagger tied to progress.
3. Features — pin ~120vh, scrub a horizontal-feel reveal: cards translate from `y:40, opacity:0` → settled, with stagger mapped to timeline progress (not duration).
4. HowItWorks — pin ~120vh, scrub: connector path `strokeDashoffset` length→0 across 0–0.6, then each step card reveals at 0.6 / 0.75 / 0.9 with a teal pulse traveling the path.
5. Industry — pin ~100vh, scrub industry tiles in a staggered settle.

Shared pattern:
- Wrap each section in `<SectionPin>` (new `src/components/animations/SectionPin.tsx`):
  - Outer `data-pin-scene` sized to `100vh + holdVh` (default `holdVh = 80`).
  - Inner `data-pin-stage` is `100vh`, `position: sticky` style via GSAP `ScrollTrigger` `pin: true`, `pinSpacing: true`, `anticipatePin: 1`, `scrub: 0.6`.
  - Exposes a `useSectionTimeline()` context so each child section builds its own master timeline against the same ScrollTrigger (single source of truth → guaranteed sync).
- Mobile (`< lg`): disable pin + scrub, fall back to existing one-shot reveals (keeps mobile scroll fast and avoids jank).
- Respect `prefersReducedMotion()` — collapse to instant reveals, no pin.

Performance:
- Only `transform`, `opacity`, `filter` in scrubbed tweens. No color tweens (see fix #1).
- Add `will-change: transform` only while the scene is active; remove on `onLeave`.
- Single `ScrollTrigger.refresh()` after image/font load to prevent drift.

## 3. 404 Page Redesign

Replace `src/pages/NotFound.tsx` with a design that matches the Blueprint Console aesthetic of the rest of the site:

- Full-bleed `bg-navy-950` with the same subtle technical grid background used in Hero (reuse the grid CSS utility / SVG).
- Centered architectural card (`max-w-xl`) with thin ocean-line border, soft inner glow, and four corner brackets (same component family as Hero).
- Content hierarchy:
  - Eyebrow chip: `ERROR · 404`
  - H1: `Route not found`
  - Mono sub-line showing the bad path: `GET {location.pathname} → 404`
  - One-paragraph plain-English explanation
  - Primary CTA: `Return home` (existing `Button`, ocean-primary)
  - Secondary text link: `Contact support` → `/contact`
- Restrained GSAP entrance: corner brackets scale-in, card fades up, single teal path traces under the H1 (one-shot, no scrub).
- Remove the rotated "design cards" clutter and the giant translucent `404` text.
- Update `<title>` via `SEOHead` so the tab reads `404 · TraceR2C`.

## Files to change
- `src/components/home/HowItWorksSection.tsx` — refactor to scrubbed pinned timeline.
- `src/components/home/TrustStatsSection.tsx`, `FeaturesSection.tsx`, `IndustrySection.tsx` — wrap in `SectionPin`, convert reveals to scrubbed timelines.
- `src/components/animations/SectionPin.tsx` — new shared pin/scrub primitive.
- `src/components/layout/Footer.tsx` — replace `var()`-in-color tweens with resolved colors or transform/opacity only.
- `src/components/home/HeroSection.tsx` — same color-tween audit.
- `src/pages/NotFound.tsx` — full redesign.
- No new dependencies. No design-token changes.

## Out of scope
- No copy changes to the sections themselves.
- No changes to routing, SEO content, or backend.
