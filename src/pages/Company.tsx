import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  Award, 
  Target,
  Heart,
  Globe
} from "lucide-react";

const Company = () => {

  const values = [
    {
      icon: Target,
      title: "Compliance-First Thinking",
      description: "Every feature, every decision, every process is designed with compliance at its core."
    },
    {
      icon: Heart,
      title: "Customer Obsession", 
      description: "We succeed when our customers achieve their compliance goals efficiently and confidently."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We build for a world where compliance requirements vary by region, industry, and regulation."
    },
    {
      icon: Award,
      title: "Operational Excellence",
      description: "We hold ourselves to the same high standards we help our customers achieve."
    }
  ];

  const milestones = [
    { year: "2019", event: "TraceR2C LLC founded in Auburn, AL" },
    { year: "2020", event: "Launched ComplianceFlow platform" },
    { year: "2022", event: "Expanded to serve pharmaceutical industry" },
    { year: "2023", event: "Launched Clear Insight analytics platform" },
    { year: "2024", event: "500+ enterprise customers milestone" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              About TraceR2C LLC
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Making Compliance
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Operational & Measurable
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Founded in Auburn, Alabama, TraceR2C LLC transforms how regulated industries 
              manage compliance through intelligent automation and proactive insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  <strong className="text-navy-900">"Make compliance operational, measurable, and proactive."</strong>
                </p>
                <p className="text-gray-600 mb-6">
                  We believe compliance shouldn't be a burden or an afterthought. It should be 
                  seamlessly integrated into business operations, providing real-time visibility 
                  and predictive insights that help organizations stay ahead of regulatory requirements.
                </p>
                <p className="text-gray-600">
                  Our platform transforms compliance from reactive documentation to proactive 
                  risk management, helping regulated industries operate with confidence and efficiency.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-6">Why We Exist</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Regulatory complexity is increasing across all industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Manual compliance processes create risk and inefficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Organizations need real-time visibility into compliance health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Technology should make compliance easier, not harder</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide how we build products, serve customers, and work together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-navy-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in building the leading compliance automation platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <Card className="flex-1 enterprise-card">
                    <CardContent className="p-4">
                      <p className="text-gray-700 font-medium">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Compliance Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using TraceR2C to make compliance 
              operational, measurable, and proactive.
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

export default Company;