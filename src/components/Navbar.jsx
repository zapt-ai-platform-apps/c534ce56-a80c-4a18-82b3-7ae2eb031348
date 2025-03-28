import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: "home", label: "Home" },
  { to: "summary", label: "Summary" },
  { to: "product", label: "Platform" },
  { to: "vision", label: "Digital Transformation" },
  { to: "strategy", label: "Approach" },
  { to: "showcase", label: "App Examples" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c534ce56-a80c-4a18-82b3-7ae2eb031348/0f2d782c-52c5-4afd-afca-d53df2fed964.png?width=48&height=48" 
            alt="ZAPT Logo" 
            className="h-9 w-9 mr-2"
          />
          <span className="text-xl font-bold text-white">ZAPT</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8 lg:space-x-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              delay={index * 0.05}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        
        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-dark/95 backdrop-blur-lg absolute top-full left-0 right-0 border-b border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-5">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-white/80 hover:text-white block py-2 transition-colors font-medium cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Enhanced Nav Link with animation
const NavLink = ({ to, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="relative text-white/80 hover:text-white cursor-pointer transition-colors font-medium group"
      activeClass="text-white"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </motion.div>
);

export default Navbar;