import SEOHead from "@/components/seo/SEOHead";
import { organizationSchema } from "@/lib/structuredData";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import BracketCard from "@/components/shared/BracketCard";
import ClassyIcon from "@/components/shared/ClassyIcon";
import CTABanner from "@/components/shared/CTABanner";
import {
  ShieldCheck,
  FileText,
  Workflow,
  TrendingUp,
  UtensilsCrossed,
  Pill,
  Factory,
  ShoppingCart,
  Truck,
  Building2,
} from "lucide-react";

const Solutions = () => {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TraceR2C Industry Solutions",
    applicationCategory: "BusinessApplication",
    description:
      "Industry-specific compliance solutions for food service, pharmaceuticals, manufacturing, retail, logistics, and construction.",
    featureList: [
      "Food Service Compliance (FDA, HACCP)",
      "Pharmaceutical Compliance (21 CFR Part 11, GMP)",
      "Manufacturing Quality Management (ISO 9001)",
      "Retail Product Safety Compliance",
      "Logistics DOT & Import/Export Compliance",
      "Construction Safety & Permit Management",
    ],
    author: organizationSchema,
  };

  const industries = [
    {
      icon: UtensilsCrossed,
      tone: "amber" as const,
      name: "Food Service",
      regulations: ["FDA FSMA", "HACCP Requirements", "Nutritional Labeling"],
      documents: ["HACCP Plans", "Supplier Certifications", "Temperature Logs"],
      workflows: ["Ingredient Traceability", "Temperature Monitoring", "Supplier Audits"],
      kpis: "3× faster audit prep · 95% documentation compliance",
    },
    {
      icon: Pill,
      tone: "rose" as const,
      name: "Pharmaceuticals",
      regulations: ["FDA 21 CFR Part 11", "GMP Guidelines", "DSCSA"],
      documents: ["Batch Records", "COAs", "Stability Studies", "Chain of Custody"],
      workflows: ["Drug Serialization", "Temperature Control", "Batch Tracking"],
      kpis: "50% reduction in audit time · 99.8% serialization accuracy",
    },
    {
      icon: Factory,
      tone: "navy" as const,
      name: "Manufacturing",
      regulations: ["ISO 9001", "OSHA Standards", "EPA Compliance"],
      documents: ["Quality Manuals", "Safety Data Sheets", "Calibration Records"],
      workflows: ["Quality Control", "Equipment Validation", "Change Control"],
      kpis: "40% faster documentation cycles · 98% on-time delivery",
    },
    {
      icon: ShoppingCart,
      tone: "violet" as const,
      name: "Retail",
      regulations: ["Consumer Product Safety", "FTC Guidelines", "State Sales Tax"],
      documents: ["Product Specifications", "Safety Certificates", "Vendor Agreements"],
      workflows: ["Recall Management", "Vendor Onboarding", "Quality Assurance"],
      kpis: "60% faster vendor onboarding · 25% fewer compliance issues",
    },
    {
      icon: Truck,
      tone: "teal" as const,
      name: "Logistics",
      regulations: ["DOT Regulations", "Import/Export Requirements", "Hazmat Rules"],
      documents: ["Bills of Lading", "Customs Documentation", "Driver Logs"],
      workflows: ["Shipment Tracking", "Driver Compliance", "Cross-Border Docs"],
      kpis: "35% fewer shipping delays · 90% documentation accuracy",
    },
    {
      icon: Building2,
      tone: "green" as const,
      name: "Construction",
      regulations: ["OSHA Construction", "Building Codes", "Environmental Permits"],
      documents: ["Safety Plans", "Inspection Reports", "Material Certifications"],
      workflows: ["Safety Inspections", "Material Tracking", "Permit Management"],
      kpis: "45% fewer safety incidents · 30% faster permit approvals",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Industry Compliance Solutions | Food, Pharma, Manufacturing | TraceR2C"
        description="Industry-specific compliance solutions for food service, pharmaceuticals, manufacturing, retail, logistics & construction. Pre-built templates and automated workflows."
        keywords="industry compliance solutions, food service compliance, pharmaceutical compliance, manufacturing quality management"
        canonicalUrl="https://tracer2c.com/solutions"
        structuredData={solutionsSchema}
      />

      <PageHero
        eyebrow="Solutions · 01"
        meta={`06 INDUSTRIES`}
        title="Compliance, tuned for"
        accent="every regulated industry"
        subtitle="From food service to pharmaceuticals, our platform adapts to your industry's regulations, documents, and operational rhythm — no template gymnastics required."
      />

      {/* Intro strip */}
      <section className="border-b border-gray-200/70 bg-white">
        <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { k: "06", l: "Industries" },
            { k: "120+", l: "Pre-built workflows" },
            { k: "40+", l: "Regulatory frameworks" },
            { k: "99.9%", l: "Platform SLA" },
          ].map((m) => (
            <div key={m.l}>
              <div className="font-display text-3xl md:text-4xl text-navy-900 font-bold tracking-tight">
                {m.k}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-24 bg-gray-50/60">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <SectionLabel index="02">Industry coverage</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Tailored solutions, common backbone.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Every industry shares the same compliance fundamentals — documents, attestations,
              risk, audit trails. We pre-configure the parts that differ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <BracketCard key={ind.name} className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <ClassyIcon icon={ind.icon} tone={ind.tone} size="lg" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                        Industry · {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-navy-900 mt-1">
                        {ind.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: ShieldCheck, label: "Regulations", items: ind.regulations },
                    { icon: FileText, label: "Documents", items: ind.documents },
                    { icon: Workflow, label: "Workflows", items: ind.workflows },
                  ].map((col) => (
                    <div key={col.label}>
                      <div className="flex items-center gap-2 mb-3 text-teal-700">
                        <col.icon size={14} strokeWidth={1.75} />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                          {col.label}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {col.items.map((it) => (
                          <li
                            key={it}
                            className="text-sm text-gray-700 leading-relaxed pl-3 border-l border-gray-200"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-dashed border-gray-200 flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-700">
                    {ind.kpis}
                  </span>
                </div>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Ready when you are"
        title="Bring your industry's compliance into one system."
        subtitle="Pre-built workflows, configurable in days — not quarters."
      />
    </div>
  );
};

export default Solutions;
