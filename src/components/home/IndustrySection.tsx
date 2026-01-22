import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndustrySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const industries = [
    { emoji: "🍽️", name: "Food Service", href: "/solutions/food-service" },
    { emoji: "💊", name: "Pharma", href: "/solutions/pharma" },
    { emoji: "🏭", name: "Manufacturing", href: "/solutions/manufacturing" },
    { emoji: "🛍️", name: "Retail", href: "/solutions/retail" },
    { emoji: "🚛", name: "Logistics", href: "/solutions/logistics" },
    { emoji: "🏗️", name: "Construction", href: "/solutions/construction" }
  ];

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background color shift on scroll
      gsap.fromTo(
        sectionRef.current,
        { backgroundColor: "hsl(210, 100%, 98%)" },
        {
          backgroundColor: "hsl(170, 100%, 97%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2
          }
        }
      );

      // Title scale up from 0.8 with blur
      gsap.fromTo(
        ".industry-title",
        { scale: 0.85, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-title",
            start: "top 85%",
            once: true
          }
        }
      );

      // Subtitle fade in
      gsap.fromTo(
        ".industry-subtitle",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".industry-subtitle",
            start: "top 85%",
            once: true
          }
        }
      );

      // Industry cards - wave pattern from alternating sides
      gsap.utils.toArray<HTMLElement>(".industry-card").forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        
        gsap.fromTo(
          card,
          { 
            x: fromLeft ? -80 : 80, 
            opacity: 0, 
            rotation: fromLeft ? -10 : 10,
            scale: 0.9
          },
          {
            x: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true
            }
          }
        );
      });

      // Emoji bounce entrance
      gsap.fromTo(
        ".industry-emoji",
        { scale: 0, rotation: -20 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".industry-grid",
            start: "top 80%",
            once: true
          }
        }
      );

      // Connecting line draw animation (decorative)
      gsap.fromTo(
        ".industry-connector",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".industry-grid",
            start: "top 70%",
            once: true
          }
        }
      );

      // Footer text fade
      gsap.fromTo(
        ".industry-footer",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".industry-footer",
            start: "top 90%",
            once: true
          }
        }
      );

    }, sectionRef);

    // Card hover effects
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".industry-card");
    const handlers: Array<{ el: HTMLElement; enter: () => void; leave: () => void }> = [];

    cards?.forEach((card) => {
      const emoji = card.querySelector(".industry-emoji");
      
      const enter = () => {
        gsap.to(card, {
          y: -8,
          scale: 1.05,
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
          duration: 0.3,
          ease: "power2.out"
        });
        if (emoji) {
          gsap.to(emoji, {
            scale: 1.3,
            rotation: 10,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        }
      };

      const leave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.3,
          ease: "power2.out"
        });
        if (emoji) {
          gsap.to(emoji, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, enter, leave });
    });

    return () => {
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-navy-50 relative overflow-hidden">
      {/* Decorative connector line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] pointer-events-none hidden lg:block">
        <div className="industry-connector absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="industry-title text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4 will-change-transform">
            Serving Regulated Industries Worldwide
          </h2>
          <p className="industry-subtitle text-xl text-gray-600 max-w-3xl mx-auto will-change-transform">
            TraceR2C's compliance platform is trusted across diverse industries 
            with complex regulatory requirements and multi-tier supply chains.
          </p>
        </div>

        <div className="industry-grid flex flex-wrap items-center justify-center gap-8 mb-8">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.href}
              className="industry-card group flex flex-col items-center space-y-3 p-6 rounded-xl bg-white/50 backdrop-blur-sm transition-colors will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div 
                className="industry-emoji text-4xl will-change-transform"
              >
                {industry.emoji}
              </div>
              <span className="text-navy-700 font-medium group-hover:text-teal-600 transition-colors">
                {industry.name}
              </span>
            </a>
          ))}
        </div>

        <div className="industry-footer text-center will-change-transform">
          <p className="text-gray-500 text-sm">
            And many more industries requiring robust compliance management
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
