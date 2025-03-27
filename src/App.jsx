import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import GrowthMetrics from '@/components/GrowthMetrics';
import ProductProgress from '@/components/ProductProgress';
import CommercialTraction from '@/components/CommercialTraction';
import AppShowcase from '@/components/AppShowcase';
import ZaptBadge from '@/components/ZaptBadge';
import { motion } from 'framer-motion';

export default function App() {
  // Initialize animation for elements with the animate-on-scroll class
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col luxury-bg text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Header />
        <ExecutiveSummary />
        <ProductProgress />
        <GrowthMetrics />
        <CommercialTraction />
        <AppShowcase />
        
        <div className="py-16 flex justify-center">
          <motion.a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block premium-button px-6 py-3 rounded-full text-white font-medium cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            Ready to revolutionize app creation! 🚀
          </motion.a>
        </div>
      </main>
      
      <ZaptBadge />
    </div>
  );
}