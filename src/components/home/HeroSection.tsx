import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
  "https://images.unsplash.com/photo-1478146059778-26a7c7d35cb0?w=1920&q=80",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentImage === index ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={img}
            alt={`Event ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div
          className={cn(
            "space-y-8 max-w-4xl mx-auto",
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="space-y-4">
            <p className="text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase opacity-0 animate-fade-in stagger-1">
              Premium Event Management
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight opacity-0 animate-fade-in stagger-2">
              Turning Moments into{" "}
              <span className="text-gradient-gold">Grand Memories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans font-light opacity-0 animate-fade-in stagger-3">
              Where elegance meets celebration. We craft extraordinary experiences 
              that transform your vision into unforgettable events.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in stagger-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-sans tracking-wide hover-glow"
            >
              <a
                href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan Your Event
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-sans tracking-wide"
            >
              <a href="/gallery">View Our Work</a>
            </Button>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-32 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentImage === index
                  ? "w-8 bg-primary"
                  : "bg-foreground/30 hover:bg-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
