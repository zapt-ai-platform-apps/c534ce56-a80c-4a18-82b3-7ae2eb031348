import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ExecutiveSummary = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section bg-gray-50" id="summary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key highlights and achievements from the past quarter
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:col-span-2">
            <div className="card p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Quarterly Highlights</h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  ZAPT has achieved significant milestones this quarter, with our AI app creation platform now serving over 500 active users. We've expanded our enterprise client base by 40% and successfully closed a strategic partnership with a major cloud provider.
                </p>
                <p className="mb-4">
                  Our development team has released 3 major platform updates, enhancing AI capabilities and adding enterprise-grade features that have received positive feedback from both existing customers and industry analysts.
                </p>
                <p>
                  Revenue growth continues to accelerate at 22% month-over-month, with customer retention rates exceeding 94%. Our focus on product excellence and customer success has positioned us well for continued expansion in the no-code/AI development market.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Key Metrics</h3>
              <div className="space-y-6">
                <div className="metric-card p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-600 font-medium">Monthly Active Users</span>
                    <span className="text-xl font-bold text-primary-600">520</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full" 
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">+28% from last quarter</p>
                </div>
                
                <div className="metric-card p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-600 font-medium">Average Revenue Per User</span>
                    <span className="text-xl font-bold text-primary-600">$89</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full" 
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">+15% from last quarter</p>
                </div>
                
                <div className="metric-card p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-600 font-medium">Customer Retention</span>
                    <span className="text-xl font-bold text-primary-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full" 
                      style={{ width: '94%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">+5% from last quarter</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;