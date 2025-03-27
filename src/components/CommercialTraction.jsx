import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CommercialTraction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section bg-gray-50" id="strategy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Community-Driven Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Following the YouTube model of user-led innovation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">User-Led Growth Strategy</h3>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Just as YouTube's success was shaped by its users rather than a rigid commercial plan, ZAPT is designed to evolve based on community feedback and usage patterns. We believe in:
              </p>
              
              <ul>
                <li><strong>User-Defined Innovation</strong> - Our roadmap will be guided by how people actually use our platform</li>
                <li><strong>Community Empowerment</strong> - Building tools that respond to the real needs expressed by our users</li>
                <li><strong>Organic Growth</strong> - Letting word-of-mouth and user satisfaction drive our expansion</li>
                <li><strong>Adaptive Evolution</strong> - Remaining flexible to pivot as we learn what resonates most with users</li>
              </ul>
              
              <p>
                Like YouTube in its early days, we're creating the canvas and letting our users paint the picture. No one could have predicted the diversity of content that would emerge on YouTube - from educational videos to unboxings, from citizen journalism to entertainment channels. Similarly, we expect users to create applications we haven't even imagined yet.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4">The YouTube Parallel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>YouTube's success came from empowering creators and following their lead:</p>
                <ul>
                  <li><strong>Creator-First Approach</strong> - YouTube built tools based on what creators needed</li>
                  <li><strong>Platform Evolution</strong> - Features evolved based on how people used the platform</li>
                  <li><strong>Community Discovery</strong> - Let users find unexpected uses for the technology</li>
                  <li><strong>Democratized Creation</strong> - Removed barriers that kept creation exclusive</li>
                </ul>
                <p>Similarly, we're building ZAPT with the belief that our users will show us the most valuable directions to grow. We're providing the tools; they'll provide the innovation.</p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHx0ZWFtJTIwcGxhbm5pbmclMjBzdHJhdGVneSUyMHN0YXJ0dXB8ZW58MHx8fHwxNzQzMDk5MzA5fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Community-driven development" 
                  className="w-full"
                  data-image-request="diverse community of users collaborating on app ideas in an interactive online platform"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialTraction;