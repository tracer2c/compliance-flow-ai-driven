import { Link } from "react-router-dom";
import { Target, Heart, Globe, Award, MapPin, Mail, Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import BracketCard from "@/components/shared/BracketCard";
import ClassyIcon from "@/components/shared/ClassyIcon";
import CTABanner from "@/components/shared/CTABanner";

const Company = () => {
  const values = [
    {
      icon: Target,
      tone: "teal" as const,
      title: "Compliance-First Thinking",
      description:
        "Every feature and decision is designed with compliance at its core — not bolted on.",
    },
    {
      icon: Heart,
      tone: "rose" as const,
      title: "Customer Obsession",
      description:
        "We succeed when our customers achieve their compliance goals with calm confidence.",
    },
    {
      icon: Globe,
      tone: "violet" as const,
      title: "Global Perspective",
      description:
        "We build for a world where regulations vary by region, industry, and jurisdiction.",
    },
    {
      icon: Award,
      tone: "amber" as const,
      title: "Operational Excellence",
      description:
        "We hold ourselves to the same high standards we help our customers achieve.",
    },
  ];

  const milestones = [
    { year: "2019", event: "TraceR2C LLC founded in Auburn, Alabama" },
    { year: "2020", event: "Launched the ComplianceFlow platform" },
    { year: "2022", event: "Expanded coverage to the pharmaceutical industry" },
    { year: "2023", event: "Launched Clear Insight analytics platform" },
    { year: "2024", event: "500+ enterprise customers milestone" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Company · 02"
        meta="EST. 2019 · AUBURN, AL"
        title="Making compliance"
        accent="operational & measurable"
        subtitle="Founded in Auburn, Alabama. We transform how regulated industries manage compliance — through intelligent automation and proactive insight, not paperwork theatre."
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionLabel index="01">Our mission</SectionLabel>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-[1.15]">
                Make compliance operational,
                <br />
                measurable, and proactive.
              </h2>
              <div className="mt-8 space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  Compliance shouldn't be a burden or an afterthought. It should be seamlessly
                  integrated into operations — providing real-time visibility and predictive
                  insight that helps organizations stay ahead of regulatory change.
                </p>
                <p>
                  Our platform transforms compliance from reactive documentation into proactive
                  risk management, so regulated industries can operate with confidence and
                  efficiency.
                </p>
              </div>
            </div>

            <BracketCard className="lg:col-span-5 p-8 bg-gradient-to-br from-teal-50/60 to-emerald-50/40">
              <SectionLabel index="02">Why we exist</SectionLabel>
              <ul className="mt-6 space-y-5">
                {[
                  "Regulatory complexity is increasing across every industry",
                  "Manual compliance processes create risk and inefficiency",
                  "Organizations need real-time visibility into compliance health",
                  "Technology should make compliance easier, not heavier",
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-2 h-px w-6 flex-shrink-0 bg-teal-500" />
                    <span className="text-gray-700 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </BracketCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50/60 border-y border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <SectionLabel index="03">Our values</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Principles that hold under load.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How we build products, serve customers, and work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <BracketCard key={v.title} className="p-7">
                <div className="flex items-center justify-between mb-6">
                  <ClassyIcon icon={v.icon} tone={v.tone} size="md" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <SectionLabel index="04">Our journey</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Five years, one direction.
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <ol className="relative border-l border-dashed border-teal-300/60 ml-3">
              {milestones.map((m, i) => (
                <li key={m.year} className="ml-8 pb-10 last:pb-0">
                  <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-teal-500 bg-white" />
                  </span>
                  <div className="flex items-baseline gap-4">
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-teal-700">
                      {m.year}
                    </div>
                    <div className="font-mono text-[10px] text-gray-400">
                      / {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <p className="mt-2 text-lg text-navy-900 font-medium leading-snug">
                    {m.event}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="py-16 bg-gray-50/60 border-t border-gray-200/60">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {[
            { icon: MapPin, label: "Headquarters", value: "Auburn, Alabama · United States" },
            { icon: Mail, label: "General inquiries", value: "contact@tracer2c.com" },
            { icon: Phone, label: "Sales line", value: "(229) 395-9837" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <ClassyIcon icon={c.icon} tone="teal" size="md" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                  {c.label}
                </div>
                <div className="mt-1 text-navy-900 font-medium">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700 hover:text-teal-900"
          >
            → talk to the team
          </Link>
        </div>
      </section>

      <CTABanner
        eyebrow="Build with us"
        title="Make compliance a system, not a scramble."
        subtitle="Join the regulated industries running their programs on TraceR2C."
      />
    </div>
  );
};

export default Company;
