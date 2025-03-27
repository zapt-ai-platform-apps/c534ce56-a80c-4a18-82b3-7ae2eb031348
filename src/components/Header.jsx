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
            <span className="gradient-text">We're Live! Our YouTube Moment is Here</span>
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
          
          {/* Floating devices showcase */}
          <motion.div
            className="mt-16 relative w-full max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative h-64 md:h-80">
              {/* Phone mockup */}
              <motion.div
                className="absolute left-1/4 transform -translate-x-1/2 z-10 float-slow shadow-2xl rounded-xl overflow-hidden border-8 border-gray-800"
                style={{ width: '160px', height: '320px' }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [-2, 0, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxzbGVlayUyMG1vYmlsZSUyMGFwcCUyMGludGVyZmFjZSUyMHNob3dpbmclMjBhJTIwbW9kZXJuJTIwdGFzayUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmQlMjB3aXRoJTIwY2hhcnRzJTIwYW5kJTIwY29sb3JmdWwlMjBVSSUyMGVsZW1lbnRzfGVufDB8fHx8MTc0MzExMjMyOHww&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="Mobile app interface" 
                  className="w-full h-full object-cover"
                  data-image-request="sleek mobile app interface showing a modern task management dashboard with charts and colorful UI elements"
                />
              </motion.div>
              
              {/* Tablet mockup */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 z-20 float shadow-2xl rounded-xl overflow-hidden border-8 border-gray-800"
                style={{ width: '280px', height: '200px' }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src="https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGV0JTIwYXBwJTIwaW50ZXJmYWNlJTIwc2hvd2luZyUyMGElMjBmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjB3aXRoJTIwY2hhcnRzJTIwYW5kJTIwYW5hbHl0aWNzJTJDJTIwbW9kZXJuJTIwVUl8ZW58MHx8fHwxNzQzMTEyMzI4fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="Tablet app interface" 
                  className="w-full h-full object-cover"
                  data-image-request="elegant tablet app interface showing a financial dashboard with charts and analytics, modern UI"
                />
              </motion.div>
              
              {/* Laptop mockup */}
              <motion.div
                className="absolute right-1/4 transform translate-x-1/2 z-10 float-fast shadow-2xl rounded-t-xl overflow-hidden"
                style={{ width: '240px', height: '150px' }}
                animate={{
                  y: [0, -12, 0],
                  rotate: [2, 0, 2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="bg-gray-800 h-full">
                  <div className="h-[85%] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjBkZXNrdG9wJTIwYXBwJTIwaW50ZXJmYWNlJTIwc2hvd2luZyUyMGElMjBjdXN0b21lciUyMHJlbGF0aW9uc2hpcCUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmQlMjB3aXRoJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzQzMTEyMzI4fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                       
                      alt="Desktop app interface" 
                      className="w-full h-full object-cover"
                      data-image-request="professional desktop app interface showing a customer relationship management dashboard with data visualization"
                    />
                  </div>
                  <div className="h-[15%] bg-gray-800"></div>
                </div>
              </motion.div>
            </div>
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