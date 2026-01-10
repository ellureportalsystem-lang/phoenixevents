import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-5">
        <Quote size={200} className="text-primary" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Content */}
          <div className="text-center px-8 md:px-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={cn(
                  "transition-all duration-500",
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                )}
              >
                {/* Avatar */}
                <div className="mb-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-primary"
                  />
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground font-serif italic leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <p className="text-foreground font-semibold font-sans">
                    {testimonial.name}
                  </p>
                  <p className="text-primary text-sm font-sans">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
