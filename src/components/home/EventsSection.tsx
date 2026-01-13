import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection from "@/components/ui/MotionSection";

const events = [
  {
    title: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "Timeless celebrations of love",
    icon: "💍",
  },
  {
    title: "Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    description: "Memorable milestone moments",
    icon: "🎂",
  },
  {
    title: "Engagements",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    description: "The beginning of forever",
    icon: "💝",
  },
  {
    title: "Sangeet",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80",
    description: "Musical celebration of joy",
    icon: "🎵",
  },
  {
    title: "Haldi",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&q=80",
    description: "Traditional pre-wedding ritual",
    icon: "🌼",
  },
  {
    title: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    description: "Professional excellence",
    icon: "🏢",
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

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const cardWidth = 280;
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
      const scrollAmount = 280;
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

        {/* Events Grid - Modern Bento-style Cards */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="flex-shrink-0 w-[80vw] max-w-[280px] lg:w-auto lg:max-w-none snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to="/events" className="block h-full">
                <motion.div
                  className={cn(
                    "group relative h-[380px] lg:h-[420px] rounded-3xl overflow-hidden transition-all duration-500",
                    theme === "light" 
                      ? "bg-white border border-border/50 shadow-[0_4px_30px_-8px_hsl(350_30%_50%/0.12)]" 
                      : "bg-card border border-border/30 shadow-[0_4px_30px_-8px_hsl(0_0%_0%/0.4)]"
                  )}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -12,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-[55%] overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      animate={hoveredIndex === index && !shouldReduceMotion ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={cn(
                      "absolute inset-0 transition-opacity duration-300",
                      theme === "light"
                        ? "bg-gradient-to-t from-white via-transparent to-transparent"
                        : "bg-gradient-to-t from-card via-transparent to-transparent"
                    )} />

                    {/* Floating Icon Badge */}
                    <motion.div
                      className={cn(
                        "absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl",
                        theme === "light"
                          ? "bg-white/90 backdrop-blur-sm shadow-lg"
                          : "bg-card/90 backdrop-blur-sm border border-border/50"
                      )}
                      animate={hoveredIndex === index && !shouldReduceMotion ? { 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1 
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {event.icon}
                    </motion.div>
                  </div>

                  {/* Content Area */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-[48%] p-6 flex flex-col justify-between",
                    theme === "light" ? "bg-white" : "bg-card"
                  )}>
                    {/* Title & Description */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={cn(
                            "w-1 h-8 rounded-full",
                            theme === "light" 
                              ? "bg-gradient-to-b from-primary to-accent" 
                              : "bg-gradient-to-b from-primary to-gold-light"
                          )}
                          animate={hoveredIndex === index && !shouldReduceMotion ? { 
                            height: 32,
                            transition: { duration: 0.3 }
                          } : {}}
                        />
                        <h3 className="text-xl lg:text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Explore Button */}
                    <motion.div
                      className={cn(
                        "flex items-center justify-between pt-4 border-t",
                        theme === "light" ? "border-border/50" : "border-border/30"
                      )}
                    >
                      <span className={cn(
                        "text-sm font-medium tracking-wide",
                        theme === "light" ? "text-primary" : "text-primary"
                      )}>
                        Explore
                      </span>
                      <motion.div
                        className={cn(
                          "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300",
                          theme === "light"
                            ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        )}
                        animate={hoveredIndex === index && !shouldReduceMotion ? { x: 4 } : { x: 0 }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500",
                      hoveredIndex === index ? "opacity-100" : "opacity-0",
                      theme === "light"
                        ? "shadow-[inset_0_0_0_2px_hsl(350_65%_55%/0.3)]"
                        : "shadow-[inset_0_0_0_2px_hsl(40_72%_52%/0.3)]"
                    )}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <MotionSection animation="fade-up" delay={0.4} className="text-center mt-12 lg:mt-16">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <Link
              to="/events"
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
            </Link>
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
};

export default EventsSection;
