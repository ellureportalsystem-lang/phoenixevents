import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
  hover?: boolean;
}

const PremiumCard = ({
  children,
  className,
  variant = "default",
  hover = true,
}: PremiumCardProps) => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = "rounded-3xl overflow-hidden transition-all duration-500";

  const variantStyles = {
    default: cn(
      theme === "light"
        ? "bg-white border border-rose-100/50 shadow-[0_4px_24px_-4px_hsl(350_30%_50%/0.08)]"
        : "bg-card border border-border/30 shadow-[0_4px_24px_-4px_hsl(0_0%_0%/0.3)]"
    ),
    glass: cn(
      theme === "light"
        ? "bg-white/70 backdrop-blur-2xl border border-rose-100/30 shadow-[0_8px_32px_-8px_hsl(350_30%_50%/0.12)]"
        : "bg-card/50 backdrop-blur-2xl border border-border/20 shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.4)]"
    ),
    elevated: cn(
      theme === "light"
        ? "bg-white shadow-[0_16px_48px_-8px_hsl(350_30%_50%/0.15)]"
        : "bg-card shadow-[0_16px_48px_-8px_hsl(0_0%_0%/0.5)]"
    ),
  };

  const hoverStyles = hover
    ? cn(
        theme === "light"
          ? "hover:shadow-[0_20px_60px_-12px_hsl(347_77%_50%/0.2)] hover:-translate-y-1"
          : "hover:shadow-[0_20px_60px_-12px_hsl(43_74%_49%/0.15)] hover:border-primary/30 hover:-translate-y-1"
      )
    : "";

  if (shouldReduceMotion) {
    return (
      <div className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};

export default PremiumCard;
