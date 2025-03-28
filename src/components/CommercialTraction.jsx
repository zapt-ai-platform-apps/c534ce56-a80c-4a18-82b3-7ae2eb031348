import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Growth phases data - more concise
  const growthPhases = [
    {
      number: "01",
      title: "Initial Content Creation",
      description: "Build foundation of demonstration videos",
      status: "In Progress",
      details: "Creating videos showing different apps built with ZAPT."
    },
    {
      number: "02",
      title: "Audience Engagement",
      description: "Respond to feedback and create requested content",
      status: "Upcoming",
      details: "Monitoring engagement and answering questions from viewers."
    },
    {
      number: "03",
      title: "Community Building",
      description: "Foster a community of creators",
      status: "Upcoming",
      details: "Creating content series that showcase different use cases."
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
          {/* Video Demonstration Strategy - More Concise */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
            <h3 className="text-xl font-bold mb-4 text-white">Video Demonstration Strategy</h3>
            <p className="text-gray-300 mb-6">
              We're building an audience by showing people exactly what ZAPT can do through videos that demonstrate 
              building real-world applications, focusing on speed and simplicity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-white">Content Messaging:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Build without coding" - Accessible to non-technical users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Minutes not months" - Speed compared to traditional development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">"Solve real problems" - Focusing on practical applications</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold mb-3 text-white">Distribution Channels:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-medium text-white">YouTube:</span> Full demonstrations (3-5 minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-medium text-white">Twitter/X:</span> Short clips (30-60 seconds)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300"><span className="font-medium text-white">LinkedIn:</span> Business-focused versions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth Phases section - More Concise */}
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
                      Let the product speak for itself through demonstration, build an engaged audience, 
                      and adapt based on what resonates with viewers.
                    </p>
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