import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
                alt="ZAPT Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold gradient-text">ZAPT</span>
            </div>
            <p className="text-gray-600 mb-6">
              Empowering everyone to create apps for everything, digitizing life and business through AI.
            </p>
            <p className="text-sm text-gray-500">
              This investor update was created as an app on ZAPT, demonstrating the power of our platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="vision"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to="product"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                >
                  Product Progress
                </Link>
              </li>
              <li>
                <Link
                  to="showcase"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                >
                  App Showcase
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.zapt.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Visit ZAPT.ai
                </a>
              </li>
              <li>
                <a 
                  href="https://www.zapt.ai/blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="https://www.zapt.ai/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="https://www.zapt.ai/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/zapthq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/zapt-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © {currentYear} ZAPT, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://www.zapt.ai/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.zapt.ai/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;