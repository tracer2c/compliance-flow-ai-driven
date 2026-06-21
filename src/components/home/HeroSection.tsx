import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { useGSAP, prefersReducedMotion } from "@/hooks/useGSAP";
import {
  ArrowRight,
  Play,
  Check,
  AlertCircle,
  FileText,
  ShieldCheck,
  Clock,
  Eye,
  ClipboardCheck,
  Copy,
  Sparkles,
  MoreVertical,
} from "lucide-react";

const HeroSection = () => {
  const cursorLayerRef = useRef<HTMLDivElement | null>(null);

  const scope = useGSAP((ctx) => {
    if (prefersReducedMotion()) return;

    // Parallax grid
    ctx.add(() => {
      gsap.to("[data-parallax='grid']", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Supply-chain path draws in + traveling highlight
    ctx.add(() => {
      const path = scope.current?.querySelector<SVGPathElement>("[data-supply-path]");
      const trail = scope.current?.querySelector<SVGPathElement>("[data-supply-trail]");
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 0.3 });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.6,
          ease: "power2.out",
          delay: 0.55,
        });
      }
      if (trail) {
        const len = trail.getTotalLength();
        gsap.set(trail, {
          strokeDasharray: `${len * 0.08} ${len}`,
          strokeDashoffset: len * 0.08,
          opacity: 0,
        });
        gsap
          .timeline({ delay: 0.9 })
          .to(trail, { opacity: 0.9, duration: 0.35, ease: "power1.out" })
          .to(trail, {
            strokeDashoffset: -len,
            duration: 2.2,
            ease: "power2.inOut",
          }, "<")
          .to(trail, { opacity: 0, duration: 0.4, ease: "power1.in" }, "-=0.5");
      }
    });

    // Eyebrow
    ctx.add(() => {
      gsap.from("[data-eyebrow]", {
        y: 8, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.1,
      });
    });

    // CTAs
    ctx.add(() => {
      gsap.from("[data-cta]", {
        y: 12, opacity: 0, duration: 0.55, stagger: 0.08, ease: "power2.out", delay: 0.9,
      });
    });

    // Subhead lines
    ctx.add(() => {
      gsap.from("[data-subhead]", {
        y: 10, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.75,
      });
    });

    // Trust feature pills
    ctx.add(() => {
      gsap.from("[data-trust]", {
        y: 10, opacity: 0, duration: 0.55, stagger: 0.08, ease: "power2.out", delay: 1.15,
      });
    });

    // Glow behind card
    ctx.add(() => {
      gsap.from("[data-glow]", { opacity: 0, duration: 1.4, ease: "power1.out" });
    });

    // Manifest card reveal
    ctx.add(() => {
      const tl = gsap.timeline({ delay: 0.55 });
      tl.from("[data-manifest]", {
        y: 28, opacity: 0, duration: 0.9, ease: "power3.out",
      })
        .from(
          "[data-stat]",
          { y: 10, opacity: 0, duration: 0.45, stagger: 0.06, ease: "power2.out" },
          "-=0.55"
        )
        .from(
          "[data-row]",
          { y: 12, opacity: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" },
          "-=0.35"
        )
        .from(
          "[data-bar]",
          { scaleX: 0, transformOrigin: "left center", duration: 0.7, stagger: 0.07, ease: "power2.out" },
          "-=0.7"
        )
        .from(
          "[data-bracket]",
          { opacity: 0, scale: 0.6, duration: 0.55, stagger: 0.08, ease: "back.out(2)", transformOrigin: "center" },
          "-=0.55"
        );
    });

    // AI risk review floating card
    ctx.add(() => {
      gsap.from("[data-ai-card]", {
        x: 24, y: 16, opacity: 0, duration: 0.7, ease: "power3.out", delay: 1.8,
      });
    });

    // Audit-ready pill
    ctx.add(() => {
      gsap.from("[data-ribbon]", {
        y: 12, opacity: 0, duration: 0.6, ease: "power2.out", delay: 1.55,
      });
    });

    // Trace path indicator (bottom)
    ctx.add(() => {
      gsap.from("[data-trace-line]", {
        scaleY: 0, transformOrigin: "top center", duration: 0.6, ease: "power2.out", delay: 1.6,
      });
      gsap.from("[data-trace-label]", { opacity: 0, duration: 0.5, delay: 1.6 });
    });

    // Status: Pending -> Verified (header badge)
    ctx.add(() => {
      const tl = gsap.timeline({ delay: 1.7 });
      tl.to("[data-status-pending]", { autoAlpha: 0, y: -6, duration: 0.35, ease: "power2.in" })
        .set("[data-status-pending]", { display: "none" })
        .set("[data-status-verified]", { display: "inline-flex" })
        .from("[data-status-verified]", { autoAlpha: 0, y: 6, duration: 0.35, ease: "power2.out" })
        .from(
          "[data-check]",
          { strokeDasharray: 24, strokeDashoffset: 24, duration: 0.45, ease: "power2.out" },
          "-=0.1"
        );
    });
  }, []);

  // Cursor-tracking gradient (subtle, hero only)
  useEffect(() => {
    const section = scope.current;
    const layer = cursorLayerRef.current;
    if (!section || !layer) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    let nextX = 50;
    let nextY = 30;

    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      nextX = ((e.clientX - rect.left) / rect.width) * 100;
      nextY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          layer.style.setProperty("--mx", `${nextX}%`);
          layer.style.setProperty("--my", `${nextY}%`);
        });
      }
    };

    const onEnter = () => { layer.style.opacity = "1"; };
    const onLeave = () => { layer.style.opacity = "0"; };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerenter", onEnter);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerenter", onEnter);
      section.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scope]);

  const docRows = [
    { id: "4.2", label: "Material origin", pct: 100, status: "valid" as const },
    { id: "6.1", label: "Lab certificate hash", pct: 98, status: "valid" as const },
    { id: "7.3", label: "Chain-of-custody", pct: 100, status: "valid" as const },
    { id: "9.0", label: "Auditor signature", pct: 95, status: "expiring" as const },
    { id: "12.1", label: "Data privacy attestation", pct: 100, status: "valid" as const },
  ];

  const trustItems = [
    { icon: Clock, label: "24/7 document", sub: "monitoring" },
    { icon: ShieldCheck, label: "Real-time expiry", sub: "tracking" },
    { icon: Eye, label: "Supplier risk", sub: "visibility" },
    { icon: ClipboardCheck, label: "Audit-ready", sub: "trails" },
  ];

  return (
    <section
      ref={scope as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-ocean-base text-ocean-fg min-h-screen flex flex-col border-b border-ocean-line/40"
    >
      {/* Layer 1 — Parallax grid */}
      <div data-parallax="grid" className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--ocean-primary))" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="hero-grid-mask" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="hero-grid-fade">
              <rect width="100%" height="100%" fill="url(#hero-grid-mask)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-grid-fade)" />
        </svg>
      </div>

      {/* Cursor-tracking gradient (subtle) */}
      <div
        ref={cursorLayerRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(480px circle at var(--mx, 50%) var(--my, 30%), hsl(var(--ocean-primary) / 0.12), transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Layer 2 — Supply chain path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1600 900"
        aria-hidden="true"
      >
        <path
          data-supply-path
          d="M-50,240 C220,140 420,640 820,420 S1240,140 1700,360"
          fill="none"
          stroke="hsl(var(--ocean-primary))"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
        <path
          data-supply-trail
          d="M-50,240 C220,140 420,640 820,420 S1240,140 1700,360"
          fill="none"
          stroke="hsl(var(--ocean-mint))"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Soft radial highlight behind product card */}
      <div data-glow className="absolute right-0 top-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-ocean-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative flex-1 flex items-center py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center w-full">
          {/* Left column */}
          <div className="space-y-8">
            <div data-eyebrow className="font-mono text-[11px] uppercase tracking-[0.28em] text-ocean-primary">
              Supplier Compliance Intelligence
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              <SplitTextReveal as="span" text="Make compliance" className="block" immediate delay={0.25} stagger={0.06} />
              <SplitTextReveal
                as="span"
                text="operational."
                className="block text-ocean-primary"
                immediate
                delay={0.6}
                stagger={0.06}
              />
            </h1>

            <p data-subhead className="max-w-md text-lg lg:text-xl text-ocean-fg/80 leading-snug">
              Across every supplier, document, and audit event.
            </p>

            <p data-subhead className="max-w-md text-base text-ocean-fg/60 leading-relaxed">
              TraceR2C helps teams collect supplier documents, track expirations, surface risk, and prove audit readiness in real time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link data-cta to="/contact#contact-form">
                <button className="group relative overflow-hidden px-7 py-4 bg-ocean-primary text-ocean-base font-semibold rounded-sm transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-ocean-mint translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </Link>
              <Link
                data-cta
                to="/#watch-demo"
                className="px-7 py-4 border border-ocean-fg/20 hover:border-ocean-primary/60 hover:bg-ocean-surface/60 text-ocean-fg font-semibold rounded-sm transition-colors inline-flex items-center gap-2"
              >
                See How It Works
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-xl">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    data-trust
                    className="flex items-center gap-2.5 px-3 py-2.5 border border-ocean-line/60 rounded-sm bg-ocean-surface/30"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full border border-ocean-primary/40 text-ocean-primary shrink-0">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[11px] leading-tight text-ocean-fg/80">
                      {item.label}<br /><span className="text-ocean-fg/55">{item.sub}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column — Audit Manifest */}
          <div className="relative lg:-mt-4">
            {/* corner brackets */}
            <span data-bracket className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-ocean-primary/60" />
            <span data-bracket className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-ocean-primary/60" />

            <div
              data-manifest
              className="relative bg-ocean-surface/85 backdrop-blur-xl border border-ocean-line rounded-lg p-6 lg:p-7 shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-start pb-5 border-b border-ocean-line">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ocean-fg/50">
                    Supplier Overview
                  </div>
                  <div className="font-display font-semibold text-xl lg:text-2xl">Compliance Manifest</div>
                  <div className="font-mono text-[10px] text-ocean-fg/45">Tier 2 Supplier · Auburn, AL</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative h-7">
                    <span
                      data-status-pending
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-ocean-mint/10 text-ocean-mint font-mono text-[10px] uppercase tracking-wider"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-mint animate-pulse" />
                      Pending
                    </span>
                    <span
                      data-status-verified
                      style={{ display: "none" }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-ocean-primary/15 text-ocean-primary font-mono text-[10px] uppercase tracking-wider border border-ocean-primary/30"
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path data-check d="M5 12l5 5L20 7" />
                      </svg>
                      Verified
                    </span>
                  </div>
                  <button className="text-ocean-fg/40 hover:text-ocean-fg/70 transition-colors" aria-label="More">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 py-5 border-b border-ocean-line">
                <div data-stat className="space-y-1">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ocean-fg/45">Documents</div>
                  <div className="font-display text-2xl font-semibold">24</div>
                  <div className="font-mono text-[9px] text-ocean-fg/40">Total</div>
                </div>
                <div data-stat className="space-y-1">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ocean-fg/45">Verified</div>
                  <div className="font-display text-2xl font-semibold text-ocean-primary">22</div>
                  <div className="font-mono text-[9px] text-ocean-mint">92%</div>
                </div>
                <div data-stat className="space-y-1">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ocean-fg/45">Expiring Soon</div>
                  <div className="font-display text-2xl font-semibold">3</div>
                  <div className="font-mono text-[9px] text-ocean-fg/40">This month</div>
                </div>
                <div data-stat className="space-y-1">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ocean-fg/45">Overdue</div>
                  <div className="font-display text-2xl font-semibold text-amber-400">1</div>
                  <div className="font-mono text-[9px] text-ocean-fg/40">Action required</div>
                </div>
                <div data-stat className="space-y-1 col-span-2 sm:col-span-1">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ocean-fg/45">Risk Score</div>
                  <div className="font-display text-2xl font-semibold inline-flex items-center gap-1.5">
                    Low
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-mint shadow-[0_0_8px_hsl(var(--ocean-mint))]" />
                  </div>
                  <div className="font-mono text-[9px] text-ocean-fg/40">Updated 2h ago</div>
                </div>
              </div>

              {/* Document sections */}
              <div className="py-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ocean-fg/50 mb-4">
                  Document Sections
                </div>
                <div className="space-y-3">
                  {docRows.map((row) => (
                    <div
                      key={row.id}
                      data-row
                      className="flex items-center gap-3"
                    >
                      <FileText className="h-3.5 w-3.5 text-ocean-fg/35 shrink-0" />
                      <span className="font-mono text-[10px] text-ocean-fg/55 w-10 shrink-0">{row.id}</span>
                      <span className="text-[12px] text-ocean-fg/85 flex-1 min-w-0 truncate">{row.label}</span>
                      <div className="hidden sm:block flex-1 h-1.5 bg-ocean-base rounded-full overflow-hidden max-w-[140px]">
                        <div
                          data-bar
                          className={`h-full ${row.status === "expiring" ? "bg-amber-400/80" : "bg-ocean-primary"}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="font-mono text-[10px] text-ocean-fg/55 w-10 text-right shrink-0">{row.pct}%</span>
                      {row.status === "valid" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-ocean-primary/10 text-ocean-primary font-mono text-[9px] uppercase tracking-wider shrink-0">
                          <Check className="h-2.5 w-2.5" /> Valid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-amber-400/10 text-amber-400 font-mono text-[9px] uppercase tracking-wider shrink-0">
                          <AlertCircle className="h-2.5 w-2.5" /> Expiring
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-ocean-line grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] text-ocean-fg/55">
                <div>
                  <div className="text-ocean-fg/40 mb-1">Chain-of-custody</div>
                  <div className="inline-flex items-center gap-1.5 text-ocean-mint">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-mint" />
                    Complete
                  </div>
                </div>
                <div>
                  <div className="text-ocean-fg/40 mb-1">Document hash</div>
                  <div className="inline-flex items-center gap-1.5">
                    a1b2c3d4e5f6...9a0b
                    <Copy className="h-3 w-3 text-ocean-fg/40" />
                  </div>
                </div>
                <div>
                  <div className="text-ocean-fg/40 mb-1">Last updated</div>
                  <div>May 18, 2026 · 14:42 UTC</div>
                </div>
              </div>
            </div>

            {/* Audit-ready pill */}
            <div
              data-ribbon
              className="absolute left-1/2 -translate-x-1/2 -bottom-5 px-4 py-2 bg-ocean-base border border-ocean-primary/40 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-mint shadow-xl flex items-center gap-2"
            >
              <ShieldCheck className="h-3 w-3" />
              <span className="w-1.5 h-1.5 rounded-full bg-ocean-mint shadow-[0_0_8px_hsl(var(--ocean-mint))]" />
              Audit-ready
            </div>

            {/* AI Risk Review floating card */}
            <div
              data-ai-card
              className="absolute -bottom-10 -right-2 sm:-right-6 w-[280px] bg-ocean-surface/95 backdrop-blur-xl border border-ocean-line rounded-md p-4 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ocean-primary mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                AI Risk Review
              </div>
              <div className="space-y-1.5 text-[12px] text-ocean-fg/85">
                <div><span className="text-ocean-primary font-semibold">3 renewals due</span> <span className="text-ocean-fg/60">this week</span></div>
                <div><span className="text-amber-400 font-semibold">2 supplier docs</span> <span className="text-ocean-fg/60">overdue</span></div>
              </div>
              <button className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-ocean-primary/40 text-ocean-primary font-mono text-[10px] uppercase tracking-wider hover:bg-ocean-primary/10 transition-colors">
                Review now
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span data-trace-label className="font-mono text-[9px] uppercase tracking-[0.32em] text-ocean-fg/60">
            Trace path
          </span>
          <div data-trace-line className="w-px h-10 bg-gradient-to-b from-ocean-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
