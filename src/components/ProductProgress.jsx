import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProductProgress = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section bg-white" id="product">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary-600 text-sm font-medium mb-4">
            Platform Capabilities
          </span>
          <h2 className="heading-lg mb-4">Product Progress</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our journey has just begun
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            ref={ref}
            className="card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary-100 to-transparent w-1/3 h-1"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </span>
              Platform Features
            </h3>
            <p className="text-gray-600 mb-6">
              Everything you need to build, deploy, and scale professional applications without coding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-5">
                  <FeatureItem
                    title="Databases"
                    description="Seamlessly integrate and manage data with our built-in database functionality."
                  />
                  <FeatureItem
                    title="Authentication"
                    description="Secure user authentication with multiple sign-in options and management tools."
                  />
                  <FeatureItem
                    title="Error Monitoring"
                    description="Real-time error tracking and monitoring to ensure your app runs smoothly."
                  />
                  <FeatureItem
                    title="Web Analytics"
                    description="Comprehensive analytics to track visitor engagement and app performance."
                  />
                </ul>
              </div>
              <div>
                <ul className="space-y-5">
                  <FeatureItem
                    title="Monetisation"
                    description="Built-in subscription billing for monetizing your apps with monthly subscriptions."
                  />
                  <FeatureItem
                    title="User Analytics"
                    description="Detailed insights on signed-in users to understand usage patterns and behaviors."
                  />
                  <FeatureItem
                    title="Custom Domains"
                    description="Easily connect your own domain name to give your app a professional presence."
                  />
                  <FeatureItem
                    title="Customer Support"
                    description="In-app messaging system allowing users to contact you directly for assistance."
                  />
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r from-secondary-100 to-transparent w-1/3 h-1"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 text-secondary-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              How It Works
            </h3>
            <p className="text-gray-600 mb-6">
              Create and launch your app in three simple steps - no coding required.
            </p>
            <div className="relative pl-10 space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary-100">
                  <span className="text-primary-600 text-sm font-medium">1</span>
                </div>
                <div className="relative bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Describe Your App</h4>
                  <p className="text-gray-600 mb-3">Tell us what you want your app to do using natural language - just like you'd explain it to a person.</p>
                  <div className="bg-white p-4 rounded border border-gray-200 text-sm font-mono text-gray-700">
                    "I need an app that helps users track their daily water intake, set reminders, and visualize their hydration progress over time."
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary-100">
                  <span className="text-primary-600 text-sm font-medium">2</span>
                </div>
                <div className="relative bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">AI Creates Your App</h4>
                  <p className="text-gray-600 mb-3">Our advanced AI processes your request and generates the code, database structure, and user interface.</p>
                  <div className="flex items-center justify-center bg-black p-3 rounded-lg">
                    <div className="loading-dots flex space-x-2">
                      <span className="w-3 h-3 bg-primary-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-primary-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-primary-500 rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary-100">
                  <span className="text-primary-600 text-sm font-medium">3</span>
                </div>
                <div className="relative bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Launch & Share</h4>
                  <p className="text-gray-600">Deploy your app instantly with a custom URL, or connect your own domain name for a professional presence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-5">Our YouTube Moment</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe we're at the beginning of something transformative - similar to YouTube's early days before it revolutionized video content creation. Just as YouTube made everyone a potential creator, ZAPT will make everyone a potential app developer.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our platform is now live, and while it's early days, we're focused on building an experience that will scale to millions of users globally and fundamentally change how apps are created.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                  <span className="text-2xl mr-3">✍️</span>
                  <div>
                    <p className="font-bold">Describe</p>
                    <p className="text-sm text-gray-500">Your app idea</p>
                  </div>
                </div>
                
                <div className="flex items-center text-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                  <span className="text-2xl mr-3">🧠</span>
                  <div>
                    <p className="font-bold">AI Works</p>
                    <p className="text-sm text-gray-500">Creates app code</p>
                  </div>
                </div>
                
                <div className="flex items-center text-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                  <span className="text-2xl mr-3">🚀</span>
                  <div>
                    <p className="font-bold">Deploy</p>
                    <p className="text-sm text-gray-500">Instant launch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxleGNpdGluZyUyMHBsYXRmb3JtJTIwbGF1bmNoJTIwY29uY2VwdCUyMHdpdGglMjByb2NrZXQlMjBpbWFnZXJ5JTIwc3ltYm9saXppbmclMjB0aGUlMjBiZWdpbm5pbmclMjBvZiUyMHNvbWV0aGluZyUyMHJldm9sdXRpb25hcnklMjB3aXRoJTIwZnV0dXJpc3RpYyUyMEFJJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NDMxMTIzMjl8MA&ixlib=rb-4.0.3&q=80&w=1080"  
                  alt="Platform launch concept" 
                  className="w-full aspect-square object-cover"
                  data-image-request="exciting platform launch concept with rocket imagery symbolizing the beginning of something revolutionary with futuristic AI technology"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, description }) => {
  return (
    <li className="flex">
      <div className="mr-3 text-primary-500 flex-shrink-0 mt-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </li>
  );
};

export default ProductProgress;