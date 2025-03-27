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
          <img src="https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8YnVzaW5lc3MlMjBncm93dGglMjBjaGFydCUyMHNob3dpbmclMjB1cHdhcmQlMjB0cmVuZCUyMHdpdGglMjBxdWFydGVybHklMjBkYXRhJTIwcG9pbnRzfGVufDB8fHx8MTc0MzA5OTMwOHww&ixlib=rb-4.0.3&q=80&w=1080" 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
            alt="ZAPT Logo" 
            className="h-8 w-8 mr-2"
          />
            </div>
            <div className="mt-4 text-gray-600">
              <p>User growth has accelerated each quarter, with particular strength in the enterprise segment where our solution addresses significant pain points around app development time and cost.</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Engagement & Retention</h3>
            <div className="h-64 bg-white rounded-lg border border-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1642465789831-a176eb4a1b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8dXNlciUyMHJldGVudGlvbiUyMGNoYXJ0JTIwc2hvd2luZyUyMGNvaG9ydCUyMGFuYWx5c2lzJTIwd2l0aCUyMGhpZ2glMjByZXRlbnRpb24lMjBwZXJjZW50YWdlc3xlbnwwfHx8fDE3NDMwOTkzMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="User retention chart showing strong retention rates" 
                className="w-full h-full object-cover" 
                data-image-request="user retention chart showing cohort analysis with high retention percentages"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>We're seeing 78% monthly active usage among app creators, with an average of 3.4 apps created per active user. Customer churn remains under 5% quarterly.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetricCard = ({ label, value, trend, positive = true, variants }) => {
  return (
    <motion.div 
      className="card p-6 flex flex-col"
      variants={variants}
    >
      <div className="text-gray-500 text-sm mb-2">{label}</div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className={`text-sm font-medium ${positive ? 'text-green-500' : 'text-red-500'} mt-auto flex items-center`}>
        <span>{trend}</span>
        <svg 
          className={`w-4 h-4 ml-1 ${positive ? 'rotate-0' : 'rotate-180'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </motion.div>
  );
};

export default GrowthMetrics;