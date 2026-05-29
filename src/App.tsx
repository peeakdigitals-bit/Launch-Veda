import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecializationCategories from './components/SpecializationCategories';
import WhatWeDo from './components/WhatWeDo';
import LaunchProcess from './components/LaunchProcess';
import WhyBanegaBrand from './components/WhyBanegaBrand';
import PortfolioShowcase from './components/PortfolioShowcase';
import Marquee from './components/Marquee';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import BrandStatsCounter from './components/BrandStatsCounter';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import TestimonialsSection from './components/TestimonialsSection';
import Lenis from 'lenis';
import SEO from './components/SEO';

export default function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Initialize Lenis smooth scroll with optimal inertia
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fast start, smooth drag drop ease
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      infinite: false,
    });

    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  const [currentView, setCurrentView] = useState<'home' | 'about' | 'contact'>('home');

  // React to viewport hash changes smoothly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
        if (hash && hash !== '#home') {
          // Softly scroll to direct target selector if present
          const element = document.querySelector(hash);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Trigger on initial boot up

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Smooth lerp follow effect
    const tick = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX - 10}px, ${currentY - 10}px, 0)`;
      }
      requestAnimationFrame(tick);
    };

    const animId = requestAnimationFrame(tick);

    // Interactive button expansions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.group')
      ) {
        cursor.classList.add('scale-225', 'bg-accent-orange/15', 'border-accent-orange');
      } else {
        cursor.classList.remove('scale-225', 'bg-accent-orange/15', 'border-accent-orange');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafafc] overflow-hidden bg-mesh">
      {/* Dynamic SEO Meta & Schema Markup Manager */}
      <SEO currentView={currentView} />

      {/* Interactive particle background system */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <ParticleBackground />
      </div>

      {/* Dynamic grain film overlay to simulate premium cinematic camera look */}
      <div className="grain-overlay" />

      {/* Luxury cursor ring (hidden on touch device screens) */}
      <div 
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full border border-slate-900 pointer-events-none z-50 transition-all duration-300 ease-out bg-slate-900/5 shadow-[0_0_8px_rgba(0,0,0,0.05)]"
        style={{ transform: 'translate3d(-20px, -20px, 0)' }}
      />

      {/* Floating Header Navbar */}
      <Navbar currentView={currentView} />

      {/* Main Sections Stack */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Section 1: Hero Scene */}
              <Hero />

              {/* Unique Interactive Stats Showcase */}
              <BrandStatsCounter />

              {/* Section 1.5: Specialized Industries & Categories */}
              <SpecializationCategories />

              {/* What We Do - Real Business Builders */}
              <WhatWeDo />

              {/* Brand Development Iterative Launch Process Stack */}
              <LaunchProcess />

              {/* Section 1.9: Why BanegaBrand Core Values & Powerful Call-to-Actions */}
              <WhyBanegaBrand />

              {/* Section 2: Portfolio Gallery Showcase Curve layout */}
              <PortfolioShowcase />

              {/* Section 3: Infinite Corporate horizontal marquee banner */}
              <Marquee />

              {/* FAQ Section */}
              <FaqSection />

              {/* Founders Testimonials Section */}
              <TestimonialsSection />

              {/* CTA Section */}
              <CtaSection />

              {/* Let's Build Your Brand Contact Section */}
              <ContactUs onHomePage={true} />
            </motion.div>
          )}

          {currentView === 'about' && (
            <AboutUs key="about-view" onNavigateToContact={() => { window.location.hash = '#contact'; }} />
          )}

          {currentView === 'contact' && (
            <ContactUs key="contact-view" />
          )}
        </AnimatePresence>
      </main>

      {/* Footer Segment */}
      <Footer />
    </div>
  );
}
