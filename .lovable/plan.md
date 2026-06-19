# Footer Scroll-Reveal Scene

Turn the footer into a pinned scroll scene where functional UI recedes and the TRACER2C brand layer rises forward. All motion is scrubbed, transform/opacity/filter only, and gated by `prefers-reduced-motion`.

## Scene structure

Wrap the existing `<footer>` in an outer scene container:

```text
<section data-footer-scene>           ← tall scroll trigger (~220vh)
  <div data-footer-pin>               ← pinned, 100vh, holds everything
    [grid layer]                      ← brightens slightly through scene
    [path SVG + traveling pulse]      ← lateral drift + one teal pulse
    [wordmark layer: TRACER2C]        ← scales/sharpens/brightens
    [UI layer: brand + 4 columns]     ← recedes (opacity + small y)
    [chips strip]                     ← lock in sequentially
    [bottom bar: status pill + legal] ← stays crisp, pill brightens at end
  </div>
</section>
```

Pin `data-footer-pin` with ScrollTrigger; total scroll length ≈ `+=120%` of viewport so the user gets ~1.2 screens of extra scroll inside the footer before release.

## Three-phase choreography (scrubbed timeline 0 → 1)

**Phase 1 — Enter (0.00 – 0.20)**
- Footer columns + brand block: fade/translate in normally (y: 16 → 0, opacity 0 → 1)
- Wordmark stays deep background: `opacity 0.06`, `blur(6px)`, `scale 0.96`, `y: 40`
- Grid at `opacity 0.04`
- Path: existing draw-in continues

**Phase 2 — Capture (0.20 – 0.55)**
- Pin engages
- Columns + brand block: opacity `1 → 0.55`, y `0 → -12`, no horizontal motion
- Wordmark: opacity `0.06 → 0.16`, blur `6px → 2px`, scale `0.96 → 1.00`, y `40 → 16`
- Grid opacity `0.04 → 0.07`
- Path: subtle `y: 0 → -10` lateral drift; a single teal pulse (separate overlay path with `strokeDasharray` traveling across) plays once around 0.40–0.55

**Phase 3 — Brand reveal (0.55 – 0.90)**
- Columns + brand block: opacity `0.55 → 0.18`, y `-12 → -20`
- Wordmark: opacity `0.16 → 0.24`, blur `2px → 0`, scale `1.00 → 1.04`, y `16 → 0`; add a soft teal edge via `text-shadow: 0 0 24px hsl(var(--ocean-primary)/0.18)` faded in
- One highlight sweep across the wordmark (gradient-masked overlay translating left→right, single pass)
- Chips: stagger a brief "lock-in" — border color `ocean-line → ocean-primary/60`, opacity bump, 60ms between chips
- Grid opacity `0.07 → 0.09`

**Phase 4 — Settle (0.90 – 1.00)**
- Status pill: subtle glow up (box-shadow intensity + text opacity to 1)
- Legal line stays crisp (untouched)
- Hold for the last 10% so the user reads the final state before scroll releases

## Technical details

- Library: existing `gsap` + `ScrollTrigger` + `useGSAP` hook. No new deps.
- Single master timeline with `scrollTrigger: { trigger: scene, start: "top top", end: "+=120%", scrub: 0.6, pin: pinEl, pinSpacing: true, anticipatePin: 1 }`.
- All targets selected via `data-*` attributes added to existing nodes (no structural rewrite of links/columns).
- Wordmark gets `will-change: transform, filter, opacity` only while the timeline is active (set on enter, cleared on leave) to avoid permanent layer cost.
- Highlight sweep = absolute `<span>` over the wordmark with `background: linear-gradient(100deg, transparent, hsl(var(--ocean-mint)/0.25), transparent)`, `mix-blend-mode: overlay`, masked to the text via `background-clip: text` fallback or a simple translateX from -40% → 140% (one pass, not looped).
- Teal path pulse = second `<path>` cloned from `data-footer-path` with shorter `strokeDasharray` (e.g. `40 9999`) animated from `strokeDashoffset: len` to `-len` once during Phase 2.
- Remove the existing infinite `animate-ping` on the status pill dot during the scene; replace with a one-shot opacity/scale bump at Phase 4 so it doesn't compete with the reveal. Restore ping after scroll release (or just keep it — decide during build; leaning toward keeping a calmer static dot).
- Reduced motion: skip pin entirely, render final visual state (wordmark at `opacity 0.18, scale 1, no blur`, columns at full opacity), no sweep, no pulse.
- Mobile (`< lg`): disable pin + scrub; play a shorter non-pinned reveal on `ScrollTrigger` enter (wordmark fade/scale, chip stagger) so small screens don't get hijacked scroll.

## Files changed

- `src/components/layout/Footer.tsx` — wrap in scene/pin containers, add `data-*` hooks, add master timeline, add sweep + pulse overlays, add reduced-motion + mobile branches.

No CSS token changes, no new components, no new dependencies.
