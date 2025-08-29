import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Database, 
  Cloud, 
  CreditCard,
  Users,
  FileText,
  Smartphone,
  Globe,
  Lock,
  Zap,
  Settings
} from "lucide-react";

const Integrations = () => {
  const integrationCategories = [
    {
      id: "pos",
      name: "Point of Sale",
      icon: CreditCard,
      description: "Connect with leading POS systems for real-time transaction data",
      integrations: [
        { name: "Square", status: "Available", logo: "Square" },
        { name: "Shopify POS", status: "Available", logo: "Shopify" },
        { name: "Toast", status: "Available", logo: "Toast" },
        { name: "Lightspeed", status: "Available", logo: "Lightspeed" },
        { name: "Revel Systems", status: "Available", logo: "Revel" },
        { name: "NCR Aloha", status: "Available", logo: "NCR" }
      ]
    },
    {
      id: "erp",
      name: "ERP Systems",
      icon: Database,
      description: "Seamlessly integrate with enterprise resource planning platforms",
      integrations: [
        { name: "SAP", status: "Available", logo: "SAP" },
        { name: "Oracle NetSuite", status: "Available", logo: "Oracle" },
        { name: "Microsoft Dynamics", status: "Available", logo: "Microsoft" },
        { name: "Infor", status: "Available", logo: "Infor" },
        { name: "Epicor", status: "Available", logo: "Epicor" },
        { name: "Sage", status: "Available", logo: "Sage" }
      ]
    },
    {
      id: "crm",
      name: "CRM Platforms",
      icon: Users,
      description: "Sync customer data and compliance status across platforms",
      integrations: [
        { name: "Salesforce", status: "Available", logo: "Salesforce" },
        { name: "HubSpot", status: "Available", logo: "HubSpot" },
        { name: "Microsoft Dynamics CRM", status: "Available", logo: "Microsoft" },
        { name: "Pipedrive", status: "Available", logo: "Pipedrive" },
        { name: "Zoho CRM", status: "Available", logo: "Zoho" },
        { name: "SugarCRM", status: "Coming Soon", logo: "SugarCRM" }
      ]
    },
    {
      id: "storage",
      name: "Object Storage",
      icon: Cloud,
      description: "Store and manage documents across cloud storage platforms",
      integrations: [
        { name: "Amazon S3", status: "Available", logo: "AWS" },
        { name: "Google Cloud Storage", status: "Available", logo: "Google" },
        { name: "Azure Blob Storage", status: "Available", logo: "Azure" },
        { name: "Dropbox Business", status: "Available", logo: "Dropbox" },
        { name: "Box", status: "Available", logo: "Box" },
        { name: "OneDrive", status: "Available", logo: "OneDrive" }
      ]
    },
    {
      id: "esignature",
      name: "E-Signature",
      icon: FileText,
      description: "Digital signature integration for document workflows",
      integrations: [
        { name: "DocuSign", status: "Available", logo: "DocuSign" },
        { name: "Adobe Sign", status: "Available", logo: "Adobe" },
        { name: "HelloSign", status: "Available", logo: "HelloSign" },
        { name: "PandaDoc", status: "Available", logo: "PandaDoc" },
        { name: "SignNow", status: "Coming Soon", logo: "SignNow" },
        { name: "eSignLive", status: "Coming Soon", logo: "eSignLive" }
      ]
    },
    {
      id: "identity",
      name: "Identity Providers",
      icon: Lock,
      description: "SSO and identity management integration",
      integrations: [
        { name: "Active Directory", status: "Available", logo: "Microsoft" },
        { name: "Okta", status: "Available", logo: "Okta" },
        { name: "Auth0", status: "Available", logo: "Auth0" },
        { name: "Ping Identity", status: "Available", logo: "Ping" },
        { name: "OneLogin", status: "Available", logo: "OneLogin" },
        { name: "LDAP", status: "Available", logo: "LDAP" }
      ]
    }
  ];

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

      {/* Integration Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Pre-Built Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading enterprise platforms in minutes, not months. 
              Our integration marketplace covers every aspect of your compliance workflow.
            </p>
          </div>

          <Tabs defaultValue="pos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
              {integrationCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {integrationCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="enterprise-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-navy-900">{category.name}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {category.integrations.map((integration, index) => (
                        <div key={index} className="text-center group">
                          <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 mb-3 group-hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 border">
                              <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-600 font-medium truncate px-1">
                                  {integration.logo}
                                </span>
                              </div>
                            </div>
                            <h4 className="font-semibold text-sm text-navy-900 mb-2">{integration.name}</h4>
                            <Badge 
                              variant={integration.status === "Available" ? "default" : "secondary"}
                              className={integration.status === "Available" ? "bg-green-100 text-green-800 text-xs" : "text-xs"}
                            >
                              {integration.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
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