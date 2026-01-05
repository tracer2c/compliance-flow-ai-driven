import { Badge } from "@/components/ui/badge";
import { TrendingDown, Clock, AlertCircle, Database } from "lucide-react";

const TrustStatsSection = () => {
  const stats = [
    {
      number: "60%",
      label: "Less compliance chasing",
      icon: TrendingDown,
      description: "Automated requests + reminders reduce manual follow-ups."
    },
    {
      number: "40%",
      label: "Faster audit prep",
      icon: Clock,
      description: "Centralized evidence, approvals, and logs—always ready."
    },
    {
      number: "0",
      label: "Expired doc surprises",
      icon: AlertCircle,
      description: "Expiry forecasting and alerts before risk becomes incident."
    },
    {
      number: "1",
      label: "Single source of truth",
      icon: Database,
      description: "Suppliers, documents, risk—permissioned and measurable."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            Designed for enterprise credibility
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Outcomes that leadership understands.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reduce operational drag, prevent compliance incidents, and walk into audits with calm confidence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/30 transition-colors">
                  <stat.icon className="h-7 w-7 text-teal-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-teal-300 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
