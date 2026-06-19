import { useLocation, Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LifeBuoy } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { prefersReducedMotion } from "@/hooks/useGSAP";

const NotFound = () => {
  const location = useLocation();
  const cardRef = useRef<HTMLDivElement>(null);
  const bracketRefs = useRef<HTMLSpanElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(bracketRefs.current, {
        scale: 0.4,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "back.out(2)",
        transformOrigin: "center",
        delay: 0.1,
      });
      const path = pathRef.current;
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.inOut",
          delay: 0.4,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const setBracketRef = (el: HTMLSpanElement | null, i: number) => {
    if (el) bracketRefs.current[i] = el;
  };

  return (
    <>
      <SEOHead
        title="404 · Route not found | TraceR2C"
        description="The page you're looking for doesn't exist. Return home or contact our support team."
        canonicalUrl="https://tracer2c.com/404"
      />
      <main className="relative min-h-screen bg-navy-950 text-white overflow-hidden flex items-center justify-center px-6 py-24">
        {/* Subtle technical grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--teal-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal-400)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Soft teal glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] pointer-events-none rounded-full"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--teal-500) / 0.18), transparent 65%)",
          }}
        />

        <div
          ref={cardRef}
          className="relative z-10 w-full max-w-xl rounded-2xl border border-white/10 bg-navy-900/60 backdrop-blur-sm p-10 md:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          {/* Corner brackets */}
          {[
            "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
            "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
            "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
            "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
          ].map((pos, i) => (
            <span
              key={i}
              ref={(el) => setBracketRef(el, i)}
              aria-hidden="true"
              className={`absolute w-6 h-6 border-teal-400/80 ${pos}`}
            />
          ))}

          {/* Eyebrow chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-400/40 bg-teal-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300">
              Error · 404
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">
            Route not found
          </h1>

          {/* Underline trace */}
          <svg
            className="block w-40 h-2 mb-6"
            viewBox="0 0 160 8"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M 0 4 L 160 4"
              fill="none"
              stroke="hsl(var(--teal-400))"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="font-mono text-xs text-teal-200/70 bg-black/30 border border-white/5 rounded-md px-3 py-2 mb-6 break-all">
            <span className="text-teal-400">GET</span>{" "}
            <span className="text-white/80">{location.pathname}</span>{" "}
            <span className="text-rose-300">→ 404</span>
          </div>

          <p className="text-base md:text-lg text-white/65 leading-relaxed mb-8">
            The page you were looking for doesn't exist, may have moved, or the
            link is broken. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-teal-500 text-navy-950 hover:bg-teal-400 font-semibold"
            >
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Return home
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-white/80 hover:text-white hover:bg-white/5"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                <LifeBuoy className="h-4 w-4" />
                Contact support
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
