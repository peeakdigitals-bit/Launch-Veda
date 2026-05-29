import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section 
      id="cta-section" 
      className="relative py-16 md:py-24 overflow-hidden bg-slate-950 text-white select-none z-10"
    >
      {/* Dynamic warm luxurious atmospheric light glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-orange-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      {/* Grid Alignment Blueprint Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Sparkle Tag */}
        <div className="mb-6 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-mono text-[9px] tracking-widest text-orange-350 uppercase font-bold">
              GET STARTED TODAY
            </span>
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-light text-4xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto"
        >
          Ready To Launch Your Brand <span className="font-semibold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">The Right Way?</span>
        </motion.h2>

        {/* Description / Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 font-sans text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed"
        >
          Let’s makes your brand unforgettable.
        </motion.p>

        {/* CTA Buttons Grid / Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Main Primary Button (Book Strategy Call) */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-[0_4px_20px_rgba(249,115,22,0.2)] hover:shadow-[0_10px_30px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            <Calendar className="w-4 h-4 text-orange-200 group-hover:scale-105 transition-transform" />
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-orange-200 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Outline/Glass Button (Start Your Project) */}
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-medium text-xs sm:text-sm tracking-wide bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            <span>Start Your Project</span>
            <span className="text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all duration-300">→</span>
          </a>
        </motion.div>

        {/* Subtle decorative fine ring border under/behind buttons */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/[0.015] pointer-events-none select-none" />

      </div>
    </section>
  );
}
