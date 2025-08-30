import SEOHead from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { organizationSchema, faqSchema } from "@/lib/structuredData";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Globe, 
  Users, 
  FileText, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Key,
  Database,
  Cloud,
  Zap
} from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify. Every access request is authenticated, authorized, and encrypted.",
      details: ["Multi-factor authentication", "Device trust verification", "Continuous monitoring", "Least privilege access"]
    },
    {
      icon: Lock,
      title: "End-to-End Encryption", 
      description: "AES-256 encryption for data at rest and in transit. Your data is protected at every step.",
      details: ["AES-256 encryption standard", "TLS 1.3 for data in transit", "Encrypted backups", "Zero-knowledge architecture"]
    },
    {
      icon: Eye,
      title: "SOC 2 Type II Compliant",
      description: "Independently audited and certified for security, availability, and confidentiality.",
      details: ["Annual SOC 2 audits", "Security controls monitoring", "Incident response procedures", "Compliance reporting"]
    },
    {
      icon: Users,
      title: "Advanced RBAC",
      description: "Role-based access control with granular permissions and audit trails.",
      details: ["Custom role definitions", "Granular permissions", "Access reviews", "Separation of duties"]
    },
    {
      icon: FileText,
      title: "Complete Audit Logs",
      description: "Immutable audit trails for every action, meeting regulatory requirements.",
      details: ["Tamper-proof logging", "Real-time monitoring", "Compliance reporting", "Data lineage tracking"]
    },
    {
      icon: Key,
      title: "SSO & SAML Integration",
      description: "Seamless integration with your existing identity providers and directory services.",
      details: ["SAML 2.0 support", "Active Directory integration", "LDAP compatibility", "Just-in-time provisioning"]
    }
  ];

  const deploymentOptions = [
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Multi-region cloud deployment with automatic scaling and 99.9% uptime SLA.",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Global CDN", "Disaster recovery"]
    },
    {
      icon: Server,
      title: "On-Premises",
      description: "Deploy within your own data center for maximum control and compliance.",
      features: ["Air-gapped networks", "Custom hardware", "Local data residency", "Full control"]
    },
    {
      icon: Database,
      title: "Private Cloud (VPC)",
      description: "Dedicated cloud infrastructure with enhanced security and isolation.",
      features: ["Dedicated instances", "Network isolation", "Custom security groups", "Enhanced monitoring"]
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified" },
    { name: "ISO 27001", status: "In Progress" },
    { name: "GDPR", status: "Compliant" },
    { name: "HIPAA", status: "Ready" },
    { name: "FedRAMP", status: "In Progress" }
  ];

  const combinedSchema = [organizationSchema, faqSchema];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Enterprise Security & Compliance | SOC 2 Certified | TraceR2C"
        description="Bank-grade security with zero-trust architecture, end-to-end encryption, and SOC 2 Type II compliance. Built for regulated industries and enterprise compliance."
        keywords="SOC 2 compliance, enterprise security platform, zero trust architecture, end-to-end encryption, compliance security, bank-grade security"
        canonicalUrl="https://tracer2c.com/security"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Enterprise Security
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Bank-Grade Security
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Built for Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Zero-trust architecture, end-to-end encryption, and comprehensive audit controls 
              designed for the most regulated industries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                Security Overview
                <Shield className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 font-semibold px-8 py-4">
                SOC 2 Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Enterprise-Grade Security Controls
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security framework protects your data and ensures 
              compliance with the most stringent regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Flexible Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the deployment model that best fits your security requirements 
              and regulatory compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Independently verified security and compliance certifications
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="enterprise-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                      <span className="font-medium text-navy-900">{cert.name}</span>
                      <Badge 
                        variant={cert.status === "Certified" || cert.status === "Compliant" ? "default" : "secondary"}
                        className={cert.status === "Certified" || cert.status === "Compliant" ? "bg-green-100 text-green-800" : ""}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Secure Your Compliance Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a security review with our team to discuss your specific 
              compliance requirements and security needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 font-semibold px-8 py-4">
                Download SOC 2 Report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;