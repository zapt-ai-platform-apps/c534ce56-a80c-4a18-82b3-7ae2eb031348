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
    <header className="relative min-h-screen flex items-center justify-center hero-gradient-luxury overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark opacity-60"></div>
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
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
          className="absolute h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl"
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
      
      <div className="container-custom relative z-10 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-8 px-5 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white font-medium inline-flex items-center border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-2 text-primary-400">✦</span>
            <span>ZAPT Investor Update • March 2025</span>
            <span className="ml-2 text-primary-400">✦</span>
          </motion.div>
          
          <motion.h1 
            className="heading-xl mb-6 max-w-5xl gradient-text-premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
            }}
          >
            The Revolution in App Creation Has Begun
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            ZAPT's AI platform is now live, democratizing app creation just as YouTube revolutionized video
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
              className="btn premium-button px-8 py-4 text-white rounded-full shadow-premium hover:shadow-premium-hover cursor-pointer"
            >
              <span>View Platform Progress</span>
            </Link>
            <Link
              to="showcase"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn px-8 py-4 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/5 cursor-pointer"
            >
              <span>See Our Customer Apps</span>
            </Link>
          </motion.div>
        </div>
        
        {/* Visual elements with content */}
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-[100px]"></div>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <motion.div 
              className="col-span-1 h-32 sm:h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            >
              <div className="text-white text-center p-3">
                <div className="text-xl font-bold text-primary-300">Launch Success</div>
                <div className="text-xs">Platform Live</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-1 sm:col-span-2 h-32 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
            >
              <div className="text-white text-center p-4">
                <div className="text-2xl font-bold text-primary-300">Simple AI Interface</div>
                <div className="text-sm mt-1">Describe your app in plain English</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-1 sm:col-span-3 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            >
              <div className="text-white text-center p-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-300">No Coding Skills</div>
                  <div className="text-sm">Required</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-300">Instant Deployment</div>
                  <div className="text-sm">Live in minutes</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-1 sm:col-span-2 h-28 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
            >
              <div className="text-white text-center p-4">
                <div className="text-xl font-bold text-primary-300">Robust Feature Set</div>
                <div className="text-sm mt-1">Authentication, Databases, APIs, and more</div>
                <div className="flex justify-center mt-2 space-x-2 flex-wrap">
                  <span className="px-2 py-1 text-xs bg-white/10 rounded">Auth</span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded">DB</span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded">APIs</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-1 h-40 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
            >
              <div className="text-white text-center p-3">
                <div className="text-2xl font-bold text-primary-300">100%</div>
                <div className="text-lg">Open to</div>
                <div className="text-lg">Everyone</div>
                <div className="mt-2 text-xs px-3 py-1 bg-white/10 rounded-full">Start today</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
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