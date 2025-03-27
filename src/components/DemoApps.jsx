import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const demoApps = [
  {
    title: "RFeye Deployment Planner",
    description: "Plan and optimize your RF sensor deployments with our intuitive planning tool designed for security professionals.",
    url: "https://731043d5-2669-47d6-86d3-d1ada27ff2ef.vercel.app/",
    imageRequest: "security sensor deployment planning interface with map visualization"
  },
  {
    title: "Customer Opportunity Analyzer",
    description: "Simulates an LLM-powered recommendation engine that analyzes customer data to identify upsell opportunities.",
    url: "https://fd42be53-0813-492a-8514-42790c243971.vercel.app/",
    imageRequest: "customer data analysis dashboard showing upsell opportunities and recommendations"
  },
  {
    title: "Insurance Needs Analyzer",
    description: "Identify the right insurance coverage for you, your family, or your business with our easy-to-use needs analyzer.",
    url: "https://020d1088-5e0c-40d4-929d-1c9185e52ec8.vercel.app/",
    imageRequest: "insurance needs assessment interface with coverage recommendations"
  },
  {
    title: "Startup Impact Dashboard",
    description: "Track and visualize your impact on startups with our comprehensive analytics dashboard.",
    url: "https://2bb6cab7-c817-440c-9113-c81325b823d8.vercel.app/",
    imageRequest: "startup impact analytics dashboard showing metrics and visualization charts"
  }
];

const DemoApps = () => {
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
    <section className="section bg-gray-50" id="demo-apps">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Demo Apps Built For Potential Users</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Example applications we've created to showcase ZAPT's capabilities
          </p>
        </div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {demoApps.map((app, index) => (
            <DemoAppCard 
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

const DemoAppCard = ({ app, variants }) => {
  return (
    <motion.div 
      className="card overflow-hidden flex flex-col h-full app-card"
      variants={variants}
    >
      <div className="aspect-video overflow-hidden">
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
        <a 
          href={app.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-500 font-medium hover:text-primary-600 app-link"
        >
          Visit Demo
        </a>
      </div>
    </motion.div>
  );
};

export default DemoApps;