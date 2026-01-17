import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import MotionSection from "@/components/ui/MotionSection";

const CTASection = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Event background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className={cn(
          "absolute inset-0",
          theme === "light"
            ? "bg-gradient-to-r from-background via-background/95 to-background"
            : "bg-gradient-to-r from-background via-background/90 to-background"
        )} />
        {/* Vignette effect for light theme images */}
        {theme === "light" && (
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.25) 100%)',
              pointerEvents: 'none'
            }}
          />
        )}
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className={cn(
          "absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl",
          theme === "light" ? "bg-primary/10" : "bg-primary/15"
        )}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className={cn(
          "absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl",
          theme === "light" ? "bg-accent/10" : "bg-primary/10"
        )}
        animate={shouldReduceMotion ? {} : { scale: [1.1, 1, 1.1], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <MotionSection className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <motion.div
            className={cn(
              "inline-flex items-center justify-center w-18 h-18 rounded-full mb-4",
              theme === "light"
                ? "bg-gradient-to-br from-primary/20 to-accent/10"
                : "bg-gradient-to-br from-primary/20 to-primary/5"
            )}
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight"
          >
            Ready to Create Your{" "}
            <span className="text-gradient-gold">Dream Event?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto"
          >
            Let's transform your vision into an unforgettable celebration. 
            Our team is ready to craft the perfect experience for your special moment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                size="xl"
                variant="premium"
                className="font-sans tracking-wide"
              >
                <a
                  href="https://wa.me/7066763276?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event%20with%20Phoenix%20Events"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Create Magic Together
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                size="xl"
                variant="outline"
                className="font-sans tracking-wide"
              >
                <a href="/contact">Book a Consultation</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 pt-10 text-muted-foreground text-sm font-sans"
          >
            {[
              "500+ Events Delivered",
              "15+ Years Experience",
              "10,000+ Happy Clients"
            ].map((badge, index) => (
              <motion.div
                key={badge}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <span className={cn(
                  "w-2 h-2 rounded-full",
                  theme === "light" ? "bg-primary" : "bg-primary"
                )} />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
};

export default CTASection;
