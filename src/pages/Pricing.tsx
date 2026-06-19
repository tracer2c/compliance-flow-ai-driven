import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { organizationSchema, faqSchema } from "@/lib/structuredData";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import BracketCard from "@/components/shared/BracketCard";
import ClassyIcon from "@/components/shared/ClassyIcon";
import CTABanner from "@/components/shared/CTABanner";
import {
  Check,
  ArrowRight,
  Phone,
  BarChart3,
  Megaphone,
  HeadphonesIcon,
  Minus,
} from "lucide-react";

const Pricing = () => {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TraceR2C Compliance Platform Pricing",
    description:
      "Enterprise supply chain compliance software with transparent pricing plans for businesses of all sizes.",
    provider: organizationSchema,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TraceR2C Pricing Plans",
      itemListElement: [
        { "@type": "Offer", name: "Starter Plan", price: "299", priceCurrency: "USD" },
        { "@type": "Offer", name: "Professional Plan", price: "899", priceCurrency: "USD" },
        { "@type": "Offer", name: "Enterprise Plan", price: "2499", priceCurrency: "USD" },
      ],
    },
  };
  const combinedSchema = [organizationSchema, pricingSchema, faqSchema];

  const tiers = [
    {
      name: "Starter",
      price: "299",
      description: "For small suppliers getting compliance off the ground.",
      features: [
        "Up to 5 users",
        "10 GB document storage",
        "Basic compliance tracking",
        "Email support",
        "Standard SLA (99.0%)",
        "Core integrations (5)",
        "Basic reporting",
        "Mobile app access",
      ],
      limits: "Up to 1,000 documents / month",
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "899",
      description: "For growing businesses with complex compliance needs.",
      features: [
        "Up to 25 users",
        "100 GB document storage",
        "Advanced compliance tracking",
        "Priority email & chat support",
        "Enhanced SLA (99.5%)",
        "Premium integrations (15)",
        "Custom dashboards",
        "API access",
        "Multi-region support",
        "Role-based permissions",
      ],
      limits: "Up to 10,000 documents / month",
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "2,499",
      description: "Comprehensive coverage for large, regulated organizations.",
      features: [
        "Unlimited users",
        "1 TB+ document storage",
        "Full compliance suite",
        "24/7 phone & priority support",
        "Premium SLA (99.9%)",
        "All integrations included",
        "Advanced analytics",
        "Custom API development",
        "Global data residency",
        "SSO / SAML",
        "Dedicated customer success",
        "Custom training",
      ],
      limits: "Unlimited documents",
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const addons = [
    {
      icon: BarChart3,
      tone: "teal" as const,
      name: "Clear Insight Analytics",
      price: "399",
      description: "Advanced compliance health monitoring and operational efficiency analytics.",
      features: [
        "Compliance scorecards",
        "SLA adherence tracking",
        "Predictive analytics",
        "Custom KPI dashboards",
        "Automated reporting",
      ],
    },
    {
      icon: Megaphone,
      tone: "violet" as const,
      name: "Target Promotion System",
      price: "599",
      description: "Policy-safe promotion campaigns with attribution and lift analysis.",
      features: [
        "Audience cohorting",
        "Multi-channel delivery",
        "A/B testing framework",
        "Attribution modeling",
        "Compliance controls",
      ],
    },
    {
      icon: HeadphonesIcon,
      tone: "amber" as const,
      name: "Premium Support",
      price: "299",
      description: "Dedicated support team with faster response times.",
      features: [
        "24/7 phone support",
        "1-hour response time",
        "Dedicated account manager",
        "Priority feature requests",
        "Custom training sessions",
      ],
    },
  ];

  const compareRows: [string, string, string, string][] = [
    ["Users", "5", "25", "Unlimited"],
    ["Document storage", "10 GB", "100 GB", "1 TB+"],
    ["API access", "—", "Included", "Included"],
    ["Custom integrations", "—", "Limited", "Included"],
    ["SSO / SAML", "—", "—", "Included"],
    ["24/7 support", "—", "—", "Included"],
    ["SLA", "99.0%", "99.5%", "99.9%"],
  ];

  const faqs = [
    {
      q: "Can I change plans at any time?",
      a: "Yes. Upgrade or downgrade at any time — changes take effect immediately and billing is prorated.",
    },
    {
      q: "What's included in the free trial?",
      a: "All plans include a 14-day free trial with full access. No credit card required to start.",
    },
    {
      q: "Do you offer custom enterprise pricing?",
      a: "Yes — we offer custom pricing for large enterprises with specific requirements. Contact our sales team for a quote.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Major credit cards, ACH transfers, and wire transfers for enterprise accounts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Enterprise Compliance Software Pricing | Free Trial | TraceR2C"
        description="Transparent pricing for enterprise supply chain compliance software. Starter $299/mo, Professional $899/mo, Enterprise $2,499/mo. 14-day free trial."
        canonicalUrl="https://tracer2c.com/pricing"
        structuredData={combinedSchema}
      />

      <PageHero
        eyebrow="Pricing · 04"
        meta="14-DAY FREE TRIAL"
        title="Simple, transparent"
        accent="enterprise pricing"
        subtitle="Choose the plan that fits your compliance operation. Every plan includes the core ComplianceFlow platform with enterprise-grade security."
      >
        <div className="mt-2 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-200/90">
          {["14-day free trial", "No setup fees", "Cancel anytime"].map((f) => (
            <span key={f} className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-teal-300" strokeWidth={2} />
              {f}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Tiers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tiers.map((tier, i) => (
              <BracketCard
                key={tier.name}
                className={
                  tier.popular
                    ? "p-8 border-teal-500/60 ring-1 ring-teal-500/40 bg-gradient-to-b from-teal-50/40 to-white"
                    : "p-8"
                }
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                    Plan · 0{i + 1}
                  </span>
                  {tier.popular && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-700 border border-teal-500/40 bg-teal-100/60 px-2 py-1 rounded-sm">
                      ★ Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-navy-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-navy-900 tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="text-gray-500">/ month</span>
                </div>

                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500 pb-6 border-b border-dashed border-gray-200">
                  {tier.limits}
                </div>

                <ul className="space-y-3 mt-6 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check
                        className="h-4 w-4 mt-0.5 text-teal-600 flex-shrink-0"
                        strokeWidth={2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={
                    tier.popular
                      ? "w-full bg-teal-500 text-navy-950 hover:bg-teal-400 font-semibold"
                      : "w-full bg-navy-900 text-white hover:bg-navy-800 font-semibold"
                  }
                >
                  {tier.cta}
                  {tier.cta === "Contact Sales" ? (
                    <Phone className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-gray-50/60 border-y border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <SectionLabel index="02">Add-ons</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Extend the platform when you need it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((a) => (
              <BracketCard key={a.name} className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <ClassyIcon icon={a.icon} tone={a.tone} size="md" />
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold text-navy-900">${a.price}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      / month
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">{a.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{a.description}</p>
                <ul className="space-y-2 mb-6">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 mt-0.5 text-teal-600 flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Add to plan
                </Button>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <SectionLabel index="03">Compare plans</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              What's included, line by line.
            </h2>
          </div>

          <BracketCard className="max-w-5xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/60">
                    <th className="text-left p-5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      Feature
                    </th>
                    <th className="text-center p-5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      Starter
                    </th>
                    <th className="text-center p-5 font-mono text-[10px] uppercase tracking-[0.22em] text-teal-700 bg-teal-50/50">
                      Professional
                    </th>
                    <th className="text-center p-5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="p-5 text-sm font-medium text-navy-900">{row[0]}</td>
                      {[1, 2, 3].map((c) => (
                        <td
                          key={c}
                          className={`p-5 text-center text-sm text-gray-700 ${
                            c === 2 ? "bg-teal-50/40" : ""
                          }`}
                        >
                          {row[c] === "—" ? (
                            <Minus className="inline h-4 w-4 text-gray-300" />
                          ) : row[c] === "Included" ? (
                            <Check className="inline h-4 w-4 text-teal-600" strokeWidth={2.5} />
                          ) : (
                            row[c]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BracketCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/60 border-t border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <SectionLabel index="04">FAQ</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Frequently asked questions.
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <BracketCard key={i} className="p-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-700">
                    Q · 0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Ready to get started"
        title="Start your free trial today."
        subtitle="Full platform access for 14 days. No credit card. No setup fees."
      />
    </div>
  );
};

export default Pricing;
