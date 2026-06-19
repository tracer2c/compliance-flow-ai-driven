import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plug, Radar, FileBarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FeatureIcon from "@/components/ui/FeatureIcon";
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
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    const path = pathRef.current;
    const pulse = pulseRef.current;
    const cards = cardsRef.current;
    const header = headerRef.current;
    if (!scene || !stage || !path || !cards || !header) return;

    if (prefersReducedMotion()) {
      gsap.set([header, ...Array.from(cards.children)], { opacity: 1, y: 0 });
      gsap.set(path, { strokeDashoffset: 0 });
      return;
    }

    const len = path.getTotalLength();
    const plen = pulse ? pulse.getTotalLength() : 0;
    const cardEls = Array.from(cards.children) as HTMLElement[];

    const ctx = gsap.context(() => {
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      if (pulse) gsap.set(pulse, { strokeDasharray: `80 ${plen}`, strokeDashoffset: plen, opacity: 0 });
      gsap.set(header, { y: 24, opacity: 0 });
      gsap.set(cardEls, { y: 40, opacity: 0 });

      const isDesktop = window.innerWidth >= 1024;

      if (!isDesktop) {
        // Mobile: simple one-shot reveal, no pin.
        const tl = gsap.timeline({
          scrollTrigger: { trigger: scene, start: "top 75%", once: true },
        });
        tl.to(header, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
          .to(path, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, "-=0.3")
          .to(cardEls, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=1.0");
        return;
      }

      // Desktop: scrubbed pinned master timeline.
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "+=140%",
          scrub: 0.6,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 0.00 - 0.15: header settles
      tl.to(header, { y: 0, opacity: 1, duration: 0.15 }, 0);

      // 0.10 - 0.55: path draws in
      tl.to(path, { strokeDashoffset: 0, duration: 0.45 }, 0.10);

      // 0.30 - 0.60: teal pulse travels along the path
      if (pulse) {
        tl.to(pulse, { opacity: 0.9, duration: 0.03 }, 0.30)
          .to(pulse, { strokeDashoffset: -plen, duration: 0.30, ease: "power1.inOut" }, 0.30)
          .to(pulse, { opacity: 0, duration: 0.05 }, 0.58);
      }

      // 0.55 / 0.70 / 0.85: cards reveal one by one
      cardEls.forEach((card, i) => {
        tl.to(card, { y: 0, opacity: 1, duration: 0.12 }, 0.55 + i * 0.15);
      });

      // hold
      tl.to({}, { duration: 0.05 });
    }, scene);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sceneRef} data-section-scene>
      <div ref={stageRef} data-section-stage>
        <section className="min-h-screen flex items-center py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6 w-full">
            <div ref={headerRef} className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-teal-100 text-teal-700 border-teal-200"
              >
                How TraceR2C Works
              </Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 max-w-4xl mx-auto leading-tight">
                From fragmented paperwork to a single, living compliance system.
              </h2>
            </div>

            <div className="relative">
              {/* Connector path with traveling pulse */}
              <svg
                className="hidden lg:block absolute top-10 left-0 w-full h-24 pointer-events-none"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  ref={pathRef}
                  d="M 100 50 Q 400 -20 600 50 T 1100 50"
                  fill="none"
                  stroke="hsl(var(--teal-500))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  ref={pulseRef}
                  d="M 100 50 Q 400 -20 600 50 T 1100 50"
                  fill="none"
                  stroke="hsl(var(--teal-300))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div
                ref={cardsRef}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
              >
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorksSection;
