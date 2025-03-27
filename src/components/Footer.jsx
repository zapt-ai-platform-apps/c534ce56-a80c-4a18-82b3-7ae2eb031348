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
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:investors@zapt.ai" className="text-primary-300 hover:text-primary-200 transition-colors">
                  investors@zapt.ai
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Website:</span>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 transition-colors">
                  www.zapt.ai
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Financial Reports
                </a>
              </li>
              <li>
                <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Company Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZAPT. All rights reserved. Confidential information for investors only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;