import { Sparkles, Award, Users, Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import MotionSection, { StaggerContainer, StaggerItem } from "@/components/ui/MotionSection";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Delivered" },
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Sparkles, value: "50+", label: "Expert Team" },
];

const AboutSection = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={cn(
      "py-24 relative overflow-hidden",
      theme === "light" ? "bg-card" : "bg-card"
    )}>
      {/* Decorative Elements */}
      <div className={cn(
        "absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl",
        theme === "light" ? "bg-primary/5" : "bg-primary/10"
      )} />
      <div className={cn(
        "absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl",
        theme === "light" ? "bg-accent/5" : "bg-primary/5"
      )} />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <MotionSection animation="slide-right" className="space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-primary font-sans text-sm tracking-[0.3em] uppercase"
              >
                About Phoenix Events
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight"
              >
                Crafting Dreams into{" "}
                <span className="text-gradient-gold">Reality</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground font-sans leading-relaxed"
            >
              <p>
                Phoenix Events & Productions is a premier event management company 
                dedicated to creating extraordinary celebrations that leave lasting impressions. 
                With over 15 years of experience, we've mastered the art of transforming 
                ordinary moments into grand memories.
              </p>
              <p>
                From intimate gatherings to lavish weddings and corporate galas, our team 
                of creative professionals brings passion, precision, and an unwavering 
                commitment to excellence to every event we touch.
              </p>
            </motion.div>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    className={cn(
                      "text-center p-4 rounded-2xl border transition-all duration-300",
                      theme === "light"
                        ? "border-rose-100/50 bg-white/80 backdrop-blur-sm hover:shadow-[0_8px_30px_-8px_hsl(350_30%_50%/0.12)]"
                        : "border-border/50 bg-background/50 hover:border-primary/30"
                    )}
                    whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                    <p className="text-2xl md:text-3xl font-serif font-bold text-gradient-gold">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </MotionSection>

          {/* Image Grid */}
          <MotionSection animation="slide-left" delay={0.2} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="overflow-hidden rounded-2xl"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
                    alt="Elegant wedding setup"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  className="overflow-hidden rounded-2xl"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80"
                    alt="Wedding ceremony"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  className="overflow-hidden rounded-2xl"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&q=80"
                    alt="Event decoration"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  className="overflow-hidden rounded-2xl"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80"
                    alt="Birthday celebration"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>
            </div>
            {/* Decorative Border */}
            <div className={cn(
              "absolute -inset-4 border rounded-3xl -z-10",
              theme === "light" ? "border-primary/10" : "border-primary/20"
            )} />
          </MotionSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
