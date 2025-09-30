import { Routes, Route } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/pages/HomePage";
import ProjectsSection from "@/components/pages/ProjectsPage";
import SkillsSection from "@/components/pages/SkillsPage";
import ContactSection from "@/components/pages/ContactPage";

type Lang = 'fr' | 'en';

interface IndexProps {
  currentLang: Lang;
  setCurrentLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const Index: React.FC<IndexProps> = ({ currentLang, setCurrentLang }) => {
  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <Routes>
        <Route path="/" element={<HeroSection currentLang={currentLang} />} />
        <Route path="/projects" element={<ProjectsSection currentLang={currentLang} />} />
        <Route path="/skills" element={<SkillsSection currentLang={currentLang} />} />
        <Route path="/contact" element={<ContactSection currentLang={currentLang} />} />
      </Routes>
    </div>
  );
};

export default Index;
