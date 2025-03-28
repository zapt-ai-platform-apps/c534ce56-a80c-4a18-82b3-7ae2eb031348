import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // New data structure for accessibility principles
  const accessibilityPrinciples = [
    {
      title: "Simplified Creation",
      icon: "🔮",
      description: "We're removing technical barriers to app creation, making powerful development tools accessible to everyone regardless of their coding background."
    },
    {
      title: "Universal Design",
      icon: "🌐",
      description: "Our platform ensures apps work across all devices and user contexts, democratizing not just creation but also distribution and access."
    },
    {
      title: "Community Power",
      icon: "👥",
      description: "By enabling diverse creators, we're fostering an ecosystem where innovation comes from all perspectives, not just technical experts."
    },
    {
      title: "Business Acceleration",
      icon: "⚡️",
      description: "Organizations can prototype, test, and deploy ideas in days rather than months, dramatically reducing time-to-market."
    }
  ];

  // Growth phases data
  const growthPhases = [
    {
      number: "01",
      title: "Foundation",
      description: "Build intuitive platform that removes technical barriers",
      status: "Completed"
    },
    {
      number: "02",
      title: "Expansion",
      description: "Scale to serve diverse use cases across industries",
      status: "In Progress"
    },
    {
      number: "03",
      title: "Ecosystem",
      description: "Foster community of creators sharing apps and components",
      status: "Upcoming"
    }
  ];

  return (
    <section className="section luxury-bg" id="strategy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-4 border border-primary-500/20">
            Our Market Approach
          </span>
          <h2 className="heading-lg mb-4 text-white">The Democratization Strategy</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Creating a world where anyone can build powerful digital solutions
          </p>
        </div>

        <motion.div
          ref={ref}
          className="premium-card p-6 md:p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          {/* Main heading and introduction */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
              Innovation Through Accessibility
            </h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-300 text-lg">
                Throughout history, the most transformative technologies are those that become accessible to everyone. 
                From the printing press to personal computers, democratization drives revolution.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="px-5 py-2 bg-primary-500/20 rounded-lg border border-primary-500/30">
                  <p className="text-primary-300 font-medium">
                    We're creating the YouTube moment for app development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility principles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {accessibilityPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-3d"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl">
                    {principle.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{principle.title}</h4>
                    <p className="text-gray-300">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact visualization */}
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-6 rounded-xl border border-white/10 mb-10">
            <h4 className="text-xl font-bold mb-4 text-white text-center">The Accessibility Impact</h4>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 md:w-1/3">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h5 className="font-bold text-white mb-2">Yesterday</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Technical expertise required
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Months of development time
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      $10k+ investment required
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Limited by available talent
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 animate-pulse"></div>
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-primary-500/30 md:w-1/3">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h5 className="font-bold text-primary-300 mb-2">With ZAPT</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Just describe what you want
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Apps created in minutes
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Accessible pricing for all
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Anyone can create & innovate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Growth Strategy section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <div className="p-6 md:p-8">
              <h4 className="text-2xl font-bold mb-6 text-white">Our Growth Strategy</h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {growthPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    <div className="relative z-10 p-6 border border-white/10 rounded-lg h-full">
                      <div className="absolute -top-4 -right-4 text-5xl font-bold text-primary-500/10">{phase.number}</div>
                      <div className="mt-3">
                        <h5 className="text-xl font-bold mb-2 text-white">{phase.title}</h5>
                        <p className="text-gray-300 mb-4">{phase.description}</p>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-300' 
                            : phase.status === 'In Progress' 
                              ? 'bg-primary-500/20 text-primary-300' 
                              : 'bg-gray-500/20 text-gray-300'
                        }`}>
                          {phase.status}
                        </div>
                      </div>
                    </div>
                    
                    {/* Only add the connector line between items, not after the last one */}
                    {index < growthPhases.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent z-0"></div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-2 text-white">Our Key Insight</h5>
                    <p className="text-gray-300">
                      Platforms win when they enable creators to build what the platform makers never imagined. 
                      We're focused on unlocking creativity by removing technical barriers, not just building specific features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 p-6 md:p-8 bg-gradient-to-r from-primary-500/5 to-secondary-500/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <h5 className="text-xl font-bold mb-4 text-white">Our Unfair Advantage</h5>
                  <p className="text-gray-300 mb-4">
                    While others focus on incremental improvements, we've reimagined the entire app creation process from first principles.
                    Our AI-first approach eliminates traditional bottlenecks and creates a multiplicative rather than additive improvement.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">AI-Powered</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">Zero Learning Curve</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">Rapid Iteration</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">Full-Stack Solution</span>
                  </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <div className="text-5xl">💎</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialTraction;