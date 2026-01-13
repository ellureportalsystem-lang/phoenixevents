import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

// Light theme images - bright, airy, soft wedding/celebration photos
const lightThemeImages = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80", // Bright floral wedding arch
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80", // Soft pink roses bouquet
  "https://images.unsplash.com/photo-1507504031003-b417f0f91c54?w=1920&q=80", // Light elegant table setup
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80", // Romantic outdoor ceremony
];

// Dark theme images - dramatic, luxurious, evening celebrations
const darkThemeImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
  "https://images.unsplash.com/photo-1478146059778-26a7c7d35cb0?w=1920&q=80",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const heroImages = theme === "light" ? lightThemeImages : darkThemeImages;

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Reset image index when theme changes
  useEffect(() => {
    setCurrentImage(0);
  }, [theme]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Theme-specific content
  const heroContent = {
    light: {
      tagline: "Creating Magical Celebrations",
      headline: "Celebrating Love, Life",
      highlight: "& Moments",
      description: "Where dreams blossom into reality. We design enchanting celebrations that capture the essence of your most precious moments.",
    },
    dark: {
      tagline: "Premium Event Management",
      headline: "Turning Moments into",
      highlight: "Grand Memories",
      description: "Where elegance meets celebration. We craft extraordinary experiences that transform your vision into unforgettable events.",
    },
  };

  const content = heroContent[theme];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Parallax Effect */}
      {heroImages.map((img, index) => (
        <motion.div
          key={`${theme}-${img}`}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentImage === index ? "opacity-100" : "opacity-0"
          )}
          initial={false}
          animate={currentImage === index && !shouldReduceMotion ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <img
            src={img}
            alt={`Event ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Gradient Overlay - Theme aware with enhanced depth */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500",
        theme === "light"
          ? "bg-gradient-to-b from-white/70 via-white/40 to-white/90"
          : "bg-gradient-to-b from-background/70 via-background/40 to-background"
      )} />
      <div className={cn(
        "absolute inset-0 transition-colors duration-500",
        theme === "light"
          ? "bg-gradient-to-r from-white/60 via-transparent to-white/60"
          : "bg-gradient-to-r from-background/80 via-transparent to-background/80"
      )} />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="space-y-5">
            <motion.p
              variants={itemVariants}
              className={cn(
                "font-sans text-sm md:text-base tracking-[0.3em] uppercase",
                theme === "light" ? "text-primary" : "text-primary"
              )}
            >
              {content.tagline}
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className={cn(
                "text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight",
                theme === "light" ? "text-charcoal" : "text-foreground"
              )}
            >
              {content.headline}{" "}
              <span className={cn(
                "bg-clip-text text-transparent transition-all duration-500",
                theme === "light"
                  ? "bg-gradient-to-r from-primary via-rose to-accent"
                  : "bg-gradient-to-r from-gold-light via-gold to-gold-dark"
              )}>
                {content.highlight}
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className={cn(
                "text-lg md:text-xl max-w-2xl mx-auto font-sans font-light",
                theme === "light" ? "text-charcoal/70" : "text-muted-foreground"
              )}
            >
              {content.description}
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          >
            <motion.div variants={buttonVariants}>
              <Button
                asChild
                size="xl"
                variant="premium"
                className="font-sans tracking-wide"
              >
                <a
                  href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan Your Event
                </a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="font-sans tracking-wide"
              >
                <a href="/gallery">View Our Work</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Indicators */}
        <motion.div
          className="absolute bottom-24 lg:bottom-32 flex space-x-1.5 lg:space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "h-1.5 lg:h-2 rounded-full transition-all duration-300",
                currentImage === index
                  ? "w-5 lg:w-8 bg-primary"
                  : "w-1.5 lg:w-2 bg-foreground/30 hover:bg-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors"
          aria-label="Scroll down"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
