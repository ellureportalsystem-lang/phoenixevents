import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Heart, Cake, CircleDot, Music } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection from "@/components/ui/MotionSection";
import { ComingSoonDialog } from "@/components/ui/ComingSoonDialog";

const events = [
  {
    title: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "Timeless celebrations of love",
    icon: Heart,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    description: "Memorable milestone moments",
    icon: Cake,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Engagements",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    description: "The beginning of forever",
    icon: CircleDot,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Sangeet",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80",
    description: "Musical celebration of joy",
    icon: Music,
    gradient: "from-indigo-500 to-purple-500",
  },
];

const EventsSection = () => {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const cardWidth = 220;
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
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className={cn(
      "py-16 lg:py-24 relative overflow-hidden",
      theme === "light" ? "bg-gradient-to-b from-secondary via-background to-secondary" : "bg-background"
    )}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {theme === "light" ? (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <MotionSection className="text-center max-w-xl mx-auto mb-12 lg:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">What We Create</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold"
          >
            Our Signature <span className="text-gradient-gold">Events</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-sans text-base max-w-md mx-auto"
          >
            From intimate gatherings to grand celebrations
          </motion.p>
        </MotionSection>

        {/* Mobile Carousel Navigation */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <div className="flex gap-1.5">
            {events.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "w-6 bg-primary"
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
                "p-2.5 rounded-2xl transition-all border",
                canScrollLeft 
                  ? cn(
                      "text-primary border-primary/20",
                      theme === "light" ? "bg-white shadow-lg" : "bg-card"
                    )
                  : "bg-muted text-muted-foreground/40 border-transparent"
              )}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-2.5 rounded-2xl transition-all border",
                canScrollRight 
                  ? cn(
                      "text-primary border-primary/20",
                      theme === "light" ? "bg-white shadow-lg" : "bg-card"
                    )
                  : "bg-muted text-muted-foreground/40 border-transparent"
              )}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Events Grid - Elegant Image-Focused Cards */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex lg:grid lg:grid-cols-4 gap-3 lg:gap-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="flex-shrink-0 w-[50vw] max-w-[140px] lg:w-auto lg:max-w-none snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => setShowComingSoon(true)}
                className="block h-full w-full"
              >
                <motion.div
                  className={cn(
                    "group relative aspect-square lg:aspect-[3/4] rounded-md overflow-hidden transition-all duration-500",
                    theme === "light" 
                      ? "bg-white border border-rose-100/40 shadow-sm hover:shadow-md" 
                      : "bg-card border border-border/30 shadow-sm hover:shadow-md"
                  )}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Full Image Background */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      animate={hoveredIndex === index && !shouldReduceMotion ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      loading="lazy"
                    />
                    
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Subtle accent overlay on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: event.gradient.includes('rose') 
                          ? 'linear-gradient(to top, rgba(244, 63, 94, 0.2), transparent)'
                          : event.gradient.includes('amber')
                          ? 'linear-gradient(to top, rgba(245, 158, 11, 0.2), transparent)'
                          : event.gradient.includes('purple')
                          ? 'linear-gradient(to top, rgba(168, 85, 247, 0.2), transparent)'
                          : event.gradient.includes('indigo')
                          ? 'linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)'
                          : event.gradient.includes('yellow')
                          ? 'linear-gradient(to top, rgba(234, 179, 8, 0.2), transparent)'
                          : 'linear-gradient(to top, rgba(59, 130, 246, 0.2), transparent)'
                      }}
                    />
                  </div>

                  {/* Overlaid Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-2 lg:p-2.5">
                    {/* Top: Icon Badge */}
                    <div className="flex justify-end">
                      <motion.div
                        className={cn(
                          "w-6 h-6 lg:w-6 lg:h-6 rounded-md flex items-center justify-center backdrop-blur-md",
                          theme === "light"
                            ? "bg-white/20 border border-white/30"
                            : "bg-black/20 border border-white/20"
                        )}
                        animate={hoveredIndex === index && !shouldReduceMotion ? { 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1 
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <event.icon 
                          size={12} 
                          className="text-white drop-shadow-lg" 
                        />
                      </motion.div>
                    </div>

                    {/* Bottom: Title, Description & CTA */}
                    <div className="space-y-1">
                      {/* Event Title - Overlaid on Image */}
                      <div>
                        <h3 className="text-sm lg:text-base font-serif font-bold text-white uppercase tracking-wide drop-shadow-lg mb-0.5">
                          {event.title}
                        </h3>
                        <p className="text-white/90 text-[9px] lg:text-[10px] font-sans leading-tight drop-shadow-md">
                          {event.description}
                        </p>
                      </div>

                      {/* Explore Button */}
                      <motion.div
                        className="flex items-center justify-between pt-1 border-t border-white/20"
                        animate={hoveredIndex === index && !shouldReduceMotion ? { 
                          x: 2
                        } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white/90 text-[7px] lg:text-[8px] font-semibold tracking-wider uppercase">
                          Explore More
                        </span>
                        <motion.div
                          className="w-6 h-6 lg:w-6 lg:h-6 rounded-md flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30 group-hover:bg-white/30 transition-colors"
                          animate={hoveredIndex === index && !shouldReduceMotion ? { 
                            x: 2,
                            scale: 1.05
                          } : { x: 0, scale: 1 }}
                        >
                          <ArrowRight size={10} className="text-white drop-shadow-lg" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <MotionSection animation="fade-up" delay={0.4} className="text-center mt-12 lg:mt-16">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <button
              onClick={() => setShowComingSoon(true)}
              className={cn(
                "inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans text-sm tracking-wide transition-all duration-300 group",
                theme === "light"
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35"
                  : "bg-gradient-to-r from-primary to-gold text-primary-foreground shadow-xl shadow-primary/20"
              )}
            >
              <span>View All Events</span>
              <motion.div
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight size={18} />
              </motion.div>
            </button>
          </motion.div>
        </MotionSection>
      </div>
      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </section>
  );
};

export default EventsSection;
