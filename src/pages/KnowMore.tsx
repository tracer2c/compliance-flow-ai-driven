import React, { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  FileText,
  BarChart3,
  Building2,
  Bot,
  Zap,
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Network,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ComplianceFlowPresentation (Polished)
 * Goals delivered:
 * - Consistent typography scale and spacing across slides
 * - Professional layout with a slide frame that never exceeds the page container
 * - Smooth, tasteful animations (PowerPoint-like) within slides
 * - Safe content bounds (16:9 stage inside the viewport with padding), internal scrolling when needed
 * - Matching text styles across all slides
 */

const TYPO = {
  h1: "text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white",
  h2: "text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white",
  h3: "text-2xl lg:text-3xl font-bold text-white",
  h4: "text-xl lg:text-2xl font-semibold text-white",
  lead: "text-base lg:text-lg text-slate-200/95",
  body: "text-sm lg:text-base text-slate-300",
  small: "text-xs text-slate-400",
};

const SlideFrame = ({ gradient, children }) => (
  <div className="relative w-full h-dvh bg-slate-950">
    {/* Soft ambient background tied to slide theme */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-15 pointer-events-none`} />
    <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.08),transparent)]" />

    {/* Stage: enforced container w/ 16:9 area and safe padding */}
    <div className="relative z-10 h-full w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
      <div className="mx-auto h-full max-w-7xl">
        <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
          {/* 16:9 stage that never exceeds container; inner scrolling for long content */}
          <div className="relative h-full w-full p-4 sm:p-6 lg:p-10 flex items-center justify-center">
            <div className="h-full w-full max-w-6xl">
              <div className="h-full w-full overflow-y-auto overscroll-contain pr-1">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const slideSwitch = {
  initial: (dir) => ({ opacity: 0, x: dir === "forward" ? 40 : -40, scale: 0.98 }),
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir === "forward" ? -40 : 40, scale: 0.98 }),
};

const bullets = (items, color) => (
  <ul className="mt-3 space-y-2">
    {items.map((t, i) => (
      <motion.li
        key={i}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.08 * i, duration: 0.5 }}
        className={`${TYPO.body} flex items-start gap-2`}
      >
        <span className={`mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r ${color}`} />
        <span className="text-balance">{t}</span>
      </motion.li>
    ))}
  </ul>
);

const slides = [
  {
    id: "intro",
    title: "traceR2C",
    subtitle: "Compliance Flow",
    type: "intro",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
  },
  { id: "overview", title: "What is Compliance Flow?", type: "overview", gradient: "from-cyan-500 to-blue-600" },
  {
    id: "buyer-features",
    title: "Buyer Features",
    type: "features",
    side: "buyer",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "supplier-features",
    title: "Supplier Features",
    type: "features",
    side: "supplier",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "buyer-supplier-flow",
    title: "Buyer ↔ Supplier Flow",
    type: "flow",
    gradient: "from-violet-600 to-purple-700",
  },
  { id: "ai-compass", title: "Compliance Compass AI", type: "ai-overview", gradient: "from-indigo-600 to-blue-700" },
  { id: "ai-agents", title: "AI Agent Workflows", type: "ai-agents", gradient: "from-pink-600 to-rose-700" },
  { id: "data-flows", title: "Key Data Flows", type: "data-flows", gradient: "from-teal-600 to-cyan-700" },
  {
    id: "finale",
    title: "Transform Your Compliance",
    type: "finale",
    gradient: "from-purple-600 via-pink-600 to-red-600",
  },
];

export default function ComplianceFlowPresentation() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState("forward");

  const go = (next) => {
    if (next === idx) return;
    setDir(next > idx ? "forward" : "backward");
    setIdx(next);
  };

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight") go(Math.min(idx + 1, slides.length - 1));
      if (e.key === "ArrowLeft") go(Math.max(idx - 1, 0));
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [idx]);

  const slide = slides[idx];

  return (
    <SlideFrame gradient={slide.gradient}>
      {/* Slide Switcher */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={slide.id}
          custom={dir}
          variants={slideSwitch}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          {/* Per-slide content */}
          {slide.type === "intro" && <IntroSlide />}
          {slide.type === "overview" && <OverviewSlide />}
          {slide.type === "features" && <FeaturesSlide side={slide.side} />}
          {slide.type === "flow" && <FlowSlide />}
          {slide.type === "ai-overview" && <AIOverviewSlide />}
          {slide.type === "ai-agents" && <AIAgentsSlide />}
          {slide.type === "data-flows" && <DataFlowsSlide />}
          {slide.type === "finale" && <FinaleSlide />}
        </motion.div>
      </AnimatePresence>

      {/* Nav overlay (kept inside frame bounds) */}
      <div className="pointer-events-auto absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">
          <button
            onClick={() => go(Math.max(idx - 1, 0))}
            className="group rounded-full p-2 transition hover:bg-white/15 disabled:opacity-30"
            disabled={idx === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-white/90 group-hover:scale-110 transition" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(Math.min(idx + 1, slides.length - 1))}
            className="group rounded-full p-2 transition hover:bg-white/15 disabled:opacity-30"
            disabled={idx === slides.length - 1}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-white/90 group-hover:scale-110 transition" />
          </button>
        </div>
      </div>

      <div className="absolute top-5 right-5 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/90 text-sm backdrop-blur">
        {idx + 1} / {slides.length}
      </div>
    </SlideFrame>
  );
}

/* --------------------------- Slide Implementations -------------------------- */

function IntroSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <motion.h1 
          className={`${TYPO.h1} text-balance`} 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ duration: 0.5 }}
        >
          traceR2C
        </motion.h1>
        <motion.p 
          className={`${TYPO.lead} text-balance`} 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ delay: 0.08, duration: 0.5 }}
        >
          Compliance Flow — The next‑generation AI‑powered compliance management platform
        </motion.p>
        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.16, duration: 0.5 }}
        >
          {[
            { icon: Shield, text: "Secure & Compliant", color: "from-emerald-400 to-teal-500" },
            { icon: Bot, text: "AI‑Powered Automation", color: "from-purple-400 to-pink-500" },
            { icon: Zap, text: "Lightning Fast", color: "from-yellow-400 to-orange-500" },
          ].map((it, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
            >
              <div className={`rounded-xl bg-gradient-to-br ${it.color} p-2`}>
                <it.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-medium text-sm lg:text-base">{it.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function OverviewSlide() {
  const cards = [
    {
      icon: Network,
      title: "Connect",
      desc: "Unify buyers and suppliers on an intelligent platform.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Manage",
      desc: "Centralized documents with smart workflows and automation.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Bot,
      title: "Automate",
      desc: "Always‑on AI agents to keep you compliant.",
      color: "from-emerald-500 to-teal-500",
    },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full">
        <motion.h2
          className={`${TYPO.h2} text-center text-balance mb-6 sm:mb-10`}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          What is{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Compliance Flow
          </span>
          ?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 * (i + 1), duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${c.color} p-3`}>
                <c.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className={TYPO.h3}>{c.title}</h3>
              <p className={`${TYPO.body} mt-2 text-pretty`}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesSlide({ side }) {
  const buyer = [
    {
      icon: Users,
      title: "Supplier Management",
      items: ["Supplier Discovery", "Quick Onboarding", "Bulk Invitations"],
    },
    { icon: FileText, title: "Document Control", items: ["Custom Templates", "Document Requests", "Pre‑population"] },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      items: ["Compliance Dashboard", "Risk Management", "Performance Tracking"],
    },
    {
      icon: Building2,
      title: "Multi‑Branch Support",
      items: ["Branch Management", "Separate Libraries", "Branch Selector"],
    },
    { icon: Bot, title: "AI‑Powered Tools", items: ["Compliance Compass", "Buyer Agent", "Auto‑Approval"] },
    { icon: Zap, title: "Smart Workflows", items: ["Approval Chains", "Task Assignments", "Automation Rules"] },
  ];
  const supplier = [
    {
      icon: Network,
      title: "Buyer Connections",
      items: ["Quick Connect via ID", "Multi‑Buyer Support", "Branch Selection"],
    },
    { icon: FileText, title: "Document Hub", items: ["Easy Upload", "Document Library", "Template Responses"] },
    { icon: Building2, title: "Item & Facility", items: ["Item Management", "Facility Tracking", "Compliance View"] },
    { icon: Users, title: "Contact Management", items: ["Role Assignment", "Smart Notifications", "Team Setup"] },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      items: ["Compliance Status", "Response Analytics", "Insights Dashboard"],
    },
    { icon: Bot, title: "AI Assistant", items: ["Compliance Help", "Supplier Agent", "Auto‑Matching"] },
  ];
  const features = side === "buyer" ? buyer : supplier;
  const color = side === "buyer" ? "from-emerald-400 to-teal-500" : "from-orange-400 to-red-500";
  const heading = side === "buyer" ? "Buyer" : "Supplier";

  return (
    <div className="h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full">
        <motion.div 
          className="text-center mb-6 sm:mb-8" 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${TYPO.h2} text-balance`}>
            {heading} <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>Features</span>
          </h2>
          <p className={`${TYPO.lead} mt-2`}>
            {side === "buyer"
              ? "Comprehensive tools for managing your suppliers."
              : "Everything you need to stay compliant."}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 * (i + 1), duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${color} p-3`}>
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className={TYPO.h4}>{f.title}</h3>
              {bullets(f.items, color)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowSlide() {
  const steps = [
    {
      n: 1,
      title: "Discovery & Connection",
      buyer: "Find and connect with suppliers.",
      supplier: "Accept connection request.",
    },
    {
      n: 2,
      title: "Onboarding Setup",
      buyer: "Select branches and required documents.",
      supplier: "Choose branches and upload documents.",
    },
    {
      n: 3,
      title: "Document Requests",
      buyer: "Request specific compliance documents.",
      supplier: "Submit requested documents.",
    },
    {
      n: 4,
      title: "Review & Approval",
      buyer: "Review manually or AI auto‑approval.",
      supplier: "Receive approval or feedback.",
    },
    {
      n: 5,
      title: "Ongoing Compliance",
      buyer: "Monitor performance and manage risks.",
      supplier: "Maintain compliance status.",
    },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full">
        <motion.h2
          className={`${TYPO.h2} text-center mb-6 sm:mb-8 text-balance`}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
            Buyer ↔ Supplier
          </span>{" "}
          Flow
        </motion.h2>
        <div className="space-y-3 sm:space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 * (i + 1), duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-sm font-bold shadow">
                    {s.n}
                  </div>
                  <span className="text-emerald-300 text-[11px] font-semibold tracking-widest">BUYER</span>
                </div>
                <p className={TYPO.body}>{s.buyer}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className={`${TYPO.small} uppercase tracking-wider`}>{s.title}</span>
                <div className="mt-1 flex items-center gap-1">
                  <ArrowRight className="h-4 w-4 text-purple-300 animate-pulse" />
                  <ArrowRight className="h-4 w-4 text-purple-300 animate-pulse" />
                </div>
              </div>
              <div className="rounded-2xl border border-orange-400/30 bg-orange-500/10 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white text-sm font-bold shadow">
                    {s.n}
                  </div>
                  <span className="text-orange-300 text-[11px] font-semibold tracking-widest">SUPPLIER</span>
                </div>
                <p className={TYPO.body}>{s.supplier}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIOverviewSlide() {
  const how = [
    { step: "1", text: "User asks a compliance question.", icon: "💬", color: "from-blue-500 to-cyan-500" },
    { step: "2", text: "AI searches knowledge base (RAG).", icon: "🔍", color: "from-purple-500 to-pink-500" },
    { step: "3", text: "GPT analyzes and drafts an answer.", icon: "🧠", color: "from-emerald-500 to-teal-500" },
    { step: "4", text: "Suggests agent workflow if needed.", icon: "🤖", color: "from-orange-500 to-red-500" },
    { step: "5", text: "Executes automated actions.", icon: "⚡", color: "from-yellow-500 to-orange-500" },
  ];
  const caps = [
    { title: "Smart Answers", desc: "Context‑aware guidance with citations.", icon: "💡" },
    { title: "Agent Triggers", desc: "Invoke specialized AI agents automatically.", icon: "🚀" },
    { title: "Multi‑step Guidance", desc: "Break down complex tasks into steps.", icon: "📋" },
    { title: "Learning System", desc: "Improves continuously with usage.", icon: "📈" },
  ];

  return (
    <div className="h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full">
        <motion.div 
          className="mb-6 sm:mb-8 text-center" 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2 inline-flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-300" />
            <h2 className={TYPO.h2}>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Compliance Compass
              </span>{" "}
              AI
            </h2>
            <Sparkles className="h-6 w-6 text-purple-300" />
          </div>
          <p className={TYPO.lead}>Your intelligent 24/7 compliance assistant.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
          >
            <h3 className={TYPO.h3}>How it works</h3>
            <div className="mt-3 space-y-2">
              {how.map((it, i) => (
                <motion.div
                  key={it.step}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.08 * (i + 2), duration: 0.5 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className={`rounded-xl bg-gradient-to-br ${it.color} p-2 text-xl`}>{it.icon}</div>
                  <div className={`${TYPO.body} text-pretty`}>
                    <span className="font-semibold text-white mr-1">Step {it.step}</span>
                    {it.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.16, duration: 0.5 }}
            className="rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/15 to-pink-500/15 p-5 sm:p-6"
          >
            <h3 className={TYPO.h3}>Key capabilities</h3>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {caps.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.08 * (i + 3), duration: 0.5 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-lg">{c.icon}</span>
                    <h4 className={`${TYPO.h4} !text-lg`}>{c.title}</h4>
                  </div>
                  <p className={`${TYPO.body} ml-7`}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AIAgentsSlide() {
  const buyer = [
    "Fetch pending uploads",
    "Analyze with GPT‑5",
    "Generate compliance score",
    "Auto‑approve (≥85%)",
    "Auto‑reject with feedback",
    "Flag manual reviews",
    "Send notifications",
  ];
  const supplier = [
    "Fetch pending requests",
    "Search existing documents",
    "AI semantic matching",
    "Auto‑submit (>80%)",
    "Request new documents",
    "Monitor expiring docs",
    "Proactive notifications",
  ];
  const coordinator = [
    "Run on schedule",
    "Check configurations",
    "Invoke supplier agent",
    "Invoke buyer agent",
    "Aggregate results",
    "Log all activities",
    "Return summary",
  ];

  const Card = ({ title, icon: Icon, color, items }) => (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border p-5 ${color.border} ${color.bg}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-xl p-3 ${color.iconBg}`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className={TYPO.h3}>{title}</h3>
      </div>
      {bullets(items, color.grad)}
    </motion.div>
  );

  return (
    <div className="h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full">
        <motion.h2 
          className={`${TYPO.h2} text-center mb-6 sm:mb-8`} 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ duration: 0.5 }}
        >
          🤖 AI{" "}
          <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            Agent Workflows
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4">
          <Card
            title="Buyer Agent"
            icon={CheckCircle}
            items={buyer}
            color={{
              bg: "bg-emerald-500/10",
              border: "border-emerald-400/30",
              iconBg: "bg-gradient-to-br from-emerald-400 to-teal-500",
              grad: "from-emerald-400 to-teal-500",
            }}
          />
          <Card
            title="Supplier Agent"
            icon={FileText}
            items={supplier}
            color={{
              bg: "bg-orange-500/10",
              border: "border-orange-400/30",
              iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
              grad: "from-orange-400 to-red-500",
            }}
          />
          <Card
            title="Coordinator"
            icon={Network}
            items={coordinator}
            color={{
              bg: "bg-purple-500/10",
              border: "border-purple-400/30",
              iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
              grad: "from-purple-400 to-pink-500",
            }}
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.24, duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className={`${TYPO.h3} text-center mb-4`}>Decision Logic</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/15 p-5">
              <CheckCircle className="mb-2 h-8 w-8 text-emerald-400" />
              <h4 className={`${TYPO.h4} mb-1`}>Auto‑Approve</h4>
              <p className="text-white/95">Score ≥ 85%</p>
              <p className={TYPO.small}>High confidence match.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/40 bg-yellow-500/15 p-5">
              <Clock className="mb-2 h-8 w-8 text-yellow-300" />
              <h4 className={`${TYPO.h4} mb-1`}>Manual Review</h4>
              <p className="text-white/95">Medium score</p>
              <p className={TYPO.small}>Human validation required.</p>
            </div>
            <div className="rounded-2xl border border-red-400/40 bg-red-500/15 p-5">
              <XCircle className="mb-2 h-8 w-8 text-red-400" />
              <h4 className={`${TYPO.h4} mb-1`}>Auto‑Reject</h4>
              <p className="text-white/95">Critical issues</p>
              <p className={TYPO.small}>Immediate feedback.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DataFlowsSlide() {
  const flows = [
    {
      title: "Knowledge Base (RAG)",
      color: "from-blue-400 to-cyan-500",
      icon: "🧠",
      steps: [
        "Document Upload",
        "Content Extract",
        "OpenAI Embedding",
        "Vector Store",
        "Semantic Search",
        "GPT Answer",
      ],
    },
    {
      title: "Notification System",
      color: "from-purple-400 to-pink-500",
      icon: "🔔",
      steps: ["Event Trigger", "Edge Function", "DB Insert", "Real‑time Sub", "UI Update", "User Action"],
    },
    {
      title: "Approval Workflow",
      color: "from-emerald-400 to-teal-500",
      icon: "✅",
      steps: ["Workflow Setup", "Upload Trigger", "Step Definition", "Approver Chain", "Validation", "Status Update"],
    },
  ];

  return (
    <div className="h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full">
        <motion.h2 
          className={`${TYPO.h2} text-center mb-6 sm:mb-8`} 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ duration: 0.5 }}
        >
          Key{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Data Flows</span>
        </motion.h2>
        <div className="space-y-4">
          {flows.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 * (i + 1), duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className={`rounded-2xl p-3 text-3xl shadow-xl bg-gradient-to-br ${f.color}`}>{f.icon}</div>
                <div className="flex-1 w-full">
                  <h3 className={`${TYPO.h3} mb-3`}>{f.title}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {f.steps.map((s, j) => (
                      <React.Fragment key={s}>
                        <div
                          className={`whitespace-nowrap rounded-2xl border border-white/10 px-3 py-1.5 font-medium text-white bg-gradient-to-r ${f.color} bg-opacity-20`}
                        >
                          {s}
                        </div>
                        {j < f.steps.length - 1 && <ArrowRight className="h-4 w-4 text-slate-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinaleSlide() {
  const stats = [
    { value: "85%", label: "Faster approvals", icon: Zap, color: "from-yellow-400 to-orange-500" },
    { value: "24/7", label: "AI automation", icon: Bot, color: "from-purple-400 to-pink-500" },
    { value: "100%", label: "Compliance tracking", icon: Shield, color: "from-emerald-400 to-teal-500" },
  ];

  return (
    <div className="h-full w-full flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1 
          className={`${TYPO.h1} text-balance`} 
          variants={fadeUp} 
          initial="hidden" 
          animate="show"
          transition={{ duration: 0.5 }}
        >
          Transform your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            compliance journey
          </span>
        </motion.h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 * (i + 1), duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className={`mb-3 inline-flex rounded-2xl bg-gradient-to-br ${s.color} p-3`}>
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white">{s.value}</div>
              <div className={`${TYPO.lead} mt-1 capitalize`}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.24, duration: 0.5 }}
        >
          <button className="rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-bold text-white shadow-lg transition hover:shadow-purple-500/40 hover:brightness-110">
            Get started today
          </button>
          <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20">
            Schedule demo
          </button>
        </motion.div>

        <div className="mt-5 text-center">
          <span className={`${TYPO.small}`}>traceR2C • Compliance Flow • Powered by AI</span>
        </div>
      </div>
    </div>
  );
}
