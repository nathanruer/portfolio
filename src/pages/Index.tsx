 import React from 'react';
import HeroSection from "./HomePage"; 

type Lang = 'fr' | 'en';

interface IndexProps {
  currentLang: Lang;
  setCurrentLang: React.Dispatch<React.SetStateAction<Lang>>;
}

const Index: React.FC<IndexProps> = ({ currentLang, setCurrentLang }) => {
  return (
    <div className="min-h-screen">
      <HeroSection currentLang={currentLang} />
    </div>
  );
};

export default Index;
