"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
} from "lucide-react";

/**
 * TraceR2C — Enterprise Landing Page (single file)
 * Stack: Next.js + Tailwind + Framer Motion + lucide-react
 *
 * Drop this into: app/page.tsx (or a route page) in a Next.js project with Tailwind + framer-motion installed.
 */

export default function Page() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  const sections = useMemo(
    () => [
      { id: "top", label: "Overview" },
      { id: "why", label: "Why" },
      { id: "platform", label: "Platform" },
      { id: "outcomes", label: "Outcomes" },
      { id: "health", label: "Compliance Health" },
      { id: "trust", label: "Trust" },
    ],
    [],
  );

  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="min-h-screen bg-[#070A12] text-white selection:bg-white/15 selection:text-white">
      {/* Top progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-white/80"
        style={{ scaleX: progress }}
      />

      <AuroraBackground />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 ring-1 ring-white/10" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Sparkles className="h-5 w-5 opacity-90" />
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-wide">TraceR2C</div>
                  <div className="text-xs text-white/60">Compliance Operating System</div>
                </div>
              </div>

              <nav className="hidden items-center gap-1 md:flex">
                {sections.map((s) => (
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
                <a
                  href="#demo"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="relative pt-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                <ShieldCheck className="h-4 w-4" />
                Enterprise-grade compliance management for global supply chains
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl"
              >
                Make compliance{" "}
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  operational, measurable,
                </span>{" "}
                and proactive.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
              >
                TraceR2C transforms compliance from reactive documentation to proactive risk management—giving regulated
                industries real-time visibility, predictive insights, and audit-ready controls across every supplier,
                document, and workflow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#demo"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  See how it works
                  <Workflow className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Trust badges */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <BadgeMini icon={<KeyRound className="h-4 w-4" />} label="SSO / SAML" />
                <BadgeMini icon={<Lock className="h-4 w-4" />} label="RBAC" />
                <BadgeMini icon={<ClipboardCheck className="h-4 w-4" />} label="Audit Logs" />
                <BadgeMini icon={<Server className="h-4 w-4" />} label="Encryption" />
              </div>
            </div>

            {/* Product frame */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
              <div className="relative rounded-[28px] border border-white/10 bg-black/35 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <div className="flex items-center justify-between px-2 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="text-xs text-white/60">TraceR2C / Compliance Health</div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    Live
                  </div>
                </div>

                <div className="grid gap-3 p-2 md:grid-cols-2">
                  <MiniCard title="Compliance Health" subtitle="Real-time posture across suppliers">
                    <HealthMeter compact />
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
          </div>
        </div>

        {/* Divider */}
        <SectionDivider />
      </main>

      {/* WHY */}
      <section id="why" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Compliance is getting harder. Your process shouldn’t.
              </h2>
              <p className="mt-3 text-white/70">
                Regulatory complexity is increasing across industries. Manual collection and fragmented systems create
                blind spots, missed expirations, and audit stress. TraceR2C is built to make compliance a daily
                operating capability—not an end-of-quarter scramble.
              </p>

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
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <FeatureTile
                  icon={<Globe className="h-5 w-5" />}
                  title="Regulatory complexity is rising"
                  desc="Requirements vary by region, industry, and regulation—teams need clarity, not chaos."
                />
                <FeatureTile
                  icon={<Timer className="h-5 w-5" />}
                  title="Manual work creates risk"
                  desc="Chasing suppliers, spreadsheets, and inbox threads is slow—and dangerously fragile."
                />
                <FeatureTile
                  icon={<LineChart className="h-5 w-5" />}
                  title="Real-time compliance health"
                  desc="Know what’s missing, what’s expiring, and what’s trending risky—before it becomes an incident."
                />
                <FeatureTile
                  icon={<FileCheck2 className="h-5 w-5" />}
                  title="Technology should reduce burden"
                  desc="Automate collection, validation, and accountability with audit-ready workflows."
                />
              </div>
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* PLATFORM */}
      <section id="platform" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Workflow className="h-4 w-4" />A unified compliance platform
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                One system to collect, verify, and control compliance across your supply chain.
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Every tile below is part of a single flow—designed to feel like operations, not paperwork.
              </p>
            </div>

            <div className="hidden md:flex">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                See it in action
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <StepCard
              step="01"
              title="Collect"
              desc="Request documents, automate reminders, and centralize supplier intake with accountability."
              bullets={["Smart request templates", "Supplier portal + uploads", "Auto follow-ups + deadlines"]}
              icon={<FileCheck2 className="h-5 w-5" />}
            />
            <StepCard
              step="02"
              title="Verify"
              desc="Review, validate, and approve with structured workflows, permissions, and immutable logs."
              bullets={["Approval workflows", "Expiry tracking", "Audit-ready trails"]}
              icon={<ClipboardCheck className="h-5 w-5" />}
              featured
            />
            <StepCard
              step="03"
              title="Control"
              desc="Turn compliance into risk posture—alerts, health scoring, and reporting for leadership and audits."
              bullets={["Risk signals", "Compliance Health score", "Exportable reporting"]}
              icon={<LineChart className="h-5 w-5" />}
            />
          </div>

          {/* “Docking” narrative strip */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-6">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <div className="text-sm font-semibold">From reactive to proactive</div>
                <p className="mt-2 text-white/70">
                  TraceR2C isn’t just a document repository. It’s an operating system where compliance becomes visible,
                  measurable, and predictable.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Real-time posture</Chip>
                  <Chip>Predictive alerts</Chip>
                  <Chip>Regional controls</Chip>
                  <Chip>Enterprise governance</Chip>
                </div>
              </div>
              <div className="md:col-span-7">
                <TimelineStrip />
              </div>
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Outcomes that leadership understands.
              </h2>
              <p className="mt-3 text-white/70">
                Reduce operational drag, prevent compliance incidents, and walk into audits with calm confidence.
              </p>
            </div>
            <div className="md:col-span-6 md:text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <BadgeCheck className="h-4 w-4" />
                Designed for enterprise credibility
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricTile
              value="↓ 60%"
              label="Less compliance chasing"
              desc="Automated requests + reminders reduce manual follow-ups."
            />
            <MetricTile
              value="↓ 40%"
              label="Faster audit prep"
              desc="Centralized evidence, approvals, and logs—always ready."
            />
            <MetricTile
              value="0"
              label="Expired doc surprises"
              desc="Expiry forecasting and alerts before risk becomes incident."
            />
            <MetricTile
              value="1"
              label="Single source of truth"
              desc="Suppliers, documents, risk—permissioned and measurable."
            />
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* COMPLIANCE HEALTH (interactive wow) */}
      <section id="health" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <LineChart className="h-4 w-4" />
                TraceR2C signature concept
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Compliance Health: measurable posture, not checkbox theater.
              </h2>
              <p className="mt-3 text-white/70">
                Compliance isn’t binary. It’s living operational health—driven by completeness, expiry risk,
                responsiveness, and governance quality.
              </p>

              <div className="mt-6 grid gap-3">
                <ReasonRow title="Documents" desc="Completeness, correctness, and validation." />
                <ReasonRow title="Expiry Risk" desc="Forecasting before gaps happen." />
                <ReasonRow title="Supplier Responsiveness" desc="Accountability signals from real behavior." />
                <ReasonRow title="Audit Readiness" desc="Approvals, trails, controls—all consistent." />
              </div>
            </div>

            <div className="md:col-span-7">
              <ComplianceHealthDemo />
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* TRUST */}
      <section id="trust" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Trust built into every layer.</h2>
              <p className="mt-3 text-white/70">
                Enterprise teams don’t buy promises. They buy governance, security, and reliability—proven in the UI.
              </p>

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
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                <TrustCard
                  icon={<Lock className="h-5 w-5" />}
                  title="Security & Access"
                  items={["SSO/SAML & MFA", "Role-based permissions", "Encryption in transit & at rest"]}
                />
                <TrustCard
                  icon={<ClipboardCheck className="h-5 w-5" />}
                  title="Audit & Governance"
                  items={["Immutable audit trails", "Approval workflows", "Evidence centralized by supplier"]}
                />
                <TrustCard
                  icon={<BellRing className="h-5 w-5" />}
                  title="Operational Reliability"
                  items={["Structured workflows", "Expiry forecasting", "Notifications across teams + suppliers"]}
                />
                <TrustCard
                  icon={<Globe className="h-5 w-5" />}
                  title="Built for Global Complexity"
                  items={["Regional requirements", "Multi-industry templates", "Scales from 50 to 5,000+ suppliers"]}
                />
              </div>

              {/* CTA strip */}
              <div
                id="demo"
                className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-semibold">Ready to operationalize compliance?</div>
                    <div className="mt-1 text-sm text-white/70">
                      Let’s walk through TraceR2C with your workflows, suppliers, and compliance needs.
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                    >
                      Contact sales
                    </a>
                    <a
                      href="#"
                      className="group inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                    >
                      Request a demo
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-white/50">
                Tip: replace demo CTAs with your scheduling link / form (Calendly, HubSpot, or internal).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 ring-1 ring-white/10" />
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

