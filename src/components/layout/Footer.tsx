import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { useGSAP, prefersReducedMotion } from "@/hooks/useGSAP";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scope = useGSAP((ctx) => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    // Parallax wordmark (slow drift)
    ctx.add(() => {
      gsap.to("[data-footer-wordmark]", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Supply-chain path drawing on scroll
    ctx.add(() => {
      const path = scope.current?.querySelector<SVGPathElement>("[data-footer-path]");
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top 85%",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });
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
    <footer
      ref={scope as React.RefObject<HTMLElement>}
      className="relative bg-ocean-base text-ocean-fg pt-32 pb-10 overflow-hidden"
    >
      {/* Continuation supply-chain path */}
      <svg
        className="absolute inset-x-0 top-0 w-full h-40 pointer-events-none"
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
      </svg>

      {/* Massive translucent wordmark */}
      <div
        data-footer-wordmark
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h2 className="text-[22vw] lg:text-[18vw] font-display font-bold leading-none tracking-tighter text-ocean-fg/[0.025] whitespace-nowrap">
          TRACER2C
        </h2>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
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

        {/* Compliance badges strip */}
        <div className="flex flex-wrap items-center gap-3 mb-10 py-6 border-y border-ocean-line/60">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-fg/40 mr-2">
            Compliance ·
          </span>
          {badges.map((b) => (
            <span
              key={b}
              className="px-3 py-1.5 border border-ocean-line text-ocean-fg/70 font-mono text-[10px] uppercase tracking-wider rounded-sm hover:border-ocean-primary/60 hover:text-ocean-mint transition-colors"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-ocean-surface/70 border border-ocean-primary/25 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ocean-primary opacity-60 animate-ping" />
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
    </footer>
  );
};

export default Footer;
