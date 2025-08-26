import { cn } from "@/lib/utils";
import automaiLogoImage from "@assets/automai png lovable_1756237147823.png";

import automai_png_lovable from "@assets/automai png lovable.png";

import favicon_lovable_automai from "@assets/favicon lovable automai.png";

interface AutomaiLogoProps {
  className?: string;
}

export default function AutomaiLogo({ className }: AutomaiLogoProps) {
  return (
    <img 
      src={favicon_lovable_automai} 
      alt="Automai Logo" 
      className={cn("w-8 h-8", className)} 
      data-testid="automai-logo"
    />
  );
}
