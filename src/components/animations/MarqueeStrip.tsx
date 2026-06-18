import { ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface MarqueeStripProps {
  items: ReactNode[];
  speed?: number; // pixels per second
  className?: string;
}

const MarqueeStrip = ({ items, speed = 60, className }: MarqueeStripProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const distance = track.scrollWidth / 2;
    const duration = distance / speed;

    const tween = gsap.to(track, {
      x: -distance,
      duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [items, speed]);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="flex gap-12 w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
