import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Target, 
  Eye, 
  Compass, 
  Activity, 
  Users, 
  Layers, 
  HelpCircle, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

interface AboutUsProps {
  onNavigateToContact: () => void;
  key?: React.Key;
}

export default function AboutUs({ onNavigateToContact }: AboutUsProps) {
  // Stagger wrapper settings for clean entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-28 pb-24 md:pt-36 md:pb-36 relative overflow-hidden bg-[#fafafa]"
    >
      {/* Dynamic graphic backgrounds mirroring the home page with ambient breathing color shifting */}
      <motion.div 
        animate={{
          backgroundColor: ["rgba(254, 215, 170, 0.4)", "rgba(233, 213, 255, 0.35)", "rgba(254, 215, 170, 0.4)"],
          scale: [1, 1.05, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[5%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[130px] pointer-events-none bg-orange-100/40" 
      />
      <motion.div 
        animate={{
          backgroundColor: ["rgba(216, 180, 254, 0.3)", "rgba(254, 205, 211, 0.3)", "rgba(216, 180, 254, 0.3)"],
          scale: [1, 1.08, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[-15%] w-[55vw] h-[55vw] rounded-full blur-[120px] pointer-events-none bg-purple-100/30" 
      />
      <motion.div 
        animate={{
          backgroundColor: ["rgba(255, 237, 213, 0.2)", "rgba(254, 215, 170, 0.25)", "rgba(255, 237, 213, 0.2)"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[5%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[140px] pointer-events-none bg-orange-50/20" 
      />
      
      {/* Subtle modern line network representation overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= 1. THE EPIC HEADLINE ================= */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-accent-orange mb-6 shadow-sm animate-tag-color-flow"
          >
            <Flame className="w-3.5 h-3.5 text-accent-orange animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-slate-800">
              CRAFTING FUTURE LEGACIES
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-light text-4xl sm:text-5.5xl md:text-6.5xl lg:text-7xl text-slate-950 tracking-tight leading-[1.05] mb-6"
          >
            We Exist to Help <br />
            <span className="font-extrabold bg-gradient-to-r from-slate-950 via-accent-orange to-purple-600 bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">
              First-Time Founders Win
            </span>
          </motion.h1>
        </div>

        {/* ================= 2. THE STORY SECTION ================= */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Reality check left panel */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-6 bg-[#f8fafc] text-slate-900 rounded-[3rem] p-8 sm:p-11 relative overflow-hidden shadow-[0_24px_50px_rgba(15,23,42,0.03)] border border-slate-200/80"
            >
              {/* Soft decorative radial light glow in background */}
              <div className="absolute -top-[10%] -right-[10%] w-60 h-60 bg-rose-100/40 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.008)_1px,transparent_1px)] bg-[size:1.6rem_1.6rem] pointer-events-none" />
              
              <span className="font-mono text-[9px] text-rose-600 font-extrabold uppercase tracking-widest bg-rose-50 border border-rose-200/55 px-3.5 py-1.5 rounded-full inline-block mb-6 shadow-sm relative z-10">
                THE FOUNDER REALITY TEST
              </span>

              <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-tight mb-8 leading-tight relative z-10">
                Starting a brand sounds exciting — <br />
                <span className="font-extrabold bg-gradient-to-r from-slate-950 via-rose-600 to-orange-500 bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">until reality hits.</span>
              </h2>

              <div className="space-y-4 font-sans relative z-10 text-left">
                {/* Decision item card */}
                <div className="flex gap-4 items-center bg-white/70 border border-slate-200/50 p-4.5 rounded-2xl hover:border-orange-500/30 hover:bg-white transition-all duration-300 shadow-[0_4px_16px_rgba(15,23,42,0.01)] group">
                  <div className="w-10 h-10 rounded-xl bg-orange-50/80 border border-orange-200/60 flex items-center justify-center text-accent-orange font-mono text-sm font-black flex-shrink-0 relative">
                    <motion.span
                      animate={{ scale: [0.95, 1.15, 0.95] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      !
                    </motion.span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-accent-orange transition-colors">Too many decisions.</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Which materials? Which laboratories? Which logistics?</p>
                  </div>
                </div>

                {/* Unknowns item card */}
                <div className="flex gap-4 items-center bg-white/70 border border-slate-200/50 p-4.5 rounded-2xl hover:border-violet-500/30 hover:bg-white transition-all duration-300 shadow-[0_4px_16px_rgba(15,23,42,0.01)] group">
                  <div className="w-10 h-10 rounded-xl bg-violet-50/80 border border-violet-200/60 flex items-center justify-center text-violet-600 font-mono text-sm font-black flex-shrink-0 relative">
                    <motion.span
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      ?
                    </motion.span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-violet-600 transition-colors">Too many unknowns.</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Hidden quality failures, delayed certifications, unknown costs.</p>
                  </div>
                </div>

                {/* Chances to fail item card */}
                <div className="flex gap-4 items-center bg-white/70 border border-slate-200/50 p-4.5 rounded-2xl hover:border-rose-500/30 hover:bg-white transition-all duration-300 shadow-[0_4px_16px_rgba(15,23,42,0.01)] group">
                  <div className="w-10 h-10 rounded-xl bg-rose-50/80 border border-rose-200/60 flex items-center justify-center text-rose-600 font-mono text-sm font-black flex-shrink-0 relative">
                    <motion.span
                      animate={{ x: [-2, 2, -2] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      ✕
                    </motion.span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">Too many chances to go wrong.</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">One bad container fitment or unstable batch ends the runway.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Symmetrical LaunchVeda explanation right panel */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-6 space-y-6 text-left py-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/50 flex items-center justify-center text-accent-orange shadow-sm">
                <Sparkles className="w-5 h-5 text-accent-orange" />
              </div>

              <h3 className="font-display font-light text-3xl sm:text-4.5xl text-slate-950 tracking-tight leading-[1.1]">
                That’s why <br />
                <span className="font-extrabold bg-gradient-to-r from-slate-950 via-orange-600 to-purple-600 bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">
                  Launchveda was built.
                </span>
              </h3>

              <p className="font-sans text-slate-600 text-base sm:text-[17px] font-light leading-relaxed">
                To simplify the entire journey for first-time founders. We systematically replace chaos with continuous structural execution, integrating branding, supply chains, regulatory clears, and tech pipelines into one sterile partner loop.
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-8 font-mono text-[11px] text-slate-500 uppercase font-bold tracking-wider">
                <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-accent-orange animate-pulse" /> Unified Timeline</span>
                <span className="flex items-center gap-1.5">● 0% Fractional Hassle</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ================= 3. WHAT WE BELIEVE (CORE CARD VALUE CONSTELLATION) ================= */}
        <div className="mb-24 md:mb-32">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-mono text-[10px] tracking-widest text-[#f97316] uppercase font-bold block mb-2">First Principles</span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-slate-950 tracking-tight">What We Believe</h2>
            <p className="font-sans text-slate-500 text-sm font-light mt-2">The strict values guiding our continuous partnership with founders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rule: "01",
                text: "Great brands don’t start with products — they start with clarity",
                description: "Before creating formulas or design packaging, we clarify exact audience fits, safety guidelines, margin spreads, and competitive pathways.",
                glow: "border-orange-200 hover:border-orange-500/40 hover:shadow-orange-500/5"
              },
              {
                rule: "02",
                text: "Execution matters more than ideas",
                description: "Napkins are fragile; real supply chains are hard. High value comes through precision die-cuts, vetted certificates, and reliable production line automation.",
                glow: "border-slate-200 hover:border-purple-500/40 hover:shadow-purple-500/5"
              },
              {
                rule: "03",
                text: "First-time founders need partners, not just service providers",
                description: "Agencies sell hours and slide decks. Co-founding partners align structures of interest, offering pure skin-in-the-game to guarantee real results.",
                glow: "border-slate-200 hover:border-amber-500/40 hover:shadow-amber-500/5"
              }
            ].map((belief, idx) => (
              <motion.div
                id={`belief-card-${idx}`}
                key={idx}
                variants={itemVariants}
                className={`bg-white rounded-[2.5rem] border p-8 sm:p-10 text-left shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300 relative group overflow-hidden ${belief.glow}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100/10 rounded-full blur-[45px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="font-mono text-[9px] font-extrabold px-3 py-1 bg-slate-950 text-white rounded-lg inline-block mb-6 shadow-xs">
                  RULE {belief.rule}
                </span>

                <h3 className="font-display font-bold text-lg sm:text-[19px] text-slate-950 mb-4 leading-snug tracking-tight">
                  {belief.text}
                </h3>
                
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-light mt-2">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= 4. OUR APPROACH ================= */}
        <div className="bg-gradient-to-br from-white via-slate-50/95 to-slate-100 text-slate-900 rounded-[3.5rem] border border-slate-200/80 p-8 sm:p-12 md:p-16 text-left relative overflow-hidden mb-24 md:mb-32 shadow-[0_24px_64px_rgba(15,23,42,0.02)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[10px] tracking-widest text-[#8b5cf6] font-extrabold uppercase block">OPERATIONAL BLUEPRINT</span>
              <h2 className="font-display font-light text-3xl sm:text-4.5xl text-slate-950 tracking-tight leading-none">
                Our Approach
              </h2>
              <div className="h-[3px] w-16 bg-gradient-to-r from-accent-orange via-purple-500 to-accent-orange bg-[size:200%_auto] animate-text-shimmer my-4.5 rounded-full" />
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                We work like your <strong className="font-extrabold text-slate-950 italic">co-founder</strong>, not an agency. Most services watch from a distance and hand over static checklists. We jump in with active accountability.
              </p>
            </motion.div>
 
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-4">
              {[
                {
                  title: "We guide",
                  desc: "Clarifying state-specific regulatory hurdles (CDSCO, FSSAI), setting target-audience cost sheets, and matching optimal premium packaging."
                },
                {
                  title: "We execute",
                  desc: "Sampling labs, testing raw ingredients, drawing complete die-cut design patterns, and engineering custom high-conversion headless storefronts."
                },
                {
                  title: "We stay involved till launch",
                  desc: "Managing factory manufacturing lines, resolving custom bottle fitting discrepancies, and setting up warehouse backend automated handshakes."
                }
              ].map((pill, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4.5 items-start bg-white/70 border border-slate-200/50 p-6 rounded-2xl hover:bg-white hover:border-slate-300/80 transition-all duration-300 shadow-[0_2px_12px_rgba(15,23,42,0.01)] group"
                >
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-accent-orange font-mono text-sm font-extrabold shadow-sm relative z-10 transition-transform duration-300 group-hover:scale-105">
                      <motion.span
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                      >
                        {idx + 1}
                      </motion.span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[15px] sm:text-base text-slate-950 mb-1 group-hover:text-accent-orange transition-colors">
                      {pill.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-[13.5px] text-slate-500 font-light leading-relaxed">
                      {pill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
 
          </div>
        </div>

        {/* ================= 5. MISSION & VISION SPLIT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
          
          <motion.div 
            variants={itemVariants}
            className="bg-white text-slate-900 p-8 sm:p-12 rounded-[2.5rem] text-left border border-slate-200/80 shadow-sm relative overflow-hidden group hover:border-orange-500/20 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/20 rounded-full blur-[35px] pointer-events-none group-hover:scale-150 duration-700 transition-all animate-glow-hue-shift" />
            
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/50 flex items-center justify-center text-accent-orange mb-6">
              <Target className="w-5 h-5 text-accent-orange" />
            </div>
            
            <h3 className="font-display font-bold text-2xl text-slate-950 mb-3 tracking-tight">Our Mission</h3>
            <p className="font-sans text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              To help <strong className="text-slate-950 font-bold decoration-accent-orange underline underline-offset-4 pointer-events-none">1,000+ first-time founders</strong> launch profitable brands in India by providing high margin clarity, beautiful physics-grade designs, and sterile legal structures.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white text-slate-900 p-8 sm:p-12 rounded-[2.5rem] text-left border border-slate-200/80 shadow-sm relative overflow-hidden group hover:border-purple-500/2 w-full transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full blur-[35px] pointer-events-none group-hover:scale-150 duration-700 transition-all animate-glow-hue-shift" />
            
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/50 flex items-center justify-center text-purple-600 mb-6 font-bold">
              <Eye className="w-5 h-5 text-purple-600" />
            </div>

            <h3 className="font-display font-bold text-2xl text-slate-950 mb-3 tracking-tight">Our Vision</h3>
            <p className="font-sans text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              To become <strong className="text-slate-950 font-bold">India’s most trusted brand-launch partner</strong>. We are building the sandbox infrastructure for creative consumer products, ensuring physical ideas materialize with safe software automation standards.
            </p>
          </motion.div>

        </div>

        {/* ================= 6. THE CINEMATIC CTA SCREEN ================= */}
        <motion.div
          id="about-cta-footer-box"
          variants={itemVariants}
          className="p-8 sm:p-12 md:p-16 rounded-[3.5rem] bg-gradient-to-br from-white via-slate-50/90 to-slate-100 text-slate-900 text-center relative overflow-hidden shadow-2xl border border-slate-200/60"
        >
          {/* Subtle colored decorative radial glows for light layout */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-accent-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.012)_1px,transparent_1px)] bg-[size:1.8rem_1.8rem] pointer-events-none" />
          
          <span className="font-mono text-[9px] text-emerald-700 font-extrabold uppercase tracking-widest bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 rounded-full inline-block mb-5 shadow-sm relative z-10">
            ALIGNMENT LOOP FORWARD
          </span>
          
          <h3 className="font-display font-light text-2xl sm:text-4xl lg:text-5xl text-slate-950 mb-6 tracking-tight leading-[1.15] max-w-3xl mx-auto relative z-10">
            If you’re serious about building <span className="font-extrabold bg-gradient-to-r from-accent-orange via-purple-600 to-accent-orange bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer underline decoration-accent-orange/30 decoration-wavy underline-offset-8">something real</span>,<br />
            we’re ready to build it with you.
          </h3>
          
          <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-light mb-10 leading-relaxed relative z-10">
            Eliminate infinite slide deck strategies and disjointed suppliers. Let's design, formulate, and clear your route to market under one secure unified co-founding matrix.
          </p>

          <button
            id="start-about-cta-action"
            onClick={onNavigateToContact}
            className="px-8 py-4.5 sm:px-10 sm:py-5 rounded-full font-sans text-xs font-bold uppercase tracking-widest bg-slate-950 text-white hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-slate-950/10 active:scale-95 group inline-flex items-center gap-2.5 cursor-pointer hover:shadow-2xl hover:scale-101 relative z-10"
          >
            Start My Brand Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}
