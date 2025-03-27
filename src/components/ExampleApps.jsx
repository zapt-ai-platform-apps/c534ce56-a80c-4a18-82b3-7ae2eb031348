import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const exampleApps = [
  {
    title: "StatusPros",
    description: "Professional Availability Made Simple",
    url: "https://statuspros.zapt.app/",
    users: "12,400",
    growth: "+41%",
    imageRequest: "modern website for professional status sharing app showing availability calendar"
  },
  {
    title: "Parking Disputer",
    description: "Fight Unfair Parking Tickets with AI Assistance",
    url: "https://parkingdisputer.zapt.app/",
    users: "9,850",
    growth: "+64%",
    imageRequest: "app interface for challenging parking tickets with AI analysis"
  },
  {
    title: "Administrate",
    description: "A tool to help you manage your tasks efficiently",
    url: "https://www.administrate.co.uk/",
    users: "8,230",
    growth: "+38%",
    imageRequest: "modern task management dashboard with organized projects and timelines"
  },
  {
    title: "Football Subs",
    description: "A tool for managing a kids football team",
    url: "https://www.footballsubs.com/",
    users: "6,740",
    growth: "+27%",
    imageRequest: "sports team management app showing player roster and substitution tracking"
  },
  {
    title: "Construction Careers",
    description: "Explore construction industry roles matching your skills",
    url: "https://construct-career.zapt.app/",
    users: "5,900",
    growth: "+45%",
    imageRequest: "construction career finder showing skills matching and job opportunities"
  },
  {
    title: "Risk Assist",
    description: "AI-driven platform for risk identification and mitigation",
    url: "https://riskassist.org/",
    users: "4,350",
    growth: "+53%",
    imageRequest: "risk management dashboard with AI analysis and mitigation strategies"
  }
];

const ExampleApps = () => {
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
    <section className="section bg-white" id="apps">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Top Performing Apps</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing high-growth applications built on our platform
          </p>
        </div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {exampleApps.map((app, index) => (
            <AppCard 
              key={index} 
              app={app} 
              variants={itemVariants}
            />
          ))}
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
        <h3 className="text-xl font-bold mb-2">{app.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{app.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-sm text-gray-500">Monthly Active Users</span>
            <div className="font-bold">{app.users}</div>
          </div>
          <div className="text-green-600 font-medium">
            {app.growth}
          </div>
        </div>
        
        <a 
          href={app.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-500 font-medium hover:text-primary-600 app-link"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default ExampleApps;