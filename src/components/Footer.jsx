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
              <span className="text-xl font-bold text-white">ZAPT</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building the AI-powered future of app creation. Our platform enables anyone to create production-ready applications without writing code.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ZAPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;