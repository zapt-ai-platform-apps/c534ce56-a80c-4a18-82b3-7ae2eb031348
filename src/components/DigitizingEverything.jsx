import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const DigitizingEverything = () => {
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
    <section className="section bg-white" id="digitizing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Apps for Everything</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Digitizing life and business through intelligent app creation
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="card-3d" variants={itemVariants}>
            <div className="card-3d-inner h-full">
              <div className="card p-8 h-full">
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary-100 text-primary-600 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">From Traditional to Digital</h3>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  We're transforming traditional documents, workflows, and business processes into intelligent, interactive digital applications.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="absolute inset-0 border-4 border-red-500/20 rounded-lg transform rotate-3"></div>
                      <div className="bg-red-50 p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-red-700">Traditional</p>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>Static PDF reports</li>
                          <li>Email updates</li>
                          <li>Presentation decks</li>
                          <li>Paper documents</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center shimmer">
                    <div className="relative">
                      <div className="absolute inset-0 border-4 border-green-500/20 rounded-lg transform -rotate-3"></div>
                      <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                        <p className="font-medium text-green-700">ZAPT-Powered</p>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>Interactive applications</li>
                          <li>Real-time dashboards</li>
                          <li>Adaptive experiences</li>
                          <li>Connected systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="card-3d" variants={itemVariants}>
            <div className="card-3d-inner h-full">
              <div className="card p-8 h-full">
                <div className="text-center mb-6">
                  <span className="inline-block bg-secondary-100 text-secondary-600 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">Why Apps Are Better</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><span className="font-medium">Interactive:</span> Users engage directly rather than passively consuming</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><span className="font-medium">Intelligent:</span> Personalized experiences based on user behavior</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><span className="font-medium">Dynamic:</span> Real-time updates instead of static snapshots</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p><span className="font-medium">Connected:</span> Integrated with other systems and data sources</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">This Investor Update Is Proof</h3>
                <p className="text-gray-600 mb-6">
                  We've created this investor update as an app rather than a traditional slide deck or email. It demonstrates how any information can be transformed into an engaging, interactive experience.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <p>Responsive across all devices</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <p>Interactive elements enhance engagement</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <p>Analytics provide usage insights</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-500">•</span>
                    <p>Can be instantly updated with new information</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full">
              <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxiZWF1dGlmdWwlMjBpbnRlcmFjdGl2ZSUyMGludmVzdG9yJTIwdXBkYXRlJTIwZGFzaGJvYXJkJTIwc2hvd2luZyUyMGZpbmFuY2lhbCUyMG1ldHJpY3MlMkMlMjBncm93dGglMjBjaGFydHMlMkMlMjBhbmQlMjBlbmdhZ2luZyUyMHZpc3VhbHMlMjBvbiUyMG11bHRpcGxlJTIwZGV2aWNlc3xlbnwwfHx8fDE3NDMxMTIzMjl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Investor update as an app" 
                className="h-full w-full object-cover"
                data-image-request="beautiful interactive investor update dashboard showing financial metrics, growth charts, and engaging visuals on multiple devices"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitizingEverything;