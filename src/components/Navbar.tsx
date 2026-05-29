import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import lvLogo from '@/assets/lv_logo_new.png';

export default function Navbar({ currentView = 'home' }: { currentView?: 'home' | 'about' | 'contact' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glass border intensity triggers early on scroll
      setIsScrolled(currentScrollY > 20);

      // Hide or show nav based on scroll direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Handle active link state based on currentView prop
  const navLinks = [
    { name: 'Home', href: '#home', isActive: currentView === 'home' },
    { name: 'About Us', href: '#about', isActive: currentView === 'about' },
    { name: 'Contact Us', href: '#contact', isActive: currentView === 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex justify-center pointer-events-none"
      >
        <div 
          className="w-full max-w-6xl rounded-full px-7 py-1.5 sm:py-2 flex items-center justify-between pointer-events-auto transition-all duration-300 bg-slate-950/95 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className="relative flex items-center justify-center h-8 sm:h-10 py-0.5 transition-all duration-300">
              <img 
                src={lvLogo} 
                alt="LaunchVeda Logo" 
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium transition-all duration-200 hover:text-accent-orange relative py-1 ${
                  link.isActive ? 'text-accent-orange font-semibold' : 'text-slate-300'
                }`}
              >
                {link.name}
                {link.isActive && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-orange rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full font-sans text-[11px] font-semibold uppercase tracking-wider bg-white text-slate-950 hover:bg-accent-orange hover:text-white transition-all duration-300 shadow-md hover:shadow-orange-500/10 active:scale-95"
            >
              Get Quote
            </a>

            {/* Circular Icons */}
            <a
              href="tel:+91-9266983622"
              className="w-8.5 h-8.5 rounded-full flex items-center justify-center border border-white/10 hover:border-accent-orange bg-white/5 hover:bg-white/15 text-slate-300 hover:text-accent-orange transition-all duration-300 relative group"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href="mailto:support@launchveda.com"
              className="w-8.5 h-8.5 rounded-full flex items-center justify-center border border-white/10 hover:border-accent-orange bg-white/5 hover:bg-white/15 text-slate-300 hover:text-accent-orange transition-all duration-300 relative group"
              title="Email Us"
            >
              <Mail className="w-3.5 h-3.5 transition-transform group-hover:rotate-6" />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8.5 h-8.5 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-slate-200 hover:bg-white/15 active:scale-95 transition-all duration-200"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-sans text-3xl font-light hover:text-accent-orange transition-colors ${
                    link.isActive ? 'text-white font-medium' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="h-px bg-white/10 my-4"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 items-center"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full max-w-xs py-4 rounded-full font-sans text-sm font-semibold uppercase tracking-wider bg-white text-slate-950 text-center hover:bg-accent-orange hover:text-white transition-all duration-200"
                >
                  Get Quote
                </a>

                <div className="flex gap-4">
                  <a
                    href="tel:+91-9266983622"
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-slate-200 hover:text-accent-orange hover:bg-white/10 duration-200"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:support@launchveda.com"
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-slate-200 hover:text-accent-orange hover:bg-white/10 duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
