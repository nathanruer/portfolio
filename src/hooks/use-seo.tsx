import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    document.title = config.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', config.ogTitle || config.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', config.ogDescription || config.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && config.ogUrl) {
      ogUrl.setAttribute('content', config.ogUrl);
    }

    return () => {
      document.title = 'Nathan Ruer | Portfolio';
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          "Découvrez le portfolio de Nathan Ruer, développeur web spécialisé dans la création d'applications et de solutions web innovantes."
        );
      }
    };
  }, [config]);
};
