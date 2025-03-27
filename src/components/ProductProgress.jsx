import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: "Q1 2024",
    title: "Platform Launch",
    description: "Successfully launched the ZAPT platform with core AI app generation capabilities.",
    completed: true
  },
  {
    date: "Q2 2024",
    title: "Enterprise Features",
    description: "Added enterprise-grade security, team collaboration, and customization options.",
    completed: true
  },
  {
    date: "Q2 2024",
    title: "API Ecosystem",
    description: "Expanded integration capabilities with major third-party services and APIs.",
    completed: false
  },
  {
    date: "Q3 2024",
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
            Recent developments and platform improvements
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
            <h3 className="text-xl font-bold mb-4">Recent Platform Enhancements</h3>
            <ul className="space-y-4">
              <FeatureItem
                title="Enhanced AI Understanding"
                description="Improved our AI's ability to interpret complex app requirements and generate more sophisticated code structures."
              />
              <FeatureItem
                title="Advanced Database Integration"
                description="Added support for complex data relationships and advanced queries while maintaining our no-code approach."
              />
              <FeatureItem
                title="Custom UI Components"
                description="Expanded library of customizable UI components for more visually distinctive applications."
              />
              <FeatureItem
                title="Performance Optimization"
                description="Reduced app load times by 40% through improved code generation and resource optimization."
              />
              <FeatureItem
                title="Enterprise SSO Integration"
                description="Added secure single sign-on options for enterprise customers using major identity providers."
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
              <h3 className="text-xl font-bold mb-3">Platform Reliability</h3>
              <p className="text-gray-700 mb-4">
                Our platform has maintained 99.97% uptime this quarter, with zero data loss incidents. Average response time for app generation has decreased from 3.5 minutes to 1.2 minutes, representing a 65% improvement.
              </p>
              <div className="flex space-x-6">
                <div>
                  <div className="text-2xl font-bold text-primary-600">99.97%</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">1.2 min</div>
                  <div className="text-sm text-gray-500">Avg. Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">0</div>
                  <div className="text-sm text-gray-500">Data Loss Events</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
                <img src="https://images.unsplash.com/photo-1501389040983-5c22cb186487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHx0ZWNobmljYWwlMjBkYXNoYm9hcmQlMjBzaG93aW5nJTIwc3lzdGVtJTIwcGVyZm9ybWFuY2UlMjBtZXRyaWNzJTIwYW5kJTIwdXB0aW1lJTIwc3RhdGlzdGljc3xlbnwwfHx8fDE3NDMwOTkzMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="System performance dashboard" 
                  className="w-full"
                  data-image-request="technical dashboard showing system performance metrics and uptime statistics"
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