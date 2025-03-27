import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import ExampleApps from '@/components/ExampleApps';
import HowItWorks from '@/components/HowItWorks';
import YoutubeParallel from '@/components/YoutubeParallel';
import AppStats from '@/components/AppStats';
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
        <YoutubeParallel />
        <ExampleApps />
        <HowItWorks />
        <AppStats />
        <MarketPosition />
      </main>
      
      <Footer />
      <ZaptBadge />
    </div>
  );
}