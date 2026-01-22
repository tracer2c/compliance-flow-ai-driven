import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IndustrySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { emoji: "🍽️", name: "Food Service", href: "/solutions/food-service" },
    { emoji: "💊", name: "Pharma", href: "/solutions/pharma" },
    { emoji: "🏭", name: "Manufacturing", href: "/solutions/manufacturing" },
    { emoji: "🛍️", name: "Retail", href: "/solutions/retail" },
    { emoji: "🚛", name: "Logistics", href: "/solutions/logistics" },
    { emoji: "🏗️", name: "Construction", href: "/solutions/construction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const titleVariants = {
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

  return (
    <section className="py-16 bg-navy-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Serving Regulated Industries Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TraceR2C's compliance platform is trusted across diverse industries 
            with complex regulatory requirements and multi-tier supply chains.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.a
              key={index}
              href={industry.href}
              className="group flex flex-col items-center space-y-3 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-4xl"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {industry.emoji}
              </motion.div>
              <span className="text-navy-700 font-medium group-hover:text-teal-600 transition-colors">
                {industry.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            And many more industries requiring robust compliance management
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySection;
