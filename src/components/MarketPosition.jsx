import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const MarketPosition = () => {
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
    <section className="section bg-gray-50" id="market">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary-600 text-sm font-medium mb-4">
            Platform Benefits
          </span>
          <h2 className="heading-lg mb-4">Why Everyone Loves ZAPT</h2>
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
          <FeatureCard
            icon="🧠"
            title="Smart AI That Understands You"
            description="Describe your app in plain English - our AI handles all the technical complexity behind the scenes"
            variants={itemVariants}
            color="bg-blue-50"
            iconColor="text-blue-500"
          />
          
          <FeatureCard
            icon="🛡️"
            title="Built-In Protection & Reliability"
            description="Automatic error monitoring and backups keep your app running smoothly 24/7"
            variants={itemVariants}
            color="bg-green-50"
            iconColor="text-green-600"
          />
          
          <FeatureCard
            icon="👨‍💼"
            title="Designed for Everyone"
            description="Create professional apps through our simple interface - no technical skills needed"
            variants={itemVariants}
            color="bg-purple-50"
            iconColor="text-purple-600"
          />
          
          <FeatureCard
            icon="🔌"
            title="Everything Included"
            description="Get databases, user logins, payments, and analytics ready-to-use in your app"
            variants={itemVariants}
            color="bg-orange-50"
            iconColor="text-orange-500"
          />
          
          <FeatureCard
            icon="💰"
            title="Only Pay for What You Use"
            description="No subscriptions or hidden fees - simple pricing based on your actual usage"
            variants={itemVariants}
            color="bg-red-50"
            iconColor="text-red-500"
          />
          
          <FeatureCard
            icon="🚀"
            title="Launch Faster"
            description="Go from idea to live app in hours instead of months with our AI-powered platform"
            variants={itemVariants}
            color="bg-teal-50"
            iconColor="text-teal-500"
          />
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="card p-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">Digitizing Everything</h3>
                  <p className="text-gray-600">
                    We're at the beginning of a revolution in how digital experiences are created. ZAPT is leading the charge by making app creation accessible to everyone, regardless of technical background.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-5 rounded-lg mb-6">
                  <h4 className="font-bold mb-3 text-primary-700">What This Means For You</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Convert any idea into a functional app in minutes, not months</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">No more waiting for developer availability or budget approval</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Rapidly test new ideas and iterate based on real user feedback</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Focus on solving problems rather than technical implementation</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="gradient-border overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwdmlzaW9uJTIwb2YlMjBkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBzaG93aW5nJTIwc29tZW9uZSUyMGNyZWF0aW5nJTIwYW4lMjBhcHAlMjB3aXRoJTIwdm9pY2UlMjBvciUyMHRleHQlMjBjb21tYW5kcyUyMGFuZCUyMHNlZWluZyUyMGl0JTIwaW5zdGFudGx5JTIwYnVpbHQlMjBhbmQlMjBkZXBsb3llZCUyMG9uJTIwbXVsdGlwbGUlMjBkZXZpY2VzfGVufDB8fHx8MTc0MzExMjMyOXww&ixlib=rb-4.0.3&q=80&w=1080" 
                     
                    alt="Digital transformation" 
                    className="w-full h-full object-cover"
                    data-image-request="futuristic vision of digital transformation showing someone creating an app with voice or text commands and seeing it instantly built and deployed on multiple devices"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="text-xl font-bold mb-4 text-center">Join The App Creation Revolution</h4>
              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div className="w-full sm:w-auto px-6 py-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Minutes</div>
                  <p className="text-sm text-gray-600">Not months to build</p>
                </div>
                
                <div className="w-full sm:w-auto px-6 py-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Anyone</div>
                  <p className="text-sm text-gray-600">Can be a creator</p>
                </div>
                
                <div className="w-full sm:w-auto px-6 py-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Everything</div>
                  <p className="text-sm text-gray-600">Can be an app</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, variants, color, iconColor }) => {
  return (
    <motion.div
      className="card p-8 shadow-lg"
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col h-full">
        <div className={`text-center ${color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto ${iconColor}`}>
          <div className="text-3xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-gray-600 text-center flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default MarketPosition;