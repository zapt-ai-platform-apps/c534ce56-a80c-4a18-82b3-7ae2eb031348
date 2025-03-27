import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="pt-28 pb-16 md:pt-32 md:pb-24 hero-gradient" id="home">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="heading-xl mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="gradient-text">ZAPT</span> Investor Update
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Performance highlights and strategic developments of our AI app creation platform
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <a href="#metrics" className="btn btn-primary">
              View Metrics
            </a>
            <a href="#product" className="btn btn-outline">
              Product Updates
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;