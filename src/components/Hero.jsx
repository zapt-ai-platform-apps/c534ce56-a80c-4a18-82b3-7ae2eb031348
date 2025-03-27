import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient relative overflow-hidden" id="hero">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="gradient-text">Bring Your Ideas to Life</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Create Apps in Minutes. No Coding Required
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract shapes in background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;