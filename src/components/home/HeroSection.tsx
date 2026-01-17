import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { ComingSoonDialog } from "@/components/ui/ComingSoonDialog";

// Light theme images - romantic outdoor ceremonies with soft, warm tones
const lightThemeImages = [
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&q=80", // Romantic outdoor ceremony with warm sunset tones
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80", // Beautiful outdoor wedding venue with soft natural light
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80", // Romantic outdoor ceremony (keeping this one)
];

// Dark theme images - dramatic, luxurious, evening celebrations
const darkThemeImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
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
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              theme === "light"
                ? "brightness-[1.05] contrast-[1.08] saturate-[1.12]"
                : "brightness-110 contrast-105"
            )}
          />
        </motion.div>
      ))}

      {/* Gradient Overlay - Theme aware with enhanced depth for better text visibility */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500",
        theme === "light"
          ? "bg-gradient-to-b from-white/50 via-white/40 to-white/55"
          : "bg-gradient-to-b from-background/60 via-background/40 to-background"
      )} />
      <div className={cn(
        "absolute inset-0 transition-colors duration-500",
        theme === "light"
          ? "bg-gradient-to-r from-rose-50/30 via-transparent to-rose-50/30"
          : "bg-gradient-to-r from-background/70 via-transparent to-background/70"
      )} />
      {/* Text readability overlay for light theme */}
      {theme === "light" && (
        <>
          {/* Minimal Vignette Effect - Very light */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse 120% 100% at center top, transparent 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.15) 80%, rgba(0, 0, 0, 0.25) 100%)',
              pointerEvents: 'none'
            }}
          />
          {/* Top vignette - very minimal */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 15%, transparent 30%)',
              pointerEvents: 'none'
            }}
          />
          {/* Bottom vignette - minimal */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.06) 0%, transparent 40%)',
              pointerEvents: 'none'
            }}
          />
          {/* Side vignettes - minimal */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.04) 0%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.04) 100%)',
              pointerEvents: 'none'
            }}
          />
          {/* Center light area for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/15 to-white/20 transition-opacity duration-500" />
        </>
      )}

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
                "font-sans text-sm md:text-base tracking-[0.3em] uppercase font-semibold drop-shadow-sm",
                theme === "light" ? "text-rose-600" : "text-primary"
              )}
            >
              {content.tagline}
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className={cn(
                "text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight drop-shadow-md",
                theme === "light" ? "text-charcoal" : "text-foreground"
              )}
            >
              {content.headline}{" "}
              <span className={cn(
                "bg-clip-text text-transparent transition-all duration-500 drop-shadow-sm",
                theme === "light"
                  ? "bg-gradient-to-r from-rose-600 via-rose-500 to-primary"
                  : "bg-gradient-to-r from-gold-light via-gold to-gold-dark"
              )}>
                {content.highlight}
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className={cn(
                "text-lg md:text-xl max-w-2xl mx-auto font-sans font-light drop-shadow-sm",
                theme === "light" ? "text-charcoal/85" : "text-muted-foreground"
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
                  href="https://wa.me/7066763276?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan Your Event
                </a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                size="xl"
                variant="outline"
                className="font-sans tracking-wide"
                onClick={() => setShowComingSoon(true)}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Indicators - Desktop only */}
        <motion.div
          className="absolute bottom-24 lg:bottom-32 hidden lg:flex space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentImage === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-foreground/30 hover:bg-foreground/50"
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

      <ComingSoonDialog open={showComingSoon} onOpenChange={setShowComingSoon} />
    </section>
  );
};

export default HeroSection;
