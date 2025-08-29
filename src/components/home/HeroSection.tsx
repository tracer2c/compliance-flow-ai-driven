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

            {/* Professional AI Workflow Diagram */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 max-w-7xl mx-auto relative shadow-2xl border border-white/20">
              <div className="relative w-full h-[600px] mx-auto">
                
                {/* Central AI Agent */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="relative group">
                    {/* Subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl scale-150"></div>
                    
                    {/* Main AI Agent Card */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Brain className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-gray-800 text-lg">AI Agent</h3>
                          <p className="text-sm text-gray-600 mt-1">Intelligent Orchestration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component 1: Buyers & Suppliers (Top Left) */}
                <div className="absolute top-8 left-16 group">
                  <div className="relative">
                    {/* Connection Line to AI Agent */}
                    <svg className="absolute top-1/2 left-full w-32 h-20 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
                      <path
                        d="M 0 10 Q 80 10 128 40"
                        stroke="#10b981"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                      {/* Flow indicator */}
                      <circle cx="64" cy="25" r="3" fill="#10b981" className="animate-pulse" />
                    </svg>
                    
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 min-w-[200px]">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-base">Buyers & Suppliers</h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">Multi-tenant collaboration platform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component 2: ComplianceFlow (Top Right) */}
                <div className="absolute top-8 right-16 group">
                  <div className="relative">
                    {/* Connection Line to AI Agent */}
                    <svg className="absolute top-1/2 right-full w-32 h-20 pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
                      <path
                        d="M 128 10 Q 48 10 0 40"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                      {/* Flow indicator */}
                      <circle cx="64" cy="25" r="3" fill="#3b82f6" className="animate-pulse" />
                    </svg>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 min-w-[200px]">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-base">ComplianceFlow</h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">Document management & workflow</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component 3: Clear Insight (Bottom Left) */}
                <div className="absolute bottom-8 left-16 group">
                  <div className="relative">
                    {/* Connection Line to AI Agent */}
                    <svg className="absolute bottom-1/2 left-full w-32 h-20 pointer-events-none" style={{ transform: 'translateY(50%)' }}>
                      <path
                        d="M 0 10 Q 80 10 128 -20"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                      {/* Flow indicator */}
                      <circle cx="64" cy="-5" r="3" fill="#8b5cf6" className="animate-pulse" />
                    </svg>
                    
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 min-w-[200px]">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Activity className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-base">Clear Insight</h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">AI-powered analytics & insights</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component 4: Promotion Channels (Bottom Right) */}
                <div className="absolute bottom-8 right-16 group">
                  <div className="relative">
                    {/* Connection Line to AI Agent */}
                    <svg className="absolute bottom-1/2 right-full w-32 h-20 pointer-events-none" style={{ transform: 'translateY(50%)' }}>
                      <path
                        d="M 128 10 Q 48 10 0 -20"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                      {/* Flow indicator */}
                      <circle cx="64" cy="-5" r="3" fill="#f59e0b" className="animate-pulse" />
                    </svg>
                    
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 min-w-[200px]">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-base">Promotion Channels</h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">Governed outreach & campaigns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">AI orchestrates intelligent workflows across all compliance touchpoints</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
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