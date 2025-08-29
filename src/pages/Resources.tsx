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
  Star
} from "lucide-react";

const Resources = () => {

  const featuredContent = [
    {
      type: "Guide",
      title: "Audit-Ready in 30 Days",
      description: "Complete step-by-step guide to achieving audit readiness with automated compliance workflows",
      readTime: "15 min read",
      category: "Implementation",
      featured: true,
      slug: "audit-ready-30-days"
    },
    {
      type: "Whitepaper", 
      title: "Global Data Residency for Compliance Teams",
      description: "Navigate international data protection requirements with region-specific compliance strategies",
      readTime: "25 min read", 
      category: "Compliance",
      featured: true,
      slug: "global-data-residency"
    },
    {
      type: "Case Study",
      title: "Measuring Incrementality for Promotions in Regulated Retail",
      description: "How a major retailer achieved 40% improvement in promotion ROI while maintaining compliance",
      readTime: "12 min read",
      category: "Analytics",
      featured: true,
      slug: "promotion-incrementality-retail"
    }
  ];

  const blogPosts = [
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
      title: "Complete Supplier Onboarding Checklist",
      description: "Comprehensive checklist for vetting and onboarding new suppliers with compliance requirements",
      type: "Interactive Checklist",
      pages: "8 pages",
      slug: "supplier-onboarding"
    },
    {
      title: "Multi-Region Compliance Playbook",
      description: "Navigate compliance requirements across different regions and jurisdictions",
      type: "Strategic Playbook", 
      pages: "24 pages",
      slug: "multi-region-compliance"
    },
    {
      title: "Audit Preparation Workbook",
      description: "Interactive workbook to prepare your team for regulatory audits and inspections",
      type: "Interactive Workbook",
      pages: "16 pages",
      slug: "audit-preparation"
    },
    {
      title: "Document Retention Policy Template",
      description: "Customizable template for establishing document retention policies by industry",
      type: "Customizable Template",
      pages: "12 pages",
      slug: "document-retention"
    }
  ];

  const caseStudies = [
    {
      company: "Global Food Distributor",
      industry: "Food Service",
      challenge: "Manual processes causing 3-week audit preparation cycles",
      result: "Reduced audit prep to 3 days with 99% documentation accuracy",
      impact: "75% time savings, $2.3M annual cost reduction"
    },
    {
      company: "Pharmaceutical Manufacturer",
      industry: "Pharmaceuticals", 
      challenge: "Batch record management across 12 facilities",
      result: "Real-time batch tracking with automated compliance scoring",
      impact: "50% faster batch release, zero compliance violations"
    },
    {
      company: "Retail Chain",
      industry: "Retail",
      challenge: "Vendor compliance across 500+ suppliers",
      result: "Automated supplier scorecards and risk assessment",
      impact: "60% faster vendor onboarding, 85% reduction in compliance issues"
    }
  ];

  const webinars = [
    {
      title: "Compliance Automation: Beyond Basic Document Management",
      date: "January 18, 2025",
      time: "2:00 PM EST",
      speaker: "Sarah Chen, VP of Compliance"
    },
    {
      title: "Multi-Region Data Residency: A Compliance Perspective",
      date: "January 25, 2025", 
      time: "1:00 PM EST",
      speaker: "Michael Rodriguez, Solutions Architect"
    },
    {
      title: "ROI Measurement for Compliance Technology Investments",
      date: "February 1, 2025",
      time: "2:00 PM EST", 
      speaker: "Lisa Thompson, Customer Success Director"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Resource Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Learn. Implement.
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Succeed.
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive resources to help you master compliance automation, 
              implement best practices, and achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search resources..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm"
                />
              </div>
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful resources to accelerate your compliance journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredContent.map((content, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {content.type}
                    </Badge>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <CardTitle className="text-xl text-navy-900 group-hover:text-teal-700 transition-colors">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {content.readTime}
                    </div>
                    <span>{content.category}</span>
                  </div>
                  <Link to={`/resources/blog/${content.slug}`}>
                    <Button className="w-full group-hover:bg-teal-600 transition-colors">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
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
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Guides
              </TabsTrigger>
            </TabsList>

            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-lg text-navy-900 group-hover:text-teal-700 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link to={`/resources/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                  <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {guide.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{guide.pages}</span>
                      </div>
                      <CardTitle className="text-lg text-navy-900 group-hover:text-teal-700 transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3">
                        <Link to={`/resources/guide/${guide.slug}`}>
                          <Button className="w-full">
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Stay Ahead of Compliance Trends
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest compliance insights, regulatory updates, and best practices 
              delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/20 border-white/40 text-white placeholder:text-gray-300 backdrop-blur-sm"
              />
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;