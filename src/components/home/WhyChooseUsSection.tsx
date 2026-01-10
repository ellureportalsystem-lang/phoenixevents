import { Palette, Clock, Handshake, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description:
      "Our award-winning designers craft unique concepts tailored to your vision, ensuring every detail reflects your personality and style.",
  },
  {
    icon: Clock,
    title: "Flawless Execution",
    description:
      "From planning to execution, we manage every aspect with precision, ensuring your event runs seamlessly from start to finish.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We collaborate with premium venues, vendors, and artists to deliver exceptional quality and exclusive experiences.",
  },
  {
    icon: Star,
    title: "Personalized Service",
    description:
      "Every client receives dedicated attention and customized solutions, because your celebration deserves nothing less than extraordinary.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Why Phoenix Events
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Why <span className="text-gradient-gold">Choose Us</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            We don't just plan events—we create experiences that stay with you forever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={cn(
                "group p-8 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-all duration-300 hover-lift",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
