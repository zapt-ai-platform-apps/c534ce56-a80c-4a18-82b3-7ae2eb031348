import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section bg-gray-50" id="strategy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary-600 text-sm font-medium mb-4">
            The YouTube Approach
          </span>
          <h2 className="heading-lg mb-4">Following the YouTube Model</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Community-driven innovation, not rigid commercial plans
          </p>
        </div>

        <motion.div
          className="card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-6">The YouTube Parallel</h3>
              <div className="prose prose-lg text-gray-700 max-w-none mb-6">
                <p>
                  Just as YouTube's success was shaped by its users rather than a rigid commercial plan, ZAPT is designed to evolve based on community feedback and usage patterns.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 my-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong>User-Defined Innovation</strong> - Our roadmap will be guided by how people actually use our platform
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong>Organic Growth</strong> - Letting word-of-mouth and user satisfaction drive our expansion
                      </div>
                    </li>
                  </ul>
                </div>
                
                <p>
                  <strong>No one predicted YouTube's success</strong>. Just like YouTube in its early days, we're creating the canvas and letting our users paint the picture. We expect users to create applications we haven't even imagined yet.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="gradient-border h-full flex items-center">
                <div className="bg-white p-6 rounded-lg h-full w-full">
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-secondary-50 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">The YouTube Story</h4>
                    <p className="text-gray-600 text-sm">A revolution no one predicted</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        2005
                      </div>
                      <p className="text-sm text-gray-700">YouTube launches with no clear business model</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        2006
                      </div>
                      <p className="text-sm text-gray-700">Acquired by Google for $1.65 billion</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        2023
                      </div>
                      <p className="text-sm text-gray-700">$30+ billion in annual revenue</p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 italic">
                        "The true power came from empowering creators and following their lead."
                      </p>
                    </div>
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