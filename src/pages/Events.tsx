import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

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
    fullDescription: "Your wedding day is the beginning of your forever story. We create timeless celebrations that reflect your unique love.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    features: ["Complete planning & coordination", "Custom décor & theme", "Venue selection", "Vendor coordination"],
  },
  {
    title: "Birthday Parties",
    category: "all",
    description: "Memorable milestone moments",
    fullDescription: "Celebrate another year of life with a party that's as unique as you are.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    features: ["Theme conceptualization", "Custom decorations", "Entertainment booking", "Catering coordination"],
  },
  {
    title: "Engagements",
    category: "pre-wedding",
    description: "The beginning of forever",
    fullDescription: "Mark the beginning of your journey together with an elegant celebration.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    features: ["Venue styling", "Ring ceremony setup", "Photography coordination", "Guest management"],
  },
  {
    title: "Sangeet Night",
    category: "pre-wedding",
    description: "Musical celebration of joy",
    fullDescription: "Let the music play and the celebrations begin with unforgettable memories.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
    features: ["Stage & lighting", "DJ & music", "Dance floor setup", "Choreography"],
  },
  {
    title: "Haldi Ceremony",
    category: "pre-wedding",
    description: "Traditional pre-wedding ritual",
    fullDescription: "Embrace tradition with a vibrant Haldi ceremony that celebrates blessings.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800&q=80",
    features: ["Traditional décor", "Floral arrangements", "Seating setup", "Photography"],
  },
  {
    title: "Mehendi Function",
    category: "pre-wedding",
    description: "Artistic bridal celebration",
    fullDescription: "A celebration of art, tradition, and beauty for an unforgettable experience.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800&q=80",
    features: ["Artistic décor", "Mehendi artist", "Music & entertainment", "Photo booth"],
  },
  {
    title: "Corporate Events",
    category: "corporate",
    description: "Professional excellence",
    fullDescription: "Elevate your brand with professional events that leave lasting impressions.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    features: ["Conference management", "Brand activation", "Award ceremonies", "Team building"],
  },
  {
    title: "Car Launches",
    category: "launches",
    description: "Grand product unveilings",
    fullDescription: "Make a grand statement with spectacular product launch experiences.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    features: ["Venue transformation", "Product unveiling", "Media coordination", "VIP management"],
  },
];

const Events = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(e => e.category === activeCategory || e.category === "all");

  return (
    <Layout>
      {/* Hero Section with Wave */}
      <section className={cn(
        "relative pt-28 pb-20",
        theme === "light" ? "bg-secondary floral-pattern" : "bg-card"
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-xs tracking-[0.3em] uppercase mb-3">
            What We Create
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-gradient-gold">Events</span>
          </h1>
          <p className="text-muted-foreground font-sans text-sm max-w-lg mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life.
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute top-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path 
              fill={theme === "light" ? "hsl(30 50% 99%)" : "hsl(0 0% 4%)"}
              d="M0,0 C360,50 720,10 1080,40 C1260,55 1380,30 1440,0 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-sans transition-all duration-300",
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
      <section className={cn(
        "py-12",
        theme === "light" ? "bg-background" : "bg-background"
      )}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={event.title}
                className={cn(
                  "group relative opacity-0 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.08}s` }}
                onMouseEnter={() => setHoveredEvent(event.title)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Editorial Card */}
                <div className={cn(
                  "relative h-[420px] rounded-2xl overflow-hidden transition-all duration-500",
                  theme === "light" 
                    ? "bg-white shadow-[0_8px_30px_-8px_hsl(350_30%_50%/0.1)]" 
                    : "bg-card",
                  "hover:shadow-[0_16px_50px_-8px_hsl(347_77%_50%/0.2)]"
                )}>
                  {/* Image - Top portion */}
                  <div className="relative h-[65%] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-500",
                      theme === "light"
                        ? "bg-rose-500/80"
                        : "bg-background/80",
                      hoveredEvent === event.title ? "opacity-100" : "opacity-0"
                    )}>
                      <div className="text-center p-4">
                        <p className={cn(
                          "text-sm mb-3",
                          theme === "light" ? "text-white/90" : "text-foreground/80"
                        )}>
                          {event.fullDescription}
                        </p>
                        <span className={cn(
                          "inline-flex items-center gap-1 text-sm font-medium",
                          theme === "light" ? "text-white" : "text-primary"
                        )}>
                          View Gallery <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-[40%] p-5",
                    "flex flex-col justify-between",
                    theme === "light" ? "bg-white" : "bg-card"
                  )}>
                    <div className="space-y-2">
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
                      
                      {/* Quick features */}
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
                      className="flex items-center text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span>Plan This Event</span>
                      <ArrowRight size={14} className="ml-1" />
                    </a>

                    {/* Bottom accent */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
                      theme === "light" 
                        ? "bg-gradient-to-r from-rose-400 via-rose-300 to-transparent" 
                        : "bg-gradient-to-r from-primary via-gold-light to-transparent"
                    )} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(
        "py-16 relative overflow-hidden",
        theme === "light" ? "bg-secondary floral-pattern" : "bg-card"
      )}>
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path 
              fill={theme === "light" ? "hsl(30 50% 99%)" : "hsl(0 0% 4%)"}
              d="M0,48 C360,10 720,48 1080,24 C1260,12 1380,30 1440,48 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative pt-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Don't See Your Event Type?
          </h2>
          <p className="text-muted-foreground font-sans text-sm max-w-lg mx-auto mb-6">
            We specialize in creating custom events tailored to your unique vision.
          </p>
          <Button
            asChild
            className={cn(
              "rounded-full px-8",
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
        </div>
      </section>
    </Layout>
  );
};

export default Events;
