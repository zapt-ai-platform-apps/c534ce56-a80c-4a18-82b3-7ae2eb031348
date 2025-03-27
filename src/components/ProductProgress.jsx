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
          
          <div className="flex flex-col relative">
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-5 text-white text-center">How It Works</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-center mx-auto max-w-3xl">
                We've made app creation as simple as describing what you want, revolutionizing how digital tools are created with a straightforward approach.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
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
              
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-primary-500/20 max-w-3xl mx-auto">
                <p className="text-sm text-gray-300 italic">
                  "I need an app that helps dog owners find nearby dog-friendly parks and connect with other owners."
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  That's all it takes - our AI handles the rest!
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20 w-full md:max-w-md">
                  <h4 className="font-bold text-white mb-2 text-center">Ready for Everyone</h4>
                  <p className="text-sm text-gray-300 text-center">
                    Just like WordPress revolutionized website creation, ZAPT is democratizing app development—no coding knowledge required.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full">
                      Create, Deploy, Share
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

export default ProductProgress;