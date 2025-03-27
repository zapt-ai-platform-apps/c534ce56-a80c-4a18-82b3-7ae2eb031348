import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const metrics = [
  {
    title: "Apps Created",
    current: "1,240",
    growth: "+42%",
    period: "past 90 days",
    color: "from-primary-400 to-primary-600"
  },
  {
    title: "Monthly Revenue",
    current: "$45K",
    growth: "+22%",
    period: "month-over-month",
    color: "from-secondary-400 to-secondary-600"
  },
  {
    title: "Active Users",
    current: "520",
    growth: "+28%",
    period: "past quarter",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    title: "Time to Deploy",
    current: "1.2m",
    growth: "-65%",
    period: "improvement",
    color: "from-amber-400 to-amber-600",
    isImprovement: true
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
    <section className="section bg-white" id="metrics">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Growth Metrics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key performance indicators showing our platform's growth trajectory
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">User Growth Trajectory</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <img src="https://images.unsplash.com/photo-1650959828226-f9d53a7c1f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxsaW5lJTIwY2hhcnQlMjBzaG93aW5nJTIwZXhwb25lbnRpYWwlMjB1c2VyJTIwZ3Jvd3RoJTIwb3ZlciUyMDYlMjBtb250aHMlMjB3aXRoJTIwYW5ub3RhdGlvbnMlMjBmb3IlMjBrZXklMjBtaWxlc3RvbmVzfGVufDB8fHx8MTc0MzA5OTg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="User growth chart showing upward trend" 
                className="w-full h-64 object-contain"
                data-image-request="line chart showing exponential user growth over 6 months with annotations for key milestones"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Acquisition Channels</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Direct</span>
                    <span className="font-medium">38%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Partnerships</span>
                    <span className="font-medium">27%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Organic Search</span>
                    <span className="font-medium">22%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Social Media</span>
                    <span className="font-medium">13%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">User Retention</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">30-day</span>
                    <span className="font-medium">86%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">60-day</span>
                    <span className="font-medium">78%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">90-day</span>
                    <span className="font-medium">72%</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Revenue Performance</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <img src="https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxiYXIlMjBjaGFydCUyMHNob3dpbmclMjBtb250aGx5JTIwcmV2ZW51ZSUyMGdyb3d0aCUyMHdpdGglMjB0cmVuZCUyMGxpbmUlMjBhbmQlMjBmb3JlY2FzdCUyMGZvciUyMG5leHQlMjBxdWFydGVyfGVufDB8fHx8MTc0MzA5OTg3OHww&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                alt="Revenue growth chart" 
                className="w-full h-64 object-contain"
                data-image-request="bar chart showing monthly revenue growth with trend line and forecast for next quarter"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Revenue Breakdown</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Platform Licenses</span>
                    <span className="font-medium">65%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Usage Billing</span>
                    <span className="font-medium">22%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Support Packages</span>
                    <span className="font-medium">13%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Financial Metrics</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Gross Margin</span>
                    <span className="font-medium">82%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">CAC Payback</span>
                    <span className="font-medium">5.2 mo</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">LTV/CAC Ratio</span>
                    <span className="font-medium">4.8x</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ metric, variants }) => {
  return (
    <motion.div
      className="card p-6 flex flex-col h-full"
      variants={variants}
    >
      <h3 className="text-lg font-medium text-gray-600 mb-1">{metric.title}</h3>
      <div className="text-3xl sm:text-4xl font-bold mb-2 stat-counter">{metric.current}</div>
      <div className="flex items-center mt-auto">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${metric.isImprovement ? 'bg-green-100 text-green-800' : 'bg-primary-100 text-primary-700'}`}>
          {metric.growth}
        </span>
        <span className="text-xs text-gray-500 ml-2">{metric.period}</span>
      </div>
      <div className="mt-4 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${metric.color}`} style={{ width: '80%' }}></div>
      </div>
    </motion.div>
  );
};

export default GrowthMetrics;