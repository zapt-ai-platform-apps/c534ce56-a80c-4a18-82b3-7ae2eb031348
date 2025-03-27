import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const YoutubeParallel = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section bg-white" id="vision">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-md mb-6 text-center">
              <span className="gradient-text">"Apps for Everything" - The YouTube Parallel</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Just as YouTube made video creation and sharing accessible to everyone, we're doing the same for app creation. Before YouTube, video production was limited to professionals with expensive equipment and technical expertise. YouTube changed that forever.</p>
              
              <p>Similarly, app creation has been restricted to developers and those who can afford to hire them. Our platform changes that fundamental equation.</p>
              
              <p>And just like YouTube couldn't predict all the ways people would use video - from unboxing videos to online courses, product reviews to citizen journalism - we're seeing early users create apps for purposes we never imagined.</p>
              
              <p>The power isn't just in the technology - it's in putting that technology in the hands of people who understand specific problems that need solving, even if they've never written a line of code.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeParallel;