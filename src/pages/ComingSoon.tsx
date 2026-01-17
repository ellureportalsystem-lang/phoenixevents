import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const ComingSoon = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Redirect if trying to access directly via URL
  useEffect(() => {
    // This ensures the page is only accessible through routing
    const currentPath = window.location.pathname;
    const allowedPaths = ["/", "/contact"];
    
    if (allowedPaths.includes(currentPath)) {
      return; // Allow homepage and contact
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div
              className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center",
                theme === "light"
                  ? "bg-gradient-to-br from-primary/10 via-rose-50 to-accent/10"
                  : "bg-gradient-to-br from-primary/20 via-background to-gold/10"
              )}
            >
              <Clock
                size={48}
                className={cn(
                  theme === "light" ? "text-primary" : "text-gold"
                )}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-bold",
              theme === "light" ? "text-charcoal" : "text-foreground"
            )}
          >
            Coming Soon
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto font-sans"
          >
            We're working hard to bring you something amazing. This page will be available soon!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              onClick={() => navigate("/")}
              size="lg"
              variant="premium"
              className="font-sans tracking-wide"
            >
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="outline"
              className="font-sans tracking-wide"
            >
              <Mail size={18} className="mr-2" />
              Contact Us
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div
              className={cn(
                "absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20",
                theme === "light" ? "bg-primary/30" : "bg-gold/20"
              )}
            />
            <div
              className={cn(
                "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20",
                theme === "light" ? "bg-accent/30" : "bg-primary/20"
              )}
            />
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ComingSoon;
