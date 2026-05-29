import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Crown, Leaf, HeartPulse, Sparkle } from 'lucide-react';

import perfumeImg from '@/category/Perfume.png';
import ayurvedaImg from '@/category/Ayurveda.png';
import supplementImg from '@/category/supplement.png';
import cosmeticsImg from '@/category/Cosmetics.png';

interface CategoryItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  imageUrl: string;
  icon: React.ComponentType<any>;
  accentColor: string;
  description: string;
}

export default function SpecializationCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories: CategoryItem[] = [
    {
      id: "perfume",
      number: "01",
      title: "Luxury Perfumes",
      tagline: "SENSORY EXCLUSIVITY",
      imageUrl: perfumeImg,
      icon: Crown,
      accentColor: "#f97316", // Amber Orange
      description: "Custom bottle blueprint designs, high-end outer casing engineering, and positioning for modern fine fragrance houses."
    },
    {
      id: "ayurveda",
      number: "02",
      title: "Modern Ayurveda",
      tagline: "ANCIENT ALCHEMY REFINED",
      imageUrl: ayurvedaImg,
      icon: Leaf,
      accentColor: "#10b981", // Emerald Green
      description: "Earthy color systems, natural paper textures, and minimal contemporary aesthetics for apothecary & wellness brands."
    },
    {
      id: "nutra",
      number: "03",
      title: "Premium Nutraceuticals",
      tagline: "SCIENCE-BACKED FORMULAS",
      imageUrl: supplementImg,
      icon: HeartPulse,
      accentColor: "#8b5cf6", // Violet Glow
      description: "High-precision container blueprints, authoritative clinical visual guides, and sleek matte tincture/vial bottle treatments."
    },
    {
      id: "skincare",
      number: "04",
      title: "Cosmetics & Skincare",
      tagline: "HIGH-CONTRAST DERMATOLOGY",
      imageUrl: cosmeticsImg,
      icon: Sparkle,
      accentColor: "#ec4899", // Rose Glow
      description: "Fluid messaging frameworks, premium soft-touch custom tubes, and elegant layout grids that instantly stand out on shelves."
    }
  ];

  const isAnyHovered = hoveredId !== null;

  return (
    <section 
      id="specializations"
      className="bg-[#fcfcfe]/60 backdrop-blur-md py-24 md:py-32 relative overflow-hidden select-none border-t border-b border-slate-200/50 z-30"
    >
      {/* Structural subtle premium ambient lights */}
      <div className="absolute top-[20%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-orange-100/35 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-indigo-100/25 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay for tech alignment representation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.012)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-250/50 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-emerald-700 uppercase font-bold">
                VERTICAL SPECIALIZATION
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-none"
            >
              Mastery of the <span className="font-semibold text-slate-800">Four Pillars</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-slate-500 text-sm sm:text-base max-w-md font-light leading-relaxed text-left md:text-right"
          >
            We design high-fidelity visual assets, formulate packaging blueprints, and scale technical storefronts targeted specifically to direct-to-consumer sectors.
          </motion.p>
        </div>

        {/* Dynamic 4-Image Interactive Motion Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-[750px] md:h-[480px] w-full mb-16 items-stretch">
          {categories.map((cat, idx) => {
            const isHovered = hoveredId === cat.id;
            
            // Dynamic flex ratios for beautiful expanding animation on desktop hover
            const flexValue = isAnyHovered ? (isHovered ? 2.4 : 0.53) : 1;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{ 
                  flex: flexValue,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 18, 
                  mass: 0.8,
                  opacity: { duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }
                }}
                style={{ flex: 1 }} // Fallback
                className="group relative rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 cursor-pointer border border-slate-200/50 bg-slate-50 transition-shadow duration-500 hover:shadow-2xl hover:border-slate-300/80"
              >
                {/* 100% visible product image with elegant container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.img
                    src={cat.imageUrl}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    animate={{
                      scale: isHovered ? 1.04 : 1.0,
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover opacity-100 brightness-100 contrast-100"
                  />
                  {/* Subtle bottom gradient to ensure text readability without dimming the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Bottom Content: Title only */}
                <div className="relative z-10 text-left text-white select-none">
                  <h3 className="font-display font-medium text-2xl md:text-3xl tracking-tight leading-tight">
                    {cat.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-Impact Master Call to Action (CTA) with Color Border Motion in Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-[1.5px] overflow-hidden shadow-2xl shadow-orange-500/5 mt-6"
        >
          {/* Color Border Animation Layer */}
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-r from-orange-400 via-amber-400 to-pink-500"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              originX: 0.5,
              originY: 0.5,
              scale: 1.7,
            }}
          />

          {/* Internal Card - White / Light Theme Body */}
          <div className="relative z-10 w-full bg-gradient-to-br from-white via-slate-50/90 to-orange-50/20 text-slate-950 rounded-[2.4rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Soft Ambient Internal Glow for Warm Elegance */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-orange-100/30 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-emerald-100/20 blur-[100px] pointer-events-none" />
            
            {/* Fine technical line blueprint pattern in light gray */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-xl text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-250 text-emerald-800 mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[9px] tracking-widest uppercase font-bold">
                  CO-FOUNDER INCUBATION PROTOCOL
                </span>
              </div>
              
              <h3 className="font-display font-light text-2xl sm:text-4xl text-slate-950 tracking-tight leading-tight mb-4">
                Ready to engineer your brand&apos;s <span className="font-semibold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">physical presence?</span>
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                We align as dedicated, equity-backed co-founders. We design proprietary bottle molds, engineer hyper-optimized online storefronts, and guide supply constraints to prepare you for global retail.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">PROTOTYPING MATRIX</span>
                  <span className="block text-sm font-semibold text-slate-900">Custom 3D CAD Mold Spec</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">LOGISTICS PREPARATION</span>
                  <span className="block text-sm font-semibold text-slate-900">Full MOQ & Formulation Clearing</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col items-center gap-6 shrink-0 w-full lg:w-auto">
              {/* Embedded Luxury Render Card mock in Light Theme Accent */}
              <div className="w-full sm:w-[260px] bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3 shadow-md">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=300&auto=format&fit=crop" 
                    alt="Glass prototyping preview"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">MOLD DRAFT ATELIER</span>
                  <span className="block text-[12px] font-semibold text-slate-900 truncate max-w-[150px]">Veda Lux Vessel v2</span>
                  <span className="block text-[9px] text-orange-600 font-semibold">PRE-RENDER ACTIVE</span>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-950 text-white px-8 py-4 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-widest transition-all hover:bg-slate-900 hover:shadow-[0_12px_45px_rgba(249,115,22,0.25)] group w-full text-center"
              >
                Request Consultation
                <ArrowUpRight className="w-4.5 h-4.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}


