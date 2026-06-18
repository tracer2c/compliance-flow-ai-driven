import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureIconProps {
  icon: LucideIcon;
  tone?: "teal" | "navy" | "green" | "amber" | "rose" | "violet";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const toneMap: Record<NonNullable<FeatureIconProps["tone"]>, string> = {
  teal: "from-teal-100 to-teal-50 text-teal-700 ring-teal-200",
  navy: "from-navy-100 to-navy-50 text-navy-800 ring-navy-200",
  green: "from-green-100 to-green-50 text-green-700 ring-green-200",
  amber: "from-amber-100 to-amber-50 text-amber-700 ring-amber-200",
  rose: "from-rose-100 to-rose-50 text-rose-700 ring-rose-200",
  violet: "from-violet-100 to-violet-50 text-violet-700 ring-violet-200",
};

const sizeMap = {
  sm: { wrap: "w-10 h-10 rounded-lg", icon: "h-5 w-5" },
  md: { wrap: "w-14 h-14 rounded-xl", icon: "h-7 w-7" },
  lg: { wrap: "w-16 h-16 rounded-2xl", icon: "h-8 w-8" },
};

/**
 * Premium, duotone-style icon container with gradient + ring + soft glow.
 */
const FeatureIcon = ({
  icon: Icon,
  tone = "teal",
  size = "md",
  className,
}: FeatureIconProps) => {
  const s = sizeMap[size];
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center bg-gradient-to-br ring-1 ring-inset shadow-sm",
        "transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3",
        s.wrap,
        toneMap[tone],
        className
      )}
    >
      <Icon className={s.icon} strokeWidth={2} />
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 8px 24px -8px currentColor",
        }}
      />
    </div>
  );
};

export default FeatureIcon;
