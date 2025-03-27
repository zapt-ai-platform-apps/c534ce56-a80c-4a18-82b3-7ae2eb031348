import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const customers = [
  {
    name: "Enterprise Financial Services",
    type: "Financial Services",
    logo: "corporate financial services company logo",
    quote: "ZAPT has reduced our app development cycle from months to days, allowing us to respond to market changes faster than ever."
  },
  {
    name: "HealthTech Solutions",
    type: "Healthcare",
    logo: "healthcare technology company logo",
    quote: "Our team can now build and iterate on patient-facing applications without lengthy development processes."
  },
  {
    name: "RetailConnect",
    type: "Retail",
    logo: "retail technology company logo",
    quote: "We've deployed 12 different store management apps in just 8 weeks since adopting ZAPT."
  }
];

const CommercialTraction = () => {
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
    <section className="section bg-gray-50" id="traction">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Commercial Traction</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expanding our customer base and strategic partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="lg:col-span-2 card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Early Customer Success</h3>
            <div className="prose prose-lg text-gray-700 max-w-none mb-6">
              <p>
                Our initial go-to-market efforts have yielded promising results, with several enterprise customers now using ZAPT for internal app development. Early adopters span multiple industries including finance, healthcare, retail, and professional services.
              </p>
              <p>
                The average implementation time from initial conversation to first app deployment has been 14 days, significantly faster than traditional development approaches which typically take months.
              </p>
            </div>

            <h4 className="font-bold text-lg mb-3">Featured Customers</h4>
            <motion.div
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {customers.slice(0, 2).map((customer, index) => (
                <CustomerCard 
                  key={index}
                  customer={customer}
                  variants={itemVariants}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Sales Pipeline</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Active Pilots</span>
                  <span className="text-primary-600">7</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-2.5 rounded-full" 
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Qualified Leads</span>
                  <span className="text-primary-600">24</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-2.5 rounded-full" 
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Sales Conversations</span>
                  <span className="text-primary-600">52</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-2.5 rounded-full" 
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-bold mb-3">Conversion Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Demo to Pilot</span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pilot to Customer</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg. Sales Cycle</span>
                  <span className="font-medium">42 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4">Strategic Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>We've established key partnerships to accelerate our go-to-market strategy:</p>
                <ul>
                  <li>Technology integration with major cloud providers</li>
                  <li>Consulting partnerships with digital transformation firms</li>
                  <li>Channel relationships with enterprise software resellers</li>
                </ul>
                <p>These partnerships have already yielded 35% of our current pipeline and are expected to contribute significantly to our Q3 growth.</p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwZWNvc3lzdGVtJTIwZGlhZ3JhbSUyMHNob3dpbmclMjBjb25uZWN0aW9ucyUyMGJldHdlZW4lMjB0ZWNobm9sb2d5JTIwcGFydG5lcnN8ZW58MHx8fHwxNzQzMDk5MzA5fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                   
                  alt="Partner ecosystem diagram" 
                  className="w-full"
                  data-image-request="business partnership ecosystem diagram showing connections between technology partners"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CustomerCard = ({ customer, variants }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col"
      variants={variants}
    >
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 mr-3">
          <img 
            src="PLACEHOLDER" 
            alt={`${customer.name} logo`} 
            className="w-full h-full object-contain" 
            data-image-request={customer.logo}
          />
        </div>
        <div>
          <h4 className="font-bold text-primary-700">{customer.name}</h4>
          <p className="text-xs text-gray-500">{customer.type}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-600 italic flex-grow">
        "{customer.quote}"
      </blockquote>
    </motion.div>
  );
};

export default CommercialTraction;