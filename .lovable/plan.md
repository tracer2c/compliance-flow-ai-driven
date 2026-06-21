## Plan: Update Hero CTAs to "Book a Demo"

### Changes
1. **HeroSection.tsx**
   - Replace primary CTA text: "Start Free Trial" → "Book a Demo"
   - Replace secondary CTA text: "See TraceR2C in action" → "Book a Demo"
   - Convert both buttons to `<Link>` components pointing to `/contact#contact-form`
   - Remove the Play icon from the secondary button

2. **Contact.tsx**
   - Add `id="contact-form"` to the form section so the hash link scrolls to "Tell us what you're working on."

3. **ScrollToTop.tsx**
   - Update to handle hash-based scrolling: when a hash is present in the URL, scroll to that element instead of top-of-page.