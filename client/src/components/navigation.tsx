import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AutomaiLogo from "./automai-logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com um especialista da Automai.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
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
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-testid="logo">
            <AutomaiLogo className="w-8 h-8" />
            <span className="text-xl font-bold">automai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-solutions"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-results"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-contact"
            >
              Contato
            </button>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-specialist"
            >
              Falar com Especialista →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-solutions"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-about"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-results"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="mobile-button-specialist"
                >
                  Falar com Especialista →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
