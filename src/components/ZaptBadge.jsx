import React from 'react';
import { motion } from 'framer-motion';

const ZaptBadge = () => {
  return (
    <motion.a 
      href="https://www.zapt.ai" 
      target="_blank" 
      rel="noopener noreferrer"
      className="zapt-badge"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <span>Made on</span>
      <span className="font-bold text-primary-500">ZAPT</span>
    </motion.a>
  );
};

export default ZaptBadge;