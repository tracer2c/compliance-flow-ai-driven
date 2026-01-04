"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  MotionValue,
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  Globe,
  KeyRound,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Workflow,
} from "lucide-react";

/**
 * TraceR2C — Premium Enterprise Landing
 * Next.js + Tailwind + Framer Motion + lucide-react
 *
 * npm i framer-motion lucide-react
 */

const BRAND = {
  accent: "#2DD4BF", // enterprise teal
  accent2: "#60A5FA", // azure
  base: "#070A12",
  panel: "#0B1220",
};

type PillMode = "SSO" | "RBAC" | "AUDIT" | "ENCRYPT";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const sections = useMemo(
    () => [
      { id: "top", label: "Overview" },
      { id: "why", label: "Why" },
      { id: "platform", label: "Platform" },
      { id: "outcomes", label: "Outcomes" },
      { id: "health", label: "Compliance Health" },
      { id: "trust", label: "Trust" },
      { id: "demo", label: "Demo" },
    ],
    [],
  );
  const active = useActiveSection(sections.map((s) => s.id));

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  // Background scene: color shifts across scroll
  const hueShift = useTransform(scrollYProgress, [0, 0.32, 0.62, 1], [0, 0.45, 0.8, 1]);
  const bgTint = useTransform(hueShift, (t) => {
    // blend: teal → azure → deep navy → teal
    if (t < 0.45) return `radial-gradient(900px 600px at 30% 20%, rgba(45,212,191,0.20), transparent 55%)`;
    if (t < 0.8) return `radial-gradient(900px 600px at 65% 18%, rgba(96,165,250,0.18), transparent 55%)`;
    return `radial-gradient(900px 600px at 40% 20%, rgba(45,212,191,0.18), transparent 55%)`;
  });

  // Parallax layers
  const bgYSlow = useTransform(scrollY, [0, 2400], [0, 120]);
  const bgYMed = useTransform(scrollY, [0, 2400], [0, -160]);
  const bgYFast = useTransform(scrollY, [0, 2400], [0, 220]);

  // Cursor glow only “strong” near hero area; soften globally
  const { x, y } = useMousePosition();
  const glowX = useTransform(x, (v) => `${v}px`);
  const glowY = useTransform(y, (v) => `${v}px`);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.18, 0.35, 1], [0.26, 0.22, 0.12, 0.08]);

  // Scroll velocity based float (luxury)
  const vel = useVelocity(scrollY);
  const velSpring = useSpring(vel, { stiffness: 140, damping: 32 });
  const float = useTransform(velSpring, [-1600, 1600], [10, -10]);

  // Hero mode controls right product preview
  const [pillMode, setPillMode] = useState<PillMode>("SSO");

  return (
    <div
      className="min-h-screen text-white selection:bg-white/15 selection:text-white"
      style={{ background: BRAND.base }}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left"
        style={{
          scaleX: progress,
          background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
        }}
      />

      {/* Full-page cinematic atmosphere */}
      <Atmosphere bgTint={bgTint} bgYSlow={bgYSlow} bgYMed={bgYMed} bgYFast={bgYFast} />

      {/* Cursor glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          opacity: glowOpacity,
          background: "radial-gradient(620px 620px at var(--x) var(--y), rgba(45,212,191,0.22), transparent 55%)",
          ["--x" as any]: glowX,
          ["--y" as any]: glowY,
        }}
      />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-[80]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.9, 0.2, 1] }}
            className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
              <a href="#top" className="group flex items-center gap-3">
                <div className="relative">
                  <div
                    className="h-9 w-9 rounded-xl ring-1 ring-white/10"
                    style={{
                      background: "linear-gradient(135deg, rgba(45,212,191,0.26), rgba(96,165,250,0.14))",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <Sparkles className="h-5 w-5 opacity-90 transition group-hover:rotate-12" />
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-wide">TraceR2C</div>
                  <div className="text-xs text-white/60">Compliance Operating System</div>
                </div>
              </a>

              <nav className="hidden items-center gap-1 md:flex">
                {sections.slice(0, 6).map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm transition",
                      active === s.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="#demo"
                  className="hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 md:inline-flex"
                >
                  Talk to sales
                </a>
                <MagneticButton href="#demo" variant="primary">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* HERO */}
      <main id="top" className="relative z-[2] pt-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
            <div className="relative">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/85">
                  <ShieldCheck className="h-4 w-4" />
                  Enterprise-grade compliance management for global supply chains
                </div>
              </Reveal>

              {/* Headline: mask reveal (premium) */}
              <motion.div
                className="mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <MaskHeadline />
              </motion.div>

              <Reveal delay={0.1}>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">
                  TraceR2C transforms compliance from reactive documentation to proactive risk management—giving
                  regulated industries real-time visibility, predictive insights, and audit-ready controls across every
                  supplier, document, and workflow.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <MagneticButton href="#demo" variant="primary">
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton href="#platform" variant="secondary">
                    See how it works <Workflow className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </Reveal>

              {/* Hero pills: interactive → drives product preview */}
              <Reveal delay={0.18}>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <HeroPill
                    icon={<KeyRound className="h-4 w-4" />}
                    label="SSO / SAML"
                    active={pillMode === "SSO"}
                    onHover={() => setPillMode("SSO")}
                  />
                  <HeroPill
                    icon={<Lock className="h-4 w-4" />}
                    label="RBAC"
                    active={pillMode === "RBAC"}
                    onHover={() => setPillMode("RBAC")}
                  />
                  <HeroPill
                    icon={<ClipboardCheck className="h-4 w-4" />}
                    label="Audit Logs"
                    active={pillMode === "AUDIT"}
                    onHover={() => setPillMode("AUDIT")}
                  />
                  <HeroPill
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="Encryption"
                    active={pillMode === "ENCRYPT"}
                    onHover={() => setPillMode("ENCRYPT")}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <a
                  href="#why"
                  className="mt-10 inline-flex items-center gap-2 text-xs text-white/60 hover:text-white/80"
                >
                  <span>Scroll to explore</span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </a>
              </Reveal>
            </div>

            {/* Product showcase: “powers on” + reactive to hero pills */}
            <motion.div style={{ y: float }}>
              <Reveal delay={0.06}>
                <ProductShowcase mode={pillMode} />
              </Reveal>
            </motion.div>
          </div>
        </div>

        <SectionDivider />
      </main>

      {/* WHY */}
      <section id="why" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Compliance is getting harder. Your process shouldn’t.
                </h2>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="mt-3 text-white/70">
                  Regulatory complexity is increasing across industries. Manual collection and fragmented systems create
                  blind spots, missed expirations, and audit stress. TraceR2C makes compliance a daily operating
                  capability— not an end-of-quarter scramble.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <SolidPanel>
                  <div className="text-sm font-semibold">Our Mission</div>
                  <div className="mt-2 text-white/70">
                    <span className="font-semibold text-white">
                      “Make compliance operational, measurable, and proactive.”
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-white/65">
                    Move from reactive documentation to proactive risk management—powered by real-time visibility and
                    predictive insights.
                  </div>
                </SolidPanel>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              {/* Pain → Solution vertical narrative + line */}
              <StoryRail />
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* PLATFORM (Pinned Journey + Morphing Stage + Trace Line) */}
      <section id="platform" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Workflow className="h-4 w-4" />A unified compliance platform
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
                  One system to collect, verify, and control compliance.
                </h2>
                <p className="mt-3 max-w-2xl text-white/70">
                  Instead of static tiles, this section is a guided journey—pinned, animated, and product-driven.
                </p>
              </div>

              <div className="hidden md:flex">
                <MagneticButton href="#demo" variant="secondary">
                  See it in action <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <PlatformJourney />
        </div>

        <SectionDivider />
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Outcomes leadership understands.</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 text-white/70">
                  Reduce operational drag, prevent compliance incidents, and walk into audits with calm confidence.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-6 md:text-right">
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <BadgeCheck className="h-4 w-4" />
                  Designed for enterprise credibility
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricTileAnimated
              value={60}
              suffix="%"
              label="Less compliance chasing"
              desc="Automated requests + reminders reduce manual follow-ups."
            />
            <MetricTileAnimated
              value={40}
              suffix="%"
              label="Faster audit prep"
              desc="Centralized evidence, approvals, and logs—always ready."
            />
            <MetricTileAnimated
              value={0}
              suffix=""
              label="Expired doc surprises"
              desc="Expiry forecasting and alerts before risk becomes incident."
            />
            <MetricTileAnimated
              value={1}
              suffix=""
              label="Single source of truth"
              desc="Suppliers, documents, risk—permissioned and measurable."
            />
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* HEALTH */}
      <section id="health" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <LineChart className="h-4 w-4" />
                  TraceR2C signature concept
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
                  Compliance Health: measurable posture, not checkbox theater.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-3 text-white/70">
                  Not binary. Not vibes. A living operational posture driven by completeness, expiry risk,
                  responsiveness, and governance quality.
                </p>
              </Reveal>

              <div className="mt-6 grid gap-3">
                <Reveal delay={0.12}>
                  <ReasonRow title="Documents" desc="Completeness, correctness, and validation." />
                </Reveal>
                <Reveal delay={0.14}>
                  <ReasonRow title="Expiry Risk" desc="Forecasting before gaps happen." />
                </Reveal>
                <Reveal delay={0.16}>
                  <ReasonRow title="Supplier Responsiveness" desc="Accountability signals from real behavior." />
                </Reveal>
                <Reveal delay={0.18}>
                  <ReasonRow title="Audit Readiness" desc="Approvals, trails, controls—all consistent." />
                </Reveal>
              </div>
            </div>

            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <ComplianceHealthPremium />
              </Reveal>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* TRUST */}
      <section id="trust" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Trust built into every layer.</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 text-white/70">
                  Enterprise teams don’t buy promises. They buy governance, security, and reliability—proven in the UI.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <SolidPanel>
                  <div className="text-sm font-semibold">Our Values</div>
                  <div className="mt-4 grid gap-3">
                    <ValueTile
                      title="Compliance-First Thinking"
                      desc="Every feature is designed with controls and auditability."
                    />
                    <ValueTile title="Customer Obsession" desc="We win when your compliance goals become effortless." />
                    <ValueTile title="Global Perspective" desc="Built for region + industry complexity from day one." />
                    <ValueTile
                      title="Operational Excellence"
                      desc="We hold ourselves to the standards we enable for you."
                    />
                  </div>
                </SolidPanel>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                <ProcurementProofRow />
              </Reveal>

              <div className="mt-4 grid gap-4 md:grid-cols-12">
                <Reveal>
                  <div className="md:col-span-7">
                    <ExpandableTrustCard />
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <div className="md:col-span-5 space-y-4">
                    <TrustMini
                      title="Operational Reliability"
                      icon={<BellRing className="h-5 w-5" />}
                      items={["Structured workflows", "Expiry forecasting", "Notifications across teams + suppliers"]}
                    />
                    <TrustMini
                      title="Built for Global Complexity"
                      icon={<Globe className="h-5 w-5" />}
                      items={[
                        "Regional requirements",
                        "Multi-industry templates",
                        "Scales from 50 to 5,000+ suppliers",
                      ]}
                    />
                  </div>
                </Reveal>
              </div>

              <div id="demo" className="mt-6">
                <Reveal>
                  <CTASection />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-[2] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-2xl ring-1 ring-white/10"
                style={{
                  background: `linear-gradient(135deg, rgba(45,212,191,0.22), rgba(96,165,250,0.12))`,
                }}
              />
              <div>
                <div className="text-sm font-semibold">TraceR2C</div>
                <div className="text-xs text-white/60">Make compliance operational, measurable, and proactive.</div>
              </div>
            </div>
            <div className="text-xs text-white/50">© {new Date().getFullYear()} TraceR2C. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --------------------------------- HERO --------------------------------- */

