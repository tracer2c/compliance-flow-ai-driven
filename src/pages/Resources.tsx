import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  Search,
  Clock,
  Calendar,
  User,
  TrendingUp,
  Shield,
  Globe,
  Leaf,
  Brain,
  Mic,
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { resourcesPageSchema } from "@/lib/structuredData";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import BracketCard from "@/components/shared/BracketCard";
import ClassyIcon from "@/components/shared/ClassyIcon";

const Resources = () => {
  const featuredContent = [
    {
      type: "Regulatory Guide",
      title: "FSMA 204 Complete Implementation Guide",
      description:
        "Everything you need to know about the FDA's extended traceability deadline (January 2027) and how to prepare your supply chain.",
      readTime: "20 min read",
      category: "Food Safety",
      slug: "fsma-204-implementation-2025",
      author: "Dr. Rachel Morrison",
      date: "January 2025",
    },
    {
      type: "Compliance Checklist",
      title: "EUDR Compliance Checklist for Global Supply Chains",
      description:
        "Step-by-step checklist for EU Deforestation Regulation compliance with due diligence requirements and risk frameworks.",
      readTime: "15 min read",
      category: "Sustainability",
      slug: "eudr-compliance-checklist",
      author: "Marcus Chen",
      date: "January 2025",
    },
    {
      type: "Assessment Tool",
      title: "2026 ESG Reporting Readiness Assessment",
      description:
        "Comprehensive assessment for CSRD and corporate sustainability reporting requirements coming into effect in 2026.",
      readTime: "25 min read",
      category: "ESG Compliance",
      slug: "esg-reporting-readiness-2026",
      author: "Sarah Thompson",
      date: "January 2025",
    },
  ];

  const blogPosts = [
    { title: "FSMA 204 Compliance Deadline Extended: What It Means for Your Business", excerpt: "FDA extended the FSMA 204 traceability deadline to January 2027. What this means for your implementation timeline and strategy.", category: "Regulations", readTime: "12 min read", date: "Jan 10, 2025", slug: "fsma-204-deadline-extended", trending: true },
    { title: "EUDR Compliance: 6 Steps to Prepare for EU Deforestation Regulation", excerpt: "The EU Deforestation Regulation takes effect in 2025. Your comprehensive roadmap to compliance.", category: "Sustainability", readTime: "15 min read", date: "Jan 8, 2025", slug: "eudr-compliance-guide", trending: true },
    { title: "CSRD Reporting: Enterprise Guide to ESG Requirements in 2026", excerpt: "Corporate Sustainability Reporting Directive compliance guide for large enterprises with multi-region operations.", category: "ESG Compliance", readTime: "18 min read", date: "Jan 5, 2025", slug: "csrd-enterprise-guide", trending: false },
    { title: "AI-Powered Compliance: How Machine Learning Is Transforming GRC in 2025", excerpt: "How artificial intelligence and machine learning are revolutionizing governance, risk, and compliance management.", category: "Technology", readTime: "10 min read", date: "Jan 3, 2025", slug: "ai-compliance-transformation", trending: true },
    { title: "CSDDD: Understanding the EU Corporate Sustainability Due Diligence Directive", excerpt: "Complete breakdown of the CSDDD requirements and implementation timeline for global supply chain due diligence.", category: "Regulations", readTime: "14 min read", date: "Dec 28, 2024", slug: "csddd-due-diligence-guide", trending: false },
    { title: "Supply Chain Traceability Best Practices for 2025", excerpt: "Modern traceability strategies that go beyond compliance to create competitive advantage and consumer trust.", category: "Best Practices", readTime: "11 min read", date: "Dec 22, 2024", slug: "traceability-best-practices-2025", trending: false },
  ];

  const guides = [
    { title: "EUDR Implementation Roadmap", description: "Step-by-step guide to achieving EU Deforestation Regulation compliance with due diligence and supplier verification.", type: "Step-by-Step Guide", pages: "18 pages", slug: "eudr-implementation-roadmap", updated: "January 2025", category: "Sustainability" },
    { title: "ESG Data Collection Framework", description: "Template and toolkit for collecting, validating, and reporting ESG data across your organization.", type: "Template & Toolkit", pages: "14 pages", slug: "esg-data-collection-framework", updated: "January 2025", category: "ESG Reporting" },
    { title: "AI Compliance Automation Playbook", description: "Strategic playbook for leveraging AI and machine learning to automate GRC processes and reduce compliance burden.", type: "Strategic Playbook", pages: "20 pages", slug: "ai-compliance-automation-playbook", updated: "January 2025", category: "Technology" },
    { title: "Complete Supplier Onboarding Checklist", description: "Checklist for vetting and onboarding new suppliers with compliance requirements.", type: "Interactive Checklist", pages: "8 pages", slug: "supplier-onboarding", updated: "December 2024", category: "Supplier Management" },
    { title: "Multi-Region Compliance Playbook", description: "Navigate compliance requirements across different regions and jurisdictions.", type: "Strategic Playbook", pages: "24 pages", slug: "multi-region-compliance", updated: "December 2024", category: "Global Compliance" },
    { title: "Audit Preparation Workbook", description: "Interactive workbook to prepare your team for regulatory audits and inspections.", type: "Interactive Workbook", pages: "16 pages", slug: "audit-preparation", updated: "December 2024", category: "Audit Readiness" },
  ];

  const webinars = [
    { title: "FSMA 204 Deadline Extension: Updated Implementation Strategies", date: "Feb 12, 2025", time: "2:00 PM EST", speaker: "Dr. Rachel Morrison, Regulatory Affairs Expert" },
    { title: "EUDR Compliance: Practical Steps for Supply Chain Due Diligence", date: "Feb 19, 2025", time: "1:00 PM EST", speaker: "Marcus Chen, Sustainability Director" },
    { title: "AI in GRC: Transforming Compliance Operations in 2025", date: "Feb 26, 2025", time: "2:00 PM EST", speaker: "James Liu, Chief Technology Officer" },
    { title: "CSRD Readiness: Preparing for 2026 ESG Reporting Requirements", date: "Mar 5, 2025", time: "1:00 PM EST", speaker: "Sarah Thompson, ESG Compliance Lead" },
  ];

  const categoryIcon = (cat: string) => {
    switch (cat) {
      case "Regulations":
      case "Food Safety":
        return Shield;
      case "Sustainability":
      case "ESG Reporting":
        return Leaf;
      case "ESG Compliance":
        return TrendingUp;
      case "Technology":
        return Brain;
      case "Global Compliance":
        return Globe;
      default:
        return FileText;
    }
  };

  const categoryTone = (cat: string) => {
    switch (cat) {
      case "Regulations":
      case "Food Safety":
        return "teal" as const;
      case "Sustainability":
      case "ESG Reporting":
        return "green" as const;
      case "ESG Compliance":
        return "violet" as const;
      case "Technology":
        return "amber" as const;
      default:
        return "navy" as const;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Compliance Resources & Guides | FSMA 204, EUDR, CSRD | TraceR2C"
        description="Enterprise compliance resources for 2025-2026 regulations: FSMA 204, EU Deforestation Regulation, CSRD ESG reporting, AI-powered GRC automation."
        canonicalUrl="https://tracer2c.com/resources"
        structuredData={resourcesPageSchema}
      />

      <PageHero
        eyebrow="Resources · 05"
        meta="UPDATED JAN 2025"
        title="Master compliance."
        accent="Drive results."
        subtitle="Expert resources for FSMA 204, EUDR, CSRD, and the 2025–2026 regulatory wave. Practical guides, checklists, and field insights from compliance leaders."
      >
        <div className="mx-auto mt-2 flex max-w-xl items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            <Input
              placeholder="Search FSMA 204, EUDR, CSRD…"
              className="border-white/15 bg-white/[0.06] pl-10 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
          </div>
          <Button
            size="lg"
            className="bg-teal-500 text-navy-950 hover:bg-teal-400 font-semibold"
          >
            Search
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            Popular:
          </span>
          {["FSMA 204", "EUDR 2025", "CSRD Reporting", "AI Compliance"].map((t) => (
            <span
              key={t}
              className="cursor-pointer rounded-sm border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 hover:border-teal-400/50 hover:text-teal-300 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Featured */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel index="01">Featured resources</SectionLabel>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                Essential 2025 compliance guides.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our most comprehensive resources for navigating the latest regulatory wave.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredContent.map((c, i) => {
              const Icon = categoryIcon(c.category);
              const tone = categoryTone(c.category);
              return (
                <BracketCard key={c.slug} className="p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <ClassyIcon icon={Icon} tone={tone} size="md" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                      Featured · 0{i + 1}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-700 mb-3">
                    {c.type}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy-900 leading-tight mb-3 group-hover:text-teal-700 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {c.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-5 border-t border-dashed border-gray-200">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {c.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {c.author}
                    </span>
                  </div>
                  <Link to={`/resources/blog/${c.slug}`}>
                    <Button className="w-full bg-navy-900 text-white hover:bg-navy-800">
                      Access guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </BracketCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabs: Articles & Guides */}
      <section className="py-24 bg-gray-50/60 border-y border-gray-200/60">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="blog">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <SectionLabel index="02">All resources</SectionLabel>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                  Browse by format.
                </h2>
              </div>
              <TabsList className="grid grid-cols-2 bg-white border border-gray-200">
                <TabsTrigger value="blog" className="px-6">
                  <BookOpen className="h-4 w-4 mr-2" strokeWidth={1.75} />
                  Articles
                </TabsTrigger>
                <TabsTrigger value="guides" className="px-6">
                  <FileText className="h-4 w-4 mr-2" strokeWidth={1.75} />
                  Guides
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((p, i) => {
                  const Icon = categoryIcon(p.category);
                  const tone = categoryTone(p.category);
                  return (
                    <BracketCard key={p.slug} className="p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-5">
                        <ClassyIcon icon={Icon} tone={tone} size="sm" />
                        {p.trending && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-700 border border-amber-500/30 bg-amber-50/60 px-2 py-0.5 rounded-sm">
                            <TrendingUp className="h-3 w-3" strokeWidth={2} />
                            Trending
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                        {p.category} · 0{i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-navy-900 leading-snug mb-3 group-hover:text-teal-700 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5 flex-1">
                        {p.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-dashed border-gray-200">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                          {p.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                          {p.readTime}
                        </span>
                      </div>
                      <Link to={`/resources/blog/${p.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Read article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </BracketCard>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((g, i) => {
                  const Icon = categoryIcon(g.category);
                  const tone = categoryTone(g.category);
                  return (
                    <BracketCard key={g.slug} className="p-7">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                          <ClassyIcon icon={Icon} tone={tone} size="md" />
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                              {g.type} · {g.pages}
                            </div>
                            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-700 mt-1">
                              Updated {g.updated}
                            </div>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                        {g.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{g.description}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link to={`/resources/guide/${g.slug}`} className="flex-1">
                          <Button className="w-full bg-navy-900 text-white hover:bg-navy-800">
                            View guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="flex-1">
                          <Download className="mr-2 h-4 w-4" strokeWidth={1.75} />
                          PDF
                        </Button>
                      </div>
                    </BracketCard>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <SectionLabel index="03">Live sessions</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Upcoming compliance webinars.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join our experts for live sessions on 2025's most critical compliance topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {webinars.map((w, i) => (
              <BracketCard key={i} className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <ClassyIcon icon={Mic} tone="violet" size="md" />
                  <div className="text-right font-mono text-[10px] uppercase tracking-[0.2em]">
                    <div className="text-violet-700">{w.date}</div>
                    <div className="text-gray-500 mt-1">{w.time}</div>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 leading-snug mb-3">
                  {w.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 pt-4 border-t border-dashed border-gray-200">
                  <User className="h-4 w-4 text-violet-600" strokeWidth={1.75} />
                  {w.speaker}
                </div>
                <Button variant="outline" className="w-full">
                  Register
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — uses dark surface, like CTA banner */}
      <section className="relative isolate overflow-hidden bg-ocean-base text-ocean-fg py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--teal-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal-400)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          }}
        />
        <div className="container relative mx-auto px-6">
          <div className="relative mx-auto max-w-2xl text-center">
            {[
              "-top-3 -left-3 border-t-2 border-l-2 rounded-tl-lg",
              "-top-3 -right-3 border-t-2 border-r-2 rounded-tr-lg",
              "-bottom-3 -left-3 border-b-2 border-l-2 rounded-bl-lg",
              "-bottom-3 -right-3 border-b-2 border-r-2 rounded-br-lg",
            ].map((p, i) => (
              <span key={i} aria-hidden="true" className={`pointer-events-none absolute h-5 w-5 border-teal-400/70 ${p}`} />
            ))}
            <div className="px-4 py-4">
              <div className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-teal-300/90">
                <span className="h-px w-6 bg-teal-400/50" />
                Stay updated
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                The latest compliance insights, weekly.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/65">
                FSMA 204, EUDR, CSRD, and emerging 2025–2026 regulations — delivered to your inbox.
              </p>
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  placeholder="Enter your work email"
                  className="border-white/15 bg-white/[0.06] text-white placeholder:text-white/40 backdrop-blur-sm"
                />
                <Button
                  size="lg"
                  className="bg-teal-500 text-navy-950 hover:bg-teal-400 font-semibold whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                Join 12,000+ compliance professionals · unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
