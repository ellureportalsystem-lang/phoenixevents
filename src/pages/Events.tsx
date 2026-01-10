import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const events = [
  {
    title: "Weddings",
    description:
      "Your wedding day is the beginning of your forever story. We create timeless celebrations that reflect your unique love, from intimate ceremonies to grand celebrations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    features: [
      "Complete wedding planning & coordination",
      "Custom décor & theme design",
      "Venue selection & management",
      "Vendor coordination",
      "Day-of coordination",
    ],
  },
  {
    title: "Birthday Parties",
    description:
      "Celebrate another year of life with a party that's as unique as you are. From children's themed parties to elegant adult celebrations, we create memorable moments.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    features: [
      "Theme conceptualization",
      "Custom decorations",
      "Entertainment booking",
      "Catering coordination",
      "Party favors & gifts",
    ],
  },
  {
    title: "Engagements",
    description:
      "Mark the beginning of your journey together with an engagement celebration that sets the tone for your love story. Elegant, romantic, and perfectly you.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    features: [
      "Venue styling",
      "Ring ceremony setup",
      "Photography coordination",
      "Guest management",
      "Custom invitations",
    ],
  },
  {
    title: "Sangeet Night",
    description:
      "Let the music play and the celebrations begin! Our Sangeet nights are filled with dance, music, and joy, creating unforgettable memories for you and your loved ones.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
    features: [
      "Stage & lighting design",
      "DJ & music coordination",
      "Dance floor setup",
      "Choreography arrangements",
      "Audio-visual management",
    ],
  },
  {
    title: "Haldi Ceremony",
    description:
      "Embrace tradition with a vibrant Haldi ceremony that celebrates love, blessings, and family bonds. We create the perfect setting for this auspicious occasion.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800&q=80",
    features: [
      "Traditional décor setup",
      "Floral arrangements",
      "Seating arrangements",
      "Photography setup",
      "Cultural elements",
    ],
  },
  {
    title: "Mehendi Function",
    description:
      "A celebration of art, tradition, and beauty. Our Mehendi functions blend traditional charm with modern elegance for an unforgettable pre-wedding celebration.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=800&q=80",
    features: [
      "Artistic décor themes",
      "Mehendi artist coordination",
      "Music & entertainment",
      "Snacks & refreshments",
      "Photo booth setup",
    ],
  },
  {
    title: "Anniversaries",
    description:
      "Celebrate the milestones of your love story. Whether it's your first or fiftieth, we create anniversary celebrations that honor your journey together.",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
    features: [
      "Intimate dinner setups",
      "Surprise planning",
      "Custom décor",
      "Memory presentations",
      "Renewal of vows ceremony",
    ],
  },
  {
    title: "Corporate Events",
    description:
      "Elevate your brand with professional corporate events that leave lasting impressions. From conferences to product launches, we deliver excellence.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    features: [
      "Conference management",
      "Brand activation",
      "Award ceremonies",
      "Team building events",
      "Product launches",
    ],
  },
  {
    title: "Car Launches",
    description:
      "Make a grand statement with a spectacular car launch event. We create immersive experiences that showcase your product in the best possible light.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    features: [
      "Venue transformation",
      "Product unveiling setup",
      "Media coordination",
      "VIP management",
      "Brand experience design",
    ],
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            What We Create
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-gradient-gold">Events</span>
          </h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life with 
            creativity, elegance, and flawless execution.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                {/* Image */}
                <div
                  className={cn(
                    "relative overflow-hidden rounded-lg",
                    index % 2 === 1 && "lg:order-2"
                  )}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full aspect-[4/3] object-cover hover-lift"
                  />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-lg" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "space-y-6",
                    index % 2 === 1 && "lg:order-1"
                  )}
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">
                    <span className="text-gradient-gold">{event.title}</span>
                  </h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {event.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {event.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-muted-foreground font-sans text-sm"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href={`https://wa.me/1234567890?text=Hello!%20I'm%20interested%20in%20planning%20a%20${encodeURIComponent(event.title)}%20event.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Plan Your {event.title.replace(/s$/, "")}
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Don't See Your Event Type?
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-8">
            We specialize in creating custom events tailored to your unique vision. 
            Get in touch and let's create something extraordinary together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
