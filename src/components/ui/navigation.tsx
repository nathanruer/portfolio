import { Home, FileText, Code, User, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

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
    { icon: Code, path: "/projects", label: currentLang === 'fr' ? "Projets" : "Projects" },
    { icon: User, path: "/skills", label: currentLang === 'fr' ? "Compétences" : "Skills" },
    { icon: FileText, path: "/contact", label: currentLang === 'fr' ? "Contact" : "Contact" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 
      bg-[#27272A]/70 backdrop-blur-md rounded-full px-6 py-2 flex items-center gap-6 shadow-lg"
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        
        const isActive = item.path === "/" 
          ? currentPath === "/" 
          : currentPath.startsWith(item.path);

        const buttonClasses = `
          flex flex-col items-center justify-center transition-colors 
          ${isActive 
            ? "text-primary"
            : "text-foreground hover:text-primary"
          }
        `;

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={buttonClasses}
            title={item.label}
          >
            <IconComponent className="w-6 h-6" />
          </button>
        );
      })}

      <Button
        variant="nav"
        size="sm"
        onClick={() => onLanguageChange(currentLang === 'fr' ? 'en' : 'fr')}
        className="ml-4 p-2 bg-transparent text-foreground"
        title={currentLang === 'fr' ? 'Changer la langue' : 'Change language'}
      >
        <Languages className="w-5 h-5" />
        <span className="ml-1 text-xs">{currentLang.toUpperCase()}</span>
      </Button>
    </nav>
  );
};

export default Navigation;