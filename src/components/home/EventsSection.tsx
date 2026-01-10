import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/ui/AnimatedSection";
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
      
      // Calculate active index for mobile
      const cardWidth = 300; // Approximate card width + gap
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
      "py-12 lg:py-16 relative overflow-hidden",
      theme === "light" ? "bg-secondary floral-pattern-mobile" : "bg-background"
    )}>
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-12 lg:h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            fill={theme === "light" ? "hsl(30 50% 99%)" : "hsl(0 0% 4%)"}
            d="M0,60 C360,20 720,60 1080,30 C1260,15 1380,40 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative pt-6 lg:pt-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-xl mx-auto mb-8 lg:mb-12 space-y-3">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase">
            What We Create
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
            Our Signature <span className="text-gradient-gold">Events</span>
          </h2>
          <div className={cn(
            "w-12 lg:w-16 h-0.5 mx-auto mt-3",
            theme === "light" 
              ? "bg-gradient-to-r from-transparent via-rose-400 to-transparent" 
              : "bg-gradient-to-r from-transparent via-gold to-transparent"
          )} />
          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            From intimate gatherings to grand celebrations
          </p>
        </AnimatedSection>

        {/* Mobile Carousel Navigation */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          {/* Dots indicator */}
          <div className="flex gap-1.5">
            {events.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? cn("w-6", theme === "light" ? "bg-primary" : "bg-gold")
                    : "w-1.5 bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
          
          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-2.5 rounded-full transition-all active:scale-95",
                canScrollLeft 
                  ? cn(
                      "text-primary",
                      theme === "light" ? "bg-rose-50" : "bg-primary/10"
                    )
                  : "bg-muted text-muted-foreground/40"
              )}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-2.5 rounded-full transition-all active:scale-95",
                canScrollRight 
                  ? cn(
                      "text-primary",
                      theme === "light" ? "bg-rose-50" : "bg-primary/10"
                    )
                  : "bg-muted text-muted-foreground/40"
              )}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Events Grid - Desktop: 3 cols, Mobile: Horizontal scroll centered */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
        >
          {events.map((event, index) => (
            <AnimatedSection
              key={event.title}
              animation="fade-up"
              delay={index * 100}
              className={cn(
                "group relative flex-shrink-0 w-[85vw] max-w-[300px] lg:w-auto lg:max-w-none snap-center"
              )}
            >
              {/* Editorial Card */}
              <div className={cn(
                "relative h-[340px] lg:h-[380px] rounded-2xl overflow-hidden transition-all duration-500 card-tap",
                theme === "light" 
                  ? "bg-white shadow-[0_4px_20px_-4px_hsl(350_30%_50%/0.1)]" 
                  : "bg-card shadow-[0_4px_20px_-4px_hsl(0_0%_0%/0.3)]",
                "lg:hover:shadow-[0_16px_50px_-8px_hsl(347_77%_50%/0.2)]"
              )}>
                {/* Image - Top 70% */}
                <div className="relative h-[70%] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Lightbox trigger overlay */}
                  <button
                    onClick={(e) => openLightbox(event.gallery, e)}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-500",
                      "opacity-0 lg:group-hover:opacity-100",
                      theme === "light"
                        ? "bg-rose-500/60"
                        : "bg-background/60"
                    )}
                  >
                    <div className={cn(
                      "p-3 rounded-full",
                      theme === "light" ? "bg-white/90" : "bg-card/90"
                    )}>
                      <ZoomIn className="w-6 h-6 text-primary" />
                    </div>
                  </button>

                  {/* Mobile tap area for lightbox */}
                  <button
                    onClick={(e) => openLightbox(event.gallery, e)}
                    className="lg:hidden absolute top-3 right-3 p-2 rounded-full bg-black/30 text-white active:scale-95"
                    aria-label="View gallery"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                {/* Content Panel */}
                <Link 
                  to="/events"
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-[35%] p-4 lg:p-5 transition-all duration-500",
                    "flex flex-col justify-between",
                    theme === "light" ? "bg-white" : "bg-card"
                  )}
                >
                  {/* Gold dot + Title */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full icon-pulse",
                        theme === "light" ? "bg-gold" : "bg-primary"
                      )} />
                      <h3 className="text-base lg:text-lg font-serif font-semibold text-foreground lg:group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground pl-3.5">
                      {event.description}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <div className="flex items-center text-primary text-xs font-medium opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform lg:translate-y-2 lg:group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>

                  {/* Bottom accent line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 transform lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left",
                    theme === "light" 
                      ? "bg-gradient-to-r from-rose-400 via-rose-300 to-transparent" 
                      : "bg-gradient-to-r from-primary via-gold-light to-transparent"
                  )} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection animation="fade-up" delay={600} className="text-center mt-8 lg:mt-10">
          <Link
            to="/events"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm tracking-wide transition-all duration-300 active:scale-95 btn-ripple",
              theme === "light"
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            )}
          >
            View All Events
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 overflow-hidden">
        <svg className="absolute top-0 w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            fill={theme === "light" ? "hsl(0 0% 100%)" : "hsl(0 0% 8%)"}
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
