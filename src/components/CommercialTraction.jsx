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
            Business Approach
          </span>
          <h2 className="heading-lg mb-4">Community-Driven Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Following the YouTube model of user-led innovation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <motion.div
            className="card p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-6">User-Led Growth Strategy</h3>
                <div className="prose prose-lg text-gray-700 max-w-none mb-6">
                  <p>
                    Just as YouTube's success was shaped by its users rather than a rigid commercial plan, ZAPT is designed to evolve based on community feedback and usage patterns. We believe in:
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
                          <strong>Community Empowerment</strong> - Building tools that respond to the real needs expressed by our users
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
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-0.5">
                          <svg className="h-4 w-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <strong>Adaptive Evolution</strong> - Remaining flexible to pivot as we learn what resonates most with users
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    Like YouTube in its early days, we're creating the canvas and letting our users paint the picture. No one could have predicted the diversity of content that would emerge on YouTube - from educational videos to unboxings, from citizen journalism to entertainment channels. Similarly, we expect users to create applications we haven't even imagined yet.
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

        <motion.div
          ref={ref}
          className="card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">The YouTube Parallel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <div className="bg-primary-50 p-6 rounded-lg mb-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-primary-800 mb-4">Creator Economy Principles</h4>
                    <p>YouTube's success came from empowering creators and following their lead:</p>
                    <ul className="space-y-2 mt-2">
                      <li><strong>Creator-First Approach</strong> - YouTube built tools based on what creators needed</li>
                      <li><strong>Platform Evolution</strong> - Features evolved based on how people used the platform</li>
                      <li><strong>Community Discovery</strong> - Let users find unexpected uses for the technology</li>
                      <li><strong>Democratized Creation</strong> - Removed barriers that kept creation exclusive</li>
                    </ul>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </div>
                </div>
                <p>Similarly, we're building ZAPT with the belief that our users will show us the most valuable directions to grow. We're providing the tools; they'll provide the innovation.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="card p-5">
                  <div className="text-2xl mb-3">🎬</div>
                  <h5 className="font-bold mb-2">YouTube</h5>
                  <p className="text-sm text-gray-600">Democratized video creation and distribution</p>
                </div>
                
                <div className="card p-5">
                  <div className="text-2xl mb-3">📱</div>
                  <h5 className="font-bold mb-2">ZAPT</h5>
                  <p className="text-sm text-gray-600">Democratizing app creation and deployment</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="card p-4 bg-white shadow-xl max-w-sm">
                <img src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwb2YlMjB1c2VycyUyMGNvbGxhYm9yYXRpbmclMjBvbiUyMGFwcCUyMGlkZWFzJTIwaW4lMjBhbiUyMGludGVyYWN0aXZlJTIwb25saW5lJTIwcGxhdGZvcm0lMjB3aXRoJTIwZnV0dXJpc3RpYyUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDMxMTIzMjl8MA&ixlib=rb-4.0.3&q=80&w=1080"  
                  alt="Community-driven development" 
                  className="w-full rounded-lg mb-6"
                  data-image-request="diverse community of users collaborating on app ideas in an interactive online platform with futuristic interface"
                />
                
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-xs font-medium mb-3">COMMUNITY POWER</div>
                  <h4 className="text-xl font-bold mb-3">App Creation Evolution</h4>
                  <p className="text-gray-600 text-sm">
                    By giving app creation power to everyone, we'll see innovations that professional developers would never have conceived.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="text-center">
                      <div className="text-2xl">💡</div>
                      <p className="text-xs font-medium mt-1">Ideation</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">⚙️</div>
                      <p className="text-xs font-medium mt-1">Creation</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">🚀</div>
                      <p className="text-xs font-medium mt-1">Launch</p>
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