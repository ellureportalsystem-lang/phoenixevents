import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="space-y-4">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Featured <span className="text-gradient-gold">Events</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl">
              A glimpse into the extraordinary celebrations we've had the honor of creating.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start md:self-auto"
          >
            <Link to="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className={cn(
                "group relative overflow-hidden rounded-lg cursor-pointer hover-lift",
                image.span,
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground font-serif text-lg">{image.alt}</p>
                  <p className="text-primary text-sm mt-1">View Gallery</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
