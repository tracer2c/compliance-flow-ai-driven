import SEOHead from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IntegrationGlobe } from "@/components/IntegrationGlobe";
import { organizationSchema } from "@/lib/structuredData";
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Zap,
  Settings
} from "lucide-react";

const Integrations = () => {
  const integrationsSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TraceR2C API & Integrations",
    "applicationCategory": "BusinessApplication",
    "description": "Connect TraceR2C with your existing tech stack. RESTful API, real-time webhooks, and pre-built integrations with enterprise systems.",
    "featureList": [
      "RESTful API with OpenAPI 3.0",
      "Real-time Webhooks",
      "Custom Integration Framework",
      "Pre-built Enterprise Connectors",
      "AWS, Azure, Google Cloud Integration",
      "ERP System Connectivity"
    ],
    "author": organizationSchema
  };

  const apiFeatures = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Comprehensive REST API with OpenAPI 3.0 specification",
      features: ["JSON responses", "Rate limiting", "Webhooks", "SDK support"]
    },
    {
      icon: Zap,
      title: "Real-time Webhooks",
      description: "Get instant notifications for compliance events and document updates",
      features: ["Event streaming", "Retry logic", "Signature verification", "Custom endpoints"]
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Build custom integrations with our flexible API framework",
      features: ["Custom fields", "Business logic", "Data transformation", "White-label options"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="API & Integrations | Connect Your Tech Stack | TraceR2C"
        description="Connect TraceR2C with your existing systems. RESTful API, real-time webhooks, pre-built integrations with AWS, Azure, Google Cloud, and enterprise ERPs."
        keywords="API integrations, supply chain API, compliance software integrations, RESTful API, webhooks, ERP integrations, cloud integrations"
        canonicalUrl="https://tracer2c.com/integrations"
        structuredData={integrationsSchema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Enterprise Integrations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Connect Your
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Entire Tech Stack
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Seamlessly integrate with your existing POS, ERP, CRM, and storage systems. 
              Our platform connects with 100+ enterprise applications out of the box.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                View API Docs
                <Code className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 font-semibold px-8 py-4">
                Request Integration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Globe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Enterprise Systems We Integrate With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect seamlessly with your existing CRM, ERP, POS, Storage, E-signature, and Identity systems. 
              Each floating cube represents a platform in our integration ecosystem, all connected to TraceR2C at the center.
            </p>
          </div>

          <IntegrationGlobe />
        </div>
      </section>

      {/* API & Developer Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Developer-First Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build custom integrations with our comprehensive API suite and developer tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Code Example */}
          <Card className="enterprise-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Quick Start Example
              </CardTitle>
              <CardDescription>
                Get started with our API in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-navy-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="text-gray-400"># Install the TraceR2C SDK</div>
                <div className="text-white">npm install @tracer2c/sdk</div>
                <br />
                <div className="text-gray-400"># Initialize the client</div>
                <div className="text-white">const client = new TraceR2C({'{'}</div>
                <div className="text-white ml-4">apiKey: 'your-api-key',</div>
                <div className="text-white ml-4">region: 'us-east-1'</div>
                <div className="text-white">{'}'});</div>
                <br />
                <div className="text-gray-400"># Upload a compliance document</div>
                <div className="text-white">const result = await client.documents.upload({'{'}</div>
                <div className="text-white ml-4">file: documentFile,</div>
                <div className="text-white ml-4">type: 'certificate',</div>
                <div className="text-white ml-4">supplier: 'supplier-id'</div>
                <div className="text-white">{'}'});</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start integrating with our comprehensive API documentation and 
              pre-built connectors. Get up and running in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                Browse API Docs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 font-semibold px-8 py-4">
                Request Custom Integration
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;