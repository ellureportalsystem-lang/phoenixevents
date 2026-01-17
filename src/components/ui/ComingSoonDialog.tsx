import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Home, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { useNavigate } from "react-router-dom";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ComingSoonDialog = ({ open, onOpenChange }: ComingSoonDialogProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              onOpenChange(false);
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
              onOpenChange(false);
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
  );
};
