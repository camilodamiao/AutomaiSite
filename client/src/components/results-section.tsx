import { Button } from "@/components/ui/button";
import { Clock, DollarSign, TrendingUp, MessageCircle } from "lucide-react";

export default function ResultsSection() {
  const handleWhatsAppResults = () => {
    const message = "Quero ver os resultados da Automai no meu negócio! Vamos conversar?";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="results" className="py-20 bg-secondary/50" data-testid="results-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-results-title">
            Resultados <span className="text-gradient">Comprovados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-results-description">
            Veja o impacto real que nossas soluções geram nos negócios dos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center" data-testid="stat-time-reduction-detailed">
            <div className="text-4xl font-bold text-primary mb-2">70%</div>
            <div className="text-muted-foreground">Redução de tempo operacional</div>
          </div>
          <div className="text-center" data-testid="stat-conversion-increase-detailed">
            <div className="text-4xl font-bold text-primary mb-2">3x</div>
            <div className="text-muted-foreground">Aumento em conversão</div>
          </div>
          <div className="text-center" data-testid="stat-availability-detailed">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Disponibilidade total</div>
          </div>
          <div className="text-center" data-testid="stat-satisfaction">
            <div className="text-4xl font-bold text-primary mb-2">90%</div>
            <div className="text-muted-foreground">Satisfação dos clientes</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-6" data-testid="card-more-time">
            <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-more-time-title">Mais Tempo</h3>
            <p className="text-muted-foreground" data-testid="text-more-time-description">
              Liberte sua equipe de tarefas repetitivas e foque no que realmente importa: crescer seu negócio.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6" data-testid="card-less-costs">
            <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-less-costs-title">Menos Custos</h3>
            <p className="text-muted-foreground" data-testid="text-less-costs-description">
              Reduza custos operacionais significativamente com automação inteligente e eficiente.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6" data-testid="card-more-conversions">
            <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-more-conversions-title">Mais Conversões</h3>
            <p className="text-muted-foreground" data-testid="text-more-conversions-description">
              Aumente suas vendas com atendimento 24/7 e follow-up automatizado inteligente.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 rounded-xl p-8" data-testid="cta-results">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-results-cta-title">Quer ver esses resultados no seu negócio?</h3>
            <p className="text-muted-foreground mb-6" data-testid="text-results-cta-description">
              Converse com nosso agente e descubra como podemos transformar seus processos.
            </p>
            <Button 
              onClick={handleWhatsAppResults}
              className="purple-gradient text-white px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-want-results"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero Esses Resultados
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
