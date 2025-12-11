import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />

      <img
        src={src}
        alt={alt}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
