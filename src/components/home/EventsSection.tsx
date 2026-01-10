import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    description: "Traditional pre-wedding ritual",
  },
  {
    title: "Mehendi",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=600&q=80",
    description: "Artistic bridal celebration",
  },
  {
    title: "Anniversaries",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80",
    description: "Celebrating lasting love",
  },
  {
    title: "Corporate Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    description: "Professional excellence",
  },
  {
    title: "Car Launches",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    description: "Grand product unveilings",
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            What We Create
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Our Signature <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            From intimate gatherings to grand celebrations, we bring your vision to life 
            with creativity, elegance, and flawless execution.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Link
              key={event.title}
              to="/events"
              className={cn(
                "group relative overflow-hidden rounded-lg aspect-[4/3] hover-lift",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-sans">Explore</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-sans tracking-wide transition-colors"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
