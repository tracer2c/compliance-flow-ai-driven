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
  Globe,
  Brain,
  Zap,
  Activity
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

            {/* Dynamic AI-Powered Workflow */}
            <div className="glass-card rounded-2xl p-8 max-w-6xl mx-auto relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-blue-50/20 rounded-2xl"></div>
              
              {/* Animated Particles */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>

              <div className="relative z-10">
                {/* Hub and Spoke Layout */}
                <div className="relative w-full h-96 mx-auto">
                  
                  {/* Central AI Agent */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative group cursor-pointer">
                      {/* AI Agent Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>
                      
                      {/* AI Agent Core */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse group-hover:scale-110 transition-all duration-300">
                        <Brain className="h-10 w-10 text-white animate-pulse" />
                        
                        {/* Neural Network Lines */}
                        <div className="absolute inset-0 rounded-full border-2 border-teal-300/50 animate-spin" style={{ animationDuration: '8s' }}></div>
                        <div className="absolute inset-2 rounded-full border border-blue-300/30 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                      </div>
                      
                      {/* AI Agent Label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-semibold text-navy-700 bg-white/80 px-2 py-1 rounded-md shadow-sm">
                          AI Agent
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Component 1: Buyers & Suppliers (Top) */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 group">
                    <div className="relative">
                      {/* Connection Line */}
                      <div className="absolute top-full left-1/2 w-0.5 h-24 bg-gradient-to-b from-teal-400 to-transparent transform -translate-x-1/2">
                        {/* Flow Indicator */}
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full transform -translate-x-1/2 animate-pulse">
                          <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group-hover:scale-105" style={{ animationDelay: '0.1s' }}>
                        <Users className="h-8 w-8 text-teal-600" />
                      </div>
                      <div className="text-center mt-3">
                        <h4 className="font-semibold text-navy-900 text-sm">Buyers & Suppliers</h4>
                        <p className="text-xs text-gray-600 mt-1">Multi-tenant collaboration</p>
                      </div>
                    </div>
                  </div>

                  {/* Component 2: ComplianceFlow (Right) */}
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 group">
                    <div className="relative">
                      {/* Connection Line */}
                      <div className="absolute top-1/2 right-full w-24 h-0.5 bg-gradient-to-l from-navy-400 to-transparent transform -translate-y-1/2">
                        {/* Flow Indicator */}
                        <div className="absolute top-1/2 right-0 w-2 h-2 bg-navy-400 rounded-full transform -translate-y-1/2 animate-pulse">
                          <div className="absolute inset-0 bg-navy-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group-hover:scale-105" style={{ animationDelay: '0.2s' }}>
                        <FileText className="h-8 w-8 text-navy-600" />
                      </div>
                      <div className="text-center mt-3">
                        <h4 className="font-semibold text-navy-900 text-sm">ComplianceFlow</h4>
                        <p className="text-xs text-gray-600 mt-1">Document management</p>
                      </div>
                    </div>
                  </div>

                  {/* Component 3: Analytics (Bottom Right) */}
                  <div className="absolute bottom-4 right-8 group">
                    <div className="relative">
                      {/* Connection Line */}
                      <div className="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-green-400 to-transparent transform -translate-x-1/2 rotate-12">
                        {/* Flow Indicator */}
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 animate-pulse">
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group-hover:scale-105" style={{ animationDelay: '0.3s' }}>
                        <Activity className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="text-center mt-3">
                        <h4 className="font-semibold text-navy-900 text-sm">Clear Insight</h4>
                        <p className="text-xs text-gray-600 mt-1">AI-powered analytics</p>
                      </div>
                    </div>
                  </div>

                  {/* Component 4: Promotion Channels (Bottom Left) */}
                  <div className="absolute bottom-4 left-8 group">
                    <div className="relative">
                      {/* Connection Line */}
                      <div className="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-purple-400 to-transparent transform -translate-x-1/2 -rotate-12">
                        {/* Flow Indicator */}
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 animate-pulse">
                          <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group-hover:scale-105" style={{ animationDelay: '0.4s' }}>
                        <Zap className="h-8 w-8 text-purple-600" />
                      </div>
                      <div className="text-center mt-3">
                        <h4 className="font-semibold text-navy-900 text-sm">Promotion Channels</h4>
                        <p className="text-xs text-gray-600 mt-1">Governed outreach</p>
                      </div>
                    </div>
                  </div>

                  {/* Data Flow Visualization */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Orbital Rings */}
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-teal-200/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-blue-200/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>

                {/* AI Capabilities Banner */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-blue-50 px-4 py-2 rounded-full border border-teal-200">
                    <Brain className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-navy-700">AI orchestrates intelligent workflows across all compliance touchpoints</span>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
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