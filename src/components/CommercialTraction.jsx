import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section luxury-bg" id="strategy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-4 border border-primary-500/20">
            Our Market Approach
          </span>
          <h2 className="heading-lg mb-4 text-white">The Democratization Strategy</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Making powerful technology accessible to everyone
          </p>
        </div>

        <motion.div
          ref={ref}
          className="premium-card p-6 md:p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-6 text-white">Innovation Through Accessibility</h3>
              <div className="prose prose-lg text-gray-300 max-w-none mb-6">
                <p>
                  Just as major technology revolutions happen when powerful tools are made accessible to everyone, ZAPT is designed to evolve based on community feedback and usage patterns.
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-primary-500/20 my-6">
                  <p className="mb-4">
                    <strong className="text-white">We aim to be user-led, like YouTube was, in going to market.</strong> Rather than dictating how people should use our platform, we're providing the tools and letting our users show us what's possible.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-gray-300">
                        <strong className="text-white">User-Defined Innovation</strong> - Our roadmap will be guided by how people actually use our platform
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-gray-300">
                        <strong className="text-white">Organic Growth</strong> - Letting word-of-mouth and user satisfaction drive our expansion
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-gray-300">
                        <strong className="text-white">Market-Led Development</strong> - Building features based on real-world usage and needs
                      </div>
                    </li>
                  </ul>
                </div>
                
                <p>
                  <strong className="text-white">History shows us that transformative platforms emerge when powerful technology becomes simple to use.</strong> We're creating the canvas and letting our users paint the picture. We expect users to create applications we haven't even imagined yet.
                </p>
                
                <p>
                  This democratization of app creation technology follows the same pattern that drove revolutions in other fields:
                </p>
                
                <ul className="space-y-2 mt-4 text-gray-300">
                  <li>Publishing (blogs made everyone a potential author)</li>
                  <li>Video (YouTube made everyone a potential filmmaker)</li>
                  <li>Photography (Instagram made everyone a potential photographer)</li>
                  <li>And now with ZAPT: Apps (making everyone a potential app creator)</li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="h-full flex items-center">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg h-full w-full border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-secondary-500/20 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white">Our Growth Strategy</h4>
                    <p className="text-gray-400 text-sm">Democratizing technology access</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-xs font-medium text-white">
                        1
                      </div>
                      <p className="text-sm text-gray-300">Make powerful technology simple</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-xs font-medium text-white">
                        2
                      </div>
                      <p className="text-sm text-gray-300">Let users guide our evolution</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-xs font-medium text-white">
                        3
                      </div>
                      <p className="text-sm text-gray-300">Scale with user satisfaction</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-xs font-medium text-white">
                        4
                      </div>
                      <p className="text-sm text-gray-300">Expand through word-of-mouth</p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <p className="text-sm text-gray-400 italic">
                        "The true power comes from empowering creators and following their lead."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/10">
            <h4 className="text-xl font-bold mb-6 text-white">The Power of Technology Democratization</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover-3d">
                <div className="text-3xl mb-4">🌱</div>
                <h5 className="text-lg font-bold mb-2 text-white">Lower Barriers</h5>
                <p className="text-gray-400">
                  By removing technical complexity, we allow anyone with an idea to bring it to life regardless of their background.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover-3d">
                <div className="text-3xl mb-4">💡</div>
                <h5 className="text-lg font-bold mb-2 text-white">Diverse Innovation</h5>
                <p className="text-gray-400">
                  When technology is accessible to all, innovation comes from diverse perspectives, not just technical experts.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover-3d">
                <div className="text-3xl mb-4">🚀</div>
                <h5 className="text-lg font-bold mb-2 text-white">Mass Market Impact</h5>
                <p className="text-gray-400">
                  By making app creation as easy as using a social media platform, we can reach and empower billions of potential creators.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialTraction;