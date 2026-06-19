# Update brand logo & favicons

Replace the placeholder gradient "T" badge currently used in the Header and Footer with the uploaded hexagonal TraceR2C logo, and swap in the new favicons.

## Asset uploads
Upload the three provided files via `lovable-assets` (no binaries committed to the repo):
- `user-uploads://logo.png` → `src/assets/tracer2c-logo.png.asset.json`
- `user-uploads://favicon-32x32.png` → copy to `public/favicon-32x32.png`
- `user-uploads://favicon-16x16.png` → copy to `public/favicon-16x16.png`

(Favicons stay in `public/` so browsers can fetch them at fixed paths. Delete the old `public/favicon.ico` so it doesn't override the new ones.)

## Code changes

1. **`src/components/layout/Header.tsx`** — replace the `<div class="h-8 w-8 bg-gradient-accent ...">T</div>` with an `<img>` of the new logo (h-8 w-8, `alt="TraceR2C"`).

2. **`src/components/layout/Footer.tsx`** — replace the `w-9 h-9 bg-ocean-primary ...T` badge with the same logo image (h-9 w-9). Keep the "TraceR2C" wordmark next to it.

3. **`index.html`** — replace the single favicon `<link>` with the proper pair:
   ```html
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
   <link rel="apple-touch-icon" href="/favicon-32x32.png" />
   ```

## Out of scope
- Not touching `src/lib/structuredData.ts` logo URLs (those point to the live tracer2c.com CDN and shouldn't change until the new logo is published there).
- Not changing the integration partner logos in `src/assets/logos/`.
