import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import MotionSection from "@/components/ui/MotionSection";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote:
      "Phoenix Events transformed our wedding into a fairytale. Every detail was perfect, from the stunning décor to the seamless coordination. They truly understood our vision and exceeded all expectations.",
  },
  {
    name: "Amit Patel",
    event: "Corporate Gala",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote:
      "The team at Phoenix delivered an exceptional corporate event that impressed all our stakeholders. Their professionalism and attention to detail set them apart from any event company we've worked with.",
  },
  {
    name: "Sneha Reddy",
    event: "50th Anniversary",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote:
      "Planning my parents' golden anniversary was stress-free thanks to Phoenix Events. They created an elegant evening filled with precious moments and beautiful memories we'll cherish forever.",
  },
  {
    name: "Vikram & Meera Joshi",
    event: "Engagement Ceremony",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "From the moment we met the Phoenix team, we knew we were in good hands. Our engagement was nothing short of magical—exactly what we dreamed of and more.",
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
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className={cn(
      "py-24 relative overflow-hidden",
      theme === "light" ? "bg-card" : "bg-card"
    )}>
      {/* Decorative Quote */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Quote size={200} className="text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <MotionSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
        </MotionSection>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full border flex items-center justify-center transition-all z-10",
              theme === "light"
                ? "border-rose-200 bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg"
                : "border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary"
            )}
            aria-label="Previous testimonial"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full border flex items-center justify-center transition-all z-10",
              theme === "light"
                ? "border-rose-200 bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg"
                : "border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary"
            )}
            aria-label="Next testimonial"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonial Content */}
          <div className="text-center px-8 md:px-16 min-h-[320px] relative">
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
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className={cn(
                  "p-8 md:p-12 rounded-3xl",
                  theme === "light"
                    ? "bg-white/70 backdrop-blur-xl border border-rose-100/50 shadow-[0_8px_40px_-12px_hsl(350_30%_50%/0.1)]"
                    : "bg-card/50 backdrop-blur-xl border border-border/30"
                )}
              >
                {/* Avatar */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className={cn(
                      "w-20 h-20 rounded-full mx-auto object-cover border-3",
                      theme === "light" ? "border-primary" : "border-primary"
                    )}
                  />
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                  className="text-lg md:text-xl text-foreground font-serif italic leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <p className="text-foreground font-semibold font-sans">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary text-sm font-sans">
                    {testimonials[currentIndex].event}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
