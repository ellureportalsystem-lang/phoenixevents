import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection from "@/components/ui/MotionSection";
import { ComingSoonDialog } from "@/components/ui/ComingSoonDialog";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Elegant wedding setup",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Wedding ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    alt: "Birthday celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&q=80",
    alt: "Event decoration",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Corporate event",
  },
];

const GalleryPreviewSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

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
              variant="outline"
              size="lg"
              className="self-start md:self-auto"
              onClick={() => setShowComingSoon(true)}
            >
              <span className="flex items-center gap-2">
                View Full Gallery
                <ArrowRight size={16} />
              </span>
            </Button>
          </motion.div>
        </MotionSection>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-end gap-2 mb-4">
          <motion.button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              "p-2.5 rounded-full transition-all border",
              canScrollLeft
                ? cn(
                    "text-primary border-primary/20",
                    theme === "light" ? "bg-white shadow-lg" : "bg-card"
                  )
                : "bg-muted text-muted-foreground/40 border-transparent"
            )}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              "p-2.5 rounded-full transition-all border",
              canScrollRight
                ? cn(
                    "text-primary border-primary/20",
                    theme === "light" ? "bg-white shadow-lg" : "bg-card"
                  )
                : "bg-muted text-muted-foreground/40 border-transparent"
            )}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Gallery Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl cursor-pointer h-[240px] md:h-[300px]",
                  "hover:shadow-xl transition-shadow duration-300"
                )}
                onClick={() => setShowComingSoon(true)}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </section>
  );
};

export default GalleryPreviewSection;
