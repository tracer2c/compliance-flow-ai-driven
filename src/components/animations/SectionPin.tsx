import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

interface SectionPinProps {
  children: ReactNode;
  /** Extra scroll length beyond viewport while pinned, in vh. Default 60. */
  holdVh?: number;
  /** Min viewport width (px) to enable pin. Default 1024. */
  minWidth?: number;
  className?: string;
  /**
   * Optional builder called with the master timeline and the scene root.
   * Use it to schedule scrubbed tweens against this section.
   */
  build?: (tl: gsap.core.Timeline, scene: HTMLElement) => void;
}

/**
 * Wraps a section in a scrubbed, pinned ScrollTrigger scene. The child is
 * pinned for `holdVh` extra scroll while a master timeline plays in lock-step
 * with scroll. Mobile and reduced-motion fall back to a plain container.
 */
const SectionPin = ({
  children,
  holdVh = 60,
  minWidth = 1024,
  className,
  build,
}: SectionPinProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage) return;

    if (prefersReducedMotion()) return;
    if (window.innerWidth < minWidth) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: `+=${holdVh}%`,
          scrub: 0.6,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Default: hold for the full duration if no builder provided.
      if (build) build(tl, scene);
      else tl.to({}, { duration: 1 });
    }, scene);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, [holdVh, minWidth, build]);

  return (
    <div ref={sceneRef} className={className} data-section-scene>
      <div ref={stageRef} data-section-stage>
        {children}
      </div>
    </div>
  );
};

export default SectionPin;
