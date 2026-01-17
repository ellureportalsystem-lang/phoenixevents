import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "7066763276";
  const message = "Hello, I would like to plan an event with Phoenix Events & Productions.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
