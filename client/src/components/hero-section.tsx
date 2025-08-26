import { Button } from "@/components/ui/button";
import { MessageCircle, Eye, Settings } from "lucide-react";

export default function HeroSection() {
  const handleWhatsAppTest = () => {
    const message = "Quero testar o agente conversacional da Automai gratuitamente!";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="gradient-bg pt-24 pb-20 overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
                Automação e IA para PMEs:
                <span className="text-gradient block mt-2">
                  processos fluidos, custo menor e mais tempo para crescer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-hero-subtitle">
                Eliminamos a sobrecarga operacional do seu negócio através de soluções inteligentes de automação e inteligência artificial.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppTest}
                className="purple-gradient text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
                data-testid="button-test-free"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Testar Gratuitamente
              </Button>
              <Button 
                onClick={scrollToSolutions}
                variant="outline"
                className="border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-secondary transition-colors"
                data-testid="button-view-solutions"
              >
                Ver Soluções
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center" data-testid="stat-time-reduction">
                <div className="text-3xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Redução de tempo operacional</div>
              </div>
              <div className="text-center" data-testid="stat-conversion-increase">
                <div className="text-3xl font-bold text-primary">3x</div>
                <div className="text-sm text-muted-foreground">Aumento em conversão</div>
              </div>
              <div className="text-center" data-testid="stat-availability">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilidade total</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <div className="w-full h-96 relative">
                <div className="absolute top-8 left-8 w-32 h-32 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 transform rotate-12 transition-transform hover:rotate-6"></div>
                <div className="absolute top-16 right-16 w-28 h-28 bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 transform -rotate-6 transition-transform hover:rotate-3"></div>
                <div className="absolute bottom-20 left-16 w-36 h-36 bg-violet-500/20 rounded-2xl backdrop-blur-sm border border-violet-500/30 transform rotate-6 transition-transform hover:-rotate-3"></div>
                <div className="absolute bottom-16 right-8 w-24 h-24 bg-primary/30 rounded-2xl backdrop-blur-sm border border-primary/40 transform -rotate-12 transition-transform hover:rotate-6"></div>
                
                {/* Central element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 purple-gradient rounded-3xl flex items-center justify-center transition-transform hover:scale-105">
                  <Settings className="h-16 w-16 text-white animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
