import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star, ShieldCheck, Cpu, Zap } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle subtle high-fidelity interactive camera movement on background image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Calculate offset from center (-0.5 to 0.5)
      const xOffset = (clientX / window.innerWidth) - 0.5;
      const yOffset = (clientY / window.innerHeight) - 0.5;

      // Animate background image scale/rotation/translation using gsap for peak smoothness
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          x: xOffset * 35,
          y: yOffset * 35,
          rotationY: xOffset * 3,
          rotationX: -yOffset * 3,
          duration: 1.8,
          ease: 'power2.out',
        });
      }

      // Track relative coordinates for customized ambient hover light
      setMousePosition({
        x: (clientX / window.innerWidth) * 100,
        y: (clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const headlineWords = "We Turn Your Idea Into a Living Brand.".split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-transparent select-none text-slate-950 py-24 sm:py-32"
      style={{ perspective: '1000px' }}
    >
      {/* FLOATING COLORS ANIMATED BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gradient-to-tr from-slate-50 via-white to-orange-50/20">
        {/* Blob 1 - Warm Orange */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -90, 50, 0],
            scale: [1, 1.25, 0.85, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-[45vw] h-[45vw] rounded-full bg-orange-100/40 blur-[130px]"
        />
        {/* Blob 2 - Delicate Pink */}
        <motion.div
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -right-20 w-[50vw] h-[50vw] rounded-full bg-pink-100/35 blur-[140px]"
        />
        {/* Blob 3 - Fresh Emerald */}
        <motion.div
          animate={{
            x: [0, 100, -80, 0],
            y: [0, 70, -70, 0],
            scale: [1, 0.85, 1.2, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-emerald-100/25 blur-[120px]"
        />
        {/* Blob 4 - Radiant Amber */}
        <motion.div
          animate={{
            x: [0, -50, 60, 0],
            y: [0, -80, 90, 0],
            scale: [1, 1.1, 0.85, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-orange-100/30 blur-[110px]"
        />
      </div>

      {/* DYNAMIC AMBIENT SPOTLIGHT FOLLOWING MOUSE LOCATION */}
      <div 
        className="absolute pointer-events-none w-[45vw] h-[45vw] rounded-full blur-[140px] opacity-25 mix-blend-screen z-8 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(249, 115, 22, 0.15) 45%, rgba(16, 185, 129, 0.05) 75%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* SUBTLE SYSTEM SCHEMATIC GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none opacity-40 z-8" />

      {/* CORE BRANDING CONTENT - PERFECTLY CENTERED */}
      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* PREMIUM TAG WITH GLOWING LIVE DOT BEACON */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 bg-slate-900/5 backdrop-blur-md border border-slate-900/10 px-4 py-2 rounded-full mb-8 relative group hover:border-slate-900/20 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] tracking-widest text-slate-800 uppercase font-semibold">
            India's Elite Launch Architecture
          </span>
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        </motion.div>

        {/* ULTRA-POLISHED DISPLAY HEADLINE */}
        <h1 className="font-display font-light text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] text-slate-950 tracking-tight max-w-3xl mb-6">
          {headlineWords.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-3 sm:mr-4 pb-2 md:pb-3">
              <motion.span
                className="inline-block origin-bottom font-light"
                initial={{ y: "100%", filter: "blur(8px)", rotate: 1.5 }}
                animate={{ y: 0, filter: "blur(0px)", rotate: 0 }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {word === "Living" || word === "Brand." ? (
                  <span className="font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent shadow-sm">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* REASSURING EXPLANATORY CAPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-slate-800 text-sm sm:text-base md:text-[17px] font-normal mb-8 max-w-xl leading-normal"
        >
          We simplify the journey for first-time founders. We align as co-founders to map custom chemical formulas, design premium glass-vial packaging, and engineer rapid commerce storefronts.
        </motion.p>

        {/* PREMIUM ACTION TRIGGERS IN CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto relative px-8 py-4.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest bg-slate-950 text-white overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-orange-500/20 active:scale-97 text-center"
          >
            <div className="absolute inset-0 bg-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-200">
              Start My Brand Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <a 
            href="#what-we-do" 
            className="w-full sm:w-auto text-slate-800 hover:text-slate-950 text-xs uppercase tracking-widest font-mono py-4 px-6 border border-slate-900/15 bg-slate-900/5 hover:bg-white/10 hover:border-slate-900/25 rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <span>Why LaunchVeda</span>
            <span className="text-[10px] text-emerald-400 animate-pulse">●</span>
          </a>
        </motion.div>

        {/* SUPPORTING METRIC CARDS FOR ULTIMATE VISUAL POLISH */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl mt-16 pt-12 border-t border-slate-900/15"
        >
          {[
            { value: "01", label: "Co-Founder Mindset", subtitle: "We align to minimize error", colorClass: "text-orange-600" },
            { value: "100%", label: "Secure Formulations", subtitle: "Premium labs & certification", colorClass: "text-orange-600" },
            { value: "500ms", label: "Commerce Speed", subtitle: "Lightning conversion speeds", colorClass: "text-orange-600" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <span className={`block font-display font-black text-xl sm:text-2xl lg:text-3xl tracking-tight group-hover:text-orange-500 transition-colors duration-300 ${stat.colorClass}`}>
                {stat.value}
              </span>
              <span className="block font-sans text-[11px] sm:text-xs font-semibold text-slate-800 uppercase tracking-widest mt-1">
                {stat.label}
              </span>
              <span className="hidden sm:block font-sans text-[9px] text-slate-500 font-medium mt-0.5">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* CONTINUOUS DOWNWARD DECORATIVE BEACON */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity z-10">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-400 font-medium">Scroll to explore</span>
        <div className="w-[1.5px] h-9 bg-gradient-to-b from-accent-orange to-transparent relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-4 bg-white/60"
          />
        </div>
      </div>
    </section>
  );
}
