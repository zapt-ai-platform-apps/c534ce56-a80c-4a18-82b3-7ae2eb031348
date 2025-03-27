import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white" id="cta">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Transform your ideas into powerful applications effortlessly, without any coding required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href="https://www.zapt.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary-600 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 text-lg px-8 py-4 cursor-pointer"
            >
              Start Building Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;