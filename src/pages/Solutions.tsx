import SEOHead from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { organizationSchema } from "@/lib/structuredData";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  FileText, 
  Shield, 
  TrendingUp,
  Users,
  Zap,
  Building2,
  Truck,
  ShoppingCart,
  Factory,
  Pill,
  UtensilsCrossed
} from "lucide-react";

const Solutions = () => {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TraceR2C Industry Solutions",
    "applicationCategory": "BusinessApplication",
    "description": "Industry-specific compliance solutions for food service, pharmaceuticals, manufacturing, retail, logistics, and construction industries.",
    "featureList": [
      "Food Service Compliance (FDA, HACCP)",
      "Pharmaceutical Compliance (21 CFR Part 11, GMP)",
      "Manufacturing Quality Management (ISO 9001)",
      "Retail Product Safety Compliance",
      "Logistics DOT & Import/Export Compliance",
      "Construction Safety & Permit Management"
    ],
    "author": organizationSchema
  };

  const industries = [
    {
      icon: UtensilsCrossed,
      name: "Food Service",
      emoji: "🍽️",
      regulations: ["FDA Food Safety Modernization Act", "HACCP Requirements", "Nutritional Labeling"],
      documents: ["HACCP Plans", "Supplier Certifications", "Temperature Logs", "Allergen Declarations"],
      workflows: ["Ingredient Traceability", "Temperature Monitoring", "Supplier Audits"],
      kpis: "3x faster audit preparation, 95% documentation compliance"
    },
    {
      icon: Pill,
      name: "Pharmaceuticals",
      emoji: "💊", 
      regulations: ["FDA 21 CFR Part 11", "GMP Guidelines", "Drug Supply Chain Security Act"],
      documents: ["Batch Records", "COAs", "Stability Studies", "Chain of Custody"],
      workflows: ["Drug Serialization", "Temperature Control", "Batch Tracking"],
      kpis: "50% reduction in audit time, 99.8% serialization accuracy"
    },
    {
      icon: Factory,
      name: "Manufacturing",
      emoji: "🏭",
      regulations: ["ISO 9001", "OSHA Standards", "EPA Compliance"],
      documents: ["Quality Manuals", "Safety Data Sheets", "Calibration Records"],
      workflows: ["Quality Control", "Equipment Validation", "Change Control"],
      kpis: "40% faster documentation cycles, 98% on-time delivery"
    },
    {
      icon: ShoppingCart,
      name: "Retail",
      emoji: "🛍️",
      regulations: ["Consumer Product Safety", "FTC Guidelines", "State Sales Tax"],
      documents: ["Product Specifications", "Safety Certificates", "Vendor Agreements"],
      workflows: ["Product Recall Management", "Vendor Onboarding", "Quality Assurance"],
      kpis: "60% faster vendor onboarding, 25% reduction in compliance issues"
    },
    {
      icon: Truck,
      name: "Logistics",
      emoji: "🚛",
      regulations: ["DOT Regulations", "Import/Export Requirements", "Hazmat Rules"],
      documents: ["Bills of Lading", "Customs Documentation", "Driver Logs"],
      workflows: ["Shipment Tracking", "Driver Compliance", "Cross-Border Documentation"],
      kpis: "35% reduction in shipping delays, 90% documentation accuracy"
    },
    {
      icon: Building2,
      name: "Construction", 
      emoji: "🏗️",
      regulations: ["OSHA Construction Standards", "Building Codes", "Environmental Permits"],
      documents: ["Safety Plans", "Inspection Reports", "Material Certifications"],
      workflows: ["Safety Inspections", "Material Tracking", "Permit Management"],
      kpis: "45% fewer safety incidents, 30% faster permit approvals"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Industry Compliance Solutions | Food, Pharma, Manufacturing | TraceR2C"
        description="Industry-specific compliance solutions for food service, pharmaceuticals, manufacturing, retail, logistics & construction. Pre-built templates and automated workflows."
        keywords="industry compliance solutions, food service compliance, pharmaceutical compliance, manufacturing quality management, retail compliance, logistics compliance, construction safety"
        canonicalUrl="https://tracer2c.com/solutions"
        structuredData={solutionsSchema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Compliance Solutions for
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              From food service to pharmaceuticals, our platform adapts to your industry's 
              unique regulations, workflows, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each industry has unique compliance challenges. Our platform provides 
              tailored solutions with pre-built templates and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-navy-900 flex items-center gap-3">
                        <span className="text-3xl">{industry.emoji}</span>
                        {industry.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                      Key Regulations
                    </h4>
                    <ul className="space-y-3">
                      {industry.regulations.map((reg, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{reg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy-800 mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-teal-600" />
                      Common Documents
                    </h4>
                    <ul className="space-y-3">
                      {industry.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy-800 mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-teal-600" />
                      Automated Workflows
                    </h4>
                    <ul className="space-y-3">
                      {industry.workflows.map((workflow, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{workflow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 rounded-xl p-6">
                    <h4 className="font-semibold text-navy-800 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-teal-600" />
                      Typical Results
                    </h4>
                    <p className="text-gray-700 font-medium">{industry.kpis}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Industry Compliance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using TraceR2C to streamline 
              their compliance operations and reduce audit preparation time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://compliance.tracer2c.com" target="_self">
                <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;