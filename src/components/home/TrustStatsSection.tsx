import { Badge } from "@/components/ui/badge";
import { TrendingDown, Clock, AlertCircle, Database, ShieldCheck, Lock, BadgeCheck, Globe2, FileBadge2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import MarqueeStrip from "@/components/animations/MarqueeStrip";
import SplitTextReveal from "@/components/animations/SplitTextReveal";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ value, suffix = "", duration = 2000 }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const TrustStatsSection = () => {
  const hero = {
    value: 60,
    suffix: "%",
    label: "Less compliance chasing",
    icon: TrendingDown,
    description:
      "Automated requests, reminders, and escalation paths replace the inbox triage that used to swallow your team's week.",
    quote: "“Our team got their Mondays back.” — VP Compliance, Tier-1 manufacturer",
  };

  const small = [
    {
      value: 40,
      suffix: "%",
      label: "Faster audit prep",
      icon: Clock,
      description: "Centralized evidence, approvals, and logs — always ready.",
    },
    {
      value: 0,
      suffix: "",
      label: "Expired doc surprises",
      icon: AlertCircle,
      description: "Expiry forecasting and alerts before risk becomes incident.",
    },
    {
      value: 1,
      suffix: "",
      label: "Single source of truth",
      icon: Database,
      description: "Suppliers, documents, risk — permissioned and measurable.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Editorial header: left-weighted, not centered */}
        <motion.div
          className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-end mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <Badge
              variant="secondary"
              className="mb-5 bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200 transition-colors"
            >
              Designed for enterprise credibility
            </Badge>
            <SplitTextReveal
              as="h2"
              text="Outcomes that leadership understands."
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 block leading-[1.05]"
            />
          </div>
          <p className="text-lg text-gray-600 leading-relaxed lg:pl-8 lg:border-l-2 lg:border-teal-200">
            Reduce operational drag, prevent compliance incidents, and walk into
            audits with calm confidence. Four numbers your CFO already cares about.
          </p>
        </motion.div>

        {/* Asymmetric bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feature tile — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 relative bg-white rounded-2xl p-10 border border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-teal-500 to-teal-200 rounded-full" />
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center pl-4">
              <div>
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                  <hero.icon className="h-7 w-7 text-teal-600" />
                </div>
                <div className="text-6xl md:text-7xl font-display font-bold text-navy-900 leading-none">
                  <AnimatedNumber value={hero.value} suffix={hero.suffix} />
                </div>
                <h3 className="text-lg font-semibold text-teal-600 mt-3">
                  {hero.label}
                </h3>
              </div>
              <div className="space-y-5 md:border-l md:border-gray-100 md:pl-8">
                <p className="text-gray-700 leading-relaxed text-base">
                  {hero.description}
                </p>
                {/* Faint bar accent */}
                <div className="flex gap-1.5">
                  {[70, 55, 40, 30, 22, 18, 15, 12].map((h, i) => (
                    <span
                      key={i}
                      className="w-2 rounded-sm bg-gradient-to-t from-teal-200 to-teal-500"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <p className="font-mono text-xs text-gray-500 italic border-l-2 border-teal-300 pl-3">
                  {hero.quote}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small tiles — 3-up stack on the right column, then row of 2 below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-navy-900 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-teal-500/15 rounded-xl flex items-center justify-center mb-5">
                <small[0].icon className="h-6 w-6 text-teal-300" />
              </div>
              <div className="text-5xl font-display font-bold leading-none">
                <AnimatedNumber value={small[0].value} suffix={small[0].suffix} />
              </div>
              <h3 className="text-base font-semibold text-teal-300 mt-3">{small[0].label}</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-5">{small[0].description}</p>
          </motion.div>

          {small.slice(1).map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                  <stat.icon className="h-6 w-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-display font-bold text-navy-900 leading-none">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-base font-semibold text-teal-600 mt-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications marquee */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
            Built to the standards your auditors expect
          </p>
          <MarqueeStrip
            speed={50}
            items={[
              { icon: ShieldCheck, label: "SOC 2 Type II" },
              { icon: Lock, label: "ISO 27001" },
              { icon: BadgeCheck, label: "GDPR Ready" },
              { icon: Globe2, label: "EUDR Aligned" },
              { icon: FileBadge2, label: "HIPAA Compatible" },
              { icon: ShieldCheck, label: "CCPA" },
              { icon: BadgeCheck, label: "PCI DSS" },
              { icon: Lock, label: "Zero-Trust" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm"
              >
                <item.icon className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-semibold text-navy-800 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
