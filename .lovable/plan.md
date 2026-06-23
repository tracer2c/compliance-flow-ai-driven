
## Goal
Replace the current white sticky Header with a floating dark glassmorphism navbar that sits over the hero (and other dark `PageHero` sections), per the spec. Add GSAP animations to the CTA and the Products menu trigger.

## Scope
Single file: `src/components/layout/Header.tsx`. Header is global (rendered in `Layout.tsx`), so the new floating navbar will overlay every page — the hero and all `PageHero` headers already use the same `bg-ocean-base` dark tone, so it stays seamless across the site.

`Layout.tsx` and `HeroSection.tsx` are NOT modified — the hero already pads with `py-24 lg:py-28`, leaving room for the floating navbar.

## Changes to `Header.tsx`

### 1. Container / positioning
- Replace `sticky top-0 ... border-b bg-background/95 ...` with:
  - `<header className="fixed top-3 md:top-5 left-4 right-4 md:left-8 md:right-8 z-50">`
- Inner `<nav>`:
  - `h-[76px] md:h-[84px] px-6 md:px-8`
  - `flex items-center justify-between`
  - `rounded-[22px]`
  - inline style:
    ```
    background: 'rgba(6,18,32,0.78)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(148,163,184,0.18)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
    ```

### 2. Logo (left)
- Logo image kept; text changes: `text-white text-2xl font-bold tracking-tight`.

### 3. Center nav links
- Wrap Products mega menu + main nav items in a single centered group: `hidden lg:flex items-center gap-8 xl:gap-10`.
- Link styling: `text-[15px] font-medium text-[#F3F6FA]/90 hover:text-teal-300 transition-colors` with `letter-spacing:-0.01em`.
- `NavigationMenuTrigger` restyled to match (transparent bg, white/90 text, hover teal). The dropdown panel switches to dark glass (`bg-[#061220]/95 backdrop-blur-xl border border-white/10 text-white`), product icon tiles use `bg-teal-400/10 text-teal-300`, item hover `hover:bg-white/5`.

### 4. CTA button (right)
- Replace `<Button className="bg-gradient-accent ...">` with a custom button:
  - `rounded-2xl px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold`
  - `shadow-[0_10px_28px_rgba(20,184,166,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(20,184,166,0.36)] transition-all`
  - Label: `Start Free Trial →` (still linking to `https://compliance.tracer2c.com`).
- Add `data-cta-button` hook for GSAP.

### 5. Mobile button
- Restyle the hamburger trigger to fit dark glass: `text-white hover:bg-white/10` (replaces `variant="ghost"` defaults that read dark-on-light).
- Mobile sheet contents stay as-is (white panel) so the existing mobile UX is untouched.

### 6. GSAP animations (replace per-element framer-motion entrance)
Add a `useGSAP` block at the top of the component:
- **Mount intro timeline** (runs once):
  - Whole nav container: `from({ y: -24, opacity: 0, duration: 0.7, ease: 'power3.out' })`.
  - Logo: `from({ x: -16, opacity: 0, duration: 0.55, ease: 'power2.out' }, '-=0.4')`.
  - Each nav link (`[data-nav-link]`, includes Products trigger): `from({ y: -10, opacity: 0, stagger: 0.06, duration: 0.45, ease: 'power2.out' }, '-=0.35')`.
  - CTA: `from({ scale: 0.85, opacity: 0, duration: 0.55, ease: 'back.out(1.7)' }, '-=0.25')`.

- **CTA hover micro-animation**: on `mouseenter`, `gsap.to(arrow, { x: 4, duration: 0.25, ease: 'power2.out' })`; on `mouseleave`, return to `x: 0`. Also subtle `scale: 1.03` on the button itself (handled via gsap, paired with CSS shadow upgrade).

- **CTA idle shimmer**: a thin gradient sweep `<span>` inside the button; `gsap.to` with `xPercent: 200`, `repeat: -1`, `repeatDelay: 2.4`, `duration: 1.2`, `ease: 'power2.inOut'` for a periodic shine.

- **Products trigger animation**: hover/focus triggers a small `gsap.to` chevron rotation (`rotate: 180`) and a `y: -1` lift on the trigger label; reset on leave. Use the existing Radix open state via `data-state` attribute selector to keep the chevron rotated while open.

- All GSAP work is gated by `prefersReducedMotion()` (already used elsewhere) so it respects motion preferences.

### 7. Cleanup
- Remove the per-element `framer-motion` `motion.div` wrappers for logo/nav/CTA (replaced by GSAP). Keep `framer-motion` import only if still used elsewhere in the file; otherwise drop it.

## Out of scope
- No change to `HeroSection.tsx`, `Layout.tsx`, or any page. Footer, mobile sheet content, and routes untouched.
- Memory rule about hero CTAs unchanged (still "Book a Demo"); navbar CTA remains "Start Free Trial" pointing to `compliance.tracer2c.com`, matching existing behavior.
