## 1. Embed the HeyGen demo video

**Placement:** New `ProductDemoSection` inserted between `HowItWorksSection` and `IndustrySection` on `/` — a natural "now see it in motion" beat after the 3-step explanation, where attention is highest.

**Behavior — seamless, not a popup:**
- Inline section with a dark `bg-ocean-base` band (matches hero) so it reads as a continuation of the product story rather than a marketing break.
- Left column: short eyebrow + headline ("See TraceR2C in 60 seconds") + 2-line supporting copy + "Start Free Trial" link.
- Right column: framed video player with the same corner-brackets treatment used in the hero Audit Manifest card, so it visually rhymes with the hero.
- Player is the HeyGen `share` embed (iframe) — NOT the GIF. The GIF is a 300px preview; we'll use `https://app.heygen.com/embeds/78772a68ae134379b9dd4eb64640ddf7` in a 16:9 responsive iframe with `loading="lazy"`, `allowfullscreen`, rounded corners, and a soft `ocean-primary` glow behind it.
- The "See how it works" button in the hero already routes to `/know-more`. We will additionally make it scroll-anchor friendly: add `id="watch-demo"` to the new section and make the hero secondary CTA a smooth anchor scroll to `#watch-demo` instead of navigating away. (`/know-more` stays as its own deeper page; the hero button becomes the on-page demo trigger, which is more "seamless".)

**Why here, not in a modal:** modals feel like ads. Inline section between explanation and proof keeps the scroll narrative intact.

## 2. Remove the parallax "pause" feel between sections

Current `Index.tsx` wraps `TrustStatsSection`, `FeaturesSection`, and `IndustrySection` in `SectionPin` (and `HowItWorksSection` pins itself). The pin holds the section for 50–70vh of extra scroll before releasing, which the user is perceiving as the page "stopping".

**Change:**
- Drop `SectionPin` wrappers around `TrustStatsSection`, `FeaturesSection`, and `IndustrySection` in `Index.tsx` — they only used the default "hold" timeline (no scrubbed children), so the pin adds zero animation value, only scroll lag.
- Keep `HowItWorksSection`'s internal pin (it has a real scrubbed path-draw + card reveal timeline that needs it), but reduce its `end: "+=140%"` to `"+=80%"` so the hold is noticeably shorter and the transition out feels continuous.
- Replace the lost reveal feel with lightweight in-view fade/slide using framer-motion `whileInView` (already used in `TrustStatsSection` and `IndustrySection`), so sections still animate on entry — just without locking scroll.
- Leave `SectionPin.tsx` itself in place (unused for now, still available if a future section needs scrubbed choreography).

## 3. Make "Outcomes" and "Industries" feel hand-designed, not symmetric

Both sections currently use the same recipe: centered header → uniform card grid → white rounded card with icon-on-top. That's why they feel like the same template twice.

**Outcomes (`TrustStatsSection`) — keep as the "data" section, lean editorial:**
- Switch the 4-up symmetric grid to an asymmetric bento: first stat becomes a wide feature tile (col-span-2 on lg) with larger number, a faint sparkline/bar accent, and a short quote line; the other three are compact tiles in a 3-up row below. Grid: `lg:grid-cols-3` with the hero tile spanning 2 cols on row 1 and a tall accent tile (the marquee/standards block, restyled as a vertical card) spanning row 1–2.
- Cards keep the existing white surface + teal accents but vary corner treatment: hero tile uses a left-side teal rule (matches manifest rows in hero), the small tiles keep the rounded card. No hover lift on the hero tile — only the small ones lift.
- Standards marquee stays at the bottom full-width.

**Industries (`IndustrySection`) — keep as the "breadth" section, switch to a different visual language:**
- Move off the navy-50 background and onto a subtle off-white with a faint dotted texture, so it doesn't visually echo the Outcomes gray slab.
- Replace the uniform 4×2 card grid with a denser, **left-aligned chip/pill layout**: header sits on the left in a 2-col layout, industries flow on the right as 8 medium pills (icon + label, rounded-full, hover lifts and reveals an arrow). Wraps gracefully on mobile to a 2-col grid.
- Removes the "second identical card grid" feeling while keeping every industry link intact and routes unchanged.

**Cohesion guardrails (so it doesn't look odd):**
- Same `font-display` headings, same `teal-100/teal-600` accent tokens, same `SplitTextReveal` for the H2s, same `FeatureIcon` component for icons. Only the *composition* differs — the design vocabulary stays one designer's hand.

## Files to touch

- `src/pages/Index.tsx` — remove 3 `SectionPin` wrappers, add new `ProductDemoSection` between `HowItWorksSection` and `IndustrySection`.
- `src/components/home/ProductDemoSection.tsx` (new) — inline HeyGen iframe section with bracket framing.
- `src/components/home/HeroSection.tsx` — change "See how it works" to anchor-scroll to `#watch-demo`.
- `src/components/home/HowItWorksSection.tsx` — shorten pin `end` from `+=140%` to `+=80%`.
- `src/components/home/TrustStatsSection.tsx` — recompose into asymmetric bento.
- `src/components/home/IndustrySection.tsx` — recompose into left-aligned chip layout, swap background.

No new dependencies. No backend. No copy changes beyond the new demo section's 2 lines.
