import { Badge } from "@/components/ui/badge";
import { TrendingDown, Clock, AlertCircle, Database } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ value, suffix = "", duration = 2000 }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const TrustStatsSection = () => {
  const stats = [
    {
      value: 60,
      suffix: "%",
      label: "Less compliance chasing",
      icon: TrendingDown,
      description: "Automated requests + reminders reduce manual follow-ups."
    },
    {
      value: 40,
      suffix: "%",
      label: "Faster audit prep",
      icon: Clock,
      description: "Centralized evidence, approvals, and logs—always ready."
    },
    {
      value: 0,
      suffix: "",
      label: "Expired doc surprises",
      icon: AlertCircle,
      description: "Expiry forecasting and alerts before risk becomes incident."
    },
    {
      value: 1,
      suffix: "",
      label: "Single source of truth",
      icon: Database,
      description: "Suppliers, documents, risk—permissioned and measurable."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge 
            variant="secondary" 
            className="mb-6 bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200 transition-colors"
          >
            Designed for enterprise credibility
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6">
            Outcomes that leadership understands.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reduce operational drag, prevent compliance incidents, and walk into audits with calm confidence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={cardVariants}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-1">
                <motion.div 
                  className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <stat.icon className="h-7 w-7 text-teal-600" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold text-teal-600 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
