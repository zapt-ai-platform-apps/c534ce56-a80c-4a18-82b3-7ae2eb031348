import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    quarter: "Q4 2023",
    title: "Advanced AI Model Integration",
    description: "Implementing specialized AI models for improved code generation, error detection, and natural language understanding.",
    status: "In Development",
    completion: 65
  },
  {
    quarter: "Q4 2023",
    title: "Enterprise Collaboration Tools",
    description: "Adding team workspaces, version control, and collaborative editing features for enterprise customers.",
    status: "In Development",
    completion: 40
  },
  {
    quarter: "Q1 2024",
    title: "Mobile App Builder",
    description: "Extending platform capabilities to include native iOS and Android app generation with full app store deployment.",
    status: "Planning",
    completion: 15
  },
  {
    quarter: "Q1 2024",
    title: "Data Integration Marketplace",
    description: "Launching marketplace of pre-built data integrations with popular enterprise systems and databases.",
    status: "Planning",
    completion: 10
  },
  {
    quarter: "Q2 2024",
    title: "Advanced Analytics Suite",
    description: "Providing comprehensive usage analytics, performance metrics, and business intelligence for apps.",
    status: "Research",
    completion: 5
  }
];

const FutureRoadmap = () => {
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
          <h2 className="heading-lg mb-4">Upcoming Product Roadmap</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our strategic development priorities for the next two quarters
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <motion.div
            className="card p-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[16/9] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwcHJvZHVjdCUyMHJvYWRtYXAlMjB0aW1lbGluZSUyMHNob3dpbmclMjBwbGFubmVkJTIwZmVhdHVyZXMlMjBhbmQlMjBkZXZlbG9wbWVudCUyMG1pbGVzdG9uZXMlMjBmb3IlMjBuZXh0JTIwMTIlMjBtb250aHN8ZW58MHx8fHwxNzQzMDk4MTk5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Strategic roadmap visualization"
                className="w-full h-full object-cover"
                data-image-request="professional product roadmap timeline showing planned features and development milestones for next 12 months"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              item={item}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const RoadmapItem = ({ item, variants }) => {
  // Determine status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-purple-100 text-purple-800';
      case 'Research':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      className="card p-6"
      variants={variants}
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-1">
          <div className="text-lg font-bold text-primary-600">{item.quarter}</div>
          <div className={`inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${getStatusColor(item.status)}`}>
            {item.status}
          </div>
        </div>
        
        <div className="md:col-span-4">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
        
        <div className="md:col-span-1 flex flex-col justify-center items-center">
          <div className="text-2xl font-bold text-primary-500">{item.completion}%</div>
          <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
            <div 
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
              style={{ width: `${item.completion}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">Completion</div>
        </div>
      </div>
    </motion.div>
  );
};

export default FutureRoadmap;