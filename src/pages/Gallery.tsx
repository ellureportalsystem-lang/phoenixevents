import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories = ["All", "Weddings", "Corporate", "Birthdays", "Décor"];

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Grand wedding ceremony",
    category: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Elegant wedding setup",
    category: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Corporate conference",
    category: "Corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    alt: "Birthday celebration",
    category: "Birthdays",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80",
    alt: "Floral decoration",
    category: "Décor",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Wedding reception",
    category: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    alt: "Corporate gala",
    category: "Corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26a7c7d35cb0?w=800&q=80",
    alt: "Wedding celebration",
    category: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    alt: "Luxury event décor",
    category: "Décor",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Wedding venue",
    category: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Birthday party",
    category: "Birthdays",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
    alt: "Corporate event",
    category: "Corporate",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Event <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Explore our collection of beautifully crafted events, each telling a unique story of 
            celebration, love, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.alt}-${index}`}
                className={cn(
                  "break-inside-avoid group cursor-pointer",
                  "opacity-0 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="relative overflow-hidden rounded-lg hover-lift">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-foreground font-serif text-sm">{item.alt}</p>
                    <p className="text-primary text-xs mt-1">{item.category}</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.replace("w=800", "w=1600")}
            alt="Full size preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
