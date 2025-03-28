import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const visionPoints = [
  {
    title: "Mass Market",
    icon: "🚀",
    description: "We're bringing app creation to everyone, just like YouTube brought video creation to the masses."
  },
  {
    title: "Revolution",
    icon: "💡",
    description: "Fundamentally changing who can create apps and how easily they can be built and shared."
  },
  {
    title: "Simplicity",
    icon: "🎯",
    description: "Complete beginners can create powerful apps by simply describing what they want in plain English."
  }
];

const GrowthMetrics = () => {
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
    <section className="section luxury-bg grain-overlay" id="vision">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-4 border border-primary-500/20">
            The Big Idea
          </span>
          <h2 className="heading-lg mb-4 text-white">Our YouTube Revolution</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            How we're revolutionizing app creation the way YouTube transformed video
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {visionPoints.map((point, index) => (
            <VisionCard
              key={index}
              point={point}
              variants={itemVariants}
              index={index}
            />
          ))}
        </motion.div>

        <div className="mt-16">
          <motion.div
            className="premium-card p-6 md:p-8 overflow-hidden rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="hidden lg:block absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
              <div className="hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="hidden lg:block absolute top-20 right-20 w-40 h-40 bg-secondary-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Before YouTube vs. After YouTube</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="prose prose-lg text-gray-300">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-primary-500/20 mb-6">
                    <h4 className="font-bold text-primary-300 mb-3">Remember When Video Was Hard?</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Before YouTube, video production required:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-300">
                      <li>Expensive equipment</li>
                      <li>Technical expertise</li>
                      <li>Complex distribution</li>
                      <li>Limited audience reach</li>
                    </ul>
                  </div>
                  
                  <p>
                    Similarly, app creation has been restricted to developers and those who can afford to hire them. Our platform changes that fundamental equation.
                  </p>
                  <p>
                    <strong className="text-white">We're the YouTube of apps</strong> - making creation accessible to everyone, enabling uses we can't even imagine yet, and creating a whole new world of possibilities.
                  </p>
                </div>
                <div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-lg">
                    <div className="border-l-4 border-primary-500 pl-4 py-2 mb-6">
                      <h4 className="text-lg font-bold text-primary-300 mb-2">Before vs. After ZAPT</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                        <div className="text-center text-3xl mb-2">💻</div>
                        <h5 className="font-medium text-center mb-2 text-white">Before ZAPT</h5>
                        <ul className="text-sm text-gray-400 space-y-2 pl-4">
                          <li>Coding expertise required</li>
                          <li>Expensive to build</li>
                          <li>Months of development</li>
                          <li>Only for techies</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20">
                        <div className="text-center text-3xl mb-2">✨</div>
                        <h5 className="font-medium text-center mb-2 text-primary-300">With ZAPT</h5>
                        <ul className="text-sm text-gray-300 space-y-2 pl-4">
                          <li>Just describe what you want</li>
                          <li>Affordable for everyone</li>
                          <li>Apps built in minutes</li>
                          <li>Anyone can create</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionCard = ({ point, variants, index }) => {
  return (
    <motion.div
      className="premium-card p-6 flex flex-col h-full rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover-3d"
      variants={variants}
    >
      <div className="text-4xl mb-4">{point.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{point.title}</h3>
      <p className="text-gray-400 flex-grow">{point.description}</p>
      
      <div className="mt-6 w-full bg-white/10 h-1 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: 0.2 + (index * 0.1),
            ease: "easeOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

export default GrowthMetrics;