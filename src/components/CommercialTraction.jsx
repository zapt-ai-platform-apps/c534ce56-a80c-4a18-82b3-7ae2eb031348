import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Enterprise Solutions Inc.",
    description: "Strategic partnership to integrate ZAPT into their enterprise software suite, reaching 200+ corporate clients.",
    logo: "professional corporate logo for enterprise software company",
    status: "Launched"
  },
  {
    name: "TechFusion Academy",
    description: "Educational partnership providing ZAPT platform access to 15,000+ students across 45 universities.",
    logo: "modern educational technology logo with graduation cap icon",
    status: "Scaling"
  },
  {
    name: "Startup Accelerator Group",
    description: "Preferred technology partner for their startup portfolio, with 30+ companies already onboarded.",
    logo: "startup accelerator logo with rocket ship icon",
    status: "Live"
  },
  {
    name: "Global Retail Solutions",
    description: "Implementing ZAPT for in-store app creation in 250+ retail locations across North America.",
    logo: "retail technology company logo with shopping cart icon",
    status: "Pilot"
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
          <h2 className="heading-lg mb-4">Commercial Partnerships</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic relationships driving adoption and revenue growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Partnership Revenue</h3>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMHNob3dpbmclMjBwYXJ0bmVyc2hpcCUyMHJldmVudWUlMjBncm93dGglMjB3aXRoJTIwYXNjZW5kaW5nJTIwYmFyJTIwY2hhcnQlMjBhbmQlMjBxdWFydGVybHklMjBicmVha2Rvd258ZW58MHx8fHwxNzQzMDk4MTk5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Partnership revenue growth chart"
                className="w-full h-full object-cover"
                data-image-request="business dashboard showing partnership revenue growth with ascending bar chart and quarterly breakdown"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>Partnership-driven revenue has increased by 215% quarter-over-quarter, now accounting for 42% of total revenue.</p>
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Enterprise Deal Pipeline</h3>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzYWxlcyUyMHBpcGVsaW5lJTIwdmlzdWFsaXphdGlvbiUyMHNob3dpbmclMjBkZWFscyUyMGluJTIwZGlmZmVyZW50JTIwc3RhZ2VzJTIwZnJvbSUyMHByb3NwZWN0aW5nJTIwdG8lMjBjbG9zZWR8ZW58MHx8fHwxNzQzMDk4MTk5fDA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Enterprise sales pipeline"
                className="w-full h-full object-cover"
                data-image-request="professional sales pipeline visualization showing deals in different stages from prospecting to closed"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>Current enterprise pipeline valued at $2.8M with 65% probability-weighted close rate in next 2 quarters.</p>
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
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              partner={partner}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PartnerCard = ({ partner, variants }) => {
  return (
    <motion.div
      className="card p-6 flex flex-col h-full"
      variants={variants}
    >
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 rounded-lg overflow-hidden mr-4">
          <img
            src="PLACEHOLDER"
            alt={`${partner.name} logo`}
            className="h-full w-full object-cover"
            data-image-request={partner.logo}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{partner.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            partner.status === 'Launched' || partner.status === 'Live' 
              ? 'bg-green-100 text-green-800' 
              : partner.status === 'Scaling' 
                ? 'bg-blue-100 text-blue-800'
                : 'bg-yellow-100 text-yellow-800'
          }`}>
            {partner.status}
          </span>
        </div>
      </div>
      <p className="text-gray-600">{partner.description}</p>
    </motion.div>
  );
};

export default CommercialTraction;