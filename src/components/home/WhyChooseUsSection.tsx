import { Sparkles, CheckCircle, Handshake, Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection, { StaggerContainer, StaggerItem } from "@/components/ui/MotionSection";

const reasons = [
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "Award-winning designs tailored to your unique vision",
  },
  {
    icon: CheckCircle,
    title: "Flawless Execution",
    description: "Seamless planning from concept to celebration",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Premium venues and exclusive vendor network",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Dedicated attention for your extraordinary day",
  },
];

const WhyChooseUsSection = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={cn(
      "py-20 relative overflow-hidden",
      theme === "light" ? "bg-card" : "bg-card"
    )}>
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <MotionSection className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-sans text-xs tracking-[0.3em] uppercase"
          >
            Why Phoenix Events
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold"
          >
            Why <span className="text-gradient-gold">Choose Us</span>
          </motion.h2>
          {/* Accent underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "w-20 h-0.5 mx-auto mt-4",
              theme === "light" 
                ? "bg-gradient-to-r from-transparent via-primary to-transparent" 
                : "bg-gradient-to-r from-transparent via-gold to-transparent"
            )}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground font-sans text-sm pt-2"
          >
            We create experiences that stay with you forever
          </motion.p>
        </MotionSection>

        {/* Features Grid - Premium Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.1}>
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                className={cn(
                  "group relative p-6 lg:p-8 rounded-3xl transition-all duration-500 h-full",
                  theme === "light"
                    ? "bg-white/90 backdrop-blur-xl border border-rose-100/50 shadow-[0_4px_24px_-4px_hsl(350_30%_50%/0.08)]"
                    : "bg-card/60 backdrop-blur-xl border border-border/30"
                )}
                whileHover={shouldReduceMotion ? {} : {
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Hover glow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                  theme === "light"
                    ? "shadow-[0_16px_50px_-8px_hsl(350_65%_55%/0.15)]"
                    : "shadow-[0_16px_50px_-8px_hsl(40_72%_52%/0.15)]"
                )} />

                {/* Icon Circle */}
                <motion.div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300",
                    theme === "light"
                      ? "bg-gradient-to-br from-rose-100 via-rose-50 to-white"
                      : "bg-gradient-to-br from-primary/20 to-primary/5"
                  )}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
                >
                  <reason.icon className={cn(
                    "w-6 h-6",
                    theme === "light" ? "text-primary" : "text-primary"
                  )} />
                </motion.div>

                {/* Gold accent divider */}
                <div className={cn(
                  "w-10 h-0.5 mb-4 transition-all duration-300 group-hover:w-16",
                  theme === "light" 
                    ? "bg-gradient-to-r from-accent to-transparent" 
                    : "bg-gradient-to-r from-primary to-transparent"
                )} />

                {/* Content */}
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Subtle corner accent */}
                <motion.div
                  className={cn(
                    "absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300",
                    theme === "light" ? "bg-accent/30 group-hover:bg-accent" : "bg-primary/30 group-hover:bg-primary"
                  )}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
