import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX / window.innerWidth - 0.5;
      const moveY = clientY / window.innerHeight - 0.5;
      setMousePosition({ x: moveX, y: moveY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className="relative pt-28 pb-20 md:pt-36 md:pb-32 hero-gradient-enhanced overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-primary-200/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: '10%',
            left: '10%',
          }}
        />
        <motion.div
          className="absolute h-96 w-96 rounded-full bg-secondary-200/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            bottom: '10%',
            right: '10%',
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-8 px-5 py-2 bg-secondary/10 rounded-full text-secondary-500 font-medium inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-2">✦</span>
            <span>ZAPT Investor Update • March 2025</span>
            <span className="ml-2">✦</span>
          </motion.div>
          
          <motion.h1 
            className="heading-xl mb-6 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
            }}
          >
            <span className="gradient-text">ZAPT Platform Launch Update</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            ZAPT's AI app creation platform is now live, bringing app creation to everyone, just as YouTube did for video
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              to="summary"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary btn-interactive shadow-md shadow-primary/20 cursor-pointer"
            >
              <span>See Our Progress</span>
            </Link>
            <Link
              to="showcase"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-outline btn-interactive hover:bg-primary-50 cursor-pointer"
            >
              <span>View App Showcase</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Down arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <Link
          to="summary"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-primary-600 opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;