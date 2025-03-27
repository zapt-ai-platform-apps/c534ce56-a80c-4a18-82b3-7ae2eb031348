import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProductProgress = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section luxury-bg dotted-pattern" id="product">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-4 border border-primary-500/20">
            Now Live
          </span>
          <h2 className="heading-lg mb-4 text-white">The Platform Is Ready</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Creating apps is now as simple as describing what you want
          </p>
        </div>

        <motion.div
          ref={ref}
          className="premium-card p-8 rounded-2xl border border-white/10 mb-10 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-500/20 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-5 text-white">How It Works</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Just like YouTube revolutionized video creation with a simple "upload" button, we've made app creation as simple as describing what you want.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-2xl mr-3">✍️</span>
                  <div>
                    <p className="font-bold text-white">Describe</p>
                    <p className="text-sm text-gray-400">Your app idea</p>
                  </div>
                </div>
                
                <div className="flex items-center text-center">
                  <svg className="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-2xl mr-3">🧠</span>
                  <div>
                    <p className="font-bold text-white">AI Works</p>
                    <p className="text-sm text-gray-400">Creates app code</p>
                  </div>
                </div>
                
                <div className="flex items-center text-center">
                  <svg className="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                  <span className="text-2xl mr-3">🚀</span>
                  <div>
                    <p className="font-bold text-white">Launch</p>
                    <p className="text-sm text-gray-400">Instant deploy</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary-500/20">
                <p className="text-sm text-gray-300 italic">
                  "I need an app that helps dog owners find nearby dog-friendly parks and connect with other owners."
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  That's all it takes - our AI handles the rest!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-xl overflow-hidden border border-white/10 premium-glow">
                <img src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxleGNpdGluZyUyMHBsYXRmb3JtJTIwbGF1bmNoJTIwY29uY2VwdCUyMHdpdGglMjByb2NrZXQlMjBpbWFnZXJ5JTIwc3ltYm9saXppbmclMjB0aGUlMjBiZWdpbm5pbmclMjBvZiUyMHNvbWV0aGluZyUyMHJldm9sdXRpb25hcnklMjB3aXRoJTIwZnV0dXJpc3RpYyUyMEFJJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NDMxMTIzMjl8MA&ixlib=rb-4.0.3&q=80&w=1080"  
                  alt="Platform launch concept" 
                  className="w-full aspect-square object-cover"
                  data-image-request="exciting platform launch concept with rocket imagery symbolizing the beginning of something revolutionary with futuristic AI technology"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="inline-block premium-button px-6 py-3 rounded-full text-white font-medium mb-8">
            Ready to revolutionize app creation! 🚀
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductProgress;