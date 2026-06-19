import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { useGSAP, prefersReducedMotion } from "@/hooks/useGSAP";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scope = useGSAP((ctx) => {
    gsap.registerPlugin(ScrollTrigger);

    const scene = scope.current;
    if (!scene) return;
    const pin = scene.querySelector<HTMLElement>("[data-footer-pin]");
    const wordmark = scene.querySelector<HTMLElement>("[data-footer-wordmark]");
    const ui = scene.querySelector<HTMLElement>("[data-footer-ui]");
    const grid = scene.querySelector<HTMLElement>("[data-footer-grid]");
    const pathWrap = scene.querySelector<HTMLElement>("[data-footer-pathwrap]");
    const path = scene.querySelector<SVGPathElement>("[data-footer-path]");
    const pulse = scene.querySelector<SVGPathElement>("[data-footer-pulse]");
    const sweep = scene.querySelector<HTMLElement>("[data-footer-sweep]");
    const chips = scene.querySelectorAll<HTMLElement>("[data-footer-chip]");
    const statusPill = scene.querySelector<HTMLElement>("[data-footer-status]");

    // Reduced motion: render final visual state, no pin
    if (prefersReducedMotion()) {
      if (wordmark) {
        wordmark.style.opacity = "0.2";
        wordmark.style.filter = "blur(0px)";
      }
      return;
    }

    // Initial states
    if (wordmark) {
      gsap.set(wordmark, {
        opacity: 0.06,
        filter: "blur(6px)",
        scale: 0.96,
        y: 40,
        transformOrigin: "50% 50%",
        willChange: "transform, filter, opacity",
      });
    }
    if (grid) gsap.set(grid, { opacity: 0.04 });
    if (sweep) gsap.set(sweep, { xPercent: -120, opacity: 0 });
    if (chips.length) gsap.set(chips, { opacity: 0.6 });

    // Path draw-in (Phase 1, separate from main timeline)
    ctx.add(() => {
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top 85%",
          end: "top 30%",
          scrub: 0.6,
        },
      });
    });

    // Pulse path setup
    if (pulse) {
      const plen = pulse.getTotalLength();
      gsap.set(pulse, {
        strokeDasharray: `60 ${plen}`,
        strokeDashoffset: plen,
        opacity: 0,
      });
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    // Mobile: no pin, simple reveal
    if (!isDesktop) {
      ctx.add(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: scene, start: "top 70%", once: true },
        });
        if (wordmark)
          tl.to(wordmark, {
            opacity: 0.18,
            filter: "blur(0px)",
            scale: 1.02,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          });
        if (chips.length)
          tl.to(
            chips,
            { opacity: 1, duration: 0.4, stagger: 0.06, ease: "power1.out" },
            "-=0.8"
          );
      });
      return;
    }

    // Desktop: pinned, scrubbed master timeline
    ctx.add(() => {
      if (!pin) return;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "+=120%",
          scrub: 0.6,
          pin: pin,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Phase 1 (0 - 0.20): hold initial states (handled by gsap.set)
      tl.to({}, { duration: 0.2 });

      // Phase 2 (0.20 - 0.55): capture
      if (ui) tl.to(ui, { opacity: 0.55, y: -12, duration: 0.35 }, 0.2);
      if (wordmark)
        tl.to(
          wordmark,
          { opacity: 0.16, filter: "blur(2px)", scale: 1.0, y: 16, duration: 0.35 },
          0.2
        );
      if (grid) tl.to(grid, { opacity: 0.07, duration: 0.35 }, 0.2);
      if (pathWrap) tl.to(pathWrap, { y: -10, duration: 0.35 }, 0.2);

      // Single teal pulse traveling across
      if (pulse) {
        const plen = pulse.getTotalLength();
        tl.to(pulse, { opacity: 0.7, duration: 0.05 }, 0.4)
          .to(pulse, { strokeDashoffset: -plen, duration: 0.25, ease: "power1.inOut" }, 0.4)
          .to(pulse, { opacity: 0, duration: 0.08 }, 0.62);
      }

      // Phase 3 (0.55 - 0.90): brand reveal
      if (ui) tl.to(ui, { opacity: 0.18, y: -20, duration: 0.35 }, 0.55);
      if (wordmark)
        tl.to(
          wordmark,
          {
            opacity: 0.24,
            filter: "blur(0px)",
            scale: 1.04,
            y: 0,
            textShadow: "0 0 24px hsl(var(--ocean-primary) / 0.18)",
            duration: 0.35,
          },
          0.55
        );
      if (grid) tl.to(grid, { opacity: 0.09, duration: 0.35 }, 0.55);

      // Highlight sweep across the wordmark (one pass)
      if (sweep) {
        tl.to(sweep, { opacity: 1, duration: 0.05 }, 0.6)
          .to(sweep, { xPercent: 120, duration: 0.3, ease: "power1.inOut" }, 0.6)
          .to(sweep, { opacity: 0, duration: 0.05 }, 0.9);
      }

      // Chips lock-in stagger
      if (chips.length) {
        tl.to(
          chips,
          { opacity: 1, duration: 0.08, stagger: 0.04, ease: "power1.out" },
          0.62
        );
      }

      // Phase 4 (0.90 - 1.00): settle, status pill glow
      if (statusPill) {
        tl.to(
          statusPill,
          {
            boxShadow: "0 0 0 1px hsl(var(--ocean-primary) / 0.5), 0 0 24px hsl(var(--ocean-primary) / 0.25)",
            duration: 0.1,
          },
          0.9
        );
      }

      // Hold
      tl.to({}, { duration: 0.1 });
    });
  }, []);

  const columns = [
    {
      title: "Platform",
      links: [
        { name: "ComplianceFlow", href: "/products/complianceflow" },
        { name: "Target Promotion", href: "/products/promotions" },
        { name: "Clear Insight", href: "/products/analytics" },
        { name: "API Reference", href: "/resources/api-docs" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Food Service", href: "/solutions/food-service" },
        { name: "Pharmaceuticals", href: "/solutions/pharma" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Logistics", href: "/solutions/logistics" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Pricing", href: "/pricing" },
        { name: "Resources", href: "/resources" },
        { name: "About", href: "/company" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Cookies", href: "/cookies" },
        { name: "Support", href: "/support" },
      ],
    },
  ];

  const badges = ["SOC 2 Type II", "ISO 27001", "GDPR", "EUDR", "HIPAA-Ready"];

  return (
    <section
      ref={scope as React.RefObject<HTMLElement>}
      data-footer-scene
      className="relative bg-ocean-base text-ocean-fg"
    >
      <div data-footer-pin className="relative min-h-screen overflow-hidden flex flex-col justify-end pt-24 pb-10">
        {/* Continuation supply-chain path */}
        <div data-footer-pathwrap className="absolute inset-x-0 top-0 h-40 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1600 160"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              data-footer-path
              d="M-50,10 C300,140 700,-40 1000,80 S1500,140 1700,40"
              fill="none"
              stroke="hsl(var(--ocean-primary))"
              strokeWidth="1"
              strokeDasharray="6 8"
              opacity="0.35"
            />
            <path
              data-footer-pulse
              d="M-50,10 C300,140 700,-40 1000,80 S1500,140 1700,40"
              fill="none"
              stroke="hsl(var(--ocean-mint))"
              strokeWidth="1.5"
              opacity="0"
            />
          </svg>
        </div>

        {/* Massive translucent wordmark */}
        <div
          data-footer-wordmark
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <div className="relative">
            <h2 className="text-[22vw] lg:text-[18vw] font-display font-bold leading-none tracking-tighter text-ocean-fg whitespace-nowrap">
              TRACER2C
            </h2>
            {/* Highlight sweep */}
            <span
              data-footer-sweep
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, transparent 35%, hsl(var(--ocean-mint) / 0.28) 50%, transparent 65%)",
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>

        {/* Subtle grid */}
        <div data-footer-grid className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" aria-hidden="true">
            <defs>
              <pattern id="footer-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--ocean-primary))" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* UI layer (recedes during scene) */}
          <div data-footer-ui>
            {/* Top: brand + columns */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-16 mb-20">
              <div className="space-y-6 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-ocean-primary flex items-center justify-center font-display font-bold text-ocean-base text-lg rounded-sm">
                    T
                  </div>
                  <span className="font-display font-bold text-2xl tracking-tight">TraceR2C</span>
                </div>
                <p className="text-ocean-fg/55 text-sm leading-relaxed">
                  Architected for complex regulatory environments and multi-tier supply chain visibility.
                  Built to the standards your auditors expect.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-ocean-fg/65 text-sm">
                    <MapPin className="h-4 w-4 text-ocean-primary" />
                    Auburn, Alabama · United States
                  </div>
                  <div className="flex items-center gap-3 text-ocean-fg/65 text-sm">
                    <Mail className="h-4 w-4 text-ocean-primary" />
                    contact@tracer2c.com
                  </div>
                  <div className="flex items-center gap-3 text-ocean-fg/65 text-sm">
                    <Phone className="h-4 w-4 text-ocean-primary" />
                    (229) 395-9837
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href="https://linkedin.com/company/tracer2c"
                    aria-label="LinkedIn"
                    className="w-9 h-9 border border-ocean-line flex items-center justify-center text-ocean-fg/70 hover:bg-ocean-primary hover:text-ocean-base hover:border-ocean-primary transition-colors rounded-sm"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com/tracer2c"
                    aria-label="Twitter"
                    className="w-9 h-9 border border-ocean-line flex items-center justify-center text-ocean-fg/70 hover:bg-ocean-primary hover:text-ocean-base hover:border-ocean-primary transition-colors rounded-sm"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
                {columns.map((col) => (
                  <div key={col.title} className="space-y-5">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-primary">
                      {col.title}
                    </h4>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.href}
                            className="text-sm text-ocean-fg/65 hover:text-ocean-mint transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance badges strip */}
          <div className="flex flex-wrap items-center gap-3 mb-10 py-6 border-y border-ocean-line/60 relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-fg/40 mr-2">
              Compliance ·
            </span>
            {badges.map((b) => (
              <span
                key={b}
                data-footer-chip
                className="px-3 py-1.5 border border-ocean-line text-ocean-fg/70 font-mono text-[10px] uppercase tracking-wider rounded-sm hover:border-ocean-primary/60 hover:text-ocean-mint transition-colors"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div
              data-footer-status
              className="inline-flex items-center gap-3 px-4 py-2 bg-ocean-surface/70 border border-ocean-primary/25 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-primary shadow-[0_0_8px_hsl(var(--ocean-primary))]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ocean-fg/80">
                All nodes operational · Latency 12ms
              </span>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ocean-fg/35">
              © {currentYear} ComplianceFlow by TraceR2C LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
