import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "teal" | "mint" | "navy" | "violet" | "amber" | "rose" | "green";
type Size = "sm" | "md" | "lg";

const toneStyles: Record<Tone, string> = {
  teal: "border-teal-500/35 text-teal-600 bg-teal-50/60 group-hover:border-teal-500/70 group-hover:bg-teal-100/70",
  mint: "border-emerald-400/35 text-emerald-600 bg-emerald-50/60 group-hover:border-emerald-400/70",
  navy: "border-navy-700/30 text-navy-800 bg-navy-50/60 group-hover:border-navy-700/60",
  violet: "border-violet-500/35 text-violet-600 bg-violet-50/60 group-hover:border-violet-500/70",
  amber: "border-amber-500/35 text-amber-700 bg-amber-50/60 group-hover:border-amber-500/70",
  rose: "border-rose-500/35 text-rose-600 bg-rose-50/60 group-hover:border-rose-500/70",
  green: "border-green-500/35 text-green-700 bg-green-50/60 group-hover:border-green-500/70",
};

const sizeStyles: Record<Size, { box: string; icon: number }> = {
  sm: { box: "h-9 w-9 rounded-md", icon: 16 },
  md: { box: "h-11 w-11 rounded-lg", icon: 18 },
  lg: { box: "h-14 w-14 rounded-xl", icon: 22 },
};

interface Props {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
  /** Dark surface variant (use on navy / ocean-base sections) */
  onDark?: boolean;
}

/**
 * Thin-stroke, lightly tinted icon tile. Designed to read as a refined
 * architectural mark rather than a flashy badge.
 */
const ClassyIcon = ({
  icon: Icon,
  tone = "teal",
  size = "md",
  className,
  onDark = false,
}: Props) => {
  const { box, icon } = sizeStyles[size];
  const dark =
    "border-teal-400/30 text-teal-300 bg-white/[0.03] group-hover:border-teal-400/60 group-hover:bg-white/[0.06]";
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center border backdrop-blur-sm transition-all duration-300",
        box,
        onDark ? dark : toneStyles[tone],
        className,
      )}
      aria-hidden="true"
    >
      <Icon size={icon} strokeWidth={1.5} />
    </span>
  );
};

export default ClassyIcon;
