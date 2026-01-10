import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const events = [
  {
    title: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "Timeless celebrations of love",
  },
  {
    title: "Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    description: "Memorable milestone moments",
  },
  {
    title: "Engagements",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    description: "The beginning of forever",
  },
  {
    title: "Sangeet",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80",
    description: "Musical celebration of joy",
  },
  {
    title: "Haldi",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&q=80",
    description: "Traditional pre-wedding ritual",
  },
  {
    title: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    description: "Professional excellence",
  },
];

const EventsSection = () => {
  const { theme } = useTheme();
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
    <section className={cn(
      "py-16 relative overflow-hidden",
      theme === "light" ? "bg-secondary floral-pattern" : "bg-background"
    )}>
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            fill={theme === "light" ? "hsl(30 50% 99%)" : "hsl(0 0% 4%)"}
            d="M0,60 C360,20 720,60 1080,30 C1260,15 1380,40 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative pt-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase">
            What We Create
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Our Signature <span className="text-gradient-gold">Events</span>
          </h2>
          {/* Pink underline accent */}
          <div className={cn(
            "w-16 h-0.5 mx-auto mt-4",
            theme === "light" 
              ? "bg-gradient-to-r from-transparent via-rose-400 to-transparent" 
              : "bg-gradient-to-r from-transparent via-gold to-transparent"
          )} />
          <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life.
          </p>
        </div>

        {/* Mobile Carousel Arrows */}
        <div className="lg:hidden flex justify-end gap-2 mb-4">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              "p-2 rounded-full transition-all",
              canScrollLeft 
                ? "bg-primary/10 text-primary hover:bg-primary/20" 
                : "bg-muted text-muted-foreground opacity-50"
            )}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              "p-2 rounded-full transition-all",
              canScrollRight 
                ? "bg-primary/10 text-primary hover:bg-primary/20" 
                : "bg-muted text-muted-foreground opacity-50"
            )}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Events Grid - Desktop: 3 cols, Mobile: Horizontal scroll */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event, index) => (
            <Link
              key={event.title}
              to="/events"
              className={cn(
                "group relative flex-shrink-0 w-[280px] lg:w-auto snap-start",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Editorial Card */}
              <div className={cn(
                "relative h-[380px] rounded-2xl overflow-hidden transition-all duration-500",
                theme === "light" 
                  ? "bg-white shadow-[0_8px_30px_-8px_hsl(350_30%_50%/0.12)]" 
                  : "bg-card shadow-[0_8px_30px_-8px_hsl(0_0%_0%/0.4)]",
                "hover:shadow-[0_16px_50px_-8px_hsl(347_77%_50%/0.2)]"
              )}>
                {/* Image - Top 70% */}
                <div className="relative h-[70%] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    theme === "light"
                      ? "bg-gradient-to-t from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                      : "bg-gradient-to-t from-background/80 via-transparent to-transparent"
                  )} />
                </div>

                {/* Content Panel - Bottom 30% */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-[35%] p-5 transition-all duration-500",
                  "flex flex-col justify-between",
                  theme === "light" ? "bg-white" : "bg-card"
                )}>
                  {/* Gold dot + Title */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        theme === "light" ? "bg-gold" : "bg-primary"
                      )} />
                      <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground pl-3.5">
                      {event.description}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <div className="flex items-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>

                  {/* Bottom accent line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
                    theme === "light" 
                      ? "bg-gradient-to-r from-rose-400 via-rose-300 to-transparent" 
                      : "bg-gradient-to-r from-primary via-gold-light to-transparent"
                  )} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/events"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm tracking-wide transition-all duration-300",
              theme === "light"
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            )}
          >
            View All Events
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute top-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            fill={theme === "light" ? "hsl(0 0% 100%)" : "hsl(0 0% 8%)"}
            d="M0,0 C360,40 720,0 1080,30 C1260,45 1380,20 1440,0 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default EventsSection;
