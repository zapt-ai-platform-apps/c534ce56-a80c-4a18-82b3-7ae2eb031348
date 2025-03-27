import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const featuredApps = [
  {
    title: "StatusPros",
    description: "Professional Availability Made Simple",
    url: "https://statuspros.zapt.app/",
    imageRequest: "modern website for professional status sharing app showing availability calendar with sleek UI design",
    customer: "Independent Consultant Network",
    features: ["Availability scheduling", "Client booking", "Status updates"]
  },
  {
    title: "Parking Disputer",
    description: "Fight Unfair Parking Tickets with AI Assistance",
    url: "https://parkingdisputer.zapt.app/",
    imageRequest: "app interface for challenging parking tickets with AI analysis, showing a ticket submission form and case tracking",
    customer: "Consumer Rights Organization",
    features: ["AI ticket analysis", "Case tracking", "Success rate: 67%"]
  },
  {
    title: "Risk Assist",
    description: "AI-driven platform for risk identification and mitigation",
    url: "https://riskassist.org/",
    imageRequest: "risk management dashboard with AI analysis and mitigation strategies, featuring data visualization and risk heatmaps",
    customer: "Financial Services Provider",
    features: ["Risk scanning", "Automated reports", "Compliance checks"]
  },
  {
    title: "Insurance Needs Analyzer",
    description: "Identify the right insurance coverage for you, your family, or your business",
    url: "https://020d1088-5e0c-40d4-929d-1c9185e52ec8.vercel.app/",
    imageRequest: "insurance needs assessment interface with personalized recommendation calculator and coverage comparison charts",
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
    <section className="section bg-white" id="showcase">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary-600 text-sm font-medium mb-4">
            Real World Applications
          </span>
          <h2 className="heading-lg mb-4">Customer App Showcase</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                <div className="card p-8 bg-gradient-to-r from-primary-50 to-white">
                  <h3 className="text-2xl font-bold mb-4">The App Revolution Has Begun</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Our platform has enabled the creation of over 100 diverse applications across multiple industries, with minimal technical expertise required.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">100+</div>
                      <p className="text-sm text-gray-600">Apps Created</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">12</div>
                      <p className="text-sm text-gray-600">Industries</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">85%</div>
                      <p className="text-sm text-gray-600">Non-Technical Users</p>
                    </div>
                  </div>
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
      className="card overflow-hidden h-full flex flex-col app-card shadow-lg"
      variants={variants}
    >
      <div className="h-60 overflow-hidden">
        <img 
          src="PLACEHOLDER" 
          alt={app.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          data-image-request={app.imageRequest}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{app.title}</h3>
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">Customer App</span>
        </div>
        <p className="text-gray-600 mb-2">{app.description}</p>
        <p className="text-sm text-gray-500 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {app.customer}
        </p>
        
        <div className="mt-2 mb-4 flex flex-wrap gap-2">
          {app.features.map((feature, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-500 font-medium hover:text-primary-600 app-link inline-flex items-center"
          >
            View App
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