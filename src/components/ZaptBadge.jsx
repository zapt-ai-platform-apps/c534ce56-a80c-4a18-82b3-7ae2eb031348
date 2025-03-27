import React from 'react';
import { motion } from 'framer-motion';

const ZaptBadge = () => {
  return (
    <motion.a 
      href="https://www.zapt.ai" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-1 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-white/80">Made on</span>
      <span className="font-bold text-primary-300">ZAPT</span>
    </motion.a>
  );
};

export default ZaptBadge;