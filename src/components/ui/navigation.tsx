import { Home, Mail, Briefcase, User, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { analyticsEvents } from "@/hooks/use-analytics";

interface NavigationProps {
  currentLang: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const Navigation = ({ currentLang, onLanguageChange }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, path: "/", label: currentLang === 'fr' ? "Accueil" : "Home" },
    { icon: Briefcase, path: "/projects", label: currentLang === 'fr' ? "Projets" : "Projects" },
    { icon: User, path: "/skills", label: currentLang === 'fr' ? "Compétences" : "Skills" },
    { icon: Mail, path: "/contact", label: currentLang === 'fr' ? "Contact" : "Contact" },
  ];

  return (
    <nav
      aria-label={currentLang === 'fr' ? "Navigation principale" : "Main navigation"}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
      bg-[#27272A]/70 backdrop-blur-md rounded-full px-6 py-2 flex items-center gap-6 shadow-lg"
    >
      <TooltipProvider delayDuration={300}> 
        {navItems.map((item) => {
          const IconComponent = item.icon;
          
          const isActive = item.path === "/" 
            ? currentPath === "/" 
            : currentPath.startsWith(item.path);

          const buttonClasses = `
            flex flex-col items-center justify-center transition-colors group relative
            ${isActive 
              ? "text-primary"
              : "text-white hover:text-primary"
            }
          `;

          return (
            <Tooltip key={item.path}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => navigate(item.path)}
                  className={buttonClasses}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                >
                  <IconComponent className="w-6 h-6" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={10} className="bg-[#27272A]/70 text-white"> 
                {item.label}
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="nav"
              size="sm"
              onClick={() => {
                const newLang = currentLang === 'fr' ? 'en' : 'fr';
                analyticsEvents.changeLanguage(newLang);
                onLanguageChange(newLang);
              }}
              className="ml-4 p-2 bg-transparent text-white relative group"
              aria-label={currentLang === 'fr' ? 'Changer la langue' : 'Change language'}
            >
              <Languages className="w-5 h-5" />
              <span className="ml-1 text-xs">{currentLang.toUpperCase()}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10} className="bg-[#27272A] text-white">
            {currentLang === 'fr' ? 'Changer la langue' : 'Change language'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};

export default Navigation;