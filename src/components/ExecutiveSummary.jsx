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
            <div className="card p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Platform Launch</h3>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  We're excited to announce that the ZAPT AI app creation platform has officially launched! Our revolutionary platform enables anyone to create powerful, production-ready applications without writing a single line of code.
                </p>
                <p className="mb-4">
                  While we've just gone live and don't have substantial metrics to share yet, we're already seeing promising early interest from users across various industries who are exploring the platform's capabilities.
                </p>
                <p>
                  Our vision is to become the YouTube of app creation - democratizing software development the same way YouTube democratized video content creation. Just as YouTube transformed ordinary people into content creators, ZAPT will empower anyone to become an app developer, regardless of their technical background.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;