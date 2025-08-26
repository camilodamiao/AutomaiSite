import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Zap, TrendingUp, Check, ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  const handleWhatsAppSolution = (solution: string) => {
    const messages = {
      chatmulti: "Quero saber mais sobre o ChatMulti da Automai!",
      ai_agents: "Quero testar um agente de IA da Automai!",
      siteflash: "Preciso de um site profissional com o SiteFlash!",
      transformai: "Quero uma consultoria Transformai para meu negócio!"
    };
    
    const message = messages[solution as keyof typeof messages];
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="solutions" className="py-20" data-testid="solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-solutions-title">
            Nossas <span className="text-gradient">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-description">
            Soluções completas de automação e inteligência artificial para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ChatMulti */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow" data-testid="card-chatmulti">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="text-chatmulti-title">ChatMulti</h3>
                <p className="text-muted-foreground" data-testid="text-chatmulti-description">
                  Solução robusta, segura e completa de atendimento multicanal, projetada para PMEs que buscam profissionalizar a comunicação.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">WhatsApp API oficial Meta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Multiatendimento centralizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Relatórios e dashboards</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Conformidade LGPD</span>
              </div>
            </div>

            <Button 
              onClick={() => handleWhatsAppSolution('chatmulti')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-chatmulti-more"
            >
              Saber Mais
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* AI Agents */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow" data-testid="card-ai-agents">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="text-ai-agents-title">Agentes de IA</h3>
                <p className="text-muted-foreground" data-testid="text-ai-agents-description">
                  Agentes conversacionais inteligentes que atendem seus clientes 24/7, integrados aos seus sistemas e processos.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Atendimento 24/7 automatizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Integração com CRM/ERP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Treinamento personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Classificação inteligente de leads</span>
              </div>
            </div>

            <Button 
              onClick={() => handleWhatsAppSolution('ai_agents')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-ai-agents-test"
            >
              Testar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* SiteFlash */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow" data-testid="card-siteflash">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="text-siteflash-title">SiteFlash</h3>
                <p className="text-muted-foreground" data-testid="text-siteflash-description">
                  Solução rápida e completa para colocar sua presença digital no ar com impacto e eficiência.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Landing pages otimizadas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Design responsivo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Performance otimizada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Integração com automações</span>
              </div>
            </div>

            <Button 
              onClick={() => handleWhatsAppSolution('siteflash')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-siteflash-quote"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Transformai */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow" data-testid="card-transformai">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 purple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" data-testid="text-transformai-title">Transformai</h3>
                <p className="text-muted-foreground" data-testid="text-transformai-description">
                  Consultoria especializada para levar pequenas e médias empresas para o próximo nível com IA.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Mapeamento de processos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Identificação de gargalos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Soluções sob medida</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Acompanhamento contínuo</span>
              </div>
            </div>

            <Button 
              onClick={() => handleWhatsAppSolution('transformai')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-transformai-schedule"
            >
              Agendar Consultoria
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
