import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ExampleApps from '@/components/ExampleApps';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import VisionSection from '@/components/VisionSection';
import AppUsageStats from '@/components/AppUsageStats';
import DemoApps from '@/components/DemoApps';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ZaptBadge from '@/components/ZaptBadge';
import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

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
        <Hero />
        <ExampleApps />
        <Benefits />
        <HowItWorks />
        <VisionSection />
        <AppUsageStats />
        <DemoApps />
        <CallToAction />
      </main>
      
      <Footer />
      <ZaptBadge />
    </div>
  );
}