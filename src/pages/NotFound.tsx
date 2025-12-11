import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React, { Dispatch, SetStateAction } from 'react';
import { useSEO } from "@/hooks/use-seo";

interface NotFoundProps {
  currentLang: 'fr' | 'en';
  onLanguageChange: Dispatch<SetStateAction<'fr' | 'en'>>;
}

const NotFound: React.FC<NotFoundProps> = ({ currentLang, onLanguageChange }) => {
  const location = useLocation();

  useSEO({
    title: currentLang === 'fr' ? 'Nathan Ruer | Page non trouvée' : 'Nathan Ruer | Page not found',
    description: currentLang === 'fr'
      ? "La page que vous cherchez n'existe pas. Retournez à l'accueil du portfolio."
      : "The page you are looking for does not exist. Return to the portfolio home.",
    ogUrl: 'https://nathanruer.vercel.app'
  });

  const content = {
    fr: {
      title: "Échoué dans l'espace",
      message: "La page que vous cherchez est introuvable.",
      link: "Retourner à l'Accueil"
    },
    en: {
      title: "Lost in Space",
      message: "The page you are looking for cannot be found.",
      link: "Return to Home"
    }
  };

  const text = content[currentLang];

  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      
      <div className="text-center p-8 rounded-lg">
        <h1 className="mb-4 text-7xl sm:text-9xl font-extrabold tracking-widest relative">
          404
          <span className="absolute inset-0 block blur-lg opacity-75 -z-10"></span>
        </h1>
        
        <p className="mt-4 text-xl sm:text-2xl font-light text-foreground-muted">
          {text.title}
        </p>
        <p className="mb-8 text-md sm:text-lg font-light text-foreground-muted">
          {text.message}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
