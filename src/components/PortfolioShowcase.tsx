import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layers3, ArrowUpRight } from 'lucide-react';

import p7 from '@/7.png';
import p8 from '@/8.png';
import p9 from '@/9.png';
import p10 from '@/10.png';
import p11 from '@/11.png';

interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  imageUrl: string;
  accentColor: string;
  description: string;
}

export default function PortfolioShowcase() {

  // Elite modern luxury portfolio items matching LaunchVeda aesthetic, utilizing the uploaded custom designs
  const projects: ProjectItem[] = [
    {
      id: "project-7",
      badge: "Restorative Mist",
      title: "Citrus Copper-Stilled Spray",
      imageUrl: p7,
      accentColor: "#2d44d0",
      description: "Refreshing Pure Hydrosol"
    },
    {
      id: "project-8",
      badge: "Essential Oil",
      title: "Therapeutic Sandal Essence",
      imageUrl: p8,
      accentColor: "#8b5cf6",
      description: "Ancient Ayurveda Extraction"
    },
    {
      id: "project-9",
      badge: "Premium Dew",
      title: "Royal Crimson Rose Water",
      imageUrl: p9,
      accentColor: "#5c68f6",
      description: "Pure Flower Petal Distillate"
    },
    {
      id: "project-10",
      badge: "Ayurvedic Balm",
      title: "Almond Seed Rejuvenator",
      imageUrl: p10,
      accentColor: "#3b82f6",
      description: "Clinical Anti-Oxidant Complex"
    },
    {
      id: "project-11",
      badge: "Golden Nectar",
      title: "Saffron Ultra Face Oil",
      imageUrl: p11,
      accentColor: "#2d44d0",
      description: "Pure Kashmiri Saffron Glow"
    }
  ];

  // Doubling elements to construct seamless visual looping
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section 
      id="services" 
      className="bg-[#fafafc] py-24 md:py-36 overflow-hidden relative select-none border-b border-slate-200/50"
    >
      {/* Dynamic ambient lights inside layout workspace using logo colors */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2d44d0]/2 blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#8b5cf6]/3 blur-[140px] pointer-events-none" />

      {/* Structural grid line pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,68,208,0.006)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(45,68,208,0.006)_1.5px,transparent_1.5px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Category Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-5 animate-bounce-slow"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-[#ec4899] uppercase font-bold">
            BEHIND THE FORMULATIONS
          </span>
        </motion.div>

        {/* Primary Header */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight mb-5 max-w-4xl mx-auto leading-[1.05]"
        >
          Curious What Else We <span className="font-semibold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient-text">Power-Launch?</span>
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-slate-500 text-sm sm:text-[17px] max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Explore the bespoke premium brand identities, clinical ayurvedic formulations, and ultra-high tactile packaging designs we engineer as your co-founders.
        </motion.p>

        {/* Core CTA See More Portfolio Items */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-20 md:mb-24"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-white hover:bg-[#fafafc] border border-slate-200/85 text-slate-900 rounded-full pl-6 pr-2 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-orange-500/10 group"
          >
            <span>Launch Your Concept</span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* INFINITE LOOPING MARQUEE ARENA (LARGER IMAGES & CONTINUOUS AUTOSCROLL) */}
      <div 
        className="w-full relative py-6 overflow-visible select-none cursor-grab active:cursor-grabbing border-y border-slate-200/30 bg-white/70 backdrop-blur-sm shadow-inner"
        style={{ perspective: '1600px' }}
      >
        {/* Soft Left and Right Vignette Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-[5%] sm:w-[15%] bg-gradient-to-r from-[#fafafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[5%] sm:w-[15%] bg-gradient-to-l from-[#fafafc] to-transparent z-10 pointer-events-none" />

        {/* Seamless Scroller Loop */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-scroller flex gap-6 md:gap-8 py-4">
            {duplicatedProjects.map((proj, idx) => {
              return (
                <div
                  key={`${proj.id}-${idx}`}
                  className="flex-shrink-0 w-[240px] xs:w-[280px] sm:w-[320px] md:w-[360px] flex flex-col group text-left"
                >
                  {/* Photo container with 100% opacity, no overlays, only image with scale effect */}
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 relative transition-all duration-300">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-[700ms] ease-in-out group-hover:scale-[1.08] select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Edge border indicator that shines softly on hover */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] border-2 pointer-events-none z-30"
                      style={{ borderColor: proj.accentColor }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Supporting details: Standard co-founder alignment milestones */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto mt-20 text-center border-t border-slate-200/50 pt-16">
          
          {[
            {
              num: "01",
              title: "Active Formulations",
              desc: "ISO cleanroom chemist alignment",
              badgeStyle: "bg-orange-50 text-orange-600 group-hover:bg-orange-500 hover:scale-105"
            },
            {
              num: "02",
              title: "Tactile Vesellation",
              desc: "Proprietary 3D mold CADs",
              badgeStyle: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 hover:scale-105"
            },
            {
              num: "03",
              title: "Checkout Speedways",
              desc: "Headless commerce under 500ms",
              badgeStyle: "bg-pink-50 text-pink-600 group-hover:bg-pink-500 hover:scale-105"
            },
            {
              num: "04",
              title: "Exclusive MOQ Locks",
              desc: "Negotiated starting batch entries",
              badgeStyle: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 hover:scale-105"
            }
          ].map((ms, mIdx) => (
            <div key={mIdx} className="flex flex-col items-center group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-xs mb-4 border border-transparent transition-all duration-300 group-hover:text-white ${ms.badgeStyle}`}>
                {ms.num}
              </div>
              <h4 className="font-sans text-sm sm:text-base font-semibold text-slate-900 tracking-tight mb-1">
                {ms.title}
              </h4>
              <p className="font-sans text-[11px] text-slate-500 font-light max-w-[200px]">
                {ms.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Custom Styles for seamless CPU-accelerated Marquee scrolling and hover stopping */}
      <style>{`
        @keyframes marquee-wheel {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
        .animate-marquee-scroller {
          display: flex;
          width: max-content;
          animation: marquee-wheel 45s linear infinite;
          will-change: transform;
        }
        .w-full:hover .animate-marquee-scroller {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

