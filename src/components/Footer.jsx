import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1554260570-83dc2f46ef79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHwyeDIlMjBtYXRyaXglMjBzaG93aW5nJTIwYXBwJTIwZGV2ZWxvcG1lbnQlMjBwbGF0Zm9ybXMlMjBwb3NpdGlvbmVkJTIwYnklMjBlYXNlJTIwb2YlMjB1c2UlMjB2cyUyMGNhcGFiaWxpdHklMjB3aXRoJTIwWkFQVCUyMGluJTIwb3B0aW1hbCUyMHBvc2l0aW9ufGVufDB8fHx8MTc0MzA5OTMwOXww&ixlib=rb-4.0.3&q=80&w=1080" 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
                alt="ZAPT Logo" 
                className="h-10 w-10 mr-3"
              />
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Competitive Differentiation</h3>
            <div className="prose prose-lg max-w-none text-gray-700 mb-6">
              <p>While several players are emerging in the AI app creation space, we've established key differentiators:</p>
            </div>
            
            <div className="space-y-4">
              <CompetitiveAdvantage 
                title="AI-First Architecture"
                description="Built from the ground up for AI app generation, not retrofitted from existing platforms"
              />
              
              <CompetitiveAdvantage 
                title="Production-Ready Output"
                description="Apps are immediately deployable with enterprise security, not just prototypes"
              />
              
              <CompetitiveAdvantage 
                title="Complete Technology Stack"
                description="End-to-end solution including backend, database, and infrastructure"
              />
              
              <CompetitiveAdvantage 
                title="Specialized Component Library"
                description="Pre-built components for specific business domains and use cases"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {marketAdvantages.map((advantage, index) => (
            <AdvantageCard 
              key={index} 
              advantage={advantage} 
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CompetitiveAdvantage = ({ title, description }) => {
  return (
    <div className="flex">
      <div className="mr-3 text-green-500 flex-shrink-0">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AdvantageCard = ({ advantage, variants }) => {
  return (
    <motion.div
      className="card p-6"
      variants={variants}
    >
      <div className="flex flex-col h-full">
        <div className="text-4xl mb-4">{advantage.icon}</div>
        <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
        <p className="text-gray-600 flex-grow">{advantage.description}</p>
      </div>
    </motion.div>
  );
};

export default MarketPosition;