import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const categories = [
  { name: "AI-Powered Apps", percentage: 18 },
  { name: "Entertainment & Gaming", percentage: 9 },
  { name: "Social Networking", percentage: 6 },
  { name: "E-commerce Marketplaces", percentage: 5 },
  { name: "Other Categories", percentage: 62 }
];

const specializedApps = [
  "Crypto Marketplace - Real World Assets marketplace with hybrid payment solutions",
  "Fashion Platform 'Fyne' - Solving sizing issues in online clothing shopping",
  "Emergency Services Tool - Situational awareness system for emergency responders",
  "Water Delivery Service - Location-based ordering system for water dispensers",
  "Mind Mapping Tool - Advanced system for creating visual thought maps",
  "Country Flag Explorer - Interactive map showing countries with cultural facts",
  "Tarot Reading Platform - AI-enhanced mystical readings",
  "Elite Athlete Training - Performance tracking for professional athletes",
  "Insurance Needs Analyzer - Client-facing tool for protection insurance requirements",
  "Meditation App - Mindfulness platform with a 'Flow Score' system"
];

const AppStats = () => {
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
    <section className="section bg-gray-50" id="stats">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Apps Being Built on ZAPT</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A summary of the diverse applications our platform powers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Popular App Categories</h3>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-primary-600">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-2.5 rounded-full" 
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Specialized Niche Applications</h3>
            <ul className="space-y-2 text-gray-700">
              {specializedApps.map((app, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="card p-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Other Notable Apps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppItem 
              title="Journaling App 'Reflections & Intentions'" 
              description="Daily guided reflection with scheduled notifications"
              variants={itemVariants}
            />
            <AppItem 
              title="Trip Planning Tool 'Morocco Trip'" 
              description="Personalized travel itinerary for specific vacations"
              variants={itemVariants}
            />
            <AppItem 
              title="Education for Entrepreneurs" 
              description="Guidance system for students starting businesses in Tamil Nadu"
              variants={itemVariants}
            />
            <AppItem 
              title="Equipment Inspection Manager" 
              description="System for tracking inspection history and maintenance requirements"
              variants={itemVariants}
            />
            <AppItem 
              title="Live Music Information" 
              description="Real-time details on music gigs across UK cities based on user preferences"
              variants={itemVariants}
            />
            <AppItem 
              title="Email Marketing System" 
              description="Tool connecting customer service data with email campaigns"
              variants={itemVariants}
            />
            <AppItem 
              title="Pilates Teacher Recruitment" 
              description="Platform connecting fitness studios with instructors for class coverage"
              variants={itemVariants}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AppItem = ({ title, description, variants }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
      variants={variants}
    >
      <h4 className="font-bold text-primary-700 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default AppStats;