import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMHNob3dpbmclMjB1c2VyJTIwZ3Jvd3RoJTIwY2hhcnQlMjB3aXRoJTIwdXB3YXJkJTIwdHJlbmQlMjBvdmVyJTIwNCUyMHF1YXJ0ZXJzfGVufDB8fHx8MTc0MzA5ODE5OHww&ixlib=rb-4.0.3&q=80&w=1080" 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
            alt="ZAPT Logo" 
            className="h-8 w-8 mr-2"
          />
            </div>
            <div className="mt-4 text-gray-600">
              <p>Monthly active users have grown by 168% over the past three quarters, with the strongest growth coming from enterprise customers.</p>
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Revenue Growth</h3>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden border border-gray-100">
              <img src="https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8YnVzaW5lc3MlMjBkYXNoYm9hcmQlMjBzaG93aW5nJTIwcXVhcnRlcmx5JTIwcmV2ZW51ZSUyMGdyb3d0aCUyMHdpdGglMjBiYXIlMjBjaGFydCUyMGFuZCUyMHVwd2FyZCUyMHRyZW5kJTIwbGluZXxlbnwwfHx8fDE3NDMwOTgxOTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Revenue growth chart showing quarterly increases"
                className="w-full h-full object-cover"
                data-image-request="business dashboard showing quarterly revenue growth with bar chart and upward trend line"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p>Monthly recurring revenue has seen consistent growth with a 28% increase quarter-over-quarter, driven by higher value enterprise plans and feature upsells.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3">Apps Created</h3>
            <div className="text-3xl font-bold text-primary-500 mb-2">683</div>
            <p className="text-gray-600">Total apps built on our platform</p>
            <div className="mt-3 flex items-center text-green-600 text-sm font-medium">
              <span className="mr-1">↑</span>
              54% increase from last quarter
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-3">User Satisfaction</h3>
            <div className="text-3xl font-bold text-primary-500 mb-2">94%</div>
            <p className="text-gray-600">Customer satisfaction score</p>
            <div className="mt-3 flex items-center text-green-600 text-sm font-medium">
              <span className="mr-1">↑</span>
              8% increase from last quarter
            </div>
          </motion.div>

          <motion.div
            className="card p-6"
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-3">Conversion Rate</h3>
            <div className="text-3xl font-bold text-primary-500 mb-2">12.8%</div>
            <p className="text-gray-600">Free to paid conversion</p>
            <div className="mt-3 flex items-center text-green-600 text-sm font-medium">
              <span className="mr-1">↑</span>
              3.2% increase from last quarter
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;