import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ExecutiveSummary = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section luxury-bg" id="summary">
      <div className="container-custom">
        <div className="text-center mb-8">
          <motion.h2 
            className="heading-lg mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            The Big News
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="premium-card p-8 h-full rounded-2xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <div className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm text-primary-300 rounded-full text-sm font-medium mb-4 border border-primary-500/20">
                  Platform Launch Announcement 🚀
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Our AI Platform Has Launched</h3>
                <div className="prose prose-lg text-gray-300 max-w-none">
                  <p className="mb-4">
                    <strong className="text-white">We're live!</strong> The ZAPT AI app creation platform has officially launched, and we're at the beginning of what we believe is a transformative era for app creation and technology access.
                  </p>
                  <p className="mb-4">
                    Our platform is making app creation accessible to anyone, regardless of technical background. And we're taking these capabilities to a mass market.
                  </p>
                  <p>
                    This update itself demonstrates our philosophy - instead of sending a PDF, we've created an <span className="font-medium text-primary-300">interactive app experience</span> built on our own platform.
                  </p>
                </div>
              </div>
              <div className="md:w-2/5 flex justify-center items-center">
                <div className="relative max-w-sm w-full">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-primary-500/20 rounded-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary-500/20 rounded-xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <div className="text-center mb-6">
                      <span className="text-5xl">🚀</span>
                      <h4 className="text-xl font-bold mt-4 text-white">Key Highlights</h4>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-primary-500/20 p-1 rounded-full text-primary-300 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-300"><span className="font-medium text-white">Platform is LIVE:</span> Open to anyone today</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-primary-500/20 p-1 rounded-full text-primary-300 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-300"><span className="font-medium text-white">Mass Market Revolution:</span> Anyone can now create apps</p>
                      </li>
                    </ul>
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

export default ExecutiveSummary;