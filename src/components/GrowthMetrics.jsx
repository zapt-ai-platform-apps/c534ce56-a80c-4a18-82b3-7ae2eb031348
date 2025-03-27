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
    <section className="section bg-gray-50" id="vision">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary-600 text-sm font-medium mb-4">
            Future Growth
          </span>
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
              index={index}
            />
          ))}
        </motion.div>

        <div className="mt-16">
          <motion.div
            className="card p-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="hidden lg:block absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
              <div className="hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
              <div className="hidden lg:block absolute top-20 right-20 w-40 h-40 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            
              <h3 className="text-2xl font-bold mb-6 text-center">The YouTube Parallel</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="prose prose-lg text-gray-700">
                  <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-6">
                    <h4 className="font-bold text-primary-700 mb-3">The Video Revolution</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Before YouTube, video production was limited to professionals with expensive equipment and technical expertise. YouTube changed that forever by:
                    </p>
                    <ul className="mt-3 space-y-1">
                      <li>Removing technical barriers</li>
                      <li>Providing free hosting and distribution</li>
                      <li>Creating an audience discovery mechanism</li>
                      <li>Allowing creators to monetize their content</li>
                    </ul>
                  </div>
                  
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
                <div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxpbnNwaXJpbmclMjB2aXN1YWwlMjBzaG93aW5nJTIwZ2xvYmFsJTIwcGxhdGZvcm0lMjBncm93dGglMjB2aXNpb24lMjB3aXRoJTIwZGlnaXRhbCUyMGNvbm5lY3Rpb25zJTIwcmVhY2hpbmclMjB3b3JsZHdpZGV8ZW58MHx8fHwxNzQzMTEyMzI5fDA&ixlib=rb-4.0.3&q=80&w=1080"  
                      alt="Platform growth vision" 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                      data-image-request="inspiring visual showing global platform growth vision with digital connections reaching worldwide"
                    />
                    
                    <div className="border-l-4 border-secondary-500 pl-4 py-2">
                      <h4 className="text-lg font-bold text-secondary-700 mb-2">The App Creation Revolution</h4>
                      <p className="text-gray-600">
                        Just as YouTube revolutionized video creation, ZAPT is democratizing app development by:
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-center text-primary-500 text-2xl mb-2">💻</div>
                        <h5 className="font-medium text-center mb-2">Before ZAPT</h5>
                        <ul className="text-sm text-gray-600 space-y-2 pl-4">
                          <li>Technical coding expertise</li>
                          <li>Expensive development teams</li>
                          <li>Months of development time</li>
                          <li>Limited to technical people</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <div className="text-center text-primary-500 text-2xl mb-2">✨</div>
                        <h5 className="font-medium text-center mb-2">With ZAPT</h5>
                        <ul className="text-sm text-gray-600 space-y-2 pl-4">
                          <li>Simple natural language</li>
                          <li>Affordable for everyone</li>
                          <li>Apps built in minutes</li>
                          <li>Accessible to anyone</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionCard = ({ point, variants, index }) => {
  return (
    <motion.div
      className="glow-card p-6 flex flex-col h-full"
      variants={variants}
    >
      <div className="text-4xl mb-4">{point.icon}</div>
      <h3 className="text-xl font-bold mb-2">{point.title}</h3>
      <p className="text-gray-600 flex-grow">{point.description}</p>
      
      <div className="mt-6 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: 0.2 + (index * 0.1),
            ease: "easeOut" 
          }}
        />
      </div>
    </motion.div>
  );
};

export default GrowthMetrics;