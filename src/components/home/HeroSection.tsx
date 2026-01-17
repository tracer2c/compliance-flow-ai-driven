import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.0
      }
    }
  };

  const badgeItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex flex-col">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative flex-1 flex items-center">
        <div className="py-20 lg:py-32 w-full">
          <motion.div 
            className="max-w-5xl mx-auto text-center text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge 
                variant="secondary" 
                className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <motion.span 
                  className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                />
                Enterprise-Grade Compliance Platform
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              Make compliance operational,
              <motion.span 
                className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                measurable, and proactive.
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto"
              variants={itemVariants}
            >
              TraceR2C transforms compliance from reactive documentation to proactive risk management—giving regulated industries real-time visibility, predictive insights, and audit-ready controls across every supplier, document, and workflow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Request a demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/know-more">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    See how it works
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6"
              variants={badgeContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 text-gray-300"
                  variants={badgeItemVariants}
                >
                  <badge.icon className="h-5 w-5 text-teal-300" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to explore */}
      <motion.div 
        className="pb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
