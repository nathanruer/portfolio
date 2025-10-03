import React from 'react';

interface LinkItemProps {
  href: string;
  title: string; 
  subtitle: string; 
  target?: string;
  rel?: string;
  icon?: React.ElementType;
  isPrimary?: boolean; 
}

export const LinkItem: React.FC<LinkItemProps> = ({ 
  href, 
  title, 
  subtitle, 
  target = '_self', 
  rel = '', 
  icon: Icon = null,
  isPrimary = false 
}) => {
  const primaryClasses = "text-white backdrop-blur-md bg-primary/20  border border-primary/30 hover:border-primary/60 hover:bg-primary/30"
  const standardClasses = "text-white backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10";

  const dynamicClasses = isPrimary ? primaryClasses : standardClasses;

  return (
    <a 
      href={href} 
      target={target} 
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      className={`
        w-full py-3 px-6 rounded-xl transition duration-300 
        transform hover:scale-[1.01] flex items-center justify-center space-x-3
        ${dynamicClasses}
      `}
    >
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
      <div className="flex flex-col items-center"> 
        <span className="text-lg font-semibold">{title}</span> 
        <span className="text-xs opacity-70 mt-0.5">{subtitle}</span> 
      </div>
    </a>
  );
};