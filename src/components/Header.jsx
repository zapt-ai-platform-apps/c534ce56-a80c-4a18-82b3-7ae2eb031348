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
            ZAPT's platform is now live
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
              className="col-span-1 sm:col-span-2 h-auto py-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
            >
              <div className="text-white text-center p-4">
                <div className="text-xl font-bold text-primary-300">Robust Feature Set</div>
                <div className="text-sm mt-1">Complete app platform with everything you need</div>
                <div className="flex justify-center mt-3 gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    Databases
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Authentication
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Error Monitoring
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Web Analytics
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Monetisation
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    User Analytics
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Custom Domains
                  </span>
                  <span className="px-2 py-1 text-xs bg-white/10 rounded flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Customer Support
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-1 h-auto py-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
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