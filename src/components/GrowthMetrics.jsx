import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const visionPoints = [
  {
    title: "Scale",
    icon: "🚀",
    description: "Our goal is to reach millions of users worldwide, making app creation accessible to everyone regardless of technical background."
  },
  {
    title: "Simplicity",
    icon: "🎯",
    description: "We're committed to maintaining an intuitive interface that allows complete beginners to create powerful apps within minutes."
  },
  {
    title: "Impact",
    icon: "💡",
    description: "Just as YouTube revolutionized video content creation, we aim to fundamentally transform how software is built and deployed."
  },
  {
    title: "Innovation",
    icon: "⚡",
    description: "We'll continuously push the boundaries of what's possible with AI to make app creation faster and more powerful."
  }
];

const GrowthMetrics = () => {
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
    <section className="section bg-white" id="vision">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            How we plan to revolutionize app creation globally
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {visionPoints.map((point, index) => (
            <VisionCard
              key={index}
              point={point}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <div className="mt-16">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">The YouTube Parallel</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="prose prose-lg text-gray-700">
                <p>
                  Just as YouTube revolutionized video creation by making video production accessible to everyone, we're doing the same for app creation.
                </p>
                <p>
                  Before YouTube, video production was limited to professionals with expensive equipment and technical expertise. YouTube changed that forever.
                </p>
                <p>
                  Similarly, app creation has been restricted to developers and those who can afford to hire them. Our platform changes that fundamental equation.
                </p>
                <p>
                  And just like YouTube couldn't predict all the ways people would use video - from unboxing videos to online courses, product reviews to citizen journalism - we're seeing early users create apps for purposes we never imagined.
                </p>
                <p>
                  The power isn't just in the technology - it's in putting that technology in the hands of people who understand specific problems that need solving, even if they've never written a line of code.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBwbGF0Zm9ybSUyMGdyb3d0aCUyMHZpc2lvbiUyMGRpYWdyYW18ZW58MHx8fHwxNzQzMDk5ODc3fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Platform growth vision" 
                  className="w-full h-64 object-contain"
                  data-image-request="inspiring visual showing global platform growth vision with digital connections reaching worldwide"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionCard = ({ point, variants }) => {
  return (
    <motion.div
      className="card p-6 flex flex-col h-full"
      variants={variants}
    >
      <div className="text-4xl mb-4">{point.icon}</div>
      <h3 className="text-xl font-bold mb-2">{point.title}</h3>
      <p className="text-gray-600 flex-grow">{point.description}</p>
    </motion.div>
  );
};

export default GrowthMetrics;