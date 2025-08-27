import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, Check } from "lucide-react";

export default function ContactSection() {
  const handleWhatsAppTest = () => {
    const message = "Olá! Quero testar o agente conversacional da Automai e ver como ele pode ajudar meu negócio!";
    const whatsappUrl = `https://wa.me/5512996771828?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 section-gradient-4" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Estamos prontos para ouvir suas necessidades e apresentar a solução ideal para seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-us-title">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4" data-testid="contact-whatsapp">
                  <div className="w-10 h-10 purple-gradient rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">Fale direto com nosso agente conversacional</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-email">
                  <div className="w-10 h-10 purple-gradient rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contato@automai.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-testid="contact-hours">
                  <div className="w-10 h-10 purple-gradient rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Atendimento</p>
                    <p className="text-muted-foreground">Segunda a Sexta, das 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-gradient border border-border rounded-xl p-6" data-testid="card-why-choose">
              <h4 className="text-xl font-semibold mb-4" data-testid="text-why-choose-title">Por que escolher a Automai?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Suporte especializado 8x5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">SLA de resolução até 24h úteis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Conformidade total com LGPD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Atualizações contínuas sem custo adicional</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20 rounded-xl p-8" data-testid="cta-test-agent">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 purple-gradient rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4" data-testid="text-test-agent-title">Teste Nosso Agente Conversacional</h3>
                <p className="text-muted-foreground mb-6" data-testid="text-test-agent-description">
                  Experimente na prática como nossa IA pode revolucionar o atendimento do seu negócio. 
                  É rápido, fácil e totalmente gratuito!
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsAppTest}
                  className="purple-gradient text-white px-8 py-4 font-semibold w-full hover:opacity-90 transition-opacity"
                  data-testid="button-start-free-test"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Começar Teste Gratuito
                </Button>

                <p className="text-sm text-muted-foreground" data-testid="text-test-features">
                  ⚡ Resposta imediata • 🤖 IA treinada • 📊 Relatórios inclusos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
