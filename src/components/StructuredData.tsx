import { useEffect } from 'react';

interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  description?: string;
  email?: string;
}

interface StructuredDataProps {
  data: PersonSchema | Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';

    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null; // Ce composant ne rend rien visuellement
};

export default StructuredData;