function MaskHeadline() {
  // Mask-reveal headline (feels expensive)
  return (
    <div className="relative">
      <motion.h1
        className="text-4xl font-semibold tracking-tight md:text-6xl"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
      >
        Make compliance{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2}, rgba(255,255,255,0.9))`,
          }}
        >
          operational,
        </span>{" "}
        measurable, and proactive.
      </motion.h1>

      {/* Subtle scanline pass once */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-0"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.09), transparent)",
        }}
        animate={{ opacity: [0, 0.65, 0], y: ["-30%", "50%", "120%"] }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
}

function HeroPill({
  icon,
  label,
  active,
  onHover,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs transition",
        active ? "border-white/20 bg-white/10 text-white" : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8",
      )}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {active && (
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(45,212,191,0.18), rgba(96,165,250,0.10), transparent)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      <span className="relative opacity-90">{icon}</span>
      <span className="relative">{label}</span>
    </motion.div>
  );
}

function ProductShowcase({ mode }: { mode: PillMode }) {
  // Product “powers on” + mode highlights driven by hero pills
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-6 rounded-[28px] blur-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.20), rgba(96,165,250,0.12), transparent)`,
        }}
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
      />

      {/* Frame */}
      <div className="relative rounded-[28px] border border-white/10 bg-black/35 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="text-xs text-white/60">TraceR2C / Live Preview</div>
          <motion.div
            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            Live
          </motion.div>
        </div>

        {/* Content swaps based on mode */}
        <div className="p-2">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
              className="grid gap-3 md:grid-cols-2"
            >
              <EdgeCard
                title="Compliance Health"
                subtitle="Real-time posture across suppliers"
                highlight={mode === "AUDIT" || mode === "RBAC"}
              >
                <RingGauge value={88} size={92} />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <MiniPill label="Docs" value="93%" active={mode === "AUDIT"} />
                  <MiniPill label="RBAC" value={mode === "RBAC" ? "Active" : "Ready"} active={mode === "RBAC"} />
                  <MiniPill label="SSO" value={mode === "SSO" ? "Connected" : "Ready"} active={mode === "SSO"} />
                </div>
              </EdgeCard>

              <EdgeCard title="Signals" subtitle="Predictive alerts before gaps" highlight={mode === "ENCRYPT"}>
                <SignalLine
                  label="Supplier: Havenview Mill"
                  meta="Document expiry in 14 days"
                  active={mode === "AUDIT"}
                />
                <SignalLine label="Supplier: Debel Foods" meta="Missing COA for batch #8891" active={mode === "RBAC"} />
                <SignalLine label="Supplier: CHPS" meta="Certificate verified • Audit ready" active={mode === "SSO"} />
                <div className="mt-3 rounded-xl border border-white/10 bg-black/25 p-3 text-xs text-white/70">
                  {mode === "ENCRYPT" ? (
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Encrypted evidence and secure transport enforced.
                    </span>
                  ) : mode === "AUDIT" ? (
                    <span className="inline-flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4" /> Audit trails link approvals to evidence automatically.
                    </span>
                  ) : mode === "RBAC" ? (
                    <span className="inline-flex items-center gap-2">
                      <Lock className="h-4 w-4" /> Permissions prevent unapproved access and edits.
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <KeyRound className="h-4 w-4" /> SSO streamlines enterprise onboarding.
                    </span>
                  )}
                </div>
              </EdgeCard>

              <EdgeCard
                title="Requests"
                subtitle="Automated follow-ups + accountability"
                span2
                highlight={mode === "SSO"}
              >
                <div className="grid gap-2 md:grid-cols-3">
                  <RequestTile title="COA" sub="Due in 2d" status="Pending" />
                  <RequestTile title="HACCP" sub="Due in 7d" status="In Review" />
                  <RequestTile title="ISO Cert" sub="Verified" status="Approved" />
                </div>
              </EdgeCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Power-on scan pulse */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
          animate={{ opacity: [0, 0.6, 0], y: ["-40%", "40%", "130%"] }}
          transition={{ duration: 1.15, ease: "easeInOut", delay: 0.18 }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
        <div className="inline-flex items-center gap-2">
          <BellRing className="h-4 w-4" />
          Smart notifications for updates, expiries, and missing docs
        </div>
        <div className="inline-flex items-center gap-2">
          <Users className="h-4 w-4" />
          Teams, suppliers, roles—fully permissioned
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------- WHY RAIL -------------------------------- */

function StoryRail() {
  const items = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Regulatory complexity is rising",
      desc: "Requirements vary by region, industry, and regulation—teams need clarity, not chaos.",
    },
    {
      icon: <Timer className="h-5 w-5" />,
      title: "Manual work creates risk",
      desc: "Chasing suppliers, spreadsheets, and inbox threads is slow—and dangerously fragile.",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Real-time compliance health",
      desc: "Know what’s missing, what’s expiring, and what’s trending risky—before it becomes an incident.",
    },
    {
      icon: <FileCheck2 className="h-5 w-5" />,
      title: "Technology should reduce burden",
      desc: "Automate collection, validation, and accountability with audit-ready workflows.",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-white/0 via-white/14 to-white/0" />
      <div className="space-y-4 pl-12">
        {items.map((it, idx) => (
          <Reveal key={it.title} delay={idx * 0.05}>
            <EdgeLitCard>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/25">
                  {it.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="mt-1 text-sm text-white/70">{it.desc}</div>
                </div>
              </div>
            </EdgeLitCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- PLATFORM JOURNEY ---------------------------- */

function PlatformJourney() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.20"], // tune for pin feel
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  // Step selection by progress
  const step = useTransform(p, (v) => {
    if (v < 0.34) return 0;
    if (v < 0.67) return 1;
    return 2;
  });

  const [active, setActive] = useState(0);
  useEffect(() => {
    const unsub = step.on("change", (v) => setActive(Math.round(v)));
    return () => unsub();
  }, [step]);

  // Trace line draw
  const trace = useTransform(p, [0, 1], [0.05, 1]);

  return (
    <div ref={ref} className="mt-10 grid gap-4 md:grid-cols-12">
      {/* Left pinned story */}
      <div className="md:col-span-5">
        <div className="md:sticky md:top-28">
          <SolidPanel>
            <div className="text-sm font-semibold">The story (in one flow)</div>
            <div className="mt-2 text-sm text-white/70">
              Instead of scattered emails and spreadsheets, TraceR2C makes compliance a measurable system that runs
              daily.
            </div>

            <div className="mt-6 space-y-3">
              {[
                { k: "Collect", d: "Automated requests + supplier uploads + deadlines." },
                { k: "Verify", d: "Structured approvals, validation, audit trails." },
                { k: "Control", d: "Health scoring, forecasting, alerts, reporting." },
              ].map((it, idx) => (
                <motion.button
                  key={it.k}
                  onClick={() => setActive(idx)}
                  className={cn(
                    "w-full rounded-2xl border p-4 text-left transition",
                    active === idx ? "border-white/20 bg-white/10" : "border-white/10 bg-black/20 hover:bg-white/6",
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{it.k}</div>
                      <div className="mt-1 text-xs text-white/60">{it.d}</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                      Step {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                    <motion.div
                      className="h-1.5 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
                      initial={{ width: "10%" }}
                      animate={{ width: active === idx ? "84%" : "22%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/70">
              <span className="font-semibold text-white">Enterprise feel:</span> pinned narrative, morphing product
              stage, measurable posture.
            </div>
          </SolidPanel>
        </div>
      </div>

      {/* Right: pinned stage + trace line */}
      <div className="md:col-span-7">
        <div className="relative md:sticky md:top-28">
          <EdgeLitCard className="relative overflow-hidden">
            {/* Trace line motif */}
            <motion.div className="pointer-events-none absolute inset-0 opacity-70">
              <TraceLine progress={trace} />
            </motion.div>

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-white/60">Pinned Journey</div>
                  <div className="mt-1 text-lg font-semibold">Watch the platform morph with your workflow.</div>
                  <div className="mt-2 text-sm text-white/70">
                    As you scroll, the product stage transitions from Requests → Approvals → Health scoring.
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                  Live stage
                </div>
              </div>

              <div className="mt-6">
                <MorphingStage active={active} />
              </div>
            </div>
          </EdgeLitCard>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <StepChip
              active={active === 0}
              title="Collect"
              desc="Templates • portal • reminders"
              icon={<FileCheck2 className="h-4 w-4" />}
            />
            <StepChip
              active={active === 1}
              title="Verify"
              desc="Approvals • trails • expiry"
              icon={<ClipboardCheck className="h-4 w-4" />}
            />
            <StepChip
              active={active === 2}
              title="Control"
              desc="Health • alerts • reporting"
              icon={<LineChart className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MorphingStage({ active }: { active: number }) {
  const stage = [
    { key: "collect", title: "Collect", subtitle: "Request documents with accountable follow-ups" },
    { key: "verify", title: "Verify", subtitle: "Approvals, validation, audit trails, expiry control" },
    { key: "control", title: "Control", subtitle: "Health scoring, forecasting, alerts, reporting" },
  ][active];

  return (
    <div className="relative">
      {/* Stage glow */}
      <motion.div
        className="absolute -inset-4 rounded-[24px] blur-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.16), rgba(96,165,250,0.09), transparent)`,
        }}
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut" }}
      />

      <div className="relative rounded-[24px] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">{stage.title}</div>
            <div className="mt-1 text-xs text-white/60">{stage.subtitle}</div>
          </div>
          <motion.div
            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
            key={stage.key}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
          >
            Stage {String(active + 1).padStart(2, "0")}
          </motion.div>
        </div>

        <div className="mt-4">
          <AnimatePresence mode="popLayout">
            {active === 0 && (
              <motion.div
                key="stage-collect"
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
                className="grid gap-3 md:grid-cols-3"
              >
                <StageCard title="Templates" desc="Standardize what you ask for." />
                <StageCard title="Supplier Portal" desc="Uploads + deadlines." highlight />
                <StageCard title="Auto Reminders" desc="No chasing required." />
              </motion.div>
            )}

            {active === 1 && (
              <motion.div
                key="stage-verify"
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
                className="grid gap-3 md:grid-cols-3"
              >
                <StageCard title="Approvals" desc="Roles + permissions." highlight />
                <StageCard title="Audit Trail" desc="Immutable evidence links." />
                <StageCard title="Expiry Tracking" desc="Forecast gaps early." />
              </motion.div>
            )}

            {active === 2 && (
              <motion.div
                key="stage-control"
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
                className="grid gap-3 md:grid-cols-3"
              >
                <StageCard title="Health Score" desc="Posture you can track." highlight />
                <StageCard title="Risk Signals" desc="Predictive alerts." />
                <StageCard title="Reporting" desc="Exportable leadership view." />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* scan pulse each stage */}
        <motion.div
          key={`scan-${stage.key}`}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.07), transparent)",
          }}
          animate={{ opacity: [0, 0.55, 0], y: ["-30%", "40%", "120%"] }}
          transition={{ duration: 1.05, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

function StageCard({ title, desc, highlight }: { title: string; desc: string; highlight?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn("rounded-2xl border bg-white/5 p-4", highlight ? "border-white/20" : "border-white/10")}
    >
      {highlight && (
        <div
          className="mb-3 h-px w-full"
          style={{
            background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
          }}
        />
      )}
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-xs text-white/65">{desc}</div>
    </motion.div>
  );
}

function StepChip({
  active,
  title,
  desc,
  icon,
}: {
  active: boolean;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "rounded-2xl border p-4 transition",
        active ? "border-white/20 bg-white/10" : "border-white/10 bg-white/5 hover:bg-white/8",
      )}
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="opacity-90">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-xs text-white/65">{desc}</div>
    </motion.div>
  );
}

function TraceLine({ progress }: { progress: MotionValue<number> }) {
  return (
    <svg className="h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
      <motion.path
        d="M80 110 C 220 60, 340 60, 460 150 S 700 320, 880 240"
        fill="none"
        stroke="rgba(45,212,191,0.35)"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ pathLength: progress }}
      />
      <motion.path
        d="M80 110 C 220 60, 340 60, 460 150 S 700 320, 880 240"
        fill="none"
        stroke="rgba(96,165,250,0.22)"
        strokeWidth="6"
        strokeLinecap="round"
        style={{ pathLength: progress, filter: "blur(6px)" }}
      />
    </svg>
  );
}

/* ------------------------- COMPLIANCE HEALTH (Premium) -------------------- */

function ComplianceHealthPremium() {
  const [industry, setIndustry] = useState<"Food" | "Pharma" | "Manufacturing">("Food");
  const [region, setRegion] = useState<"US" | "EU" | "Global">("US");
  const [scale, setScale] = useState<"50" | "500" | "5000">("500");

  const score = useMemo(() => {
    const base = industry === "Pharma" ? 78 : industry === "Manufacturing" ? 82 : 86;
    const reg = region === "EU" ? -6 : region === "Global" ? -10 : 0;
    const sc = scale === "50" ? +6 : scale === "5000" ? -8 : 0;
    return clamp(base + reg + sc, 0, 100);
  }, [industry, region, scale]);

  const expiryRisk = useMemo(() => {
    const r = 100 - score;
    if (r >= 35) return { label: "Elevated", tone: "red" as const };
    if (r >= 20) return { label: "Moderate", tone: "amber" as const };
    return { label: "Low", tone: "green" as const };
  }, [score]);

  const openRequests = useMemo(() => {
    const base = scale === "50" ? 6 : scale === "500" ? 18 : 46;
    const bump = region === "Global" ? 12 : region === "EU" ? 7 : 0;
    return base + bump + (industry === "Pharma" ? 8 : 0);
  }, [industry, region, scale]);

  const responsiveness = useMemo(() => {
    const x = score - (industry === "Pharma" ? 6 : 0);
    return clamp(Math.round(x * 0.95), 0, 100);
  }, [score, industry]);

  // Live signal feed
  const signals = useMemo(() => {
    const base = [
      { title: "Supplier questionnaire pending", meta: "Due soon • auto reminder scheduled" },
      {
        title: "Expiry forecast updated",
        meta: expiryRisk.tone === "green" ? "Low risk • stable posture" : "Moderate risk • watchlist enabled",
      },
      { title: "Audit trail consistency", meta: "Approvals + evidence linked per supplier" },
    ];
    if (industry === "Pharma")
      base.unshift({ title: "GMP validation required", meta: "High priority • evidence needed" });
    if (region === "Global")
      base.unshift({ title: "Regional evidence variance detected", meta: "Policy alignment recommended" });
    return base.slice(0, 4);
  }, [industry, region, expiryRisk.tone]);

  return (
    <div className="relative">
      <motion.div
        className="absolute -inset-6 rounded-[28px] blur-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.18), rgba(96,165,250,0.10), transparent)`,
        }}
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut" }}
      />

      <div className="relative rounded-[28px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold">Interactive Demo</div>
            <div className="mt-1 text-xs text-white/60">
              Toggle context and watch posture respond—micro animations included.
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            <Segmented
              label="Industry"
              value={industry}
              options={["Food", "Pharma", "Manufacturing"]}
              onChange={(v) => setIndustry(v as any)}
            />
            <Segmented
              label="Region"
              value={region}
              options={["US", "EU", "Global"]}
              onChange={(v) => setRegion(v as any)}
            />
            <Segmented
              label="Suppliers"
              value={scale}
              options={["50", "500", "5000"]}
              onChange={(v) => setScale(v as any)}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Compliance Health</div>
                  <div className="text-xs text-white/60">A measurable posture across your supply chain</div>
                </div>
                <div className="flex items-center gap-3">
                  <RingGauge value={score} size={74} />
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Score: <span className="font-semibold text-white">{score}</span>/100
                  </div>
                </div>
              </div>

              {/* Micro sparklines */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <MicroStat label="Expiry Risk" value={expiryRisk.label} tone={expiryRisk.tone} />
                <MicroStat label="Open Requests" value={`${openRequests}`} />
                <MicroStat label="Responsiveness" value={`${responsiveness}%`} />
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-white/70">
                <span className="font-semibold text-white">What changed?</span>{" "}
                {region === "Global"
                  ? "Global complexity increases variance and risk signals."
                  : region === "EU"
                    ? "EU requirements add stricter evidence and expiry controls."
                    : "US posture is stable with consistent workflow controls."}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Live Signals</div>
              <div className="mt-1 text-xs text-white/60">Updates animate in like a real system</div>

              <div className="mt-4 space-y-2">
                <AnimatePresence mode="popLayout">
                  {signals.map((s) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.99 }}
                      transition={{ duration: 0.32, ease: [0.2, 0.9, 0.2, 1] }}
                    >
                      <SignalRow
                        label={s.title}
                        meta={s.meta}
                        tone={expiryRisk.tone === "red" ? "red" : expiryRisk.tone === "amber" ? "amber" : "green"}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="text-xs font-semibold">Why enterprises like this</div>
                <ul className="mt-2 space-y-1 text-xs text-white/70">
                  <li>• You see posture, not just documents.</li>
                  <li>• Risk is forecasted, not discovered.</li>
                  <li>• Controls are enforced in the workflow.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* scan pulse on changes */}
        <motion.div
          key={`${industry}-${region}-${scale}`}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.07), transparent)" }}
          animate={{ opacity: [0, 0.55, 0], y: ["-25%", "45%", "130%"] }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* ------------------------------- TRUST ----------------------------------- */

function ProcurementProofRow() {
  const items = ["SSO/SAML Ready", "Audit Trails", "Role-based Access", "Expiry Forecasting", "Evidence Linking"];
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">Enterprise proof points</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <div key={it} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75">
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpandableTrustCard() {
  const [open, setOpen] = useState<"SSO" | "RBAC" | "AUDIT" | "EVIDENCE" | null>("SSO");
  const rows = [
    {
      k: "SSO",
      title: "SSO / SAML + MFA",
      desc: "Enterprise authentication patterns that reduce onboarding friction and enforce access policy.",
    },
    {
      k: "RBAC",
      title: "Role-based permissions",
      desc: "Granular role controls that protect supplier data and enforce governance.",
    },
    {
      k: "AUDIT",
      title: "Immutable audit trails",
      desc: "Approvals, changes, and evidence linked with traceability for audits.",
    },
    {
      k: "EVIDENCE",
      title: "Evidence centralized by supplier",
      desc: "One source of truth across documents, requests, approvals, and expiry status.",
    },
  ] as const;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">
          <Lock className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold">Security & Governance</div>
          <div className="text-xs text-white/60">Expandable, procurement-friendly details</div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {rows.map((r) => (
          <button
            key={r.k}
            onClick={() => setOpen(open === r.k ? null : (r.k as any))}
            className={cn(
              "w-full rounded-2xl border p-4 text-left transition",
              open === r.k ? "border-white/20 bg-white/10" : "border-white/10 bg-black/20 hover:bg-white/6",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">{r.title}</div>
                <AnimatePresence>
                  {open === r.k && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="mt-2 text-sm text-white/70"
                    >
                      {r.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                {open === r.k ? "Hide" : "View"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function TrustMini({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">{icon}</div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------- CTA ------------------------------------- */

function CTASection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
      <motion.div
        className="pointer-events-none absolute -inset-[40%] opacity-55 blur-3xl"
        style={{ background: `radial-gradient(circle, rgba(45,212,191,0.22), transparent 60%)` }}
        animate={{ x: ["-10%", "10%", "-10%"], y: ["0%", "8%", "0%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold">Ready to operationalize compliance?</div>
          <div className="mt-1 text-sm text-white/70">
            We’ll walk through TraceR2C with your workflows, suppliers, and compliance needs.
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <MagneticButton href="#" variant="secondary">
            Contact sales
          </MagneticButton>
          <MagneticButton href="#" variant="primary">
            Request a demo <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- SURFACES / CARDS ---------------------------- */

function SolidPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-white/10 bg-black/25 p-5">{children}</div>;
}

function EdgeLitCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn("group relative rounded-3xl border border-white/10 bg-white/5 p-6", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.14), rgba(96,165,250,0.08), transparent)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function EdgeCard({
  title,
  subtitle,
  children,
  highlight,
  span2,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  highlight?: boolean;
  span2?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "relative rounded-2xl border bg-white/5 p-4",
        highlight ? "border-white/20" : "border-white/10",
        span2 ? "md:col-span-2" : "",
      )}
    >
      {highlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-70 blur-xl"
          style={{ background: `linear-gradient(135deg, rgba(45,212,191,0.18), rgba(96,165,250,0.08), transparent)` }}
          animate={{ opacity: [0.45, 0.75, 0.45] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
        />
      )}

      <div className="relative">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-white/60">{subtitle}</div>
        <div className="mt-4">{children}</div>
      </div>
    </motion.div>
  );
}

/* ----------------------------- MICRO UI ---------------------------------- */

function MicroStat({ label, value, tone }: { label: string; value: string; tone?: "green" | "amber" | "red" }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="mt-1 flex items-center justify-between gap-2">
        <div className="text-sm font-semibold">{value}</div>
        <Sparkline tone={tone} />
      </div>
    </div>
  );
}

function Sparkline({ tone }: { tone?: "green" | "amber" | "red" }) {
  const stroke =
    tone === "red" ? "rgba(255,255,255,0.55)" : tone === "amber" ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.65)";
  return (
    <svg width="54" height="18" viewBox="0 0 54 18" className="opacity-80">
      <motion.path
        d="M1 14 C 10 6, 16 16, 24 9 S 38 4, 53 8"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
      />
    </svg>
  );
}

function MiniPill({ label, value, active }: { label: string; value: string; active?: boolean }) {
  return (
    <div
      className={cn("rounded-xl border p-3", active ? "border-white/20 bg-white/10" : "border-white/10 bg-black/20")}
    >
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function SignalLine({ label, meta, active }: { label: string; meta: string; active?: boolean }) {
  return (
    <div
      className={cn("rounded-2xl border p-4", active ? "border-white/20 bg-white/10" : "border-white/10 bg-black/20")}
    >
      <div className="text-sm font-semibold">{label}</div>
      <div className="mt-1 text-xs text-white/60">{meta}</div>
    </div>
  );
}

function RequestTile({ title, sub, status }: { title: string; sub: string; status: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-2xl border border-white/10 bg-black/20 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
          {status}
        </div>
      </div>
      <div className="mt-2 text-xs text-white/60">{sub}</div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-1.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
          initial={{ width: "22%" }}
          whileHover={{ width: "72%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function RingGauge({ value, size = 80 }: { value: number; size?: number }) {
  const v = clamp(value, 0, 100);
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#g)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BRAND.accent} />
            <stop offset="100%" stopColor={BRAND.accent2} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-xs font-semibold">{v}</div>
    </div>
  );
}

function Segmented({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="mt-2 flex gap-1">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={cn(
              "flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition",
              value === o ? "text-black" : "bg-black/20 text-white/75 hover:bg-white/10",
            )}
            style={{
              background: value === o ? `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` : undefined,
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function SignalRow({ label, meta, tone }: { label: string; meta: string; tone: "green" | "amber" | "red" }) {
  const dot = tone === "green" ? "bg-white/70" : tone === "amber" ? "bg-white/55" : "bg-white/45";
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-start gap-3">
        <span className={cn("mt-1.5 h-2 w-2 rounded-full", dot)} />
        <div>
          <div className="text-sm font-semibold">{label}</div>
          <div className="mt-1 text-xs text-white/60">{meta}</div>
        </div>
      </div>
    </div>
  );
}

function ReasonRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/65">{desc}</div>
    </div>
  );
}

function ValueTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-xs text-white/65">{desc}</div>
    </div>
  );
}

/* ----------------------------- BUTTONS ----------------------------------- */

function MagneticButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.08);
    y.set(dy * 0.08);
  }
  function onLeave() {
    animate(x, 0, { duration: 0.35, ease: "easeOut" });
    animate(y, 0, { duration: 0.35, ease: "easeOut" });
  }

  const base =
    "group relative inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition will-change-transform";
  const styles =
    variant === "primary" ? "text-black" : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        x,
        y,
        background: variant === "primary" ? `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` : undefined,
      }}
      className={cn(base, styles)}
    >
      <span className="translate-y-[0.5px]">{children}</span>
      {variant === "primary" && (
        <span
          className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-70"
          style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
        />
      )}
    </motion.a>
  );
}

/* ------------------------------ LAYOUT ----------------------------------- */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ----------------------------- ATMOSPHERE -------------------------------- */

function Atmosphere({
  bgTint,
  bgYSlow,
  bgYMed,
  bgYFast,
}: {
  bgTint: MotionValue<string>;
  bgYSlow: MotionValue<number>;
  bgYMed: MotionValue<number>;
  bgYFast: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[0] overflow-hidden">
      {/* Color temperature shift */}
      <motion.div className="absolute inset-0" style={{ backgroundImage: bgTint }} />

      {/* Aurora wash */}
      <motion.div
        className="absolute -inset-[35%] opacity-55 blur-3xl"
        style={{
          background: `radial-gradient(closest-side, rgba(45,212,191,0.18), transparent 70%),
             radial-gradient(closest-side, rgba(96,165,250,0.14), transparent 70%),
             radial-gradient(closest-side, rgba(255,255,255,0.06), transparent 70%)`,
        }}
        animate={{ rotate: [0, 9, -6, 0], scale: [1, 1.03, 0.98, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Parallax orbs */}
      <motion.div
        style={{ y: bgYSlow }}
        className="absolute left-[-120px] top-[120px] h-[520px] w-[520px] rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: "rgba(45,212,191,0.10)" }} />
      </motion.div>
      <motion.div
        style={{ y: bgYMed }}
        className="absolute right-[-160px] top-[160px] h-[620px] w-[620px] rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: "rgba(96,165,250,0.09)" }} />
      </motion.div>
      <motion.div
        style={{ y: bgYFast }}
        className="absolute left-1/2 top-[760px] h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
      </motion.div>

      {/* Subtle grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        animate={{ opacity: [0.12, 0.18, 0.12] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22 x=%220%22 y=%220%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
        }}
      />
    </div>
  );
}

/* ------------------------------ METRICS ---------------------------------- */

function MetricTileAnimated({
  value,
  suffix,
  label,
  desc,
}: {
  value: number;
  suffix: string;
  label: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-80px", once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.05,
      ease: [0.2, 0.9, 0.2, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-semibold tracking-tight">
        {value === 0 ? "0" : n}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold">{label}</div>
      <div className="mt-2 text-sm text-white/65">{desc}</div>
    </div>
  );
}

/* ------------------------------ UTILS ------------------------------------ */

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "top");

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}

function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return { x, y };
}
