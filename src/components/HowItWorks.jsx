import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Describe Your Update",
    description: "Provide the details of the features or changes you want in your app using our intuitive interface.",
    imageRequest: "person describing app features to AI assistant on computer interface"
  },
  {
    number: "2",
    title: "AI Creates Your App",
    description: "Our advanced AI processes your request and generates the updated code seamlessly.",
    imageRequest: "AI generating code and app interface, showing transformation process"
  },
  {
    number: "3",
    title: "Launch with Confidence",
    description: "Deploy your app effortlessly with all updates integrated and ready for use.",
    imageRequest: "successful app launch with analytics dashboard showing user engagement"
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };
  
  return (
    <section className="section bg-gray-50" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How It Works</h2>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ step, variants }) => {
  return (
    <motion.div 
      className="card p-6 flex flex-col items-center text-center"
      variants={variants}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-6">
        {step.number}
      </div>
      
      <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
        <img 
          src="PLACEHOLDER" 
          alt={step.title} 
          className="w-full h-full object-cover"
          data-image-request={step.imageRequest}
        />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </motion.div>
  );
};

export default HowItWorks;