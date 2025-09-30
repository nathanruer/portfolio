import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigation from "@/components/ui/navigation";
import { PageTransition } from './components/PageTransition';
import Index from "./pages/Index";
import ProjectsPage from "@/components/pages/ProjectsPage";
import SkillsPage from "@/components/pages/SkillsPage";
import ContactPage from "@/components/pages/ContactPage";
import NotFound from "./pages/NotFound";

// Configuration du client de requête
const queryClient = new QueryClient();

// ====================================================================
// 1. TYPES
// ====================================================================

type Lang = 'fr' | 'en';

interface PageProps {
  currentLang: Lang;
}

// ====================================================================
// 2. WRAPPER DE ROUTAGE (Avec AnimatePresence pour les transitions)
// ====================================================================

const RouterWrapper: React.FC<{ 
  currentLang: Lang; 
  setCurrentLang: React.Dispatch<React.SetStateAction<Lang>>; 
}> = ({ currentLang, setCurrentLang }) => {
  const location = useLocation();

  return (
    // mode="wait" assure que l'ancienne page sort avant que la nouvelle n'entre
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
              <ProjectsPage currentLang={currentLang} />
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
              <NotFound />
            </PageTransition>
          } 
        /> 
      </Routes>
    </AnimatePresence>
  );
};


// ====================================================================
// 3. COMPOSANT PRINCIPAL APP
// ====================================================================

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Lang>('fr');

   return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <div className="w-screen h-screen overflow-hidden font-sans">
            
            {/* Barre de navigation visible sur toutes les pages */}
            <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

            <main className="w-full h-full relative overflow-y-auto">
              <RouterWrapper currentLang={currentLang} setCurrentLang={setCurrentLang} />
            </main>
            
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
