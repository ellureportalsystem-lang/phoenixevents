import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Calendar, Briefcase, Image, Users, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "Collaborations", href: "/collaborations", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? cn(
                "backdrop-blur-xl shadow-sm",
                theme === "light"
                  ? "bg-white/90 border-b border-rose-100/50"
                  : "bg-background/95 border-b border-border"
              )
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img 
                src={logo} 
                alt="Phoenix Events & Production" 
                className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className={cn(
                  "text-base lg:text-lg font-serif font-bold tracking-wide",
                  theme === "light" 
                    ? "bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 bg-clip-text text-transparent"
                    : "text-gradient-gold"
                )}>
                  Phoenix Events
                </span>
                <span className={cn(
                  "text-[9px] lg:text-[10px] font-sans tracking-[0.2em] uppercase",
                  theme === "light" ? "text-rose-400/80" : "text-primary/70"
                )}>
                  & Production
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "relative font-sans text-sm tracking-wide transition-colors duration-300 py-1",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                    "after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-left",
                    theme === "light"
                      ? "after:bg-rose-400"
                      : "after:bg-primary",
                    location.pathname === link.href
                      ? cn(
                          "text-primary after:scale-x-100",
                          theme === "light" && "text-rose-500"
                        )
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side: Theme Toggle + CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className={cn(
                  "font-sans text-sm tracking-wide rounded-full px-5 btn-ripple",
                  theme === "light"
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <a
                  href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan Your Event
                </a>
              </Button>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className={cn(
                  "p-2 rounded-lg transition-colors active:scale-95",
                  theme === "light" ? "active:bg-rose-50" : "active:bg-primary/10"
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] transition-transform duration-300 ease-out",
            theme === "light"
              ? "bg-white"
              : "bg-background",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className={cn(
            "flex items-center justify-between p-4 border-b",
            theme === "light" ? "border-rose-100" : "border-border"
          )}>
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Phoenix Events & Production" 
                className="h-8 w-auto object-contain"
              />
              <span className={cn(
                "text-sm font-serif font-bold",
                theme === "light" 
                  ? "bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent"
                  : "text-gradient-gold"
              )}>Phoenix</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg transition-colors active:scale-95"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="p-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 py-3.5 px-4 rounded-xl font-sans text-base transition-all duration-200 active:scale-98",
                  location.pathname === link.href
                    ? cn(
                        theme === "light"
                          ? "bg-rose-50 text-primary"
                          : "bg-primary/10 text-primary"
                      )
                    : cn(
                        "text-foreground/80",
                        theme === "light"
                          ? "hover:bg-rose-50/50"
                          : "hover:bg-primary/5"
                      )
                )}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.3s ease-out ${index * 50}ms`
                }}
              >
                <link.icon size={20} className={cn(
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                )} />
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3 border-t border-border/50 safe-area-bottom">
            <a
              href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-sans text-sm font-medium transition-all active:scale-98 btn-ripple",
                theme === "light"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-primary text-primary-foreground"
              )}
            >
              <Calendar size={18} />
              Plan Your Event
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-sans text-sm font-medium transition-all active:scale-98 btn-ripple"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
