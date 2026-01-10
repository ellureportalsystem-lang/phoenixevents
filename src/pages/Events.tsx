import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Lightbox from "@/components/ui/Lightbox";

const categories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "corporate", label: "Corporate" },
  { id: "launches", label: "Launches" },
];

const events = [
  {
    title: "Weddings",
    category: "weddings",
    description: "Timeless celebrations of love",
    fullDescription: "Your wedding day is the beginning of your forever story.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    ],
    features: ["Complete planning", "Custom décor", "Venue selection", "Vendor coordination"],
  },
  {
    title: "Birthday Parties",
    category: "all",
    description: "Memorable milestone moments",
    fullDescription: "Celebrate another year with a unique celebration.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1200&q=80",
    ],
    features: ["Theme design", "Custom decorations", "Entertainment", "Catering"],
  },
  {
    title: "Engagements",
    category: "pre-wedding",
    description: "The beginning of forever",
    fullDescription: "Mark the beginning of your journey together.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80",
    ],
    features: ["Venue styling", "Ring ceremony", "Photography", "Guest management"],
  },
  {
    title: "Sangeet Night",
    category: "pre-wedding",
    description: "Musical celebration of joy",
    fullDescription: "Let the music play and celebrations begin.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200&q=80",
    ],
    features: ["Stage & lighting", "DJ & music", "Dance floor", "Choreography"],
  },
  {
    title: "Haldi Ceremony",
    category: "pre-wedding",
    description: "Traditional pre-wedding ritual",
    fullDescription: "Embrace tradition with a vibrant Haldi ceremony.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=1200&q=80",
    ],
    features: ["Traditional décor", "Floral arrangements", "Seating", "Photography"],
  },
  {
    title: "Corporate Events",
    category: "corporate",
    description: "Professional excellence",
    fullDescription: "Elevate your brand with professional events.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    ],
    features: ["Conference management", "Brand activation", "Awards", "Team building"],
  },
  {
    title: "Car Launches",
    category: "launches",
    description: "Grand product unveilings",
    fullDescription: "Make a grand statement with spectacular launches.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    ],
    features: ["Venue transformation", "Product unveiling", "Media", "VIP management"],
  },
];

