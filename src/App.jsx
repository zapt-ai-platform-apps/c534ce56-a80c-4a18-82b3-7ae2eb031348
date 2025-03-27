import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import KeyMetrics from '@/components/KeyMetrics';
import GrowthMetrics from '@/components/GrowthMetrics';
import ProductUpdates from '@/components/ProductUpdates';
import CommercialTraction from '@/components/CommercialTraction';
import ExampleApps from '@/components/ExampleApps';
import FutureRoadmap from '@/components/FutureRoadmap';
import MarketPosition from '@/components/MarketPosition';
import Footer from '@/components/Footer';
import ZaptBadge from '@/components/ZaptBadge';

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
    <div className="min-h-screen flex flex-col bg-light">
      <Navbar />
      
      <main className="flex-grow">
        <Header />
        <KeyMetrics />
        <GrowthMetrics />
        <ProductUpdates />
        <CommercialTraction />
        <ExampleApps />
        <FutureRoadmap />
        <MarketPosition />
      </main>
      
      <Footer />
      <ZaptBadge />
    </div>
  );
}