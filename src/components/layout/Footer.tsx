import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, Home } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { BLOCKED_PAGES } from "@/constants/routes";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const isBlocked = (path: string) => {
    return BLOCKED_PAGES.includes(path);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (isBlocked(href)) {
      e.preventDefault();
      setShowComingSoon(true);
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-serif font-bold text-gradient-gold">
                Phoenix
              </span>
              <span className="block text-sm font-sans text-muted-foreground tracking-widest uppercase">
                Events & Productions
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting extraordinary moments and transforming visions into unforgettable celebrations. 
              Your dream event, our creative passion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/pnp.production.house?igsh=cWJ3YTlvOWUzZjFt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram - PNP Production House"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.instagram.com/phoenix_events_and_production?igsh=MXIwOGJvdTF2dm44cg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram - Phoenix Events and Production"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Events", "Services", "Gallery", "Collaborations", "Contact"].map((link) => {
                const href = `/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`;
                const blocked = isBlocked(href);
                return (
                  <li key={link}>
                    {blocked ? (
                      <button
                        onClick={(e) => handleLinkClick(e, href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                      >
                        {link}
                      </button>
                    ) : (
                      <Link
                        to={href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Our Events */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-foreground">Our Events</h4>
            <ul className="space-y-3">
              {["Weddings", "Birthdays", "Engagements", "Corporate Events", "Sangeet Night", "Anniversary"].map((event) => (
                <li key={event}>
                  <button
                    onClick={(e) => handleLinkClick(e, "/events")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                  >
                    {event}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-foreground">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  Shop no 1, Phoenix Events and Production,<br />
                  Kailas kondiba Dange Plot, Unit 4,<br />
                  Dange Chowk Rd, nr. CBI Crime Branch,<br />
                  nr. Maruti Suzuki Showroom,<br />
                  Pune, Maharashtra 411033
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+917066763276" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 70667 63276
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm font-medium">
                  Open 24 Hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Phoenix Events & Productions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center",
                theme === "light"
                  ? "bg-gradient-to-br from-primary/10 via-rose-50 to-accent/10"
                  : "bg-gradient-to-br from-primary/20 via-background to-gold/10"
              )}>
                <Clock
                  size={32}
                  className={cn(
                    theme === "light" ? "text-primary" : "text-gold"
                  )}
                />
              </div>
            </div>
            <DialogTitle className={cn(
              "text-2xl font-serif font-bold text-center",
              theme === "light" ? "text-charcoal" : "text-foreground"
            )}>
              Coming Soon
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground pt-2">
              We're working hard to bring you something amazing. This page will be available soon!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => {
                setShowComingSoon(false);
                navigate("/");
              }}
              variant="premium"
              className="flex-1 font-sans"
            >
              <Home size={16} className="mr-2" />
              Back to Home
            </Button>
            <Button
              onClick={() => {
                setShowComingSoon(false);
                navigate("/contact");
              }}
              variant="outline"
              className="flex-1 font-sans"
            >
              <Mail size={16} className="mr-2" />
              Contact Us
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
