import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection, { StaggerContainer, StaggerItem } from "@/components/ui/MotionSection";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Elegant wedding setup",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Wedding ceremony",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    alt: "Birthday celebration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&q=80",
    alt: "Event decoration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Corporate event",
    span: "col-span-1 row-span-1",
  },
];

const GalleryPreviewSection = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <MotionSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-sans text-sm tracking-[0.3em] uppercase"
            >
              Our Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold"
            >
              Featured <span className="text-gradient-gold">Events</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground font-sans max-w-xl"
            >
              A glimpse into the extraordinary celebrations we've had the honor of creating.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="self-start md:self-auto"
            >
              <Link to="/gallery" className="flex items-center gap-2">
                View Full Gallery
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </MotionSection>

        {/* Gallery Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]" staggerDelay={0.08}>
          {galleryImages.map((image) => (
            <StaggerItem key={image.alt}>
              <motion.div
                className={cn(
                  "group relative overflow-hidden rounded-2xl cursor-pointer h-full",
                  image.span
                )}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.7 } }}
                />
                <motion.div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    theme === "light"
                      ? "bg-primary/60"
                      : "bg-background/70"
                  )}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <p className="text-white font-serif text-lg">{image.alt}</p>
                    <p className={cn(
                      "text-sm mt-1",
                      theme === "light" ? "text-white/80" : "text-primary"
                    )}>
                      View Gallery
                    </p>
                  </div>
                </motion.div>
                <div className={cn(
                  "absolute inset-0 border-2 border-transparent rounded-2xl transition-colors",
                  "group-hover:border-primary/50"
                )} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
