import { MessageCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { useScrollDirection } from "@/hooks/useScrollAnimation";

const MobileActionBar = () => {
  const { theme } = useTheme();
  const { scrollDirection, isAtTop } = useScrollDirection();
  
  const isVisible = !isAtTop && scrollDirection !== "down";

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 safe-area-bottom",
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-full opacity-0"
      )}
    >
      {/* Backdrop blur container */}
      <div className={cn(
        "mx-4 mb-4 rounded-2xl overflow-hidden",
        theme === "light"
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-rose-500/10 border border-rose-100/50"
          : "bg-card/90 backdrop-blur-xl shadow-lg shadow-black/20 border border-border/50"
      )}>
        <div className="flex items-center justify-between p-3 gap-3">
          {/* Plan Your Event Button */}
          <a
            href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20plan%20an%20event"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-sans text-sm font-medium transition-all duration-300 active:scale-95 btn-ripple",
              theme === "light"
                ? "bg-primary text-white shadow-md shadow-primary/30"
                : "bg-primary text-primary-foreground"
            )}
          >
            <Calendar size={18} />
            <span>Plan Your Event</span>
          </a>

          {/* WhatsApp Direct Button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 active:scale-95 btn-ripple",
              "bg-[#25D366] text-white shadow-md shadow-[#25D366]/30"
            )}
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;
