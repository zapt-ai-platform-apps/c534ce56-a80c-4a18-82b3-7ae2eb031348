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
          <h2 className="heading-lg mb-4">Product Progress</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our journey has just begun
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            ref={ref}
            className="card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Platform Features</h3>
            <ul className="space-y-4">
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
          </motion.div>
          
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full flex items-center justify-center bg-primary-100">
                  <span className="text-primary-600 text-sm font-medium">1</span>
                </div>
                <h4 className="font-medium mb-1">Describe Your Update</h4>
                <p className="text-sm text-gray-600">Provide the details of the features or changes you want in your app using our intuitive interface.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full flex items-center justify-center bg-primary-100">
                  <span className="text-primary-600 text-sm font-medium">2</span>
                </div>
                <h4 className="font-medium mb-1">AI Creates Your App</h4>
                <p className="text-sm text-gray-600">Our advanced AI processes your request and generates the updated code seamlessly.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full flex items-center justify-center bg-primary-100">
                  <span className="text-primary-600 text-sm font-medium">3</span>
                </div>
                <h4 className="font-medium mb-1">Launch with Confidence</h4>
                <p className="text-sm text-gray-600">Deploy your app effortlessly with all updates integrated and ready for use.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="card p-6 bg-gradient-to-r from-primary-50 to-secondary-50"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-bold mb-3">Our YouTube Moment</h3>
              <p className="text-gray-700 mb-4">
                We believe we're at the beginning of something transformative - similar to YouTube's early days before it revolutionized video content creation. Just as YouTube made everyone a potential creator, ZAPT will make everyone a potential app developer.
              </p>
              <p className="text-gray-700">
                Our platform is now live, and while it's early days, we're focused on building an experience that will scale to millions of users globally and fundamentally change how apps are created.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
                <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxsYXVuY2glMjBvZiUyMGElMjBuZXclMjBwbGF0Zm9ybXxlbnwwfHx8fDE3NDMwOTkzMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Platform launch concept" 
                  className="w-full"
                  data-image-request="exciting platform launch concept with rocket imagery symbolizing the beginning of something revolutionary"
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
      <div className="mr-3 text-primary-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
};

export default ProductProgress;