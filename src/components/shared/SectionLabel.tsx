import { cn } from "@/lib/utils";

interface Props {
  index?: string;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

/**
 * Architectural mono micro-label. Renders "· 0X · LABEL".
 */
const SectionLabel = ({ index, children, className, onDark = false }: Props) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em]",
      onDark ? "text-teal-300/90" : "text-teal-700",
      className,
    )}
  >
    <span className={cn("h-px w-6", onDark ? "bg-teal-400/50" : "bg-teal-500/50")} />
    {index && <span className={onDark ? "text-teal-400" : "text-teal-600"}>{index}</span>}
    {index && <span className={onDark ? "text-teal-400/40" : "text-teal-600/40"}>·</span>}
    <span>{children}</span>
  </div>
);

export default SectionLabel;
