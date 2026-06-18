import { ElementType, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** When true, plays on mount instead of on scroll */
  immediate?: boolean;
}

/**
 * Splits text into words and reveals them with blur + translate + opacity.
 */
const SplitTextReveal = ({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: SplitTextRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    if (!words.length) return;

    if (prefersReducedMotion()) {
      gsap.set(words, { opacity: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    gsap.set(words, { opacity: 0, y: 24, filter: "blur(8px)" });

    const tween = gsap.to(words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      stagger,
      delay,
      scrollTrigger: immediate
        ? undefined
        : {
            trigger: el,
            start: "top 85%",
            once: true,
          },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, delay, stagger, immediate]);

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          data-word
          style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
};

export default SplitTextReveal;
