## Plan: Practical Upgrades — Modern Icons + GSAP Scroll & Text Effects

### Goals
1. Replace flat lucide icons with richer, more "enterprise-feeling" iconography (duotone-style containers + brand-aligned Lucide picks, plus animated icons on hover).
2. Introduce **GSAP** + **ScrollTrigger** + **SplitText-style** word/char animations to make sections feel alive as the user scrolls — without breaking existing framer-motion work.
3. Add a couple of practical new feature blocks that improve perceived product depth.

---

### 1. Install & Setup
- Add `gsap` (free ScrollTrigger included).
- Create `src/hooks/useGSAP.ts` — a small wrapper using `useLayoutEffect` + `gsap.context()` for safe cleanup in React.
- Create reusable components in `src/components/animations/`:
  - `SplitTextReveal.tsx` — splits headline into words/chars, staggers them in on scroll (y + opacity + blur).
  - `ScrollReveal.tsx` — fade/slide a block when it enters viewport (ScrollTrigger).
  - `MarqueeStrip.tsx` — GSAP-driven infinite logo/trust marquee.
  - `CounterUp.tsx` — GSAP number tween triggered on scroll (for stats).
  - `ParallaxImage.tsx` — subtle y-translate parallax on scroll.

### 2. Icon System Upgrade
- New `src/components/ui/FeatureIcon.tsx`: a polished icon container with:
  - Gradient background ring (semantic tokens, not hardcoded colors).
  - Soft inner shadow + glow on hover.
  - Icon scales + rotates slightly on hover (GSAP).
- Swap current Lucide icons for more specific picks:
  - Document Management → `FileCheck2`
  - Compliance Tracking → `ShieldCheck` / `Radar`
  - Role-Based Access → `UsersRound` / `KeyRound`
  - Analytics → `ChartNoAxesCombined`
  - Smart Alerts → `BellRing`
  - Audit Trail → `ScrollText`
  - AI Insights → `BrainCircuit`
  - Multi-Region → `Globe2`
  - Enterprise Security → `LockKeyhole`

### 3. Section-by-Section Changes

**HeroSection**
- Wrap headline in `SplitTextReveal` (word-by-word reveal with blur-out → in).
- Subheadline fades up after headline finishes.
- Add subtle GSAP parallax to background pattern (mouse-move + scroll).
- Replace static trust badges with the new `FeatureIcon` mini-chips.

**TrustStatsSection**
- Replace any static numbers with `CounterUp` (e.g., "500+ Enterprises", "99.9% Uptime", "150+ Regulations").
- Add `MarqueeStrip` of partner/industry/certification logos (SOC 2, ISO 27001, GDPR, EUDR badges as text chips with icons since we don't have logos).

**FeaturesSection**
- Headline → `SplitTextReveal`.
- Three pillar cards → use new `FeatureIcon`, animate on `ScrollTrigger` with stagger.
- Feature grid → wrap each card in `ScrollReveal`, GSAP stagger by row.
- Add a new sub-section "How it Works" (3 steps: Connect → Monitor → Report) with animated SVG connectors drawn via GSAP `drawSVG`-like stroke-dashoffset trick.

**IndustrySection**
- Industry tiles → upgrade icons (e.g., `Leaf` for Agriculture, `Factory` for Manufacturing, `Pill` for Pharma, `Cpu` for Electronics).
- Add `ScrollTrigger` pinned horizontal scroll (desktop only) showing each industry as a slide with stat + use case. Falls back to vertical stack on mobile.

### 4. Performance & Accessibility
- All GSAP animations gated by `prefers-reduced-motion` (skip transforms, show end state).
- `gsap.context()` cleanup on unmount.
- ScrollTrigger `refresh()` on route change.
- All animations target transform/opacity only (no layout thrash).

---

### Files to Add
| File | Purpose |
|---|---|
| `src/hooks/useGSAP.ts` | Safe GSAP context hook |
| `src/components/animations/SplitTextReveal.tsx` | Word/char headline reveal |
| `src/components/animations/ScrollReveal.tsx` | Generic scroll fade/slide |
| `src/components/animations/MarqueeStrip.tsx` | Infinite logo marquee |
| `src/components/animations/CounterUp.tsx` | Animated number counter |
| `src/components/animations/ParallaxImage.tsx` | Scroll parallax |
| `src/components/ui/FeatureIcon.tsx` | Premium icon container |
| `src/components/home/HowItWorksSection.tsx` | New 3-step section |

### Files to Modify
| File | Change |
|---|---|
| `package.json` | add `gsap` |
| `src/pages/Index.tsx` | insert `HowItWorksSection` between Features and Industry |
| `src/components/home/HeroSection.tsx` | SplitText headline + parallax bg |
| `src/components/home/TrustStatsSection.tsx` | CounterUp + MarqueeStrip |
| `src/components/home/FeaturesSection.tsx` | New icons + SplitText + ScrollReveal |
| `src/components/home/IndustrySection.tsx` | New icons + pinned horizontal scroll |

---

### Outcome
The homepage will feel materially more "alive" and enterprise-grade: headlines unveil word-by-word, stats count up, a new How-It-Works flow draws itself, industries scroll horizontally, and icons look bespoke rather than default-Lucide. All while keeping the existing framer-motion entrance animations intact and respecting reduced-motion preferences.
