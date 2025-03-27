import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const featuredApps = [
  {
    title: "Administrate",
    description: "A tool to help you manage your tasks efficiently",
    url: "https://www.administrate.co.uk/",
    customer: "Professional Task Managers",
    features: ["Task organization", "Productivity tracking", "Calendar integration"]
  },
  {
    title: "Parking Disputer",
    description: "Fight Unfair Parking Tickets with AI Assistance",
    url: "https://parkingdisputer.zapt.app/",
    customer: "Consumer Rights Organization",
    features: ["AI ticket analysis", "Case tracking", "Success rate: 67%"]
  },
  {
    title: "Football Subs",
    description: "A tool for managing a kids football team",
    url: "https://www.footballsubs.com/",
    customer: "Youth Sports Coaches",
    features: ["Player tracking", "Substitution management", "Match scheduling"]
  },
  {
    title: "Insurance Needs Analyzer",
    description: "Identify the right insurance coverage for you, your family, or your business",
    url: "https://020d1088-5e0c-40d4-929d-1c9185e52ec8.vercel.app/",
    customer: "Insurance Brokerage Firm",
    features: ["Smart assessment", "Custom recommendations", "Savings calculator"]
  }
];

const AppShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }
    }
  };
  
  return (
    <section className="section luxury-bg dotted-pattern" id="showcase">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-4 border border-primary-500/20">
            Real World Applications
          </span>
          <h2 className="heading-lg mb-4 text-white">Customer App Showcase</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A glimpse at what's already being created on our platform
          </p>
        </div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredApps.map((app, index) => (
            <AppCard 
              key={index} 
              app={app} 
              variants={itemVariants}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="card-3d">
              <div className="card-3d-inner">
                <div className="premium-card p-8 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Transforming Ideas Into Reality</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    From vision to fully functional applications, we're empowering creators across every industry to build solutions that matter, without technical barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AppCard = ({ app, variants }) => {
  return (
    <motion.div 
      className="premium-card overflow-hidden h-full flex flex-col hover-3d rounded-xl border border-white/10"
      variants={variants}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{app.title}</h3>
          <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">Customer App</span>
        </div>
        <p className="text-gray-300 mb-2">{app.description}</p>
        <p className="text-sm text-gray-400 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {app.customer}
        </p>
        
        <div className="mt-2 mb-4 flex flex-wrap gap-2">
          {app.features.map((feature, idx) => (
            <span key={idx} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-300 font-medium hover:text-primary-200 app-link inline-flex items-center"
          >
            <span>View App</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AppShowcase;