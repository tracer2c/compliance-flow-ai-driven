### Overview
Two focused updates to the homepage demo section.

### 1. Swap HeyGen video embed
Replace the old video ID in `ProductDemoSection.tsx` with the new `tracer2c-2` embed.
- Old embed: `https://app.heygen.com/embeds/78772a68ae134379b9dd4eb64640ddf7`
- New embed: `https://app.heygen.com/embeds/44d6260515d548d3bbf555f76834d2ad`

### 2. Expand A/B labels into a 4-step mini-flow
In `ProductDemoSection.tsx`, replace the current 2-column A/B grid at the bottom of the copy column with a horizontal 4-step flow:

```
1. Intake  →  2. AI Check  →  3. Expiry Guardrails  →  4. Audit Export
```
- Use the existing mono/type styling (uppercase tracking, `text-ocean-fg/45`, `text-ocean-primary` for step numbers).
- Add small arrow separators between steps.
- Keep the top border (`border-t border-ocean-line/60`) and `max-w-md` width.
- Wrap to 2×2 on mobile if needed so it stays readable.

### Files touched
- `src/components/home/ProductDemoSection.tsx`

No new dependencies. No backend changes.