import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProductDemoSection = () => {
  return (
    <section
      id="watch-demo"
      className="relative overflow-hidden bg-ocean-base text-ocean-fg py-24 lg:py-32 border-y border-ocean-line/40 scroll-mt-20"
    >
      {/* Subtle grid backdrop, echoes the hero */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="demo-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--ocean-primary))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demo-grid)" />
        </svg>
      </div>

      {/* Soft glow behind the player */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-ocean-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[0.9fr_1.25fr] gap-14 lg:gap-20 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-ocean-surface/70 border border-ocean-primary/25 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-ocean-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ocean-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-mint">
                Live Product Tour · 60 sec
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
              See TraceR2C move
              <span className="block text-ocean-primary">a real compliance flow.</span>
            </h2>

            <p className="max-w-md text-base lg:text-lg text-ocean-fg/65 leading-relaxed">
              Watch how a single supplier document travels from intake to
              audit-ready evidence — automated checks, expiry guardrails, and a
              clean ledger your auditors will recognize.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://compliance.tracer2c.com" target="_blank" rel="noopener noreferrer">
                <button className="group relative overflow-hidden px-7 py-4 bg-ocean-primary text-ocean-base font-semibold rounded-sm transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-ocean-mint translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </a>
            </div>

            <div className="pt-6 border-t border-ocean-line/60 max-w-md font-mono text-[11px] uppercase tracking-[0.18em] text-ocean-fg/55">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-x-2 gap-y-3">
                {[
                  { n: "1", label: "Intake" },
                  { n: "2", label: "AI Check" },
                  { n: "3", label: "Expiry Guardrails" },
                  { n: "4", label: "Audit Export" },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-ocean-primary">{step.n}.</span>
                      <span className="text-ocean-fg/75">{step.label}</span>
                    </span>
                    {i < arr.length - 1 && (
                      <span aria-hidden="true" className="hidden sm:inline text-ocean-primary/50">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Player */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-ocean-primary/60 pointer-events-none" />
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-ocean-primary/60 pointer-events-none" />

            <div className="relative bg-ocean-surface/80 backdrop-blur-xl border border-ocean-line rounded-md p-2 shadow-2xl">

              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ocean-base">
                <iframe
                  src="https://app.heygen.com/embeds/44d6260515d548d3bbf555f76834d2ad"
                  title="TraceR2C product demo"
                  loading="lazy"
                  allow="encrypted-media; fullscreen;"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemoSection;
