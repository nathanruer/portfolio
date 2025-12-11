import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigation from "./components/ui/navigation";
import { PageTransition } from './components/PageTransition';
import StructuredData from "./components/StructuredData";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

type Lang = 'fr' | 'en';

// Clé de stockage pour la langue dans localStorage
const STORAGE_KEY = 'appLanguage';

const getInitialLang = (): Lang => {
  const storedLang = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (storedLang === 'fr' || storedLang === 'en') {
    return storedLang;
  }
  return 'fr';
};

const RouterWrapper: React.FC<{ 
  currentLang: Lang; 
  setCurrentLang: React.Dispatch<React.SetStateAction<Lang>>; 
  setIsDialogOpen: (isOpen: boolean) => void; 
}> = ({ currentLang, setCurrentLang, setIsDialogOpen }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition routeKey="/">
              <Index currentLang={currentLang} setCurrentLang={setCurrentLang} />
            </PageTransition>
          }
        />
        <Route 
          path="/projects" 
          element={
            <PageTransition routeKey="/projects">
              <ProjectsPage 
                currentLang={currentLang} 
                setIsDialogOpen={setIsDialogOpen} 
              />
            </PageTransition>
          }
        />
        <Route 
          path="/skills" 
          element={
            <PageTransition routeKey="/skills">
              <SkillsPage currentLang={currentLang} />
            </PageTransition>
          }
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition routeKey="/contact">
              <ContactPage currentLang={currentLang} />
            </PageTransition>
          }
        />
        <Route 
          path="*" 
          element={
            <PageTransition routeKey="/404">
              <NotFound 
                currentLang={currentLang} 
                onLanguageChange={setCurrentLang} 
              />
            </PageTransition>
          } 
        /> 
      </Routes>
    </AnimatePresence>
  );
};


const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Lang>(getInitialLang);
  const [isDialogOpenGlobally, setIsDialogOpenGlobally] = useState(false); 

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Données structurées JSON-LD globales
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nathan Ruer',
    jobTitle: currentLang === 'fr' ? 'Développeur Web' : 'Web Developer',
    url: 'https://nathanruer.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/nathan-ruer',
      'https://github.com/nathanruer'
    ],
    description: currentLang === 'fr'
      ? "Développeur web spécialisé dans la création d'applications et de solutions web innovantes."
      : "Web developer specialized in creating innovative web applications and solutions."
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StructuredData data={personSchema} />
        <Toaster />
        <Sonner />
        
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <div className="w-screen h-screen overflow-hidden font-sans">
            
            {!isDialogOpenGlobally && (
                <Navigation 
                  currentLang={currentLang} 
                  onLanguageChange={setCurrentLang} 
                />
            )}
            
            <main className="w-full h-full relative overflow-y-auto">
              <RouterWrapper 
                currentLang={currentLang} 
                setCurrentLang={setCurrentLang}
                setIsDialogOpen={setIsDialogOpenGlobally} 
              />
            </main>
            
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;