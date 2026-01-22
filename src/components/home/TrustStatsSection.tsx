import { Badge } from "@/components/ui/badge";
import { TrendingDown, Clock, AlertCircle, Database } from "lucide-react";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  trigger?: boolean;
}

const AnimatedNumber = ({ value, suffix = "", duration = 2000, trigger = false }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing with overshoot
      const easeOutBack = 1 + 2.70158 * Math.pow(progress - 1, 3) + 1.70158 * Math.pow(progress - 1, 2);
      const easedProgress = Math.min(easeOutBack, 1.1);
      setCount(Math.min(Math.floor(easedProgress * value), value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [trigger, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const TrustStatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggerCounters, setTriggerCounters] = useState(false);

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

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background gradient shift on scroll
      gsap.fromTo(
        ".stats-bg-gradient",
        { backgroundPosition: "0% 50%" },
        {
          backgroundPosition: "100% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2
          }
        }
      );

      // Badge pop-in
      gsap.fromTo(
        ".stats-badge",
        { scale: 0, rotation: -10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-badge",
            start: "top 85%",
            once: true
          }
        }
      );

      // Heading word-by-word reveal
      const headingWords = document.querySelectorAll(".stats-heading-word");
      gsap.fromTo(
        headingWords,
        { y: 40, opacity: 0, rotateX: -45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-heading",
            start: "top 80%",
            once: true
          }
        }
      );

      // Subtitle fade in
      gsap.fromTo(
        ".stats-subtitle",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".stats-subtitle",
            start: "top 85%",
            once: true
          }
        }
      );

      // Cards 3D flip entrance
      gsap.fromTo(
        ".stats-card",
        { 
          opacity: 0, 
          y: 60, 
          rotateX: -20,
          scale: 0.9,
          transformOrigin: "50% 100%"
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            once: true,
            onEnter: () => {
              // Trigger counters after cards animate in
              setTimeout(() => setTriggerCounters(true), 400);
            }
          }
        }
      );

      // Icons spin + scale on card entrance
      gsap.fromTo(
        ".stats-icon-wrapper",
        { rotation: -180, scale: 0 },
        {
          rotation: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            once: true
          }
        }
      );

      // Subtle floating animation for cards (continuous)
      gsap.utils.toArray<HTMLElement>(".stats-card").forEach((card, i) => {
        gsap.to(card, {
          y: -6,
          duration: 2.5 + i * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.15
        });
      });

    }, sectionRef);

    // Card hover tilt effect
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".stats-card");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards?.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        gsap.to(card, {
          rotateX: -rotateX,
          rotateY: rotateY,
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const leave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          duration: 0.5,
          ease: "power2.out"
        });
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
      ctx.revert();
    };
  }, []);

  const headingText = "Outcomes that leadership understands.";
  const headingWords = headingText.split(" ");

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="stats-bg-gradient absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="stats-badge inline-block will-change-transform">
            <Badge 
              variant="secondary" 
              className="mb-6 bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200 transition-colors"
            >
              Designed for enterprise credibility
            </Badge>
          </div>
          <h2 className="stats-heading text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6" style={{ perspective: "1000px" }}>
            {headingWords.map((word, i) => (
              <span 
                key={i} 
                className="stats-heading-word inline-block will-change-transform"
                style={{ marginRight: "0.3em" }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="stats-subtitle text-xl text-gray-600 max-w-3xl mx-auto will-change-transform">
            Reduce operational drag, prevent compliance incidents, and walk into audits with calm confidence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stats-card text-center will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div 
                  className="stats-icon-wrapper w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 will-change-transform"
                >
                  <stat.icon className="h-7 w-7 text-teal-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} trigger={triggerCounters} />
                </div>
                <h3 className="text-lg font-semibold text-teal-600 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
