import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const marketQuadrantData = {
  imageRequest: "professional market quadrant chart showing ZAPT positioned in the leader quadrant with competitors positioned in other quadrants"
};

const testimonialsData = [
  {
    quote: "ZAPT has transformed how we approach internal tool development. We've reduced our app development time by 85% while cutting costs by 62%.",
    author: "Sarah Chen",
    title: "CTO, Enterprise Solutions Inc.",
    imageRequest: "professional headshot of female asian technology executive in business attire"
  },
  {
    quote: "The simplicity of creating sophisticated apps without coding has allowed us to rapidly prototype and deploy solutions for our clients.",
    author: "Marcus Johnson",
    title: "Head of Innovation, TechFusion Global",
    imageRequest: "professional headshot of male african american business executive with glasses"
  }
];

const MarketPosition = () => {
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
    <section className="section bg-white" id="market">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Market Position</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our competitive landscape and unique value proposition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Competitive Landscape</h3>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img
                src="PLACEHOLDER"
                alt="Market position quadrant"
                className="w-full h-full object-cover"
                data-image-request={marketQuadrantData.imageRequest}
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>ZAPT maintains a leading position in the AI-powered app creation space, with our strongest competitive advantage in natural language understanding and code generation quality.</p>
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Differentiation</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="text-primary-500 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Enterprise-Grade Security</h4>
                  <p className="text-gray-600">SOC2 compliant with advanced data protection compared to simpler no-code alternatives</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-500 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Superior AI Understanding</h4>
                  <p className="text-gray-600">Our proprietary models understand complex requirements at a 92% accuracy rate</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-500 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Full-Stack Integration</h4>
                  <p className="text-gray-600">Complete solution from frontend to backend, including database, API, and authentication</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary-500 text-xl mr-3">✓</div>
                <div>
                  <h4 className="font-bold">Transparent Pricing</h4>
                  <p className="text-gray-600">Usage-based model averages 73% cost savings compared to traditional development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, variants }) => {
  return (
    <motion.div
      className="card p-6"
      variants={variants}
    >
      <div className="flex flex-col h-full">
        <div className="text-4xl text-primary-300 mb-4">"</div>
        <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.quote}</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src="PLACEHOLDER"
              alt={testimonial.author}
              className="h-full w-full object-cover"
              data-image-request={testimonial.imageRequest}
            />
          </div>
          <div>
            <div className="font-bold">{testimonial.author}</div>
            <div className="text-sm text-gray-600">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketPosition;