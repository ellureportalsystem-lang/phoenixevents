import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Engagement",
  "Sangeet",
  "Haldi",
  "Mehendi",
  "Anniversary",
  "Corporate Event",
  "Car Launch",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const whatsappMessage = `Hello! I would like to inquire about an event.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Event Type:* ${formData.eventType}
*Preferred Date:* ${formData.date}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/7066763276?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our team shortly!",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Ready to create something extraordinary? We'd love to hear from you. 
            Let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Map First */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Map */}
              <div className="space-y-3">
                <div className="rounded-lg overflow-hidden border border-border h-80 lg:h-96 shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=18.615438,73.769081&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Phoenix Events and Production Location - Pune"
                  />
                </div>
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18.615438,73.769081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-sans font-medium inline-flex items-center gap-2"
                  >
                    <MapPin size={16} />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">
                      Visit Us
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Shop no 1, Phoenix Events and Production,
                      <br />
                      Kailas kondiba Dange Plot, Unit 4,
                      <br />
                      Dange Chowk Rd, nr. CBI Crime Branch,
                      <br />
                      nr. Maruti Suzuki Showroom,
                      <br />
                      Pune, Maharashtra 411033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">
                      Call Us
                    </h3>
                    <a
                      href="tel:+917066763276"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +91 70667 63276
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:hello@phoenixevents.com"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      hello@phoenixevents.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-1">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      Open 24 Hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground mb-2">
                      Follow Us
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="https://www.instagram.com/pnp.production.house?igsh=cWJ3YTlvOWUzZjFt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        @pnp.production.house
                      </a>
                      <a
                        href="https://www.instagram.com/phoenix_events_and_production?igsh=MXIwOGJvdTF2dm44cg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        @phoenix_events_and_production
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (Reduced Size) */}
            <div className="order-1 lg:order-2">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
                <h2 className="text-xl font-serif font-bold mb-2">
                  Book a <span className="text-gradient-gold">Consultation</span>
                </h2>
                <p className="text-muted-foreground text-xs mb-6">
                  Fill out the form below and we'll connect with you on WhatsApp
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-sans text-muted-foreground"
                      >
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border h-9 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-sans text-muted-foreground"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background border-border h-9 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-sans text-muted-foreground"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border h-9 text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans text-muted-foreground">
                        Event Type *
                      </label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, eventType: value }))
                        }
                        required
                      >
                        <SelectTrigger className="bg-background border-border h-9 text-sm">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="date"
                        className="text-xs font-sans text-muted-foreground"
                      >
                        Preferred Date
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-background border-border h-9 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-sans text-muted-foreground"
                    >
                      Tell Us About Your Event
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your vision, guest count, special requirements..."
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background border-border resize-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="default"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-wide text-sm h-9"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
