import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Get current quarter and year
  const now = new Date();
  const quarter = Math.floor(now.getMonth() / 3) + 1;
  const year = now.getFullYear();

  return (
    <header className="pt-28 pb-16 md:pt-36 md:pb-24 hero-gradient" id="home">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-6 px-4 py-2 bg-secondary/10 rounded-full text-secondary-500 font-medium inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Platform Launch Announcement • Q{quarter} {year}
          </motion.div>
          
          <motion.h1 
            className="heading-xl mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="gradient-text">Building The YouTube of App Creation</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We've just launched our revolutionary AI platform that will democratize app development for everyone
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;