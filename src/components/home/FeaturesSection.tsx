import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Globe, 
  Shield, 
  FileText,
  Activity,
  Users,
  BarChart3,
  Bell,
  Search,
  ArrowRight
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      title: "AI-Powered Insights",
      subtitle: "New",
      description: "Leverage artificial intelligence for predictive compliance analytics and automated risk assessment.",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Multi-Region Support", 
      subtitle: "Global",
      description: "Built for global operations with localized compliance requirements and data residency.",
      icon: Globe,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Enterprise Security",
      subtitle: "Secure", 
      description: "Bank-grade security with end-to-end encryption and zero-trust architecture.",
      icon: Shield,
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const features = [
    {
      title: "Document Management",
      description: "Automated metadata capture, version control, digital signatures, bulk operations",
      icon: FileText,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Compliance Tracking",
      description: "Real-time monitoring, risk assessment, compliance scoring, automated reporting",
      icon: Activity,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Role-Based Access",
      description: "Buyer/supplier/reviewer dashboards, granular permissions, multi-tenant, SSO, audit logs",
      icon: Users,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Analytics & Reporting",
      description: "Custom dashboards, exportable reports, trend analysis, performance metrics",
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Smart Alerts",
      description: "Expiry notifications, risk alerts, custom triggers, multi-channel delivery",
      icon: Bell,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Audit Trail",
      description: "Complete history, immutable records, regulatory compliance, digital evidence",
      icon: Search,
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const pillarContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const pillarItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-700">
            Next-Generation Compliance Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Three Pillars of Enterprise Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your supply chain documentation with intelligent automation, 
            real-time insights, and enterprise-grade security.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pillarContainerVariants}
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={pillarItemVariants}
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100"
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <pillar.icon className="h-8 w-8" />
                </motion.div>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <h3 className="text-xl font-bold text-navy-900">
                    {pillar.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    {pillar.subtitle}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Grid */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-display font-bold text-navy-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Comprehensive Feature Set
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={featureContainerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={featureItemVariants}
              >
                <motion.div 
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                  whileHover={{ y: -4 }}
                >
                  <motion.div 
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-hero rounded-2xl p-12 text-white"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={ctaVariants}
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Ready to Transform Your Compliance Management?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust TraceR2C for their supply chain compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://compliance.tracer2c.com" target="_self">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
