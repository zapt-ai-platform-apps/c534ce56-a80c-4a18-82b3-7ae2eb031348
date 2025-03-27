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
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The future of AI app creation is here
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:col-span-3">
            <div className="card p-8 h-full">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/5">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                    Platform Launch Announcement
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Democratizing App Creation</h3>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    <p className="mb-4">
                      We're thrilled to announce the official launch of the ZAPT AI app creation platform! Our revolutionary platform enables anyone to create powerful, production-ready applications without writing a single line of code.
                    </p>
                    <p className="mb-4">
                      While we've just gone live and don't have substantial metrics to share yet, we're already seeing promising early interest from users across various industries who are exploring the platform's capabilities.
                    </p>
                    <p className="mb-4">
                      Our vision is to become the <span className="font-medium text-primary-600">YouTube of app creation</span> - democratizing software development the same way YouTube democratized video content creation. Just as YouTube transformed ordinary people into content creators, ZAPT will empower anyone to become an app developer, regardless of their technical background.
                    </p>
                    <p>
                      This investor update itself demonstrates our philosophy. Rather than sending a static document, we've created an <span className="font-medium text-primary-600">interactive app experience</span> that showcases the power of our platform while delivering our update in an engaging format.
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
                        <h4 className="text-xl font-bold mt-4">Key Milestones</h4>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700"><span className="font-medium">Platform Launch:</span> Q1 2025</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700"><span className="font-medium">First 100 Apps Created:</span> Within 2 weeks of launch</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-primary-100 p-1 rounded-full text-primary-600 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-gray-700"><span className="font-medium">Enterprise Partnerships:</span> Discussions underway</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-primary-100 p-1 rounded-full text-primary-600 mt-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-gray-700"><span className="font-medium">Growth Projections:</span> Targeting 10,000 active users by end of Q2</p>
                        </li>
                      </ul>
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

export default ExecutiveSummary;