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
          <h2 className="heading-lg mb-4">Commercial Strategy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our approach to building a high-growth platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Early Growth Strategy</h3>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Having just launched our platform, we're now focused on building our initial user base and gathering valuable feedback. Our strategy includes:
              </p>
              
              <ul>
                <li><strong>Community Building</strong> - Cultivating a passionate community of early adopters who will become our advocates</li>
                <li><strong>Targeted Outreach</strong> - Strategically approaching potential customers in high-value verticals</li>
                <li><strong>Product-Led Growth</strong> - Creating an exceptional product experience that drives organic word-of-mouth</li>
                <li><strong>Strategic Partnerships</strong> - Forming alliances with complementary platforms and service providers</li>
              </ul>
              
              <p>
                While it's early days and we don't have significant traction metrics to share yet, we're laying the groundwork for exponential growth. Just as YouTube didn't have millions of users in its first weeks, we're focused on building the foundation for massive scale.
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
          <h3 className="text-xl font-bold mb-4">Target Market Segments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>We've identified key market segments with high potential for initial adoption:</p>
                <ul>
                  <li><strong>Small Business Owners</strong> - Looking for cost-effective custom solutions</li>
                  <li><strong>Non-Technical Entrepreneurs</strong> - With ideas but lacking development resources</li>
                  <li><strong>Enterprise Innovation Teams</strong> - Seeking rapid prototyping capabilities</li>
                  <li><strong>Professional Service Providers</strong> - Needing client-facing applications</li>
                </ul>
                <p>Our go-to-market strategy is focused on demonstrating clear value to these segments while building our platform capabilities in parallel.</p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHx0ZWFtJTIwcGxhbm5pbmclMjBzdHJhdGVneSUyMHN0YXJ0dXB8ZW58MHx8fHwxNzQzMDk5MzA5fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Team planning commercial strategy" 
                  className="w-full"
                  data-image-request="diverse team planning commercial growth strategy on whiteboards in modern startup office"
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