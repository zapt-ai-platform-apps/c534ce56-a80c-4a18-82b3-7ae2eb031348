import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const GrowthMetrics = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Growth Trends</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Detailed metrics on user growth and revenue performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-bold mb-4">User Growth</h3>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMHNob3dpbmclMjB1c2VyJTIwZ3Jvd3RoJTIwY2hhcnQlMjB3aXRoJTIwdXB3YXJkJTIwdHJlbmQlMjBvdmVyJTIwNCUyMHF1YXJ0ZXJzfGVufDB8fHx8MTc0MzA5ODE5OHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="User growth chart showing quarterly increases"
                className="w-full h-full object-cover"
                data-image-request="business dashboard showing user growth chart with upward trend over 4 quarters"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>Monthly active users have grown by 168% over the past three quarters, with the strongest growth coming from enterprise customers.</p>
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Revenue Growth</h3>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8YnVzaW5lc3MlMjBkYXNoYm9hcmQlMjBzaG93aW5nJTIwcXVhcnRlcmx5JTIwcmV2ZW51ZSUyMGdyb3d0aCUyMHdpdGglMjBiYXIlMjBjaGFydCUyMGFuZCUyMHVwd2FyZCUyMHRyZW5kJTIwbGluZXxlbnwwfHx8fDE3NDMwOTgxOTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Revenue growth chart showing quarterly increases"
                className="w-full h-full object-cover"
                data-image-request="business dashboard showing quarterly revenue growth with bar chart and upward trend line"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>Monthly recurring revenue has seen consistent growth with a 28% increase quarter-over-quarter, driven by higher value enterprise plans and feature upsells.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Apps Created</h3>
            <div className="text-3xl font-bold text-primary-500 mb-2">683</div>
            <p className="text-gray-600">Total apps built on our platform</p>
            <div className="mt-3 flex items-center text-green-600 text-sm font-medium">
              <span className="mr-1">↑</span>
              54% increase from last quarter
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-3">User Satisfaction</h3>
            <div className="text-3xl font-bold text-primary-500 mb-2">94%</div>
            <p className="text-gray-600">Customer satisfaction score</p>
            <div className="mt-3 flex items-center text-green-600 text-sm font-medium">
              <span className="mr-1">↑</span>
              8% increase from last quarter
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-3">Conversion Rate</h3>
            <div className="text-3xl font-bold text-primary-500 mb-2">12.8%</div>
            <p className="text-gray-600">Free to paid conversion</p>
            <div className="mt-3 flex items-center text-green-600 text-sm font-medium">
              <span className="mr-1">↑</span>
              3.2% increase from last quarter
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;