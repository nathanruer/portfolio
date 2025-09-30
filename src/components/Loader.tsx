import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ 
      scale: [1, 1.2, 1], 
      rotate: 360,
      opacity: [0.8, 1, 0.8]
    }}
    transition={{ 
      duration: 2, 
      ease: "easeInOut", 
      repeat: Infinity, 
      times: [0, 0.5, 1] 
    }}
    className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
  />
);
