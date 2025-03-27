import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const milestones = [
  {
    month: "July 2023",
    title: "AI Enhancement Suite",
    description: "Launched advanced AI capabilities for more intelligent app creation with better code generation and natural language understanding.",
    icon: "🧠"
  },
  {
    month: "August 2023",
    title: "Enterprise Authorization",
    description: "Added enterprise-level security features including role-based access control, SSO, and compliance reporting.",
    icon: "🔒"
  },
  {
    month: "September 2023",
    title: "Performance Optimization",
    description: "Implemented infrastructure improvements resulting in 43% faster app generation and 67% reduction in error rates.",
    icon: "⚡"
  },
  {
    month: "October 2023",
    title: "Pro Template Library",
    description: "Released professionally designed template library with 50+ industry-specific app templates and components.",
    icon: "📚"
  }
];

const ProductUpdates = () => {
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
    <section className="section bg-white" id="product">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Product Development</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key platform enhancements and milestones from the past quarter
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <motion.div
            className="card p-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-primary-50 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-bold text-primary-700 mb-2">Platform Status Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>99.98% platform uptime in the last 90 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Average app generation time reduced to 26 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced error prevention system reduced failed builds by 78%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Successfully integrated with 4 new external API providers</span>
                </li>
              </ul>
            </div>
            
            <div className="aspect-[16/9] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxwcm9mZXNzaW9uYWwlMjBwcm9kdWN0JTIwcm9hZG1hcCUyMHZpc3VhbGl6YXRpb24lMjBzaG93aW5nJTIwY29tcGxldGVkJTIwbWlsZXN0b25lcyUyMGFuZCUyMGZ1dHVyZSUyMGRldmVsb3BtZW50JTIwcGxhbnN8ZW58MHx8fHwxNzQzMDk4MTk4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Product development timeline"
                className="w-full h-full object-cover"
                data-image-request="professional product roadmap visualization showing completed milestones and future development plans"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={index}
              milestone={milestone}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MilestoneCard = ({ milestone, variants }) => {
  return (
    <motion.div
      className="card p-6 flex items-start"
      variants={variants}
    >
      <div className="text-4xl mr-4 mt-1">{milestone.icon}</div>
      <div>
        <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded text-sm font-medium mb-2">
          {milestone.month}
        </div>
        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
        <p className="text-gray-600">{milestone.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductUpdates;