import { Badge } from "@/components/ui/badge";
import { Zap, Clock, Shield, MapPin } from "lucide-react";

const TrustStatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Enterprise Clients",
      icon: Shield,
      description: "Fortune 500 companies trust TraceR2C"
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      icon: Clock,
      description: "Enterprise-grade reliability guarantee"
    },
    {
      number: "50M+",
      label: "Documents Processed",
      icon: Zap,
      description: "Seamlessly managing compliance at scale"
    },
    {
      number: "25+",
      label: "Countries Served",
      icon: MapPin,
      description: "Global compliance across regions"
    }
  ];

  const valueBadges = [
    "Real-time Tracking",
    "Audit-Ready",
    "Multi-Industry"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Trusted by Enterprise Leaders Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of organizations streamlining compliance with TraceR2C's 
            enterprise-grade platform built for scale and security.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-navy-700 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {valueBadges.map((badge, index) => (
            <Badge 
              key={index}
              variant="secondary" 
              className="px-4 py-2 text-sm font-medium bg-teal-100 text-teal-700 hover:bg-teal-200 transition-colors"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;