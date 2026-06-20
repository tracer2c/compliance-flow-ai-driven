import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { useGSAP, prefersReducedMotion } from "@/hooks/useGSAP";
import { ArrowRight, Play } from "lucide-react";

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
        // short bright dash that travels along the path once
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

    // Eyebrow pill
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

    // Subhead
    ctx.add(() => {
      gsap.from("[data-subhead]", {
        y: 10, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.8,
      });
    });

    // Trust micro-grid
    ctx.add(() => {
      gsap.from("[data-trust]", {
        y: 10, opacity: 0, duration: 0.55, stagger: 0.1, ease: "power2.out", delay: 1.15,
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
          "[data-row]",
          { y: 12, opacity: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" },
          "-=0.45"
        )
        .from(
          "[data-bracket]",
          { opacity: 0, scale: 0.6, duration: 0.55, stagger: 0.08, ease: "back.out(2)", transformOrigin: "center" },
          "-=0.55"
        );
    });

    // Trace path indicator (bottom)
    ctx.add(() => {
      gsap.from("[data-trace-line]", {
        scaleY: 0, transformOrigin: "top center", duration: 0.6, ease: "power2.out", delay: 1.6,
      });
      gsap.from("[data-trace-label]", { opacity: 0, duration: 0.5, delay: 1.6 });
    });

    // Status: Pending -> Verified, then ribbon slides in
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
        )
        .from("[data-ribbon]", {
          x: 24, opacity: 0, duration: 0.5, ease: "power2.out",
        }, "-=0.1");
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
        {/* Traveling highlight on the same path */}
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
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center w-full">
          {/* Left column */}
          <div className="space-y-10">
            <div data-eyebrow className="inline-flex items-center gap-3 px-3 py-1 bg-ocean-surface/70 border border-ocean-primary/25 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ocean-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-mint">
                Enterprise Node · Active
              </span>
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

            <p data-subhead className="max-w-md text-base lg:text-lg text-ocean-fg/65 leading-relaxed">
              TraceR2C transforms reactive documentation into proactive risk management — real-time
              visibility across every supplier, control, and audit event.
            </p>

            <div className="flex flex-wrap gap-4">
              <a data-cta href="https://compliance.tracer2c.com" target="_blank" rel="noopener noreferrer">
                <button className="group relative overflow-hidden px-7 py-4 bg-ocean-primary text-ocean-base font-semibold rounded-sm transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-ocean-mint translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </a>
              <button
                data-cta
                onClick={() => {
                  const el = document.getElementById("watch-demo");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-7 py-4 border border-ocean-fg/20 hover:border-ocean-primary/60 hover:bg-ocean-surface/60 text-ocean-fg font-semibold rounded-sm transition-colors inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4 text-ocean-primary" />
                See how it works
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ocean-line/60 max-w-md font-mono text-[11px] uppercase tracking-[0.18em] text-ocean-fg/45">
              <div data-trust className="flex flex-col gap-1">
                <span className="text-ocean-primary">01 / SOC 2 Type II</span>
                <span>Continuous audit</span>
              </div>
              <div data-trust className="flex flex-col gap-1">
                <span className="text-ocean-primary">02 / ISO 27001</span>
                <span>Supply chain map</span>
              </div>
            </div>
          </div>

          {/* Right column — Audit Manifest */}
          <div className="relative">
            {/* corner brackets */}
            <span data-bracket className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-ocean-primary/60" />
            <span data-bracket className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-ocean-primary/60" />

            <div
              data-manifest
              className="relative bg-ocean-surface/85 backdrop-blur-xl border border-ocean-line rounded-md p-7 shadow-2xl"
            >
              <div className="flex justify-between items-start pb-5 border-b border-ocean-line">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ocean-primary">
                    Document · TR-9942
                  </div>
                  <div className="font-display font-semibold text-lg">Compliance Manifest</div>
                  <div className="font-mono text-[10px] text-ocean-fg/40">Tier 2 supplier · Auburn AL</div>
                </div>

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
              </div>

              <div className="py-5 space-y-3">
                {[
                  { label: "Section 4.2", value: "Material origin" },
                  { label: "Section 6.1", value: "Lab certificate hash" },
                  { label: "Section 7.3", value: "Chain-of-custody" },
                  { label: "Section 9.0", value: "Auditor signature" },
                ].map((row, i) => (
                  <div
                    key={i}
                    data-row
                    className="flex items-center gap-4 pl-3 border-l-2 border-ocean-primary/40 py-1"
                  >
                    <span className="font-mono text-[10px] text-ocean-fg/40 w-20">{row.label}</span>
                    <div className="flex-1 h-2 bg-ocean-base rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-ocean-primary/40 to-ocean-primary/10" style={{ width: `${60 + i * 8}%` }} />
                    </div>
                    <span className="font-mono text-[10px] text-ocean-fg/50 hidden sm:inline">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 mt-1 border-t border-ocean-line flex items-center justify-between font-mono text-[10px] text-ocean-fg/45">
                <span>Signed · Jhon Patel</span>
                <span>2026-06-18 · 14:42 UTC</span>
              </div>
            </div>

            {/* Verified ribbon, anchored to card */}
            <div data-ribbon className="absolute -bottom-4 right-6 px-3 py-2 bg-ocean-base border border-ocean-primary/40 rounded-sm font-mono text-[10px] uppercase tracking-[0.18em] text-ocean-mint shadow-xl flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ocean-primary shadow-[0_0_8px_hsl(var(--ocean-primary))]" />
              Audit-ready
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
