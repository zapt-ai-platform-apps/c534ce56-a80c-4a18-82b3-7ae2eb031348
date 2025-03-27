import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: "Just Launched",
    title: "Platform Launch",
    description: "Successfully launched the ZAPT platform with core AI app generation capabilities.",
    completed: true
  },
  {
    date: "Coming Soon",
    title: "Enterprise Features",
    description: "Enterprise-grade security, team collaboration, and customization options.",
    completed: false
  },
  {
    date: "Coming Soon",
    title: "API Ecosystem",
    description: "Expanded integration capabilities with major third-party services and APIs.",
    completed: false
  },
  {
    date: "Coming Soon",
    title: "Advanced Analytics",
    description: "Enhanced app analytics and performance monitoring tools for deeper insights.",
    completed: false
  }
];

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
            className="card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Development Milestones</h3>
            <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`absolute -left-8 top-1.5 w-6 h-6 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {milestone.completed ? (
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{milestone.date}</div>
                  <h4 className="font-medium mb-1">{milestone.title}</h4>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
                title="Advanced AI Understanding"
                description="Our AI interprets complex app requirements and generates sophisticated code structures."
              />
              <FeatureItem
                title="Database Integration"
                description="Support for complex data relationships and advanced queries while maintaining our no-code approach."
              />
              <FeatureItem
                title="Custom UI Components"
                description="Extensive library of customizable UI components for visually distinctive applications."
              />
              <FeatureItem
                title="Performance Optimization"
                description="Optimized code generation and resource management for fast-loading applications."
              />
              <FeatureItem
                title="Security & Authentication"
                description="Built-in authentication options and security best practices for all generated apps."
              />
            </ul>
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