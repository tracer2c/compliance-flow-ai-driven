import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  ArrowRight, 
  Play,
  CheckCircle,
  Users,
  Clock,
  FileText,
  Globe
} from "lucide-react";

const HeroSection = () => {
  const trustBadges = [
    { icon: Shield, text: "SOC 2" },
    { icon: Shield, text: "SSO/SAML" },
    { icon: Shield, text: "Encryption" },
    { icon: Globe, text: "Data Residency" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Badge */}
            <Badge 
              variant="secondary" 
              className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise-Grade Compliance Platform
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Streamline Supply Chain
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Compliance & Precision Promotions
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              TraceR2C delivers enterprise-grade documentation, AI-powered insights, 
              and governed outreach—built for complex, multi-region operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-200">
                  <badge.icon className="h-5 w-5 text-teal-300" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Visual Schematic */}
            <div className="glass-card rounded-2xl p-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Buyers/Suppliers */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Buyers & Suppliers</h3>
                  <p className="text-sm text-gray-600">Multi-tenant collaboration</p>
                </div>

                {/* Arrows */}
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-teal-500 animate-pulse" />
                </div>

                {/* ComplianceFlow */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-navy-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">ComplianceFlow</h3>
                  <p className="text-sm text-gray-600">Document management</p>
                </div>
              </div>

              <div className="flex justify-center my-6">
                <ArrowRight className="h-8 w-8 text-teal-500 animate-pulse rotate-90" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Clear Insight */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Clear Insight Analytics</h3>
                  <p className="text-sm text-gray-600">Compliance health & efficiency</p>
                </div>

                {/* Promotion Channels */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Promotion Channels</h3>
                  <p className="text-sm text-gray-600">Governed outreach campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;