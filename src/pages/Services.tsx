import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Calendar,
  Palette,
  Flower2,
  Lightbulb,
  Music,
  Building2,
  Users,
  Camera,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Calendar,
    title: "Event Planning & Management",
    description:
      "Comprehensive event planning from concept to execution. We handle every detail so you can enjoy your special day stress-free.",
    features: [
      "Timeline development",
      "Budget management",
      "Vendor coordination",
      "Day-of execution",
    ],
  },
  {
    icon: Palette,
    title: "Event Designing & Theme Creation",
    description:
      "Transform your vision into a stunning reality with our creative design team. We craft unique themes that reflect your personality.",
    features: [
      "Custom theme development",
      "Color palette curation",
      "Design mockups",
      "Cohesive styling",
    ],
  },
  {
    icon: Flower2,
    title: "Luxury Decorations",
    description:
      "Elevate your event with exquisite decorations that create an unforgettable ambiance. From elegant to extravagant, we do it all.",
    features: [
      "Premium materials",
      "Custom installations",
      "Centerpiece design",
      "Backdrop creation",
    ],
  },
  {
    icon: Lightbulb,
    title: "Stage & Lighting Setup",
    description:
      "Create the perfect atmosphere with professional lighting and stage design. We set the mood for every moment of your event.",
    features: [
      "Stage construction",
      "Ambient lighting",
      "Spotlight effects",
      "LED installations",
    ],
  },
  {
    icon: Flower2,
    title: "Floral Arrangements",
    description:
      "Beautiful floral designs that add natural elegance to your celebration. From bouquets to grand installations, flowers bring life to every event.",
    features: [
      "Bridal bouquets",
      "Table arrangements",
      "Hanging installations",
      "Floral walls",
    ],
  },
  {
    icon: Music,
    title: "Sound & Entertainment",
    description:
      "Keep your guests entertained with professional sound systems and curated entertainment. We bring the party to life.",
    features: [
      "DJ services",
      "Live performances",
      "Sound systems",
      "MC services",
    ],
  },
  {
    icon: Building2,
    title: "Venue Coordination",
    description:
      "Finding the perfect venue is crucial. We help you select and coordinate with venues that match your vision and budget.",
    features: [
      "Venue selection",
      "Site visits",
      "Contract negotiation",
      "Layout planning",
    ],
  },
  {
    icon: Users,
    title: "Artist & Vendor Management",
    description:
      "We work with the best in the industry. Our network of trusted vendors ensures quality and reliability for every aspect of your event.",
    features: [
      "Vendor selection",
      "Contract management",
      "Quality assurance",
      "Artist booking",
    ],
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Capture every precious moment with our professional photography and videography services. Memories that last a lifetime.",
    features: [
      "Photo coverage",
      "Cinematic videos",
      "Drone shots",
      "Photo booths",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Comprehensive event solutions tailored to your unique needs. From concept to 
            execution, we handle every detail with precision and creativity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "group p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover-lift",
                  "opacity-0 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-muted-foreground text-xs"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
            <p className="text-muted-foreground font-sans">
              A seamless journey from your first inquiry to the final celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We listen to your vision and understand your needs" },
              { step: "02", title: "Planning", desc: "Detailed planning with timelines and budgets" },
              { step: "03", title: "Design", desc: "Creative concepts and design presentations" },
              { step: "04", title: "Execution", desc: "Flawless execution on your special day" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-8">
            Let's discuss your event and create something extraordinary together. 
            Contact us for a free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">
              Book a Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
