import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ExecutiveSummary = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section bg-gray-50" id="summary">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="heading-lg mb-4">The Big News</h2>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="card p-8 h-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                  Platform Launch Announcement 🚀
                </div>
                <h3 className="text-2xl font-bold mb-6">Our YouTube Moment Has Arrived</h3>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="mb-4">
                    <strong>We're live!</strong> The ZAPT AI app creation platform has officially launched, and we're at the beginning of what we believe is our "YouTube moment" - the revolutionary period where we'll transform app creation the way YouTube revolutionized video.
                  </p>
                  <p className="mb-4">
                    Just as YouTube put video creation in everyone's hands, ZAPT is making app creation accessible to anyone, regardless of technical background. And we're taking these capabilities to a mass market.
                  </p>
                  <p>
                    This update itself demonstrates our philosophy - instead of sending a PDF, we've created an <span className="font-medium text-primary-600">interactive app experience</span> built on our own platform.
                  </p>
                </div>
              </div>
              <div className="md:w-2/5 flex justify-center items-center">
                <div className="relative max-w-sm w-full">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-primary-200 rounded-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary-200 rounded-xl"></div>
                  <div className="relative bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <span className="text-5xl">🚀</span>
                      <h4 className="text-xl font-bold mt-4">Key Highlights</h4>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700"><span className="font-medium">Platform is LIVE:</span> Open to anyone today</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700"><span className="font-medium">Mass Market Revolution:</span> Anyone can now create apps</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700"><span className="font-medium">First 100+ Apps:</span> Already created by users</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700"><span className="font-medium">Growing Quickly:</span> Daily user signups accelerating</p>
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