import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const VisionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };
  
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50" id="vision">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="heading-lg mb-8 text-center">
              <span className="gradient-text">"Apps for Everything"</span>
              <span className="block text-2xl mt-2 font-normal text-gray-600">The YouTube Parallel</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                "Just as YouTube made video creation and sharing accessible to everyone, we're doing the same for app creation. Before YouTube, video production was limited to professionals with expensive equipment and technical expertise. YouTube changed that forever.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed">
                Similarly, app creation has been restricted to developers and those who can afford to hire them. Our platform changes that fundamental equation.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed">
                And just like YouTube couldn't predict all the ways people would use video - from unboxing videos to online courses, product reviews to citizen journalism - we're seeing early users create apps for purposes we never imagined.
              </p>
              
              <p className="text-lg leading-relaxed">
                The power isn't just in the technology - it's in putting that technology in the hands of people who understand specific problems that need solving, even if they've never written a line of code."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;