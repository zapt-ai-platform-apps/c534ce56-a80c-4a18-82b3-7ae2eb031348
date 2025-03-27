import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
                alt="ZAPT Logo" 
                className="h-10 w-10 mr-3"
              />
              <span className="font-bold text-2xl">ZAPT</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The AI app creation platform that lets you build powerful apps without coding. Transform your ideas into reality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZAPT. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;