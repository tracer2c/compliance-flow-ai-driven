import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const trustBadges = [
    { icon: Lock, text: "SSO/SAML" },
    { icon: Users, text: "RBAC" },
    { icon: FileText, text: "Audit Logs" },
    { icon: Shield, text: "Encryption" }
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Master timeline for entrance animations
      const masterTl = gsap.timeline({ 
        defaults: { ease: "power3.out" },
        delay: 0.3
      });

      // Background parallax drift
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Floating background animation
      gsap.to(".hero-bg-glow", {
        xPercent: 10,
        yPercent: -8,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Badge pop-in with glow ring
      masterTl.fromTo(
        ".hero-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
      );

      // Pulse dot animation
      masterTl.fromTo(
        ".hero-pulse-dot",
        { scale: 0 },
        { scale: 1, duration: 0.3 },
        "-=0.2"
      );

      // Headline line 1 - slide up with mask reveal effect
      masterTl.fromTo(
        ".hero-headline-1",
        { y: 60, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 },
        "-=0.2"
      );

      // Gradient text - sweep animation
      masterTl.fromTo(
        ".hero-headline-gradient",
        { y: 40, opacity: 0, backgroundPosition: "200% center" },
        { 
          y: 0, 
          opacity: 1, 
          backgroundPosition: "0% center",
          duration: 1,
          ease: "power2.out"
        },
        "-=0.4"
      );

      // Subheadline - blur to clear
      masterTl.fromTo(
        ".hero-subheadline",
        { y: 30, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7 },
        "-=0.5"
      );

      // CTA buttons - staggered slide up
      masterTl.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power2.out"
        },
        "-=0.3"
      );

      // Trust badges - cascade with icon spin
      masterTl.fromTo(
        ".hero-trust-badge",
        { x: -20, opacity: 0, scale: 0.8 },
        { 
          x: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.4,
          stagger: 0.08
        },
        "-=0.2"
      );

      // Trust badge icons spin
      masterTl.fromTo(
        ".hero-trust-icon",
        { rotation: -180, scale: 0 },
        { 
          rotation: 0, 
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)"
        },
        "-=0.5"
      );

      // Scroll indicator
      masterTl.fromTo(
        ".hero-scroll-indicator",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      // Continuous scroll indicator bounce
      gsap.to(".hero-scroll-chevron", {
        y: 8,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Floating particles
      gsap.utils.toArray<HTMLElement>(".hero-particle").forEach((particle, i) => {
        gsap.to(particle, {
          y: -30 - (i * 10),
          x: Math.sin(i) * 20,
          duration: 3 + i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.2
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-hero min-h-screen flex flex-col">
      {/* Background with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <div className="hero-bg-glow absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500 rounded-full filter blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full filter blur-[60px] opacity-10" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-particle absolute top-20 left-[10%] w-2 h-2 bg-teal-400/30 rounded-full" />
          <div className="hero-particle absolute top-40 right-[15%] w-3 h-3 bg-green-400/20 rounded-full" />
          <div className="hero-particle absolute bottom-40 left-[20%] w-2 h-2 bg-white/20 rounded-full" />
          <div className="hero-particle absolute top-60 right-[25%] w-1.5 h-1.5 bg-teal-300/30 rounded-full" />
          <div className="hero-particle absolute bottom-60 right-[10%] w-2.5 h-2.5 bg-green-300/25 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative flex-1 flex items-center">
        <div ref={contentRef} className="py-20 lg:py-32 w-full">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Badge */}
            <div className="hero-badge inline-block will-change-transform">
              <Badge 
                variant="secondary" 
                className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                <span className="hero-pulse-dot inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Enterprise-Grade Compliance Platform
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              <span className="hero-headline-1 block will-change-transform">
                Make compliance operational,
              </span>
              <span 
                className="hero-headline-gradient block bg-gradient-to-r from-teal-300 via-green-300 to-teal-300 bg-clip-text text-transparent bg-[length:200%_100%] will-change-transform"
              >
                measurable, and proactive.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto will-change-transform">
              TraceR2C transforms compliance from reactive documentation to proactive risk management—giving regulated industries real-time visibility, predictive insights, and audit-ready controls across every supplier, document, and workflow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact" className="hero-cta will-change-transform">
                <Button 
                  size="lg" 
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/know-more" className="hero-cta will-change-transform">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white font-semibold px-8 py-4 text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  See how it works
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="hero-trust-badge flex items-center space-x-2 text-gray-300 will-change-transform"
                >
                  <badge.icon className="hero-trust-icon h-5 w-5 text-teal-300 will-change-transform" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to explore */}
      <div className="hero-scroll-indicator pb-8 text-center will-change-transform">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="hero-scroll-chevron will-change-transform">
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
