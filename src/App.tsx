import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigation from "./components/ui/navigation";
import { PageTransition } from './components/PageTransition';
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
  }, [currentLang]);


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
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