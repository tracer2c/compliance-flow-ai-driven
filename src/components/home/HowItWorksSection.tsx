import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plug, Radar, FileBarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FeatureIcon from "@/components/ui/FeatureIcon";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { prefersReducedMotion } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    icon: Plug,
    tone: "teal" as const,
    title: "Connect",
    desc: "Onboard suppliers, ERPs, and document sources in minutes with secure APIs and SSO.",
  },
  {
    n: "02",
    icon: Radar,
    tone: "violet" as const,
    title: "Monitor",
    desc: "AI continuously scores risk, validates documents, and flags expiry before incidents.",
  },
  {
    n: "03",
    icon: FileBarChart2,
    tone: "green" as const,
    title: "Report",
    desc: "Generate audit-ready evidence packs and live dashboards for any regulator or buyer.",
  },
];

const HowItWorksSection = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path || prefersReducedMotion()) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-teal-100 text-teal-700 border-teal-200"
          >
            How TraceR2C Works
          </Badge>
          <SplitTextReveal
            as="h2"
            text="From fragmented paperwork to a single, living compliance system."
            className="text-3xl md:text-5xl font-display font-bold text-navy-900 max-w-4xl mx-auto leading-tight block"
          />
        </div>

        <div className="relative">
          {/* Animated connector (desktop) */}
          <svg
            className="hidden lg:block absolute top-10 left-0 w-full h-24 pointer-events-none"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 100 50 Q 400 -20 600 50 T 1100 50"
              fill="none"
              stroke="hsl(var(--teal-500))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 8"
            />
          </svg>

          <ScrollReveal stagger={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <FeatureIcon icon={s.icon} tone={s.tone} size="lg" />
                  <span className="text-5xl font-display font-bold text-gray-100 group-hover:text-teal-100 transition-colors">
                    {s.n}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
