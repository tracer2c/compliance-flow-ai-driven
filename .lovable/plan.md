# Hero + Footer Redesign — Blueprint Console

Implement the selected v3 direction as real React components, using the locked tokens (Deep Ocean Trust palette, Space Grotesk + Inter + JetBrains Mono) and the existing GSAP setup. Keep restraint — no floating card clutter, no flashy effects.

## Scope (only these two surfaces)
- `src/components/home/HeroSection.tsx` — full rebuild
- `src/components/layout/Footer.tsx` — full rebuild
- `src/index.css` + `tailwind.config.ts` — add the Deep Ocean Trust tokens + JetBrains Mono font family scoped to these new sections (no global theme overhaul)
- `src/main.tsx` — add `@fontsource/jetbrains-mono` (Space Grotesk + Inter already used by the project; add only if missing)

No other sections, pages, routes, copy intent, or business logic change. Existing CTAs preserved: primary "Start Free Trial" → `https://compliance.tracer2c.com`, secondary "See how it works" stays.

## Hero — what gets built
Asymmetric `[1.2fr_1fr]` grid, full viewport height.

**Left column**
- Mono eyebrow pill: pulsing teal dot + "ENTERPRISE NODE ACTIVE"
- H1 in Space Grotesk 7xl/8xl, last word "operational." in teal (`#14B8A6`). Word-by-word reveal via the existing `SplitTextReveal` component.
- Subhead (existing copy, unchanged)
- CTAs: primary teal "Start Free Trial" with mint slide-up fill on hover; secondary outlined "See how it works"
- Mono micro-grid under CTAs: `01/ SOC2 TYPE II — Continuous Audit`, `02/ ISO 27001 — Supply Chain Map`

**Right column — refined product visual (not floating chips)**
A single composed "Audit Manifest" card, no extra orbiting widgets:
- Header row: doc id (mono, teal) + title "Compliance Certificate" + status pill
- Status pill animates Pending → Verified once on mount via GSAP timeline (single check stroke draws, no infinite loop)
- Body: 4 skeleton ledger rows that stagger-reveal (60ms) with left-edge accent
- Footer row inside card: signer + timestamp in mono
- Behind the card: one soft teal radial glow + a thin teal corner bracket (architectural, not decorative)
- One small offset "Verified" badge (replaces the prototype's separate floating card) anchored to the card's bottom-right corner, not floating in space

**Backdrop layers (3 parallax depths)**
1. SVG grid pattern (80px), opacity 0.06, slowest parallax (y * 0.05)
2. Supply-chain SVG path drawing left → right on mount (stroke-dashoffset via GSAP, 2.4s, ease-out), opacity 0.25
3. Hero content (no parallax on headline itself — only the background layers move)

Scroll indicator "TRACE PATH ↓" centered at the bottom.

## Footer — what gets built
Console aesthetic, architectural footprint.

- Tall top padding, oversized translucent `TRACER2C` wordmark behind content (opacity 0.03, parallax-slow on scroll)
- Top row: brand mark + tagline (left) | three mono link columns Platform / Company / Legal (right)
- Real contact block under the brand: Auburn AL, phone, email (pulled from current footer)
- Compliance badge strip (SOC2, ISO 27001, GDPR, EUDR, HIPAA) as mono chips with hairline borders
- Bottom bar: live "All nodes operational — Latency: 12ms" status pill (animated dot) | copyright in mono
- A continuation of the hero's supply-chain SVG path enters from the top edge of the footer and terminates at the status pill (drawn on scroll via ScrollTrigger)

## Motion rules (carry into both)
- All animations transform/opacity only
- Respect `prefers-reduced-motion` (existing `useGSAP` hook already does this)
- No infinite loops except the 2px status dot pulse
- Hover states subtle: 200ms color/transform, no scale > 1.02

## Technical details
- Reuse: `useGSAP`, `SplitTextReveal`, `ScrollReveal` already in repo
- New small components (kept local to Hero/Footer files, not exported):
  - `AuditManifestCard` inside HeroSection
  - `SupplyChainPath` SVG inside HeroSection (and a mirrored bottom variant in Footer)
- Add CSS tokens in `index.css`:
  ```
  --ocean-base: 213 53% 9%;      /* #0A1628 */
  --ocean-surface: 210 47% 16%;  /* #0F2942 */
  --teal-primary: 173 80% 40%;   /* #14B8A6 */
  --mint-highlight: 154 76% 80%; /* #A7F3D0 */
  ```
  Map to `--background`, `--card`, `--primary`, `--accent` for these sections; no hex literals in JSX.
- Add `fontFamily.mono: ['"JetBrains Mono"', ...]` in tailwind config; install `@fontsource/jetbrains-mono` if not present.

## Files touched
- modify: `src/components/home/HeroSection.tsx`
- modify: `src/components/layout/Footer.tsx`
- modify: `src/index.css`, `tailwind.config.ts`, `src/main.tsx`, `package.json` (font only)

## Out of scope
Header, FeaturesSection, IndustrySection, HowItWorksSection, TrustStatsSection, all other routes, copy rewrites, backend.
