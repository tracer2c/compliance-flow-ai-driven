import SEOHead from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { organizationSchema, faqSchema } from "@/lib/structuredData";
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Database, 
  Clock, 
  Shield, 
  Zap,
  Star,
  Phone
} from "lucide-react";

const Pricing = () => {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TraceR2C Compliance Platform Pricing",
    "description": "Enterprise supply chain compliance software with transparent pricing plans for businesses of all sizes.",
    "provider": organizationSchema,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "TraceR2C Pricing Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "299",
          "priceCurrency": "USD",
          "description": "Perfect for small suppliers getting started with compliance"
        },
        {
          "@type": "Offer", 
          "name": "Professional Plan",
          "price": "899",
          "priceCurrency": "USD", 
          "description": "Ideal for growing businesses with complex compliance needs"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Plan", 
          "price": "2499",
          "priceCurrency": "USD",
          "description": "Comprehensive solution for large organizations"
        }
      ]
    }
  };

  const combinedSchema = [organizationSchema, pricingSchema, faqSchema];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small suppliers getting started with compliance",
      price: "299",
      period: "month", 
      popular: false,
      features: [
        "Up to 5 users",
        "10GB document storage", 
        "Basic compliance tracking",
        "Email support",
        "Standard SLA (99.0%)",
        "Core integrations (5)",
        "Basic reporting",
        "Mobile app access"
      ],
      limits: "Up to 1,000 documents/month",
      cta: "Start Free Trial"
    },
    {
      name: "Professional", 
      description: "Ideal for growing businesses with complex compliance needs",
      price: "899",
      period: "month",
      popular: true,
      features: [
        "Up to 25 users",
        "100GB document storage",
        "Advanced compliance tracking", 
        "Priority email & chat support",
        "Enhanced SLA (99.5%)",
        "Premium integrations (15)",
        "Custom dashboards",
        "API access",
        "Multi-region support",
        "Role-based permissions"
      ],
      limits: "Up to 10,000 documents/month",
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: "2,499", 
      period: "month",
      popular: false,
      features: [
        "Unlimited users",
        "1TB+ document storage",
        "Full compliance suite",
        "24/7 phone & priority support", 
        "Premium SLA (99.9%)",
        "All integrations included",
        "Advanced analytics",
        "Custom API development",
        "Global data residency",
        "SSO/SAML integration",
        "Dedicated customer success",
        "Custom training"
      ],
      limits: "Unlimited documents",
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    {
      name: "Clear Insight Analytics",
      price: "399",
      period: "month",
      description: "Advanced compliance health monitoring and operational efficiency analytics",
      features: [
        "Compliance scorecards",
        "SLA adherence tracking", 
        "Predictive analytics",
        "Custom KPI dashboards",
        "Automated reporting"
      ]
    },
    {
      name: "Target Promotion System",
      price: "599", 
      period: "month",
      description: "Policy-safe promotion campaigns with attribution and lift analysis",
      features: [
        "Audience cohorting",
        "Multi-channel delivery",
        "A/B testing framework",
        "Attribution modeling",
        "Compliance controls"
      ]
    },
    {
      name: "Premium Support",
      price: "299",
      period: "month", 
      description: "Dedicated support team with faster response times",
      features: [
        "24/7 phone support",
        "1-hour response time",
        "Dedicated account manager",
        "Priority feature requests",
        "Custom training sessions"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
    },
    {
      question: "What's included in the free trial?",
      answer: "All plans include a 14-day free trial with full access to features. No credit card required to start."
    },
    {
      question: "Do you offer custom enterprise pricing?", 
      answer: "Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team for a quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, ACH transfers, and wire transfers for enterprise accounts."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Enterprise Compliance Software Pricing | Free Trial | TraceR2C"
        description="Transparent pricing for enterprise supply chain compliance software. Starter at $299/mo, Professional at $899/mo, Enterprise at $2,499/mo. 14-day free trial."
        keywords="compliance software pricing, enterprise compliance costs, supply chain software pricing, compliance platform pricing, TraceR2C pricing"
        canonicalUrl="https://tracer2c.com/pricing"
        structuredData={combinedSchema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Enterprise Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Enterprise Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your compliance needs. All plans include our 
              core ComplianceFlow platform with enterprise-grade security.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`enterprise-card hover:shadow-enterprise-lg transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-teal-500 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1 font-semibold">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-navy-900 mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {tier.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-navy-900">${tier.price}</span>
                    <span className="text-gray-500">/{tier.period}</span>
                  </div>
                  <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
                    {tier.limits}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                    size="lg"
                  >
                    {tier.cta}
                    {tier.cta === "Contact Sales" ? <Phone className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Powerful Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your ComplianceFlow platform with specialized modules 
              for analytics, promotions, and premium support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl text-navy-900">{addon.name}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-navy-900">${addon.price}</div>
                      <div className="text-sm text-gray-500">/{addon.period}</div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {addon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {addon.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600">
              See what's included in each plan
            </p>
          </div>

          <Card className="enterprise-card max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-6 font-semibold text-navy-900">Features</th>
                      <th className="text-center p-6 font-semibold text-navy-900">Starter</th>
                      <th className="text-center p-6 font-semibold text-navy-900 bg-teal-50">Professional</th>
                      <th className="text-center p-6 font-semibold text-navy-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Users", "5", "25", "Unlimited"],
                      ["Document Storage", "10GB", "100GB", "1TB+"],
                      ["API Access", "❌", "✅", "✅"],
                      ["Custom Integrations", "❌", "Limited", "✅"],
                      ["SSO/SAML", "❌", "❌", "✅"],
                      ["24/7 Support", "❌", "❌", "✅"],
                      ["SLA", "99.0%", "99.5%", "99.9%"]
                    ].map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-6 font-medium text-gray-900">{row[0]}</td>
                        <td className="p-6 text-center text-gray-700">{row[1]}</td>
                        <td className="p-6 text-center text-gray-700 bg-teal-50">{row[2]}</td>
                        <td className="p-6 text-center text-gray-700">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="enterprise-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using TraceR2C to streamline 
              their compliance operations. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;