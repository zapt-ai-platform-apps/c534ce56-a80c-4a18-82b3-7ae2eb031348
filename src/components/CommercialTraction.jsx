import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Updated growth principles with video strategy focus
  const growthPrinciples = [
    {
      title: "Content Demonstration",
      icon: "🎬",
      description: "Creating videos showing the platform in action, building real-world applications to showcase speed and simplicity."
    },
    {
      title: "Multi-Platform Approach",
      icon: "📱",
      description: "Distributing tailored content across YouTube (full demos), Twitter/X (short clips), and LinkedIn (business-focused versions)."
    },
    {
      title: "Audience-Led Iteration",
      icon: "🔄",
      description: "Monitoring engagement, responding to every comment, and creating follow-up content based on audience feedback and requests."
    },
    {
      title: "Value-First Showcasing",
      icon: "💎",
      description: "Letting the product capabilities speak for themselves through authentic demonstration rather than marketing speak."
    }
  ];

  // Growth phases data - updated for video strategy
  const growthPhases = [
    {
      number: "01",
      title: "Initial Content Creation",
      description: "Build foundation of demonstration videos across platforms",
      status: "In Progress",
      details: "Creating videos that show building different apps with ZAPT, focusing on speed, simplicity, and real-world applications."
    },
    {
      number: "02",
      title: "Audience Engagement",
      description: "Respond to feedback and create requested follow-up content",
      status: "Upcoming",
      details: "Monitoring which videos generate the most engagement, answering questions, and creating content that addresses specific viewer requests."
    },
    {
      number: "03",
      title: "Community Building",
      description: "Foster a community of creators sharing their ZAPT apps",
      status: "Upcoming",
      details: "Creating content series that build on previous videos, showcasing different use cases, and gradually introducing self-serve and premium options."
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
            Building an audience through demonstration
          </p>
        </div>

        <motion.div
          ref={ref}
          className="premium-card p-6 md:p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          {/* Video Demonstration Strategy - NEW */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h3 className="text-xl font-bold mb-4 text-white">Video Demonstration Strategy</h3>
            <p className="text-gray-300 mb-6">
              Instead of relying on traditional marketing, we're building an audience by showing people exactly 
              what ZAPT can do. We're creating videos demonstrating how to build different apps with ZAPT, 
              focusing on showcasing speed and simplicity with real-world applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-white">Content Messaging Themes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Build without coding" - Emphasizing accessibility to non-technical users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Minutes not months" - Highlighting the speed compared to traditional development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Anyone can do this" - Positioning as a tool for the masses, not just developers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Solve real problems" - Focusing on practical applications, not just tech demos</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-white">Multi-Platform Distribution:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-medium text-white">YouTube:</span> Full demonstrations (3-5 minutes) showing complete build process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-medium text-white">Twitter/X:</span> Short clips (30-60 seconds) highlighting most impressive moments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-medium text-white">LinkedIn:</span> Business-focused versions emphasizing time/cost savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Plans - Updated for video strategy */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h3 className="text-xl font-bold mb-4 text-white">Implementation Plan</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-xl">
                  🎥
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Content Creation</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">1</span>
                    <span>Record platform demonstrations building real apps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">2</span>
                    <span>Focus on simple screen recording with minimal editing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">3</span>
                    <span>Show authentic process including any limitations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-xl">
                  📊
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Audience Analysis</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">1</span>
                    <span>Monitor which videos generate the most engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">2</span>
                    <span>Note specific questions and requests in comments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">3</span>
                    <span>Double down on formats and content that resonates most</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-xl">
                  🚀
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">Building Momentum</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">1</span>
                    <span>Respond to every comment and question from viewers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">2</span>
                    <span>Create content series that build on previous videos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs bg-primary-500/20 text-primary-300 p-1 rounded mr-2 mt-0.5">3</span>
                    <span>Showcase different use cases based on viewer requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth principles grid - Updated for video strategy */}
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

          {/* Growth Phases section - Enhanced with more specifics for video strategy */}
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
                      The goal is to let the product capabilities speak for themselves through demonstration, 
                      build an engaged audience through responsive content creation, and adapt based on what resonates with viewers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 p-6 md:p-8 bg-gradient-to-r from-primary-500/5 to-secondary-500/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <h5 className="text-xl font-bold mb-4 text-white">Focus on Quality Over Production Value</h5>
                  <p className="text-gray-300 mb-4">
                    We're prioritizing authenticity and real value demonstrations over polished marketing:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Simple screen recording with minimal editing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Focus on demonstration rather than production quality</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">Consistent content creation rather than infrequent polished pieces</span>
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
                      <div className="text-5xl">📹</div>
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