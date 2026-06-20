import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Pill,
  Factory,
  ShoppingBag,
  Truck,
  HardHat,
  Leaf,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import SplitTextReveal from "@/components/animations/SplitTextReveal";

const IndustrySection = () => {
  const industries = [
    { icon: UtensilsCrossed, name: "Food Service", href: "/solutions/food-service" },
    { icon: Pill, name: "Pharma", href: "/solutions/pharma" },
    { icon: Factory, name: "Manufacturing", href: "/solutions/manufacturing" },
    { icon: ShoppingBag, name: "Retail", href: "/solutions/retail" },
    { icon: Truck, name: "Logistics", href: "/solutions/logistics" },
    { icon: HardHat, name: "Construction", href: "/solutions/construction" },
    { icon: Leaf, name: "Agriculture", href: "/solutions/agriculture" },
    { icon: Cpu, name: "Electronics", href: "/solutions/electronics" },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 bg-[#fafaf7] overflow-hidden"
    >
      {/* Dotted texture, distinct from the gray slabs above */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--navy-900) / 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Left: sticky-feeling editorial header */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700 mb-4 inline-block">
              · Industries
            </span>
            <SplitTextReveal
              as="h2"
              text="Serving regulated industries worldwide."
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 leading-[1.05] block mb-6"
            />
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              TraceR2C is trusted across diverse industries with complex
              regulatory requirements and multi-tier supply chains.
            </p>
            <div className="mt-8 h-px w-24 bg-teal-500" />
            <p className="mt-4 text-sm text-gray-500">
              And many more sectors that need provable compliance.
            </p>
          </div>

          {/* Right: chip layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="flex flex-wrap gap-3"
          >
            {industries.map((industry) => (
              <motion.a
                key={industry.name}
                href={industry.href}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className="group inline-flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-white border border-gray-200 hover:border-teal-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                  <industry.icon className="h-4 w-4 text-teal-700" />
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  {industry.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
