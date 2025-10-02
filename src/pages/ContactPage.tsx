import React from 'react';

interface ContactPageProps {
  currentLang: 'fr' | 'en';
}

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  icon?: React.ElementType;
}

const LinkItem: React.FC<LinkItemProps> = ({ 
  href, 
  children, 
  target = '_self', 
  rel = '', 
  icon: Icon = null 
}) => (
  <a 
    href={href} 
    target={target} 
    rel={target === '_blank' ? 'noopener noreferrer' : rel}
    className={`
      w-full py-3 px-6 rounded-xl 
      text-lg font-semibold text-white 
      border border-white/20 hover:border-white/50 
      hover:bg-white/10 transition duration-300 
      flex items-center justify-center space-x-3
    `}
  >
    {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
    <span>{children}</span>
  </a>
);

const ContactPage = ({ currentLang }: ContactPageProps) => {

  const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    
    const link = document.createElement('a');
    link.href = 'public/medias/CV_RUER_NATHAN_2025.pdf';
    link.download = 'CV-Nathan-Ruer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const texts = {
    fr: {
      title: 'Contactez-moi',
      cvButton: 'Télécharger mon CV',
    },
    en: {
      title: 'Contact Me',
      cvButton: 'Download my CV',
    }
  };

  const t = texts[currentLang];

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden p-4">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[180px] opacity-30 top-[-200px] left-[-200px] bg-primary"
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[200px] opacity-20 bottom-[-150px] right-[-150px] bg-primary"
        />
      </div>

      <div className="relative z-10 max-w-lg w-full px-6 text-center">
        
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-primary">
          {t.title}
        </h1>

        <div className="space-y-4 mb-12" role="group" aria-label={t.title}>
          <LinkItem 
            href="mailto:contact@nathan-ruer.dev"
          > 
            contact@nathan-ruer.dev
          </LinkItem>

          <LinkItem 
            href="https://linkedin.com/in/nathan-ruer" 
            target="_blank" 
          >
            LinkedIn
          </LinkItem>

          <LinkItem 
            href="https://github.com/nathan-ruer" 
            target="_blank" 
          >
            GitHub
          </LinkItem>
        </div>

        <button
          onClick={handleDownloadCV}
          className={`
            w-full md:w-auto px-10 py-4 text-white rounded-xl font-bold text-lg 
            bg-primary shadow-lg 
            transition duration-300 hover:opacity-90 transform hover:scale-[1.02]
            focus:outline-none focus:ring-4 focus:ring-indigo-600/50
          `}
        >
          {t.cvButton}
        </button>
      </div>
    </div>
  );
};

export default ContactPage;