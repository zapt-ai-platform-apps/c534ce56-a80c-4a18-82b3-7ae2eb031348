import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const featuredApps = [
  {
    title: "StatusPros",
    description: "Professional Availability Made Simple",
    url: "https://statuspros.zapt.app/",
    imageRequest: "modern website for professional status sharing app showing availability calendar",
    customer: "Independent Consultant Network"
  },
  {
    title: "Parking Disputer",
    description: "Fight Unfair Parking Tickets with AI Assistance",
    url: "https://parkingdisputer.zapt.app/",
    imageRequest: "app interface for challenging parking tickets with AI analysis",
    customer: "Consumer Rights Organization"
  },
  {
    title: "Risk Assist",
    description: "AI-driven platform for risk identification and mitigation",
    url: "https://riskassist.org/",
    imageRequest: "risk management dashboard with AI analysis and mitigation strategies",
    customer: "Financial Services Provider"
  },
  {
    title: "Insurance Needs Analyzer",
    description: "Identify the right insurance coverage for you, your family, or your business with our easy-to-use needs analyzer.",
    url: "https://020d1088-5e0c-40d4-929d-1c9185e52ec8.vercel.app/",
    imageRequest: "insurance needs assessment interface with personalized recommendation calculator",
    customer: "Insurance Brokerage Firm"
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
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="section bg-white" id="showcase">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Customer App Showcase</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Highlighting successful applications built on our platform
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
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our platform has enabled the creation of over 100 diverse applications across multiple industries, with minimal technical expertise required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const AppCard = ({ app, variants }) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col app-card"
      variants={variants}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src="PLACEHOLDER" 
          alt={app.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          data-image-request={app.imageRequest}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{app.title}</h3>
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">Case Study</span>
        </div>
        <p className="text-gray-600 mb-1 flex-grow">{app.description}</p>
        <p className="text-sm text-gray-500 mb-4">Customer: {app.customer}</p>
        
        <a 
          href={app.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-500 font-medium hover:text-primary-600 app-link"
        >
          View App
        </a>
      </div>
    </motion.div>
  );
};

export default AppShowcase;