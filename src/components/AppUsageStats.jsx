import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const categories = [
  { name: "AI-Powered Apps", percentage: 18, color: "from-primary-400 to-primary-600" },
  { name: "Entertainment & Gaming", percentage: 9, color: "from-secondary-400 to-secondary-600" },
  { name: "Social Networking", percentage: 6, color: "from-blue-400 to-blue-600" },
  { name: "E-commerce Marketplaces", percentage: 5, color: "from-green-400 to-green-600" },
  { name: "Other Categories", percentage: 62, color: "from-gray-400 to-gray-600" },
];

const specializiedApps = [
  "Crypto Marketplace",
  "Fashion Platform \"Fyne\"",
  "Emergency Services Tool",
  "Water Delivery Service",
  "Mind Mapping Tool",
  "Country Flag Explorer",
  "Tarot Reading Platform",
  "Elite Athlete Training",
  "Insurance Needs Analyzer",
  "Meditation App",
  "Journaling App \"Reflections & Intentions\"",
  "Trip Planning Tool \"Morocco Trip\"",
  "Education for Entrepreneurs",
  "Equipment Inspection Manager",
  "Live Music Information",
  "Email Marketing System",
  "Pilates Teacher Recruitment",
];

const AppUsageStats = () => {
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
    <section className="section" id="stats">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Apps Being Built On Our Platform</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See the diverse range of applications users are creating with ZAPT
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Popular App Categories</h3>
            
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {categories.map((category, index) => (
                <CategoryBar 
                  key={index} 
                  category={category} 
                  variants={itemVariants}
                  inView={inView}
                />
              ))}
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Specialized Niche Applications</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {specializiedApps.map((app, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow"
                >
                  {app}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryBar = ({ category, variants, inView }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCount(category.percentage);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [inView, category.percentage]);
  
  return (
    <motion.div variants={variants}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{category.name}</span>
        <span className="font-semibold stat-counter">{count}%</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-gradient-to-r ${category.color}`}
          initial={{ width: 0 }}
          animate={{ width: `${category.percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default AppUsageStats;