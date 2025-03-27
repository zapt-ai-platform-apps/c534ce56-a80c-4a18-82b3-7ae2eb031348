import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    quarter: "Coming Soon",
    title: "Enterprise Expansion",
    description: "Scale our enterprise customer base with dedicated account management and enhanced security features.",
    initiatives: [
      "Establish dedicated enterprise sales team",
      "Launch enterprise SSO integrations",
      "Implement advanced permission controls",
      "Develop compliance documentation package"
    ]
  },
  {
    quarter: "Coming Soon",
    title: "Advanced AI Capabilities",
    description: "Enhance our AI to support more complex applications and specialized domains.",
    initiatives: [
      "Vertical-specific templates and components",
      "Advanced data visualization capabilities",
      "Custom workflow automation tools",
      "Domain-specific logic engines"
    ]
  },
  {
    quarter: "Future Phase",
    title: "Platform Ecosystem",
    description: "Build a thriving community of partners, developers, and app creators.",
    initiatives: [
      "Launch partner program for integrators",
      "Create component marketplace",
      "Establish developer certification program",
      "Introduce app template exchange"
    ]
  },
  {
    quarter: "Future Phase",
    title: "International Expansion",
    description: "Extend our reach to key global markets with localized support.",
    initiatives: [
      "Establish regional teams in EMEA and APAC",
      "Implement multi-language support",
      "Develop region-specific compliance features",
      "Create localized marketing assets"
    ]
  }
];

const Roadmap = () => {
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
    <section className="section bg-gray-50" id="roadmap">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Strategic Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our vision and plans for the future
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {roadmapItems.map((item, index) => (
            <RoadmapCard 
              key={index} 
              item={item} 
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 card p-8 bg-gradient-to-br from-primary-50 to-secondary-50"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Key Strategic Focus Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FocusAreaCard
              icon="🚀"
              title="Rapid Commercial Scaling"
              description="Building a scalable sales organization and establishing strategic partnerships to accelerate market adoption."
            />
            
            <FocusAreaCard
              icon="🏢"
              title="Enterprise Depth"
              description="Developing specialized features for large organizations while maintaining our simple, intuitive interface."
            />
            
            <FocusAreaCard
              icon="🌐"
              title="Platform Ecosystem"
              description="Fostering a network of partners, integrators, and developers to extend our platform's capabilities."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoadmapCard = ({ item, variants }) => {
  return (
    <motion.div 
      className="card p-6"
      variants={variants}
    >
      <div className="mb-2">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
          {item.quarter}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      
      <h4 className="font-medium text-sm text-gray-700 mb-2">Key Initiatives:</h4>
      <ul className="space-y-1">
        {item.initiatives.map((initiative, index) => (
          <li key={index} className="flex items-start text-sm">
            <svg className="w-4 h-4 mt-0.5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{initiative}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const FocusAreaCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Roadmap;