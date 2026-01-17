import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const hotels = [
  {
    name: "The Grand Palace Hotel",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "A landmark of luxury, offering grand ballrooms and stunning city views for unforgettable celebrations.",
    capacity: "Up to 2000 guests",
    rating: 5,
  },
  {
    name: "Oceanview Resort & Spa",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    description: "Beachfront paradise perfect for destination weddings and intimate celebrations by the sea.",
    capacity: "Up to 500 guests",
    rating: 5,
  },
  {
    name: "Heritage Haveli",
    location: "Jaipur",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    description: "A royal experience in a heritage property, blending traditional charm with modern amenities.",
    capacity: "Up to 800 guests",
    rating: 5,
  },
  {
    name: "The Metropolitan",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    description: "Contemporary elegance in the heart of the capital, perfect for sophisticated celebrations.",
    capacity: "Up to 1500 guests",
    rating: 5,
  },
  {
    name: "Lakeside Manor",
    location: "Udaipur",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    description: "Romantic lakeside venue with palatial architecture and breathtaking sunset views.",
    capacity: "Up to 600 guests",
    rating: 5,
  },
  {
    name: "Mountain View Resort",
    location: "Shimla",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    description: "Serene mountain retreat offering a magical backdrop for intimate celebrations.",
    capacity: "Up to 300 guests",
    rating: 5,
  },
];

const features = [
  {
    title: "Exclusive Partnerships",
    description: "We have established long-term relationships with the finest venues, ensuring preferential rates and availability for our clients.",
  },
  {
    title: "Seamless Coordination",
    description: "Our team works directly with venue staff to ensure every detail is handled with precision and care.",
  },
  {
    title: "Customized Packages",
    description: "Benefit from specially curated packages that combine venue services with our event management expertise.",
  },
  {
    title: "Quality Assurance",
    description: "Every venue we partner with meets our stringent standards for service, ambiance, and hospitality.",
  },
];

const Collaborations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Our Partners
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Venue <span className="text-gradient-gold">Collaborations</span>
          </h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            We proudly collaborate with premium hotels and venues to deliver seamless events 
            in the most stunning locations across India.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "p-6 rounded-lg border border-border bg-card",
                  "opacity-0 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Featured <span className="text-gradient-gold">Venues</span>
            </h2>
            <p className="text-muted-foreground font-sans">
              Explore our curated selection of premium venues, each offering unique experiences 
              for your special celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.name}
                className={cn(
                  "group overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300 hover-lift",
                  "opacity-0 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                      <MapPin size={14} className="text-primary" />
                      {hotel.location}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {hotel.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <Users size={14} className="text-primary" />
                    <span className="text-muted-foreground">{hotel.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Are You a Venue Owner?
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto mb-8">
              Join our network of premium venues and connect with clients looking for 
              exceptional spaces for their celebrations. Let's create magic together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href="https://wa.me/7066763276?text=Hello!%20I'm%20interested%20in%20becoming%20a%20venue%20partner."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Partner
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collaborations;
