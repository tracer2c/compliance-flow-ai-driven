import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  /** If set, will stagger immediate children */
  stagger?: number;
}

const ScrollReveal = ({
  children,
  className,
  y = 40,
  delay = 0,
  duration = 0.8,
  stagger,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : [el];
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      stagger: stagger ?? 0,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, delay, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
