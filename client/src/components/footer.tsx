import AutomaiLogo from "./automai-logo";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/5512996771828";
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="footer-gradient py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4" data-testid="footer-logo">
              <AutomaiLogo className="w-8 h-8" />
              <span className="text-xl font-bold">automai</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="text-footer-description">
              Inteligência Artificial, Resultados Reais. Transformando PMEs através da automação inteligente.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-solutions-title">Soluções</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block hover:text-foreground transition-colors text-left"
                data-testid="footer-link-chatmulti"
              >
                ChatMulti
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block hover:text-foreground transition-colors text-left"
                data-testid="footer-link-ai-agents"
              >
                Agentes de IA
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block hover:text-foreground transition-colors text-left"
                data-testid="footer-link-siteflash"
              >
                SiteFlash
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block hover:text-foreground transition-colors text-left"
                data-testid="footer-link-transformai"
              >
                Transformai
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-company-title">Empresa</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block hover:text-foreground transition-colors text-left"
                data-testid="footer-link-about"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block hover:text-foreground transition-colors text-left"
                data-testid="footer-link-contact"
              >
                Contato
              </button>
              <a href="#" className="block hover:text-foreground transition-colors" data-testid="footer-link-support">Suporte</a>
              <a href="#" className="block hover:text-foreground transition-colors" data-testid="footer-link-privacy">Política de Privacidade</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Automai. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={handleWhatsAppContact}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
              data-testid="footer-whatsapp-contact"
            >
              <span className="text-whatsapp">📱</span>
              <span>WhatsApp: (12) 99677-1828</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
