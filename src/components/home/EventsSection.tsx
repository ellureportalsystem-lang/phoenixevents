import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection, { StaggerContainer, StaggerItem } from "@/components/ui/MotionSection";
import Lightbox from "@/components/ui/Lightbox";

const events = [
  {
    title: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "Timeless celebrations of love",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    ],
  },
  {
    title: "Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    description: "Memorable milestone moments",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1200&q=80",
    ],
  },
  {
    title: "Engagements",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    description: "The beginning of forever",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80",
    ],
  },
  {
    title: "Sangeet",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80",
    description: "Musical celebration of joy",
    gallery: [
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200&q=80",
    ],
  },
  {
    title: "Haldi",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&q=80",
    description: "Traditional pre-wedding ritual",
    gallery: [
      "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=1200&q=80",
    ],
  },
  {
    title: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    description: "Professional excellence",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    ],
  },
];

const EventsSection = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const cardWidth = 300;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, events.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  const openLightbox = (gallery: string[], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxImages(gallery);
    setLightboxOpen(true);
  };

  return (
    <section className={cn(
      "py-14 lg:py-20 relative overflow-hidden",
      theme === "light" ? "bg-secondary" : "bg-background"
    )}>
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-12 lg:h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            fill={theme === "light" ? "hsl(35 45% 97%)" : "hsl(0 0% 3%)"}
            d="M0,60 C360,20 720,60 1080,30 C1260,15 1380,40 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative pt-8 lg:pt-10">
        {/* Header */}
        <MotionSection className="text-center max-w-xl mx-auto mb-10 lg:mb-14 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-sans text-xs tracking-[0.3em] uppercase"
          >
            What We Create
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold"
          >
            Our Signature <span className="text-gradient-gold">Events</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={cn(
              "w-14 lg:w-20 h-0.5 mx-auto mt-3",
              theme === "light" 
                ? "bg-gradient-to-r from-transparent via-primary to-transparent" 
                : "bg-gradient-to-r from-transparent via-gold to-transparent"
            )}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-sans text-sm max-w-md mx-auto"
          >
            From intimate gatherings to grand celebrations
          </motion.p>
        </MotionSection>

        {/* Mobile Carousel Navigation */}
        <div className="lg:hidden flex items-center justify-between mb-5">
          <div className="flex gap-1.5">
            {events.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? cn("w-6", theme === "light" ? "bg-primary" : "bg-primary")
                    : "w-1.5 bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <motion.button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-2.5 rounded-full transition-all",
                canScrollLeft 
                  ? cn(
                      "text-primary",
                      theme === "light" ? "bg-white shadow-md" : "bg-card"
                    )
                  : "bg-muted text-muted-foreground/40"
              )}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-2.5 rounded-full transition-all",
                canScrollRight 
                  ? cn(
                      "text-primary",
                      theme === "light" ? "bg-white shadow-md" : "bg-card"
                    )
                  : "bg-muted text-muted-foreground/40"
              )}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Events Grid - Desktop: 3 cols, Mobile: Horizontal scroll centered */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {events.map((event, index) => (
            <StaggerItem
              key={event.title}
              className={cn(
                "flex-shrink-0 w-[85vw] max-w-[300px] lg:w-auto lg:max-w-none snap-center"
              )}
            >
              <motion.div
                className={cn(
                  "group relative h-[360px] lg:h-[400px] rounded-3xl overflow-hidden transition-all duration-500",
                  theme === "light" 
                    ? "bg-white shadow-[0_4px_24px_-4px_hsl(350_30%_50%/0.1)]" 
                    : "bg-card shadow-[0_4px_24px_-4px_hsl(0_0%_0%/0.3)]"
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={shouldReduceMotion ? {} : {
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Hover shadow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                  theme === "light"
                    ? "shadow-[0_20px_60px_-12px_hsl(350_65%_55%/0.2)]"
                    : "shadow-[0_20px_60px_-12px_hsl(40_72%_52%/0.15)]"
                )} />

                {/* Image - Top 68% */}
                <div className="relative h-[68%] overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, transition: { duration: 0.7 } }}
                    loading="lazy"
                  />
                  
                  {/* Lightbox trigger overlay */}
                  <motion.button
                    onClick={(e) => openLightbox(event.gallery, e)}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center",
                      theme === "light"
                        ? "bg-primary/50"
                        : "bg-background/60"
                    )}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className={cn(
                        "p-4 rounded-full",
                        theme === "light" ? "bg-white/95" : "bg-card/95"
                      )}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    >
                      <ZoomIn className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.button>

                  {/* Mobile tap area for lightbox */}
                  <motion.button
                    onClick={(e) => openLightbox(event.gallery, e)}
                    className="lg:hidden absolute top-3 right-3 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-sm"
                    aria-label="View gallery"
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                  >
                    <ZoomIn size={16} />
                  </motion.button>
                </div>

                {/* Content Panel */}
                <Link 
                  to="/events"
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[36%] p-5 lg:p-6 transition-all duration-500",
                    "flex flex-col justify-between",
                    theme === "light" ? "bg-white" : "bg-card"
                  )}
                >
                  {/* Gold dot + Title */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <motion.span
                        className={cn(
                          "w-2 h-2 rounded-full",
                          theme === "light" ? "bg-accent" : "bg-primary"
                        )}
                        animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <h3 className="text-lg lg:text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <motion.div
                    className="flex items-center text-primary text-sm font-medium"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ x: 4 }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={16} className="ml-1" />
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-1 origin-left",
                      theme === "light" 
                        ? "bg-gradient-to-r from-primary via-primary/70 to-accent" 
                        : "bg-gradient-to-r from-primary via-gold to-gold-light"
                    )}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </div>

        {/* View All Button */}
        <MotionSection animation="fade-up" delay={0.4} className="text-center mt-10 lg:mt-14">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <Link
              to="/events"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans text-sm tracking-wide transition-all duration-300",
                theme === "light"
                  ? "bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30"
                  : "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
              )}
            >
              View All Events
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </MotionSection>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 overflow-hidden">
        <svg className="absolute top-0 w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            fill={theme === "light" ? "hsl(30 40% 99%)" : "hsl(0 5% 7%)"}
            d="M0,0 C360,40 720,0 1080,30 C1260,45 1380,20 1440,0 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default EventsSection;
