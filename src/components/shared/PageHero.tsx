import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  /** Short eyebrow label, e.g. "Solutions · 02" */
  eyebrow: string;
  /** Optional sequence index shown in mono — e.g. "00 / 04" */
  meta?: string;
  title: ReactNode;
  /** Optional accent fragment of the title rendered on its own line in teal */
  accent?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

/**
 * Blueprint Console page hero — dark ocean surface, subtle technical grid,
 * corner brackets, mono micro-labels. Restrained, no parallax.
 */
const PageHero = ({
  eyebrow,
  meta,
  title,
  accent,
  subtitle,
  children,
  className,
  align = "center",
}: Props) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-ocean-base text-ocean-fg",
        "pt-32 pb-24 md:pt-40 md:pb-28",
        className,
      )}
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--teal-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal-400)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />
      {/* Soft teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--ocean-primary) / 0.18), transparent 65%)",
        }}
      />

      <div className="container relative mx-auto px-6">
        {/* Top meta strip */}
        <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-teal-400/60" />
            <span className="text-teal-300">{eyebrow}</span>
          </span>
          {meta && <span>{meta}</span>}
        </div>

        <div
          className={cn(
            "relative mx-auto max-w-4xl",
            align === "center" ? "text-center" : "text-left",
          )}
        >
          {/* Corner brackets */}
          {[
            "-top-3 -left-3 border-t-2 border-l-2 rounded-tl-lg",
            "-top-3 -right-3 border-t-2 border-r-2 rounded-tr-lg",
            "-bottom-3 -left-3 border-b-2 border-l-2 rounded-bl-lg",
            "-bottom-3 -right-3 border-b-2 border-r-2 rounded-br-lg",
          ].map((p, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute h-5 w-5 border-teal-400/70",
                p,
              )}
            />
          ))}

          <div className="px-2 py-2">
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              {title}
              {accent && (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-teal-300 to-emerald-200 bg-clip-text text-transparent">
                    {accent}
                  </span>
                </>
              )}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65 leading-relaxed md:text-xl">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
