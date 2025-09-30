import React from 'react';
import { motion, Variants } from 'framer-motion';

const transitionVariants: Variants = { 
  initial: { 
    opacity: 0, 
    filter: 'blur(15px)',
  },
  animate: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20,
      mass: 1,
      duration: 0.6 
    } 
  },
  exit: { 
    opacity: 0, 
    filter: 'blur(8px)',
    transition: { 
      duration: 0.4, 
      ease: [0.76, 0.0, 0.24, 1.0] 
    } 
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, routeKey }) => (
  <motion.div
    key={routeKey}
    variants={transitionVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute top-0 left-0 w-full min-h-full" 
  >
    {children}
  </motion.div>
);