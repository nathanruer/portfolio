import { LinkItem } from "@/components/ui/link-item";
import { useSEO } from "@/hooks/use-seo";
import { analyticsEvents } from "@/hooks/use-analytics";

interface ContactPageProps {
  currentLang: 'fr' | 'en';
}

const ContactPage = ({ currentLang }: ContactPageProps) => {
  useSEO({
    title: currentLang === 'fr' ? 'Nathan Ruer | Contact' : 'Nathan Ruer | Contact',
    description: currentLang === 'fr'
      ? "Contactez Nathan Ruer pour vos projets de développement web. Email, LinkedIn, GitHub et CV disponibles."
      : "Contact Nathan Ruer for your web development projects. Email, LinkedIn, GitHub and resume available.",
    ogUrl: 'https://nathanruer.vercel.app/contact'
  });

  const texts = {
    fr: {
      title: 'Me contacter', 
      cvTitle: 'CV', 
      cvSubtitle: 'Voir mon CV', 
      emailSubtitle: 'Email',
      linkedinSubtitle: 'LinkedIn',
      githubSubtitle: 'GitHub',
    },
    en: {
      title: 'Contact me', 
      cvTitle: 'Resume', 
      cvSubtitle: 'View my Resume', 
      emailSubtitle: 'Email',
      linkedinSubtitle: 'LinkedIn',
      githubSubtitle: 'GitHub',
    }
  };

  const t = texts[currentLang];
  
  const cvSuffix = currentLang === 'fr' ? '-fr' : '-eng';
  const cvLink = `${window.location.origin}/medias/CV_RUER_Nathan_2025${cvSuffix}.pdf`;

  const BackgroundBlur = () => (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div 
        className={`
          absolute rounded-full blur-[180px] opacity-30 bg-primary
          w-[100vw] h-[100vw] top-[-100px] left-[-50vw] 
          md:w-[800px] md:h-[800px] md:top-[-200px] md:left-[-200px]
        `}
      />
      <div 
        className={`
          absolute rounded-full blur-[200px] opacity-20 bg-primary
          w-[70vw] h-[70vw] bottom-[-100px] right-[-30vw]
          md:w-[600px] md:h-[600px] md:bottom-[-150px] md:right-[-150px]
        `}
      />
    </div>
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden p-4">
      
      <BackgroundBlur />

      <div className="relative z-10 max-w-lg w-full px-6 text-center">
        
        <h1 className="text-6xl md:text-7xl font-extrabold mb-12 tracking-tight text-primary">
          {t.title}
        </h1>

        <div className="space-y-4 mb-12" role="group" aria-label={t.title}>

          <LinkItem
            href="mailto:nath.ruer@gmail.com"
            title="nath.ruer@gmail.com"
            subtitle={t.emailSubtitle}
            onClick={() => analyticsEvents.clickContact('email')}
          />

          <LinkItem
            href="https://www.linkedin.com/in/nathan-ruer/"
            title="Nathan Ruer"
            subtitle={t.linkedinSubtitle}
            target="_blank"
            onClick={() => analyticsEvents.clickContact('linkedin')}
          />

          <LinkItem
            href="https://github.com/nathanruer"
            title="@nathanruer"
            subtitle={t.githubSubtitle}
            target="_blank"
            onClick={() => analyticsEvents.clickContact('github')}
          />

          <LinkItem
            href={cvLink}
            title={t.cvTitle}
            subtitle={t.cvSubtitle}
            target="_blank"
            isPrimary={true}
            onClick={() => analyticsEvents.downloadCV(currentLang)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;