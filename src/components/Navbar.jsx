import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
            alt="ZAPT Logo" 
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold gradient-text">ZAPT</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink to="home">Home</NavLink>
          <NavLink to="summary">Summary</NavLink>
          <NavLink to="vision">Vision</NavLink>
          <NavLink to="product">Product</NavLink>
          <NavLink to="strategy">Strategy</NavLink>
          <NavLink to="showcase">Showcase</NavLink>
          <NavLink to="market">Features</NavLink>
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="text-gray-700 hover:text-primary-600 cursor-pointer transition-colors font-medium"
  >
    {children}
  </Link>
);

export default Navbar;