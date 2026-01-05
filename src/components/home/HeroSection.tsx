import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  ArrowRight, 
  Play,
  Lock,
  Users,
  FileText,
  ChevronDown
} from "lucide-react";

const HeroSection = () => {
  const trustBadges = [
    { icon: Lock, text: "SSO/SAML" },
    { icon: Users, text: "RBAC" },
    { icon: FileText, text: "Audit Logs" },
    { icon: Shield, text: "Encryption" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative flex-1 flex items-center">
        <div className="py-20 lg:py-32 w-full">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Badge */}
            <Badge 
              variant="secondary" 
              className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise-Grade Compliance Platform
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              Make compliance operational,
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                measurable, and proactive.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              TraceR2C transforms compliance from reactive documentation to proactive risk management—giving regulated industries real-time visibility, predictive insights, and audit-ready controls across every supplier, document, and workflow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/know-more">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  See how it works
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <badge.icon className="h-5 w-5 text-teal-300" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to explore */}
      <div className="pb-8 text-center">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;