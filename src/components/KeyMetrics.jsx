import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const KeyMetrics = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const metrics = [
    { label: 'Monthly Active Users', value: '47K', growth: '+34%' },
    { label: 'Apps Created', value: '683', growth: '+54%' },
    { label: 'Revenue Growth', value: '168%', growth: 'YoY' },
    { label: 'Retention Rate', value: '92%', growth: '+7%' }
  ];

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
    <section className="section bg-gray-50" id="metrics">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Key Performance Metrics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Summary of our platform's growth and usage statistics
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="card p-6 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
              <div className="text-4xl font-bold text-primary-500 mb-2">{metric.value}</div>
              <div className="text-green-600 font-medium">{metric.growth}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyMetrics;