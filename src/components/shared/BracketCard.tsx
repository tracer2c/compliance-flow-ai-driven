import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Render four small corner brackets */
  brackets?: boolean;
  /** Use dark ocean surface look */
  onDark?: boolean;
  interactive?: boolean;
}

/**
 * Architectural card with a thin border and optional corner brackets.
 * Pairs with `ClassyIcon` and `SectionLabel` for the Blueprint Console look.
 */
const BracketCard = forwardRef<HTMLDivElement, Props>(
  ({ brackets = true, onDark = false, interactive = true, className, children, ...rest }, ref) => {
    const base = onDark
      ? "bg-white/[0.03] border-white/10 text-white"
      : "bg-white border-gray-200/80 text-gray-900";
    const hover = interactive
      ? onDark
        ? "hover:border-teal-400/40 hover:bg-white/[0.05]"
        : "hover:border-teal-500/40 hover:shadow-[0_24px_60px_-30px_rgba(15,116,144,0.35)]"
      : "";
    const bracketColor = onDark ? "border-teal-300/70" : "border-teal-500/70";

    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-xl border transition-all duration-300",
          base,
          hover,
          className,
        )}
        {...rest}
      >
        {brackets && (
          <>
            <span className={cn("pointer-events-none absolute top-0 left-0 h-3 w-3 border-t border-l rounded-tl-xl opacity-60 group-hover:opacity-100 transition-opacity", bracketColor)} />
            <span className={cn("pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r rounded-tr-xl opacity-60 group-hover:opacity-100 transition-opacity", bracketColor)} />
            <span className={cn("pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l rounded-bl-xl opacity-60 group-hover:opacity-100 transition-opacity", bracketColor)} />
            <span className={cn("pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r rounded-br-xl opacity-60 group-hover:opacity-100 transition-opacity", bracketColor)} />
          </>
        )}
        {children}
      </div>
    );
  },
);
BracketCard.displayName = "BracketCard";

export default BracketCard;
