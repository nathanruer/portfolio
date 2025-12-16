import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics ID non configuré');
      return;
    }

    // Initialiser GA4 si ce n'est pas déjà fait
    if (!window.gtag) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);

      window.gtag = function gtag() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(arguments);
      };
    }
  }, []);

  // Tracker les changements de page
  useEffect(() => {
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

// Fonction helper pour tracker des événements personnalisés
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, eventParams);
  }
};

// Événements prédéfinis pour votre portfolio
export const analyticsEvents = {
  viewProject: (projectName: string) => {
    trackEvent('view_project', {
      project_name: projectName,
    });
  },

  clickContact: (method: string) => {
    trackEvent('contact_click', {
      contact_method: method,
    });
  },

  viewSkill: (skillName: string) => {
    trackEvent('view_skill', {
      skill_name: skillName,
    });
  },

  changeLanguage: (language: string) => {
    trackEvent('change_language', {
      language: language,
    });
  },

  downloadCV: () => {
    trackEvent('download_cv');
  },
};