/* ----------------------------- WOW: Health Demo ---------------------------- */

function ComplianceHealthDemo() {
  const [industry, setIndustry] = useState<"Food" | "Pharma" | "Manufacturing">("Food");
  const [region, setRegion] = useState<"US" | "EU" | "Global">("US");
  const [scale, setScale] = useState<"50" | "500" | "5000">("500");

  const score = useMemo(() => {
    // A simple deterministic model that feels "alive"
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
      <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
      <div className="relative rounded-[28px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold">Interactive Demo</div>
            <div className="mt-1 text-xs text-white/60">
              Toggle context and watch compliance posture respond (like the real platform).
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

/* ------------------------------- UI pieces -------------------------------- */

function AuroraBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Soft gradient blobs */}
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-48 top-24 h-[560px] w-[560px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-1/2 top-[520px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22 x=%220%22 y=%220%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]" />
      </div>
    </>
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

function FeatureTile({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 p-5"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-white/10 to-transparent" />
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
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={["relative rounded-3xl border bg-white/5 p-6", featured ? "border-white/20" : "border-white/10"].join(
        " ",
      )}
    >
      {featured && (
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-60 blur-xl" />
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
    <div className="relative rounded-3xl border border-white/10 bg-black/25 p-5">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/8 to-transparent opacity-70" />
      <div className="relative">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Request</span>
          <span>Collect</span>
          <span>Verify</span>
          <span>Control</span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="opacity-90">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-xs text-white/65">{desc}</div>
    </div>
  );
}

function MetricTile({ value, label, desc }: { value: string; label: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-2 text-sm font-semibold">{label}</div>
      <div className="mt-2 text-sm text-white/65">{desc}</div>
    </div>
  );
}

function TrustCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">{children}</span>
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
          {status}
        </div>
      </div>
      <div className="mt-2 text-xs text-white/60">{sub}</div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
        <div className="h-1.5 w-2/3 rounded-full bg-white/35" />
      </div>
    </div>
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
              value === o ? "bg-white text-black" : "bg-black/20 text-white/75 hover:bg-white/10",
            ].join(" ")}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function HealthMeter({ value = 86, compact }: { value?: number; compact?: boolean }) {
  const v = clamp(value, 0, 100);
  const barW = `${v}%`;

  // Segment labels are subtle; enterprise look.
  return (
    <div className={compact ? "" : ""}>
      <div className="flex items-center justify-between text-[11px] text-white/55">
        <span>At risk</span>
        <span>Watch</span>
        <span>Healthy</span>
      </div>
      <div className="mt-2 h-3 w-full rounded-full bg-white/10">
        <motion.div
          className="h-3 rounded-full bg-white/55"
          initial={{ width: "0%" }}
          animate={{ width: barW }}
          transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
        />
      </div>
      {!compact && (
        <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-white/55">
          <span>Missing evidence</span>
          <span>Expiry soon</span>
          <span>Verified controls</span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------- Utilities -------------------------------- */

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
      { root: null, threshold: [0.25, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
