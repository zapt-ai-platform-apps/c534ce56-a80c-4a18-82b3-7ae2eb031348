import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Updated growth principles with more specific approaches
  const growthPrinciples = [
    {
      title: "User-Led Development",
      icon: "👥",
      description: "We listen first and build second. Every feature development begins with direct conversations with users to ensure we're solving real problems."
    },
    {
      title: "Reduce Learning Curve",
      icon: "🚪",
      description: "We're systematically identifying and eliminating technical barriers in the creation process, making each step intuitive for non-technical users."
    },
    {
      title: "Iterative Feedback Loops",
      icon: "🔄",
      description: "We implement rapid development cycles with users testing early versions, providing feedback, and seeing their suggestions incorporated quickly."
    },
    {
      title: "Expand Use Cases",
      icon: "🌱",
      description: "Rather than prescribing how ZAPT should be used, we're observing how early adopters use our platform and enhancing those pathways."
    }
  ];

  // Growth phases data - made more specific
  const growthPhases = [
    {
      number: "01",
      title: "Foundation",
      description: "Build intuitive platform that removes technical barriers",
      status: "Completed",
      details: "We've created the core AI interface that translates user descriptions into functional code and enables one-click deployment."
    },
    {
      number: "02",
      title: "Community Building",
      description: "Cultivate user community and gather implementation feedback",
      status: "In Progress",
      details: "We're establishing direct communication channels with early users, hosting feedback sessions, and prioritizing improvements based on user input."
    },
    {
      number: "03",
      title: "Capability Expansion",
      description: "Extend functionality based on observed user needs",
      status: "Upcoming",
      details: "We'll introduce new capabilities based on patterns identified in early usage, focusing on features that enable users to build more sophisticated apps."
    }
  ];

  return (
    <section className="section luxury-bg" id="strategy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-4 border border-primary-500/20">
            Our Approach
          </span>
          <h2 className="heading-lg mb-4 text-white">Our Growth Strategy</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building a platform where users lead the way
          </p>
        </div>

        <motion.div
          ref={ref}
          className="premium-card p-6 md:p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          {/* User-Led Philosophy Section - NEW */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h3 className="text-xl font-bold mb-4 text-white">Our User-Led Philosophy</h3>
            <p className="text-gray-300 mb-6">
              Instead of predetermining a roadmap, we're letting actual user behavior guide our development. 
              This means our growth will be organic, authentic, and directly responsive to real user needs rather 
              than our assumptions about what users might want.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-white">What This Looks Like in Practice:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Direct user interviews before adding new features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Analyzing how users actually interact with the platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Weekly implementation of user-suggested improvements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-white">What We're Not Doing:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Rigid multi-year roadmaps that ignore user feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Feature development based solely on competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Prioritizing flashy features over usable functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Plans - NEW */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h3 className="text-xl font-bold mb-4 text-white">Specific Action Plans</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-xl">
                  🎯
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">User Research</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">1</span>
                    <span>Establish user feedback channels and analytics tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">2</span>
                    <span>Conduct weekly user interviews with early adopters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">3</span>
                    <span>Analyze usage patterns to identify improvement areas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-xl">
                  🛠️
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Platform Enhancement</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">1</span>
                    <span>Weekly platform updates based on user feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">2</span>
                    <span>Eliminate identified friction points in creation process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">3</span>
                    <span>Simplify technical processes without removing capability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-xl">
                  👨‍👩‍👧‍👦
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Community Building</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">1</span>
                    <span>Create spaces for users to share their created apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">2</span>
                    <span>Facilitate knowledge sharing between creators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">3</span>
                    <span>Highlight successful use cases to inspire others</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth principles grid - Updated to be more specific */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {growthPrinciples.map((principle, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover-3d"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl mb-2 sm:mb-0">
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

          {/* Growth Phases section - Enhanced with more specifics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <div className="p-6 md:p-8">
              <h4 className="text-2xl font-bold mb-6 text-white">Growth Implementation Phases</h4>
              
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
                        <p className="text-gray-300 mb-3">{phase.description}</p>
                        <p className="text-sm text-gray-400 mb-4">{phase.details}</p>
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
                  <h5 className="text-xl font-bold mb-4 text-white">Measuring Success</h5>
                  <p className="text-gray-300 mb-4">
                    Rather than focusing only on user acquisition metrics, we're measuring success through:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">App completion rate - how many started apps are successfully deployed</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Creation time - how quickly users can go from idea to working app</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Non-technical usage - percentage of users with no prior coding experience</span>
                    </li>
                  </ul>
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
                      <div className="text-5xl">⚡️</div>
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