import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, MessageCircle } from "lucide-react";

export default function AboutSection() {
  const handleWhatsAppStart = () => {
    const message = "Olá! Quero conhecer as soluções da Automai e como elas podem transformar meu negócio.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-secondary/50" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-about-title">
            Sobre a <span className="text-gradient">automai</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
            Nascemos com o propósito de libertar empreendedores de PMEs da sobrecarga operacional, devolvendo tempo e tranquilidade para que possam focar no crescimento estratégico dos seus negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="card-mission">
            <div className="w-16 h-16 purple-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-mission-title">Missão</h3>
            <p className="text-muted-foreground" data-testid="text-mission-description">
              Libertar empreendedores de PMEs da sobrecarga operacional, devolvendo tempo e tranquilidade para que possam focar no crescimento estratégico de seus negócios, por meio de soluções inteligentes, práticas e acessíveis.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="card-vision">
            <div className="w-16 h-16 purple-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-vision-title">Visão</h3>
            <p className="text-muted-foreground" data-testid="text-vision-description">
              Ser a principal referência nacional em automação e inteligência artificial aplicada a PMEs, nivelando o jogo entre pequenos e grandes negócios, com inovação, simplicidade e impacto real.
            </p>
          </div>

          {/* Values */}
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="card-values">
            <div className="w-16 h-16 purple-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="text-values-title">Valores</h3>
            <p className="text-muted-foreground" data-testid="text-values-description">
              Parceria Consultiva, Inovação Aplicada, Transparência e Ética, Foco em Resultado, Empoderamento Humano - tecnologia que devolve tempo para quem cresce o negócio.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 rounded-xl p-8" data-testid="cta-transform-business">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-cta-title">Pronto para transformar seu negócio?</h3>
            <p className="text-muted-foreground mb-6" data-testid="text-cta-description">
              Converse com nosso agente conversacional e descubra como podemos automatizar seus processos.
            </p>
            <Button 
              onClick={handleWhatsAppStart}
              className="purple-gradient text-white px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-start-now"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
