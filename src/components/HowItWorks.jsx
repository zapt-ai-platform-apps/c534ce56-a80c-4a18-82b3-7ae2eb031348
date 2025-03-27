import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
    <section className="section bg-gray-50" id="how">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Creating your app is simpler than you think
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <StepCard
            number="1"
            title="Describe Your Update"
            description="Provide the details of the features or changes you want in your app using our intuitive interface."
            variants={itemVariants}
          />
          
          <StepCard
            number="2"
            title="AI Creates Your App"
            description="Our advanced AI processes your request and generates the updated code seamlessly."
            variants={itemVariants}
          />
          
          <StepCard
            number="3"
            title="Launch with Confidence"
            description="Deploy your app effortlessly with all updates integrated and ready for use."
            variants={itemVariants}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="btn btn-primary cursor-pointer">
            Ready to Get Started?
          </a>
          <p className="mt-4 text-gray-600">
            Transform your ideas into powerful applications effortlessly, without any coding required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description, variants }) => {
  return (
    <motion.div
      className="card p-6 flex flex-col items-center text-center"
      variants={variants}
    >
      <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default HowItWorks;