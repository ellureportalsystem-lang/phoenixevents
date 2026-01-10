import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible, prefersReducedMotion } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    if (prefersReducedMotion) {
      return "opacity-100";
    }

    const baseClasses = "transition-all duration-700 ease-out";
    
    const animationMap = {
      "fade-up": isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8",
      "fade-in": isVisible
        ? "opacity-100"
        : "opacity-0",
      "scale-in": isVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95",
      "slide-left": isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-8",
      "slide-right": isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-8",
    };

    return `${baseClasses} ${animationMap[animation]}`;
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
