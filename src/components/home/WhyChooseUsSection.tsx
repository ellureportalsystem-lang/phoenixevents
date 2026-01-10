import { Sparkles, CheckCircle, Handshake, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

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

  return (
    <section className={cn(
      "py-16 relative overflow-hidden",
      theme === "light" ? "bg-card" : "bg-card"
    )}>
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase">
            Why Phoenix Events
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Why <span className="text-gradient-gold">Choose Us</span>
          </h2>
          {/* Accent underline */}
          <div className={cn(
            "w-16 h-0.5 mx-auto mt-4",
            theme === "light" 
              ? "bg-gradient-to-r from-transparent via-rose-400 to-transparent" 
              : "bg-gradient-to-r from-transparent via-gold to-transparent"
          )} />
          <p className="text-muted-foreground font-sans text-sm">
            We create experiences that stay with you forever
          </p>
        </div>

        {/* Features Grid - Glassmorphism Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={cn(
                "group relative p-6 rounded-2xl transition-all duration-500",
                "opacity-0 animate-fade-in",
                theme === "light"
                  ? "bg-white/80 backdrop-blur-xl border border-rose-100/50 shadow-[0_4px_24px_-4px_hsl(350_30%_50%/0.08)] hover:shadow-[0_8px_32px_-4px_hsl(347_77%_50%/0.15)]"
                  : "bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Circle */}
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
                theme === "light"
                  ? "bg-gradient-to-br from-rose-100 to-rose-50"
                  : "bg-primary/10"
              )}>
                <reason.icon className={cn(
                  "w-5 h-5 transition-colors group-hover:animate-pulse",
                  theme === "light" ? "text-primary" : "text-primary"
                )} />
              </div>

              {/* Gold accent divider */}
              <div className={cn(
                "w-8 h-px mb-4",
                theme === "light" 
                  ? "bg-gradient-to-r from-gold to-transparent" 
                  : "bg-gradient-to-r from-primary to-transparent"
              )} />

              {/* Content */}
              <h3 className="text-base font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Subtle corner accent */}
              <div className={cn(
                "absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                theme === "light" ? "bg-gold/50" : "bg-primary/50"
              )} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
