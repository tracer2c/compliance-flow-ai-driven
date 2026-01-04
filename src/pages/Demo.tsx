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
  ShieldCheck,
  Lock,
  ClipboardCheck,
  LineChart,
  Globe,
  Sparkles,
  BellRing,
  Users,
  BadgeCheck,
  Workflow,
  FileCheck2,
  Timer,
  Server,
  KeyRound,
  ChevronDown,
} from "lucide-react";

/**
 * TraceR2C — Ultra-premium enterprise landing page
 * Next.js + Tailwind + Framer Motion + lucide-react
 *
 * Dependencies:
 *   npm i framer-motion lucide-react
 */

const BRAND = {
  accent: "#2DD4BF", // teal/cyan (enterprise-modern)
  accent2: "#60A5FA", // soft azure
  base: "#070A12", // near-black navy
  panel: "#0B1220", // deep panel navy
};

type PillMode = "SSO" | "RBAC" | "AUDIT" | "ENCRYPT";

export default function Page() {
  // Smooth anchor scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 35, mass: 0.1 });

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

  // Background scene: color shifts across scroll
  const hueShift = useTransform(scrollYProgress, [0, 0.32, 0.62, 1], [0, 0.45, 0.8, 1]);
  const bgTint = useTransform(hueShift, (t) => {
    // blend: teal → azure → deep navy → teal
    if (t < 0.45) return `radial-gradient(900px 600px at 30% 20%, rgba(45,212,191,0.20), transparent 55%)`;
    if (t < 0.8) return `radial-gradient(900px 600px at 65% 18%, rgba(96,165,250,0.18), transparent 55%)`;
    return `radial-gradient(900px 600px at 40% 20%, rgba(45,212,191,0.18), transparent 55%)`;
  });

  // Parallax layers
  const bgY1 = useTransform(scrollY, [0, 2400], [0, 120]);
  const bgY2 = useTransform(scrollY, [0, 2400], [0, -160]);
  const bgY3 = useTransform(scrollY, [0, 2400], [0, 220]);

  // Cursor glow only "strong" near hero area; soften globally
  const { x, y } = useMousePosition();
  const glowX = useTransform(x, (v) => `${v}px`);
  const glowY = useTransform(y, (v) => `${v}px`);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.18, 0.35, 1], [0.26, 0.22, 0.12, 0.08]);

  // Scroll velocity based float (luxury)
  const vel = useVelocity(scrollY);
  const velSpring = useSpring(vel, { stiffness: 200, damping: 35, mass: 0.1 });
  const float = useTransform(velSpring, [-1600, 1600], [10, -10]);

  // Hero mode controls right product preview
  const [pillMode, setPillMode] = useState<"SSO" | "RBAC" | "AUDIT" | "ENCRYPT">("SSO");

  return (
    <div
      className="min-h-screen text-white selection:bg-white/15 selection:text-white"
      style={{
        background: BRAND.base,
      }}
    >
      {/* Top progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[80] h-[2px] w-full origin-left"
        style={{
          scaleX: progress,
          background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})`,
        }}
      />

      {/* Full-page cinematic atmosphere */}
      <Atmosphere bgTint={bgTint} bgY1={bgY1} bgY2={bgY2} bgY3={bgY3} />

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
      <header className="fixed inset-x-0 top-0 z-[70]">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 rounded-2xl border border-white/10 bg-black/40"
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
              <a href="#top" className="group flex items-center gap-3">
                <div className="relative">
                  <div
                    className="h-9 w-9 rounded-xl ring-1 ring-white/10"
                    style={{
                      background: `linear-gradient(135deg, rgba(45,212,191,0.25), rgba(96,165,250,0.12))`,
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
                    className={[
                      "rounded-xl px-3 py-2 text-sm transition",
                      active === s.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
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

      {/* Hero */}
      <main id="top" className="relative z-[2] pt-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
            <div className="relative">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
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

                <p className="mt-3 text-sm text-white/65">
                  Trusted by regulated teams managing 50–5,000+ suppliers across food, pharma, and manufacturing.
                </p>
              </Reveal>

              {/* Hero metrics strip */}
              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-white/80" />
                    <span className="text-white/75">99.9% document coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-white/80" />
                    <span className="text-white/75">60% fewer late expirations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-white/80" />
                    <span className="text-white/75">Audit prep in days, not weeks</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
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
                    icon={<Server className="h-4 w-4" />}
                    label="Encryption"
                    active={pillMode === "ENCRYPT"}
                    onHover={() => setPillMode("ENCRYPT")}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.25}>
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

            {/* Product showcase: "powers on" + reactive to hero pills */}
            <motion.div style={{ y: float }}>
              <Reveal delay={0.06}>
                <ProductShowcase mode={pillMode} />
              </Reveal>
            </motion.div>
          </div>
        </div>

        <SectionDivider />
      </main>

      {/* WHY - Uncomfortable truths */}
      <section id="why" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Compliance doesn't break during audits.
                </h2>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="mt-4 text-lg leading-relaxed text-white/75">
                  It breaks months earlier—when evidence expires quietly, suppliers stall, and no one owns the
                  follow-up.
                </p>

                <p className="mt-4 text-white/70">
                  Regulatory complexity is increasing. Manual collection and fragmented systems create blind spots,
                  missed expirations, and audit stress. TraceR2C makes compliance a daily operating capability—not an
                  end-of-quarter scramble.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
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
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <TiltCard>
                  <FeatureTile
                    icon={<Globe className="h-5 w-5" />}
                    title="Regulatory complexity is rising"
                    desc="Requirements vary by region, industry, and regulation—teams need clarity, not chaos."
                  />
                </TiltCard>
                <TiltCard>
                  <FeatureTile
                    icon={<Timer className="h-5 w-5" />}
                    title="Manual work creates risk"
                    desc="Chasing suppliers, spreadsheets, and inbox threads is slow—and dangerously fragile."
                  />
                </TiltCard>
                <TiltCard>
                  <FeatureTile
                    icon={<LineChart className="h-5 w-5" />}
                    title="Real-time compliance health"
                    desc="Know what’s missing, what’s expiring, and what’s trending risky—before it becomes an incident."
                  />
                </TiltCard>
                <TiltCard>
                  <FeatureTile
                    icon={<FileCheck2 className="h-5 w-5" />}
                    title="Technology should reduce burden"
                    desc="Automate collection, validation, and accountability with audit-ready workflows."
                  />
                </TiltCard>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* PLATFORM - The system spine */}
      <section id="platform" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Workflow className="h-4 w-4" />
                  How TraceR2C operates compliance
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
                  Requests become obligations. Approvals become evidence. Evidence becomes posture.
                </h2>
                <p className="mt-3 max-w-2xl text-white/72">
                  This is how the system thinks. Three stages that transform compliance from reactive documentation to
                  proactive risk management.
                </p>
              </div>

              <div className="hidden md:flex">
                <MagneticButton href="#demo" variant="secondary">
                  See it in action <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-12">
            {/* Sticky story panel */}
            <div className="md:col-span-5">
              <StickyStory />
            </div>

            {/* Steps */}
            <div className="md:col-span-7 space-y-4">
              <Reveal>
                <StepCard
                  step="01"
                  title="Collect"
                  desc="Request documents, automate reminders, and centralize supplier intake with accountability."
                  bullets={["Smart request templates", "Supplier portal + uploads", "Auto follow-ups + deadlines"]}
                  icon={<FileCheck2 className="h-5 w-5" />}
                />
              </Reveal>

              <Reveal delay={0.05}>
                <StepCard
                  step="02"
                  title="Verify"
                  desc="Review, validate, and approve with structured workflows, permissions, and immutable logs."
                  bullets={["Approval workflows", "Expiry tracking", "Audit-ready trails"]}
                  icon={<ClipboardCheck className="h-5 w-5" />}
                  featured
                />
              </Reveal>

              <Reveal delay={0.1}>
                <StepCard
                  step="03"
                  title="Control"
                  desc="Turn compliance into risk posture—alerts, health scoring, and reporting for leadership and audits."
                  bullets={["Risk signals", "Compliance Health score", "Exportable reporting"]}
                  icon={<LineChart className="h-5 w-5" />}
                />
              </Reveal>

              <Reveal delay={0.12}>
                <TimelineStrip />
              </Reveal>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* OUTCOMES (count-up metrics) */}
      <section id="outcomes" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Outcomes that leadership understands.
                </h2>
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

      {/* LEADERSHIP - Executive section */}
      <section id="leadership" className="relative z-[2]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <LineChart className="h-4 w-4" />
                  For leadership & audit owners
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
                  See posture, not documents. Forecast risk before incidents.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 text-white/72">
                  Walk into audits with confidence. Turn compliance into measurable operational health that leadership
                  can track and audit teams can verify.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-6 space-y-3">
                  <LeadershipBenefit
                    title="Posture visibility"
                    desc="Real-time compliance health across your entire supply chain—not scattered documents."
                  />
                  <LeadershipBenefit
                    title="Risk forecasting"
                    desc="Predict expiry gaps and supplier delays before they become audit findings."
                  />
                  <LeadershipBenefit
                    title="Audit confidence"
                    desc="Evidence centralized, approvals linked, trails immutable—always ready for inspection."
                  />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <LeadershipPreview />
              </Reveal>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* HEALTH (interactive + motion-rich) */}
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
                  Compliance is not binary. It's a posture.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-white/75">
                  Measured by completeness, expiry risk, responsiveness, and governance quality—not checkbox theater.
                </p>

                <p className="mt-3 text-white/70">
                  Compliance isn't binary. It's living operational health—driven by how well your evidence stays
                  current, how quickly suppliers respond, and how consistently controls are enforced.
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
                <ComplianceHealthDemo />
              </Reveal>
            </div>
          </div>
        </div>

        <SectionDivider />
      </section>

      {/* TRUST + CTA */}
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
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
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
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              {/* Large Security & Governance card */}
              <Reveal>
                <SecurityGovernanceCard />
              </Reveal>

              {/* Two smaller cards below */}
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Reveal delay={0.05}>
                  <TrustCard
                    icon={<BellRing className="h-5 w-5" />}
                    title="Operational Reliability"
                    items={["Structured workflows", "Expiry forecasting", "Notifications across teams + suppliers"]}
                  />
                </Reveal>
                <Reveal delay={0.08}>
                  <TrustCard
                    icon={<Globe className="h-5 w-5" />}
                    title="Built for Global Complexity"
                    items={["Regional requirements", "Multi-industry templates", "Scales from 50 to 5,000+ suppliers"]}
                  />
                </Reveal>
              </div>

              {/* CTA strip */}
              <div id="demo" className="mt-6">
                <Reveal>
                  <CTASection />
                </Reveal>
              </div>

              <div className="mt-4 text-xs text-white/50">
                Tip: wire “Request a demo” to Calendly/HubSpot or your internal lead form.
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

/* ----------------------------- Atmosphere -------------------------------- */

function Atmosphere({ bgTint, bgY1, bgY2, bgY3 }: { bgTint?: any; bgY1: any; bgY2: any; bgY3: any }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[0] overflow-hidden">
      {/* Color temperature shift */}
      {bgTint && <motion.div className="absolute inset-0" style={{ backgroundImage: bgTint }} />}

      {/* Aurora wash - optimized */}
      <motion.div
        className="absolute -inset-[35%] opacity-55 blur-2xl"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          background: `radial-gradient(closest-side, rgba(45,212,191,0.18), transparent 70%),
             radial-gradient(closest-side, rgba(96,165,250,0.14), transparent 70%),
             radial-gradient(closest-side, rgba(255,255,255,0.06), transparent 70%)`,
        }}
        animate={{ rotate: [0, 9, -6, 0], scale: [1, 1.03, 0.98, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Parallax orbs - optimized blur */}
      <motion.div
        style={{
          y: bgY1,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="absolute left-[-120px] top-[120px] h-[520px] w-[520px] rounded-full blur-2xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "rgba(45,212,191,0.12)" }} />
      </motion.div>

      <motion.div
        style={{
          y: bgY2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="absolute right-[-160px] top-[160px] h-[620px] w-[620px] rounded-full blur-2xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "rgba(96,165,250,0.10)" }} />
      </motion.div>

      <motion.div
        style={{
          y: bgY3,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="absolute left-1/2 top-[720px] h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-2xl"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
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

/* --------------------------------- HERO --------------------------------- */

function MaskHeadline() {
  // Mask-reveal headline (feels expensive)
  return (
    <div className="relative">
      <motion.h1
        className="text-4xl font-semibold tracking-tight md:text-6xl"
        style={{ willChange: "clip-path" }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
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
      style={{ willChange: "transform" }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
  // Product "powers on" + mode highlights driven by hero pills
  return (
    <motion.div
      className="relative"
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Glow - optimized */}
      <motion.div
        className="absolute -inset-6 rounded-[28px] blur-xl"
        style={{
          willChange: "opacity",
          background: `linear-gradient(135deg, rgba(45,212,191,0.20), rgba(96,165,250,0.12), transparent)`,
        }}
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
      />

      {/* Frame - removed  for performance */}
      <div className="relative rounded-[28px] border border-white/10 bg-black/40 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_120px_rgba(0,0,0,0.55)]">
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

/* ----------------------------- Hero frame -------------------------------- */

function ParallaxFrame() {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-40, 40], [8, -8]);
  const rotateY = useTransform(mx, [-40, 40], [-10, 10]);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(x / 10);
    my.set(y / 10);
  }
  function onLeave() {
    animate(mx, 0, { duration: 0.4, ease: "easeOut" });
    animate(my, 0, { duration: 0.4, ease: "easeOut" });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <div
        className="absolute -inset-6 rounded-[28px] blur-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.20), rgba(96,165,250,0.12), transparent)`,
        }}
      />

      <motion.div
        className="relative rounded-[28px] border border-white/10 bg-black/40 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_110px_rgba(0,0,0,0.55)] "
        style={{ rotateX, rotateY, willChange: "transform" }}
      >
        {/* Animated gradient edge */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-70"
          style={{
            background: `conic-gradient(from 180deg, rgba(45,212,191,0.55), rgba(96,165,250,0.40), rgba(255,255,255,0.08), rgba(45,212,191,0.55))`,
            maskImage: "linear-gradient(#000, #000)",
            WebkitMaskImage: "linear-gradient(#000, #000)",
            filter: "blur(8px)",
          }}
        />

        <div className="relative">
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="text-xs text-white/60">TraceR2C / Compliance Health</div>
            <motion.div
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              Live
            </motion.div>
          </div>

          <div className="grid gap-3 p-2 md:grid-cols-2">
            <MiniCard title="Compliance Health" subtitle="Real-time posture across suppliers">
              <HealthMeter value={88} />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <Pill label="Docs" value="93%" />
                <Pill label="Expiry Risk" value="Low" />
                <Pill label="Open Requests" value="12" />
              </div>
            </MiniCard>

            <MiniCard title="Risk Signals" subtitle="Predictive alerts before issues">
              <div className="space-y-2">
                <SignalRow label="Supplier: Havenview Mill" meta="Document expiry in 14 days" tone="amber" />
                <SignalRow label="Supplier: Debel Foods" meta="Missing COA for batch #8891" tone="red" />
                <SignalRow label="Supplier: CHPS" meta="Certificate verified • Audit ready" tone="green" />
              </div>
            </MiniCard>

            <MiniCard title="Requests" subtitle="Automated follow-ups + accountability" span2>
              <div className="grid gap-2 md:grid-cols-3">
                <RequestTile title="COA" sub="Due in 2d" status="Pending" />
                <RequestTile title="HACCP" sub="Due in 7d" status="In Review" />
                <RequestTile title="ISO Cert" sub="Verified" status="Approved" />
              </div>
            </MiniCard>
          </div>
        </div>
      </motion.div>

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

/* ----------------------------- Sticky Story ------------------------------ */

function StickyStory() {
  const items = [
    {
      k: "Collect",
      d: "Requests become obligations. Automated requests + supplier uploads + deadlines.",
      system: "Requests become obligations",
    },
    {
      k: "Verify",
      d: "Approvals become evidence. Structured approvals, validation, audit trails.",
      system: "Approvals become evidence",
    },
    {
      k: "Control",
      d: "Evidence becomes posture. Health scoring, forecasting, alerts, reporting.",
      system: "Evidence becomes posture",
    },
  ];

  return (
    <div className="md:sticky md:top-28">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold">The story (in one flow)</div>
        <div className="mt-2 text-sm text-white/65">
          Instead of scattered emails and spreadsheets, TraceR2C makes compliance a measurable system that runs daily.
        </div>

        <div className="mt-6 space-y-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="text-sm font-semibold">{it.k}</div>
                  <div className="mt-1 text-xs font-medium text-white/80">{it.system}</div>
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
                  initial={{ width: "12%" }}
                  whileInView={{ width: idx === 0 ? "38%" : idx === 1 ? "68%" : "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
          <span className="font-semibold text-white">Enterprise feel:</span> consistent patterns, predictable UI, and
          measurable posture at every step.
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- CTA Section ------------------------------ */

function CTASection() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold">See TraceR2C with your workflows, suppliers, and regions.</div>
          <div className="mt-1 text-sm text-white/70">
            We'll walk through the platform and show how it maps to your compliance requirements.
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

/* ----------------------------- WOW: Health Demo -------------------------- */

function ComplianceHealthDemo() {
  const [industry, setIndustry] = useState<"Food" | "Pharma" | "Manufacturing">("Food");
  const [region, setRegion] = useState<"US" | "EU" | "Global">("US");
  const [scale, setScale] = useState<"50" | "500" | "5000">("500");

  const score = useMemo(() => {
    const base = industry === "Pharma" ? 78 : industry === "Manufacturing" ? 82 : 86;
    const reg = region === "EU" ? -6 : region === "Global" ? -9 : 0;
    const sc = scale === "50" ? +6 : scale === "5000" ? -7 : 0;
    return clamp(base + reg + sc, 0, 100);
  }, [industry, region, scale]);

  const expiryRisk = useMemo(() => {
    const r = 100 - score;
    if (r >= 35) return { label: "Elevated", tone: "red" as const };
    if (r >= 20) return { label: "Moderate", tone: "amber" as const };
    return { label: "Low", tone: "green" as const };
  }, [score]);

  const openRequests = useMemo(() => {
    const base = scale === "50" ? 6 : scale === "500" ? 18 : 42;
    const bump = region === "Global" ? 10 : region === "EU" ? 6 : 0;
    return base + bump + (industry === "Pharma" ? 8 : 0);
  }, [industry, region, scale]);

  const responsiveness = useMemo(() => {
    const x = score - (industry === "Pharma" ? 6 : 0);
    return clamp(Math.round(x * 0.95), 0, 100);
  }, [score, industry]);

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-[28px] blur-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.18), rgba(96,165,250,0.10), transparent)`,
        }}
      />

      <div className="relative rounded-[28px] border border-white/10 bg-black/40 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold">Interactive Demo</div>
            <div className="mt-1 text-xs font-medium text-white/80">
              This is not a dashboard. It's a live risk model.
            </div>
            <div className="mt-1 text-xs text-white/60">Toggle context and watch compliance posture respond.</div>
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
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Compliance Health</div>
                  <div className="text-xs text-white/60">A measurable posture across your supply chain</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  Score: <span className="font-semibold text-white">{score}</span>/100
                </div>
              </div>

              <div className="mt-4">
                <HealthMeter value={score} />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <Pill label="Expiry Risk" value={expiryRisk.label} tone={expiryRisk.tone} />
                <Pill label="Open Requests" value={`${openRequests}`} />
                <Pill label="Responsiveness" value={`${responsiveness}%`} />
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-white/70">
                <span className="font-semibold text-white">What changed?</span>{" "}
                {region === "Global"
                  ? "Global complexity increases variance and risk signals."
                  : region === "EU"
                    ? "EU requirements add stricter evidence and expiry control."
                    : "US posture is stable with consistent workflow controls."}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Live Signals</div>
              <div className="mt-1 text-xs text-white/60">Proactive alerts, before gaps become incidents</div>

              <div className="mt-4 space-y-2">
                <SignalRow
                  label={industry === "Pharma" ? "Validation required: GMP evidence" : "Supplier questionnaire pending"}
                  meta={expiryRisk.tone === "red" ? "High priority • due in 48h" : "Due soon • auto reminder scheduled"}
                  tone={expiryRisk.tone === "red" ? "red" : "amber"}
                />
                <SignalRow
                  label="Expiry forecast updated"
                  meta={expiryRisk.tone === "green" ? "Low risk • stable posture" : "Moderate risk • watchlist enabled"}
                  tone={expiryRisk.tone === "green" ? "green" : "amber"}
                />
                <SignalRow
                  label="Audit trail consistency"
                  meta="Approvals + evidence linked per supplier"
                  tone="green"
                />
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
      </div>
    </div>
  );
}

/* ------------------------------ Core UI ---------------------------------- */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-30, 30], [7, -7]);
  const rotateY = useTransform(mx, [-30, 30], [-9, 9]);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(x / 12);
    my.set(y / 12);
  }
  function onLeave() {
    animate(mx, 0, { duration: 0.35, ease: "easeOut" });
    animate(my, 0, { duration: 0.35, ease: "easeOut" });
  }

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: 900 }}>
      <motion.div style={{ rotateX, rotateY }} className="will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  );
}

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
    "group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition will-change-transform";
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
      className={[base, styles].join(" ")}
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

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function BadgeMini({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 transition hover:bg-white/8">
      <span className="opacity-90">{icon}</span>
      <span>{label}</span>
    </div>
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
      className={cn(
        "rounded-2xl border p-4 mb-2",
        active ? "border-white/20 bg-white/10" : "border-white/10 bg-black/20",
      )}
    >
      <div className="text-sm font-semibold">{label}</div>
      <div className="mt-1 text-xs text-white/60">{meta}</div>
    </div>
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

function FeatureTile({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      style={{ willChange: "transform" }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 p-5"
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, rgba(45,212,191,0.14), rgba(96,165,250,0.08), transparent)`,
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">{icon}</div>
          <div className="text-sm font-semibold">{title}</div>
        </div>
        <div className="mt-3 text-sm leading-relaxed text-white/70">{desc}</div>
      </div>
    </motion.div>
  );
}

function StepCard({
  step,
  title,
  desc,
  bullets,
  icon,
  featured,
}: {
  step: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <motion.div
      style={{ willChange: "transform" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={[
        "relative overflow-hidden rounded-3xl border bg-white/5 p-6",
        featured ? "border-white/20" : "border-white/10",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />
      {featured && (
        <motion.div
          className="absolute -inset-px rounded-3xl opacity-70 blur-xl"
          style={{
            background: `linear-gradient(135deg, rgba(45,212,191,0.22), rgba(96,165,250,0.10), transparent)`,
          }}
          animate={{ opacity: [0.45, 0.75, 0.45] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
        />
      )}

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/60">Step {step}</div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">{icon}</div>
        </div>

        <div className="mt-4 text-lg font-semibold">{title}</div>
        <div className="mt-2 text-sm text-white/70">{desc}</div>

        <div className="mt-5 space-y-2">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {featured && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <ShieldCheck className="h-4 w-4" />
            Recommended enterprise workflow
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TimelineStrip() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-black/25 p-5 overflow-hidden">
      <motion.div
        className="absolute -inset-[40%] opacity-40 blur-2xl"
        style={{
          willChange: "transform",
          background: `radial-gradient(circle, rgba(45,212,191,0.18), transparent 60%)`,
        }}
        animate={{ x: ["-10%", "10%", "-10%"], y: ["0%", "8%", "0%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Request</span>
          <span>Collect</span>
          <span>Verify</span>
          <span>Control</span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-2 rounded-full"
            style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
            initial={{ width: "0%" }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.9, 0.2, 1] }}
          />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <StripCard title="Templates" desc="Standardize what you ask for." icon={<FileCheck2 className="h-4 w-4" />} />
          <StripCard title="Supplier Portal" desc="Uploads + deadlines." icon={<Users className="h-4 w-4" />} />
          <StripCard
            title="Approvals"
            desc="Permissions + audit trails."
            icon={<ClipboardCheck className="h-4 w-4" />}
          />
          <StripCard title="Health + Alerts" desc="Posture and forecasting." icon={<LineChart className="h-4 w-4" />} />
        </div>
      </div>
    </div>
  );
}

function StripCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <motion.div
      style={{ willChange: "transform" }}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4"
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="opacity-90">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-xs text-white/65">{desc}</div>
    </motion.div>
  );
}

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
  const { ref, inView } = useInViewOnce();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
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

function SecurityGovernanceCard() {
  const [open, setOpen] = useState<"SSO" | "AUDIT" | "RBAC" | "ENCRYPT" | null>("SSO");
  const items = [
    {
      k: "SSO",
      title: "SSO/SAML & MFA",
      desc: "Enterprise authentication patterns that reduce onboarding friction and enforce access policy.",
    },
    {
      k: "AUDIT",
      title: "Immutable audit trails",
      desc: "Approvals, changes, and evidence linked with traceability for audits.",
    },
    {
      k: "RBAC",
      title: "Role-based permissions",
      desc: "Granular role controls that protect supplier data and enforce governance.",
    },
    {
      k: "ENCRYPT",
      title: "Encryption in transit & at rest",
      desc: "Data protection with industry-standard encryption protocols.",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">
          <Lock className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold">Security & Governance</div>
          <div className="text-xs text-white/60">Enterprise-grade controls and certifications</div>
        </div>
      </div>

      {/* Proof row */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["SSO/SAML Ready", "Immutable audit trails", "Role-based access", "Data residency support"].map((it) => (
          <div key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
            {it}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {items.map((r) => (
          <button
            key={r.k}
            onClick={() => setOpen(open === r.k ? null : (r.k as any))}
            className={cn(
              "w-full rounded-2xl border p-4 text-left transition",
              open === r.k ? "border-white/20 bg-white/10" : "border-white/10 bg-black/20 hover:bg-white/6",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
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

function TrustCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
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

function ValueTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-xs text-white/65">{desc}</div>
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

function LeadershipBenefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function LeadershipPreview() {
  return (
    <div className="relative rounded-[28px] border border-white/10 bg-black/35 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-semibold">Executive Report View</div>
          <div className="text-xs text-white/60">Board-ready compliance posture</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">Exportable</div>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 bg-black/25 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold">Overall Compliance Health</div>
            <div className="text-lg font-semibold">86/100</div>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-2 rounded-full"
              style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
              initial={{ width: "0%" }}
              whileInView={{ width: "86%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
            <div>
              <div className="text-white/60">Suppliers</div>
              <div className="font-semibold text-white">523</div>
            </div>
            <div>
              <div className="text-white/60">At Risk</div>
              <div className="font-semibold text-white">12</div>
            </div>
            <div>
              <div className="text-white/60">Expiring</div>
              <div className="font-semibold text-white">28</div>
            </div>
            <div>
              <div className="text-white/60">Verified</div>
              <div className="font-semibold text-white">483</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/25 p-4">
          <div className="text-sm font-semibold mb-3">Trend (30 days)</div>
          <div className="h-20 w-full flex items-end gap-1">
            {[72, 75, 78, 82, 84, 86, 88, 86, 86, 86].map((val, idx) => (
              <motion.div
                key={idx}
                className="flex-1 bg-white/20 rounded-t"
                initial={{ height: "0%" }}
                whileInView={{ height: `${val}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/25 p-4">
          <div className="text-xs font-semibold text-white/80 mb-2">Top Risk Areas</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70">Pharmaceutical suppliers</span>
              <span className="font-semibold text-white">Elevated</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70">EU regional requirements</span>
              <span className="font-semibold text-white">Moderate</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70">Manufacturing certifications</span>
              <span className="font-semibold text-white">Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({
  title,
  subtitle,
  children,
  span2,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  span2?: boolean;
}) {
  return (
    <div className={["rounded-2xl border border-white/10 bg-white/5 p-4", span2 ? "md:col-span-2" : ""].join(" ")}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-white/60">{subtitle}</div>
        </div>
        <div className="h-8 w-8 rounded-xl border border-white/10 bg-black/20" />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Pill({ label, value, tone }: { label: string; value: string; tone?: "green" | "amber" | "red" }) {
  const toneClass =
    tone === "green"
      ? "border-white/10 bg-white/5"
      : tone === "amber"
        ? "border-white/15 bg-white/8"
        : tone === "red"
          ? "border-white/20 bg-white/10"
          : "border-white/10 bg-white/5";

  return (
    <div className={["rounded-xl border p-3", toneClass].join(" ")}>
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function RequestTile({ title, sub, status }: { title: string; sub: string; status: string }) {
  return (
    <motion.div
      style={{ willChange: "transform" }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
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

function SignalRow({ label, meta, tone }: { label: string; meta: string; tone: "green" | "amber" | "red" }) {
  const dot = tone === "green" ? "bg-white/70" : tone === "amber" ? "bg-white/55" : "bg-white/45";
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-start gap-3">
        <span className={["mt-1.5 h-2 w-2 rounded-full", dot].join(" ")} />
        <div>
          <div className="text-sm font-semibold">{label}</div>
          <div className="mt-1 text-xs text-white/60">{meta}</div>
        </div>
      </div>
    </div>
  );
}

function FailureSignal({ label, meta, tone }: { label: string; meta: string; tone: "green" | "amber" | "red" }) {
  const dot = tone === "green" ? "bg-white/70" : tone === "amber" ? "bg-white/55" : "bg-white/45";
  return (
    <div className="rounded-xl border border-white/10 bg-black/25 p-4">
      <div className="flex items-start gap-3">
        <span className={cn("mt-1.5 h-2 w-2 rounded-full", dot)} />
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">{label}</div>
          <div className="mt-1 text-xs text-white/65">{meta}</div>
        </div>
      </div>
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
            className={[
              "flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition",
              value === o ? "text-black" : "bg-black/20 text-white/75 hover:bg-white/10",
            ].join(" ")}
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

function HealthMeter({ value = 86 }: { value?: number }) {
  const v = clamp(value, 0, 100);
  const barW = `${v}%`;

  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-white/55">
        <span>At risk</span>
        <span>Watch</span>
        <span>Healthy</span>
      </div>
      <div className="mt-2 h-3 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-3 rounded-full"
          style={{ background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.accent2})` }}
          initial={{ width: "0%" }}
          whileInView={{ width: barW }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
        />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-white/55">
        <span>Missing evidence</span>
        <span>Expiry soon</span>
        <span>Verified controls</span>
      </div>
    </div>
  );
}

/* ------------------------------ Utils ------------------------------------ */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
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

function useInViewOnce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}
