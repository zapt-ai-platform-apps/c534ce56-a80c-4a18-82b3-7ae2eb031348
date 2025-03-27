import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Smart AI That Understands You",
    description: "Describe your app in plain English - our AI handles all the technical complexity behind the scenes",
    icon: "💡"
  },
  {
    title: "Built-In Protection & Reliability",
    description: "Automatic error monitoring and backups keep your app running smoothly 24/7",
    icon: "🛡️"
  },
  {
    title: "Designed for Everyone",
    description: "Create professional apps through our simple interface - no technical skills needed",
    icon: "👥"
  },
  {
    title: "Everything Included",
    description: "Get databases, user logins, payments, and analytics ready-to-use in your app",
    icon: "📦"
  },
  {
    title: "Only Pay for What You Use",
    description: "No subscriptions or hidden fees - simple pricing based on your actual usage",
    icon: "💰"
  },
  {
    title: "Launch Faster",
    description: "Go from idea to live app in hours instead of months with our AI-powered platform",
    icon: "🚀"
  }
];

const Benefits = () => {
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
    <section className="section" id="benefits">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Why Everyone Loves <span className="gradient-text">ZAPT</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The simplest way to create powerful apps that grow with your needs - no tech skills required
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              benefit={benefit} 
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit, variants }) => {
  return (
    <motion.div 
      className="card p-8 h-full flex flex-col"
      variants={variants}
    >
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </motion.div>
  );
};

export default Benefits;