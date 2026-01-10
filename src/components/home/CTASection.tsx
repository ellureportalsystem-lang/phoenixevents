import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Event background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            Ready to Create Your{" "}
            <span className="text-gradient-gold">Dream Event?</span>
          </h2>

          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Let's transform your vision into an unforgettable celebration. 
            Our team is ready to craft the perfect experience for your special moment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 font-sans tracking-wide hover-glow animate-pulse-glow"
            >
              <a
                href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event%20with%20Phoenix%20Events"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Create Magic Together
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6 font-sans tracking-wide"
            >
              <a href="/contact">Book a Consultation</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-muted-foreground text-sm font-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              500+ Events Delivered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              15+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              10,000+ Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
