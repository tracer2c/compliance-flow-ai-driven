import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UtensilsCrossed,
  Pill,
  Factory,
  ShoppingBag,
  Truck,
  HardHat,
  Leaf,
  Cpu,
} from "lucide-react";
import FeatureIcon from "@/components/ui/FeatureIcon";
import SplitTextReveal from "@/components/animations/SplitTextReveal";

const IndustrySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { icon: UtensilsCrossed, tone: "amber" as const, name: "Food Service", href: "/solutions/food-service" },
    { icon: Pill, tone: "rose" as const, name: "Pharma", href: "/solutions/pharma" },
    { icon: Factory, tone: "navy" as const, name: "Manufacturing", href: "/solutions/manufacturing" },
    { icon: ShoppingBag, tone: "violet" as const, name: "Retail", href: "/solutions/retail" },
    { icon: Truck, tone: "teal" as const, name: "Logistics", href: "/solutions/logistics" },
    { icon: HardHat, tone: "amber" as const, name: "Construction", href: "/solutions/construction" },
    { icon: Leaf, tone: "green" as const, name: "Agriculture", href: "/solutions/agriculture" },
    { icon: Cpu, tone: "navy" as const, name: "Electronics", href: "/solutions/electronics" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 bg-navy-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <SplitTextReveal
            as="h2"
            text="Serving Regulated Industries Worldwide"
            className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 block"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TraceR2C's compliance platform is trusted across diverse industries
            with complex regulatory requirements and multi-tier supply chains.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.a
              key={index}
              href={industry.href}
              className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <FeatureIcon icon={industry.icon} tone={industry.tone} size="lg" />
              <span className="text-navy-700 font-semibold group-hover:text-teal-600 transition-colors">
                {industry.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            And many more industries requiring robust compliance management
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
