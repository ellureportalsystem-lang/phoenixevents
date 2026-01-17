import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection from "@/components/ui/MotionSection";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding Celebration",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    quote:
      "Phoenix Events transformed our wedding into a fairytale. Every detail was perfect, from the stunning décor to the seamless coordination. They truly understood our vision and exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Amit & Kavya Patel",
    event: "Corporate Gala",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    quote:
      "The team at Phoenix delivered an exceptional corporate event that impressed all our stakeholders. Their professionalism and attention to detail set them apart from any event company we've worked with.",
    rating: 5,
  },
  {
    name: "Sneha & Vikram Reddy",
    event: "50th Anniversary",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
    quote:
      "Planning my parents' golden anniversary was stress-free thanks to Phoenix Events. They created an elegant evening filled with precious moments and beautiful memories we'll cherish forever.",
    rating: 5,
  },
  {
    name: "Arjun & Meera Joshi",
    event: "Engagement Ceremony",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80",
    quote:
      "From the moment we met the Phoenix team, we knew we were in good hands. Our engagement was nothing short of magical—exactly what we dreamed of and more.",
    rating: 5,
  },
  {
    name: "Ananya & Rohan Kapoor",
    event: "Sangeet Night",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    quote:
      "The sangeet night they organized was absolutely spectacular! The energy, the decorations, the music—everything came together perfectly. Our guests are still talking about it!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.92,
    }),
  };

  return (
    <section className={cn(
      "py-24 lg:py-32 relative overflow-hidden",
      theme === "light" ? "bg-gradient-to-b from-cream to-blush/30" : "bg-gradient-to-b from-card to-background"
    )}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={cn(
            "absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl",
            theme === "light" ? "bg-primary/5" : "bg-primary/10"
          )}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={cn(
            "absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl",
            theme === "light" ? "bg-accent/5" : "bg-gold/10"
          )}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Decorative Quote */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 opacity-[0.03]"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Quote size={300} className="text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <MotionSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={cn(
              "inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4",
              theme === "light" 
                ? "bg-primary/10 text-primary" 
                : "bg-primary/20 text-primary"
            )}>
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            What Our Clients{" "}
            <span className={cn(
              "bg-clip-text text-transparent",
              theme === "light"
                ? "bg-gradient-to-r from-primary via-rose to-accent"
                : "bg-gradient-to-r from-gold-light via-gold to-gold-dark"
            )}>
              Say About Us
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the families and organizations who trusted us with their most cherished celebrations
          </p>
        </MotionSection>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all z-10 group",
              theme === "light"
                ? "bg-white border-2 border-rose-100 text-charcoal hover:border-primary hover:text-primary shadow-lg hover:shadow-xl"
                : "bg-card border-2 border-border text-foreground hover:border-primary hover:text-primary"
            )}
            aria-label="Previous testimonial"
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all z-10 group",
              theme === "light"
                ? "bg-white border-2 border-rose-100 text-charcoal hover:border-primary hover:text-primary shadow-lg hover:shadow-xl"
                : "bg-card border-2 border-border text-foreground hover:border-primary hover:text-primary"
            )}
            aria-label="Next testimonial"
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          {/* Testimonial Content */}
          <div className="px-4 md:px-20 min-h-[380px] md:min-h-[350px] relative flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={shouldReduceMotion ? {} : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className={cn(
                  "w-full p-6 md:p-8 lg:p-10 rounded-3xl relative overflow-hidden",
                  theme === "light"
                    ? "bg-white border border-rose-100/80 shadow-[0_20px_60px_-15px_hsl(350_30%_50%/0.12)]"
                    : "bg-card/80 backdrop-blur-xl border border-border/50 shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]"
                )}
              >
                {/* Decorative gradient */}
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30",
                  theme === "light" ? "bg-primary/20" : "bg-primary/30"
                )} />
                
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  {/* Avatar Section */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5, type: "spring" }}
                  >
                    <div className="relative">
                      <div className={cn(
                        "w-24 h-24 md:w-28 md:h-28 rounded-full p-1",
                        theme === "light"
                          ? "bg-gradient-to-br from-primary via-rose to-accent"
                          : "bg-gradient-to-br from-gold-light via-gold to-gold-dark"
                      )}>
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-background"
                        />
                      </div>
                      {/* Quote icon */}
                      <div className={cn(
                        "absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center",
                        theme === "light"
                          ? "bg-primary text-white shadow-lg"
                          : "bg-primary text-background shadow-lg"
                      )}>
                        <Quote size={14} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating Stars */}
                    <motion.div
                      className="flex justify-center md:justify-start gap-1 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            "fill-current",
                            theme === "light" ? "text-amber-400" : "text-gold"
                          )}
                        />
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.blockquote
                      className="text-base md:text-lg lg:text-xl text-foreground font-serif italic leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.5 }}
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                    >
                      <p className="text-base font-semibold font-sans text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className={cn(
                        "text-xs font-medium",
                        theme === "light" ? "text-primary" : "text-primary"
                      )}>
                        {testimonials[currentIndex].event}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots - Desktop only */}
          <div className="hidden lg:flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "relative h-3 rounded-full transition-all duration-500 overflow-hidden",
                  index === currentIndex
                    ? "w-10"
                    : "w-3 hover:w-4"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
              >
                <span className={cn(
                  "absolute inset-0 rounded-full transition-colors",
                  index === currentIndex
                    ? theme === "light"
                      ? "bg-gradient-to-r from-primary to-rose"
                      : "bg-gradient-to-r from-gold-light to-gold"
                    : theme === "light"
                      ? "bg-rose-200 hover:bg-rose-300"
                      : "bg-border hover:bg-muted-foreground/50"
                )} />
              </motion.button>
            ))}
          </div>

          {/* Thumbnail Preview */}
          <motion.div 
            className="hidden lg:flex justify-center gap-3 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "relative w-12 h-12 rounded-full transition-all duration-300 overflow-hidden",
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                    : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                )}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
