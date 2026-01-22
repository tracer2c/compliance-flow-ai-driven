import { useEffect, useRef } from "react";
import SEOHead from "@/components/seo/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import TrustStatsSection from "@/components/home/TrustStatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustrySection from "@/components/home/IndustrySection";
import { organizationSchema, softwareApplicationSchema, websiteSchema } from "@/lib/structuredData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const combinedSchema = [organizationSchema, softwareApplicationSchema, websiteSchema];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Floating parallax shapes
      gsap.utils.toArray<HTMLElement>(".parallax-shape").forEach((shape, i) => {
        const speed = 0.3 + (i * 0.15);
        gsap.to(shape, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1 + (i * 0.5)
          }
        });
      });

      // Continuous floating for shapes
      gsap.utils.toArray<HTMLElement>(".parallax-shape").forEach((shape, i) => {
        gsap.to(shape, {
          y: 20 + (i * 5),
          x: Math.sin(i) * 15,
          rotation: 5 + (i * 2),
          duration: 4 + i,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      });

      // Section fade transitions
      gsap.utils.toArray<HTMLElement>(".page-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.8 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: true
            }
          }
        );
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative">
      {/* Global parallax floating shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Shape 1 - Large teal blob */}
        <div 
          className="parallax-shape absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-[0.03] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(170 60% 42%), transparent 70%)" }}
        />
        
        {/* Shape 2 - Medium navy blob */}
        <div 
          className="parallax-shape absolute top-1/4 -right-32 w-80 h-80 rounded-full opacity-[0.04] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(210 22% 14%), transparent 70%)" }}
        />
        
        {/* Shape 3 - Small green accent */}
        <div 
          className="parallax-shape absolute top-1/2 left-10 w-48 h-48 rounded-full opacity-[0.03] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(130 60% 42%), transparent 70%)" }}
        />
        
        {/* Shape 4 - Extra large background blob */}
        <div 
          className="parallax-shape absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(170 60% 42%), transparent 60%)" }}
        />

        {/* Shape 5 - Small floating orb */}
        <div 
          className="parallax-shape absolute top-3/4 left-1/4 w-32 h-32 rounded-full opacity-[0.05] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(210 22% 25%), transparent 70%)" }}
        />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <SEOHead
          title="TraceR2C - Supply Chain Compliance Software | Enterprise Platform"
          description="Enterprise supply chain compliance platform with AI-powered insights, automated documentation management, and enterprise-grade security. Free trial available."
          keywords="supply chain compliance software, enterprise compliance management, compliance automation platform, supply chain documentation management, enterprise security software"
          canonicalUrl="https://tracer2c.com"
          structuredData={combinedSchema}
        />
        <div className="page-section">
          <HeroSection />
        </div>
        <div className="page-section">
          <TrustStatsSection />
        </div>
        <div className="page-section">
          <FeaturesSection />
        </div>
        <div className="page-section">
          <IndustrySection />
        </div>
      </div>
    </div>
  );
};

export default Index;
