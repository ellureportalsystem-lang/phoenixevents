import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, Calendar, Briefcase, Image, Users, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import { BLOCKED_PAGES } from "@/constants/routes";

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
  const [showComingSoon, setShowComingSoon] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isBlocked = (path: string) => {
    return BLOCKED_PAGES.includes(path);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (isBlocked(href)) {
      e.preventDefault();
      setShowComingSoon(true);
      setIsMobileMenuOpen(false);
    }
  };

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
          <div className="grid grid-cols-3 items-center h-16 lg:h-20 py-2">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-1.5 group justify-start">
              <div className="flex flex-col items-start leading-tight">
                <span 
                  className="text-xl lg:text-2xl font-serif font-bold"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: theme === "light" ? "hsl(25 15% 20%)" : "hsl(38 30% 92%)",
                    letterSpacing: "-0.02em"
                  }}
                >
                  Phoenix
                </span>
                <span 
                  className="text-[10px] lg:text-xs font-sans font-semibold tracking-[0.2em] uppercase" 
                  style={{
                    color: theme === "light" ? "hsl(25 12% 40%)" : "hsl(38 20% 70%)",
                    letterSpacing: "0.25em"
                  }}
                >
                  Events & Productions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center space-x-6">
              {navLinks.map((link) => {
                const blocked = isBlocked(link.href);
                return blocked ? (
                  <button
                    key={link.name}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      "relative font-sans text-sm tracking-wide transition-colors duration-300 py-1 cursor-pointer whitespace-nowrap",
                      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                      "after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                      "hover:after:scale-x-100 hover:after:origin-left",
                      theme === "light"
                        ? "after:bg-rose-400"
                        : "after:bg-primary",
                      "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "relative font-sans text-sm tracking-wide transition-colors duration-300 py-1 whitespace-nowrap",
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
                );
              })}
            </div>

            {/* Right side: Theme Toggle + CTA */}
            <div className="hidden lg:flex items-center space-x-3 justify-end">
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
                  href="https://wa.me/7066763276?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan Your Event
                </a>
              </Button>
            </div>

            {/* Mobile: Logo spacer + Theme Toggle + Menu Button */}
            <div className="lg:hidden col-span-2 flex items-center justify-end space-x-2">
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
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-1.5"
            >
              <div className="flex flex-col items-start leading-tight">
                <span 
                  className="text-lg font-serif font-bold"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: theme === "light" ? "hsl(25 15% 20%)" : "hsl(38 30% 92%)",
                    letterSpacing: "-0.02em"
                  }}
                >
                  Phoenix
                </span>
                <span 
                  className="text-[9px] font-sans font-semibold tracking-[0.2em] uppercase" 
                  style={{
                    color: theme === "light" ? "hsl(25 12% 40%)" : "hsl(38 20% 70%)",
                    letterSpacing: "0.25em"
                  }}
                >
                  Events & Productions
                </span>
              </div>
            </Link>
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
            {navLinks.map((link, index) => {
              const blocked = isBlocked(link.href);
              return blocked ? (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "flex items-center gap-3 py-3.5 px-4 rounded-xl font-sans text-base transition-all duration-200 active:scale-98 w-full text-left",
                    "text-foreground/80",
                    theme === "light"
                      ? "hover:bg-rose-50/50"
                      : "hover:bg-primary/5"
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.3s ease-out ${index * 50}ms`
                  }}
                >
                  <link.icon size={20} className="text-muted-foreground" />
                  {link.name}
                </button>
              ) : (
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
              );
            })}
          </nav>

          {/* Bottom CTAs */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3 border-t border-border/50 safe-area-bottom">
            <a
              href="https://wa.me/7066763276?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
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
              href="https://wa.me/7066763276"
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
    </>
  );
};

export default Navbar;
