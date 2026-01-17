import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  Download, 
  FileText, 
  Search,
  Clock,
  Star,
  Calendar,
  User,
  TrendingUp,
  Shield,
  Globe,
  Leaf,
  Brain
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { resourcesPageSchema, articleSchema } from "@/lib/structuredData";

const Resources = () => {

  const featuredContent = [
    {
      type: "Regulatory Guide",
      title: "FSMA 204 Complete Implementation Guide",
      description: "Everything you need to know about the FDA's extended traceability deadline (January 2027) and how to prepare your supply chain",
      readTime: "20 min read",
      category: "Food Safety",
      featured: true,
      slug: "fsma-204-implementation-2025",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
      author: "Dr. Rachel Morrison",
      date: "January 2025",
      value: "$3,500 value"
    },
    {
      type: "Compliance Checklist", 
      title: "EUDR Compliance Checklist for Global Supply Chains",
      description: "Step-by-step checklist for EU Deforestation Regulation compliance with due diligence requirements and risk assessment frameworks",
      readTime: "15 min read", 
      category: "Sustainability",
      featured: true,
      slug: "eudr-compliance-checklist",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop",
      author: "Marcus Chen",
      date: "January 2025",
      value: "$2,800 value"
    },
    {
      type: "Assessment Tool",
      title: "2026 ESG Reporting Readiness Assessment",
      description: "Comprehensive assessment tool for CSRD and corporate sustainability reporting requirements coming into effect in 2026",
      readTime: "25 min read",
      category: "ESG Compliance",
      featured: true,
      slug: "esg-reporting-readiness-2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      author: "Sarah Thompson",
      date: "January 2025",
      value: "$4,200 value"
    }
  ];

  const blogPosts = [
    {
      title: "FSMA 204 Compliance Deadline Extended: What It Means for Your Business",
      excerpt: "FDA extended the FSMA 204 traceability deadline to January 2027. Learn what this means for your implementation timeline and strategy.",
      category: "Regulations",
      readTime: "12 min read",
      date: "Jan 10, 2025",
      slug: "fsma-204-deadline-extended",
      author: "Dr. Rachel Morrison",
      trending: true
    },
    {
      title: "EUDR Compliance: 6 Steps to Prepare for EU Deforestation Regulation",
      excerpt: "The EU Deforestation Regulation takes effect in 2025. Here's your comprehensive roadmap to achieving compliance.",
      category: "Sustainability",
      readTime: "15 min read", 
      date: "Jan 8, 2025",
      slug: "eudr-compliance-guide",
      author: "Marcus Chen",
      trending: true
    },
    {
      title: "CSRD Reporting: Enterprise Guide to ESG Requirements in 2026",
      excerpt: "Corporate Sustainability Reporting Directive compliance guide for large enterprises with multi-region operations.",
      category: "ESG Compliance",
      readTime: "18 min read",
      date: "Jan 5, 2025",
      slug: "csrd-enterprise-guide",
      author: "Sarah Thompson",
      trending: false
    },
    {
      title: "AI-Powered Compliance: How Machine Learning Is Transforming GRC in 2025",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing governance, risk, and compliance management.",
      category: "Technology",
      readTime: "10 min read",
      date: "Jan 3, 2025",
      slug: "ai-compliance-transformation",
      author: "James Liu",
      trending: true
    },
    {
      title: "CSDDD: Understanding the EU Corporate Sustainability Due Diligence Directive",
      excerpt: "Complete breakdown of the CSDDD requirements and implementation timeline for global supply chain due diligence.",
      category: "Regulations",
      readTime: "14 min read",
      date: "Dec 28, 2024",
      slug: "csddd-due-diligence-guide",
      author: "Elena Rodriguez",
      trending: false
    },
    {
      title: "Supply Chain Traceability Best Practices for 2025",
      excerpt: "Modern traceability strategies that go beyond compliance to create competitive advantage and consumer trust.",
      category: "Best Practices",
      readTime: "11 min read",
      date: "Dec 22, 2024",
      slug: "traceability-best-practices-2025",
      author: "Michael Park",
      trending: false
    },
    {
      title: "The Future of Supply Chain Transparency",
      excerpt: "How AI and blockchain are revolutionizing compliance tracking in complex supply chains",
      category: "Technology",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      slug: "supply-chain-transparency"
    },
    {
      title: "FSMA 204: What Food Companies Need to Know",
      excerpt: "Breaking down the new FDA traceability requirements and implementation timeline",
      category: "Regulations",
      readTime: "12 min read", 
      date: "Dec 12, 2024",
      slug: "fsma-204"
    },
    {
      title: "Building a Culture of Compliance",
      excerpt: "Strategies for getting buy-in across your organization for compliance initiatives",
      category: "Best Practices",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      slug: "compliance-culture"
    },
    {
      title: "ROI of Automated Document Management", 
      excerpt: "Quantifying the business impact of digitizing your compliance workflows",
      category: "Business Impact",
      readTime: "15 min read",
      date: "Dec 8, 2024",
      slug: "automated-document-roi"
    }
  ];

  const guides = [
    {
      title: "EUDR Implementation Roadmap",
      description: "Step-by-step guide to achieving EU Deforestation Regulation compliance with due diligence statements and supplier verification",
      type: "Step-by-Step Guide",
      pages: "18 pages",
      slug: "eudr-implementation-roadmap",
      updated: "January 2025",
      category: "Sustainability"
    },
    {
      title: "ESG Data Collection Framework",
      description: "Comprehensive template and toolkit for collecting, validating, and reporting ESG data across your organization",
      type: "Template & Toolkit",
      pages: "14 pages",
      slug: "esg-data-collection-framework",
      updated: "January 2025",
      category: "ESG Reporting"
    },
    {
      title: "AI Compliance Automation Playbook",
      description: "Strategic playbook for leveraging AI and machine learning to automate GRC processes and reduce compliance burden",
      type: "Strategic Playbook",
      pages: "20 pages",
      slug: "ai-compliance-automation-playbook",
      updated: "January 2025",
      category: "Technology"
    },
    {
      title: "Complete Supplier Onboarding Checklist",
      description: "Comprehensive checklist for vetting and onboarding new suppliers with compliance requirements",
      type: "Interactive Checklist",
      pages: "8 pages",
      slug: "supplier-onboarding",
      updated: "December 2024",
      category: "Supplier Management"
    },
    {
      title: "Multi-Region Compliance Playbook",
      description: "Navigate compliance requirements across different regions and jurisdictions",
      type: "Strategic Playbook", 
      pages: "24 pages",
      slug: "multi-region-compliance",
      updated: "December 2024",
      category: "Global Compliance"
    },
    {
      title: "Audit Preparation Workbook",
      description: "Interactive workbook to prepare your team for regulatory audits and inspections",
      type: "Interactive Workbook",
      pages: "16 pages",
      slug: "audit-preparation",
      updated: "December 2024",
      category: "Audit Readiness"
    },
    {
      title: "Document Retention Policy Template",
      description: "Customizable template for establishing document retention policies by industry",
      type: "Customizable Template",
      pages: "12 pages",
      slug: "document-retention",
      updated: "December 2024",
      category: "Document Management"
    }
  ];

  const webinars = [
    {
      title: "FSMA 204 Deadline Extension: Updated Implementation Strategies",
      date: "February 12, 2025",
      time: "2:00 PM EST",
      speaker: "Dr. Rachel Morrison, Regulatory Affairs Expert"
    },
    {
      title: "EUDR Compliance: Practical Steps for Supply Chain Due Diligence",
      date: "February 19, 2025",
      time: "1:00 PM EST",
      speaker: "Marcus Chen, Sustainability Director"
    },
    {
      title: "AI in GRC: Transforming Compliance Operations in 2025",
      date: "February 26, 2025", 
      time: "2:00 PM EST",
      speaker: "James Liu, Chief Technology Officer"
    },
    {
      title: "CSRD Readiness: Preparing for 2026 ESG Reporting Requirements",
      date: "March 5, 2025",
      time: "1:00 PM EST",
      speaker: "Sarah Thompson, ESG Compliance Lead"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Regulations":
      case "Food Safety":
        return <Shield className="h-4 w-4" />;
      case "Sustainability":
        return <Leaf className="h-4 w-4" />;
      case "ESG Compliance":
      case "ESG Reporting":
        return <TrendingUp className="h-4 w-4" />;
      case "Technology":
        return <Brain className="h-4 w-4" />;
      case "Global Compliance":
        return <Globe className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Compliance Resources & Guides | FSMA 204, EUDR, CSRD | TraceR2C"
        description="Enterprise compliance resources for 2025-2026 regulations including FSMA 204 traceability, EU Deforestation Regulation, CSRD ESG reporting, and AI-powered GRC automation."
        keywords="FSMA 204 compliance, EUDR regulation 2025, CSRD reporting guide, ESG compliance resources, supply chain traceability, compliance automation, CSDDD due diligence"
        canonicalUrl="https://tracer2c.com/resources"
        structuredData={resourcesPageSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              2025 Compliance Resource Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Master Compliance.
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Drive Results.
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Expert resources for FSMA 204, EUDR, CSRD, and emerging 2025-2026 regulations. 
              Practical guides, checklists, and insights from compliance leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search FSMA 204, EUDR, CSRD..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm"
                />
              </div>
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold">
                Search
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="text-gray-300">Popular:</span>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">FSMA 204</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">EUDR 2025</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">CSRD Reporting</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 cursor-pointer">AI Compliance</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content - Enterprise Card Template */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800">Featured Resources</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                Essential 2025 Compliance Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Our most comprehensive resources for navigating the latest regulatory requirements
              </p>
            </div>
            <Link to="/resources" className="mt-4 md:mt-0">
              <Button variant="outline" className="group">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredContent.map((content, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge className="bg-teal-500 text-white border-0 shadow-lg">
                      {content.type}
                    </Badge>
                    <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {content.value}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    {getCategoryIcon(content.category)}
                    <span>{content.category}</span>
                    <span className="text-gray-300">•</span>
                    <span>{content.date}</span>
                  </div>
                  <CardTitle className="text-xl text-navy-900 group-hover:text-teal-700 transition-colors leading-tight">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {content.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {content.author}
                    </div>
                  </div>
                  <Link to={`/resources/blog/${content.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white shadow-md group-hover:shadow-lg transition-all">
                      Access Full Guide
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="blog" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-2">
                  All Resources
                </h2>
                <p className="text-gray-600">Browse by category or search for specific topics</p>
              </div>
              <TabsList className="grid w-full md:w-auto grid-cols-2 bg-white shadow-sm">
                <TabsTrigger value="blog" className="flex items-center gap-2 px-6">
                  <BookOpen className="h-4 w-4" />
                  Articles & Insights
                </TabsTrigger>
                <TabsTrigger value="guides" className="flex items-center gap-2 px-6">
                  <FileText className="h-4 w-4" />
                  Guides & Templates
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white">
                            {getCategoryIcon(post.category)}
                          </div>
                          <Badge variant="outline" className="text-xs font-medium">
                            {post.category}
                          </Badge>
                        </div>
                        {post.trending && (
                          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg text-navy-900 group-hover:text-teal-700 transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4 py-3 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <Link to={`/resources/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-700 transition-all">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center text-white">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <Badge variant="outline" className="text-xs font-medium mb-1">
                              {guide.type}
                            </Badge>
                            <div className="text-xs text-gray-500">{guide.pages}</div>
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                          Updated {guide.updated}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-navy-900 group-hover:text-teal-700 transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 py-3 border-t border-gray-100">
                        {getCategoryIcon(guide.category)}
                        <span>{guide.category}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/resources/guide/${guide.slug}`}>
                          <Button className="w-full bg-navy-900 hover:bg-navy-800">
                            View Full Guide
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Live Sessions</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Upcoming Compliance Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our experts for live sessions on 2025's most critical compliance topics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {webinars.map((webinar, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-2 text-purple-600 text-sm font-medium mb-2">
                    <Calendar className="h-4 w-4" />
                    {webinar.date} at {webinar.time}
                  </div>
                  <CardTitle className="text-lg text-navy-900 group-hover:text-purple-700 transition-colors">
                    {webinar.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-gray-600">
                    <User className="h-4 w-4" />
                    {webinar.speaker}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-700">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Stay Updated
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Get the Latest Compliance Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Weekly updates on FSMA 204, EUDR, CSRD, and emerging 2025-2026 regulations 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your work email"
                className="bg-white/20 border-white/40 text-white placeholder:text-gray-300 backdrop-blur-sm"
              />
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Join 12,000+ compliance professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;