const Events = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(e => e.category === activeCategory || e.category === "all");

  const openLightbox = (gallery: string[], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxImages(gallery);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section with Wave */}
      <section className={cn(
        "relative pt-24 lg:pt-28 pb-16 lg:pb-20",
        theme === "light" ? "bg-secondary floral-pattern-mobile" : "bg-card"
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
        <AnimatedSection className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-3">
            What We Create
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Our <span className="text-gradient-gold">Events</span>
          </h1>
          <p className="text-muted-foreground font-sans text-sm max-w-lg mx-auto">
            From intimate gatherings to grand celebrations
          </p>
        </AnimatedSection>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-16 overflow-hidden">
          <svg className="absolute top-0 w-full h-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path 
              fill={theme === "light" ? "hsl(30 50% 99%)" : "hsl(0 0% 4%)"}
              d="M0,0 C360,50 720,10 1080,40 C1260,55 1380,30 1440,0 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* Filter Tabs - Horizontal scroll on mobile */}
      <section className="py-6 lg:py-8 bg-background sticky top-14 lg:top-16 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:justify-center lg:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex-shrink-0 px-4 lg:px-5 py-2.5 rounded-full text-sm font-sans transition-all duration-300 active:scale-95 btn-ripple",
                  activeCategory === cat.id
                    ? cn(
                        "text-white",
                        theme === "light" 
                          ? "bg-primary shadow-lg shadow-primary/20" 
                          : "bg-primary"
                      )
                    : cn(
                        "hover:bg-primary/10",
                        theme === "light" 
                          ? "bg-rose-50 text-foreground" 
                          : "bg-card text-muted-foreground"
                      )
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredEvents.map((event, index) => (
              <AnimatedSection
                key={event.title}
                animation="fade-up"
                delay={index * 80}
                className="group"
              >
                {/* Editorial Card */}
                <div className={cn(
                  "relative h-[360px] lg:h-[420px] rounded-2xl overflow-hidden transition-all duration-500 card-tap",
                  theme === "light" 
                    ? "bg-white shadow-[0_4px_20px_-4px_hsl(350_30%_50%/0.08)]" 
                    : "bg-card",
                  "lg:hover:shadow-[0_16px_50px_-8px_hsl(347_77%_50%/0.2)]"
                )}>
                  {/* Image */}
                  <div className="relative h-[60%] lg:h-[65%] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Lightbox trigger - Desktop hover */}
                    <button
                      onClick={(e) => openLightbox(event.gallery, e)}
                      className={cn(
                        "absolute inset-0 hidden lg:flex items-center justify-center transition-all duration-500",
                        "opacity-0 group-hover:opacity-100",
                        theme === "light" ? "bg-rose-500/60" : "bg-background/60"
                      )}
                    >
                      <div className={cn(
                        "p-3 rounded-full",
                        theme === "light" ? "bg-white/90" : "bg-card/90"
                      )}>
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </button>

                    {/* Lightbox trigger - Mobile */}
                    <button
                      onClick={(e) => openLightbox(event.gallery, e)}
                      className="lg:hidden absolute top-3 right-3 p-2.5 rounded-full bg-black/40 text-white active:scale-95 backdrop-blur-sm"
                      aria-label="View gallery"
                    >
                      <ZoomIn size={18} />
                    </button>
                  </div>

                  {/* Content Panel */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-[45%] lg:h-[40%] p-4 lg:p-5",
                    "flex flex-col justify-between",
                    theme === "light" ? "bg-white" : "bg-card"
                  )}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full icon-pulse",
                          theme === "light" ? "bg-gold" : "bg-primary"
                        )} />
                        <h3 className="text-base lg:text-lg font-serif font-semibold text-foreground lg:group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground pl-3.5 line-clamp-2">
                        {event.fullDescription}
                      </p>
                      
                      {/* Features tags */}
                      <div className="flex flex-wrap gap-1 pl-3.5 pt-1">
                        {event.features.slice(0, 2).map((f) => (
                          <span 
                            key={f}
                            className={cn(
                              "text-[10px] px-2 py-0.5 rounded-full",
                              theme === "light" 
                                ? "bg-rose-50 text-rose-600" 
                                : "bg-primary/10 text-primary"
                            )}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/1234567890?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(event.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary text-xs font-medium active:scale-95 transition-all"
                    >
                      <span>Plan This Event</span>
                      <ArrowRight size={14} className="ml-1" />
                    </a>

                    {/* Bottom accent */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 lg:transform lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left",
                      theme === "light" 
                        ? "bg-gradient-to-r from-rose-400 via-rose-300 to-transparent" 
                        : "bg-gradient-to-r from-primary via-gold-light to-transparent"
                    )} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(
        "py-12 lg:py-16 relative overflow-hidden",
        theme === "light" ? "bg-secondary floral-pattern-mobile" : "bg-card"
      )}>
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 h-10 lg:h-12 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path 
              fill={theme === "light" ? "hsl(30 50% 99%)" : "hsl(0 0% 4%)"}
              d="M0,48 C360,10 720,48 1080,24 C1260,12 1380,30 1440,48 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <AnimatedSection className="container mx-auto px-4 lg:px-8 text-center relative pt-6 lg:pt-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-4">
            Don't See Your Event Type?
          </h2>
          <p className="text-muted-foreground font-sans text-sm max-w-lg mx-auto mb-6">
            We create custom events tailored to your unique vision.
          </p>
          <Button
            asChild
            className={cn(
              "rounded-full px-6 lg:px-8 active:scale-95 btn-ripple",
              theme === "light"
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
};

export default Events;
