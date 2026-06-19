import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  className?: string;
}

/**
 * Restrained dark CTA banner with corner brackets and mono micro-label.
 * Replaces the previous overly-saturated gradient banner.
 */
const CTABanner = ({
  eyebrow = "Get started",
  title,
  subtitle,
  primaryHref = "https://compliance.tracer2c.com",
  primaryLabel = "Start Free Trial",
  className,
}: Props) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-ocean-base text-ocean-fg py-24",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--teal-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal-400)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />
      <div className="container relative mx-auto px-6">
        <div className="relative mx-auto max-w-3xl text-center">
          {["-top-3 -left-3 border-t-2 border-l-2 rounded-tl-lg",
            "-top-3 -right-3 border-t-2 border-r-2 rounded-tr-lg",
            "-bottom-3 -left-3 border-b-2 border-l-2 rounded-bl-lg",
            "-bottom-3 -right-3 border-b-2 border-r-2 rounded-br-lg",
          ].map((p, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={cn("pointer-events-none absolute h-5 w-5 border-teal-400/70", p)}
            />
          ))}
          <div className="px-4 py-4">
            <div className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-teal-300/90">
              <span className="h-px w-6 bg-teal-400/50" />
              {eyebrow}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex justify-center">
              <a href={primaryHref} target="_self">
                <Button
                  size="lg"
                  className="bg-teal-500 text-navy-950 hover:bg-teal-400 font-semibold px-8"
                >
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
