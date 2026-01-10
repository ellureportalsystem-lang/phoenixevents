import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Contact", href: "/contact" },
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

  return (
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-serif font-bold text-gradient-gold">
              Phoenix
            </span>
            <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
              Events
            </span>
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
                "font-sans text-sm tracking-wide rounded-full px-5",
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
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 backdrop-blur-xl",
          theme === "light"
            ? "bg-white/98 border-b border-rose-100/50"
            : "bg-background/98 border-b border-border",
          "transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "block py-3 text-base font-sans border-b transition-colors",
                theme === "light" ? "border-rose-50" : "border-border/50",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className={cn(
              "w-full mt-4 rounded-full",
              theme === "light"
                ? "bg-primary text-white"
                : "bg-primary text-primary-foreground"
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
      </div>
    </nav>
  );
};

export default Navbar;
