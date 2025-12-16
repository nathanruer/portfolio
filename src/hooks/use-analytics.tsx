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

  useEffect(() => {
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, eventParams);
  }
};

export const analyticsEvents = {
  viewProject: (projectName: string) => {
    trackEvent('view_project', {
      project_name: projectName,
    });
  },

  clickProjectDemo: (projectName: string) => {
    trackEvent('click_project_demo', {
      project_name: projectName,
    });
  },

  clickProjectGithub: (projectName: string) => {
    trackEvent('click_project_github', {
      project_name: projectName,
    });
  },

  openImageLightbox: (projectName: string, imageIndex: number) => {
    trackEvent('open_image_lightbox', {
      project_name: projectName,
      image_index: imageIndex,
    });
  },

  navigateProjectImage: (projectName: string, direction: 'next' | 'previous', imageIndex: number) => {
    trackEvent('navigate_project_image', {
      project_name: projectName,
      direction: direction,
      image_index: imageIndex,
    });
  },

  clickContact: (method: string) => {
    trackEvent('contact_click', {
      contact_method: method,
    });
  },

  downloadCV: (language: string) => {
    trackEvent('download_cv', {
      language: language,
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
};
