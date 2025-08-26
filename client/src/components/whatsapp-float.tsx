import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de conhecer as soluções da Automai e testar o agente conversacional.";
    const whatsappUrl = `https://wa.me/5512996771828?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse-slow hover:scale-110"
      data-testid="whatsapp-float-button"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </button>
  );
}
