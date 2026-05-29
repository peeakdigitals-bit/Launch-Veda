import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Beaker,
  Package,
  Globe,
  Rocket,
  Activity,
  ChevronRight
} from 'lucide-react';

const stage1 = '/stage1.png';
const stage2 = '/stage2.png';
const stage3 = '/stage3.png';
const stage4 = '/stage4.png';
const stage5 = '/stage5.png';
const stage6 = '/stage6.png';

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  icon: React.ComponentType<any>;
  imageUrl: string;
  metrics: { label: string; value: string }[];
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: 'Idea Clarity',
    subtitle: 'Brainstorming & Feasibility Study',
    description: 'We turn vague aspirations into rock-solid brand blueprints. Evaluating raw ingredient synergy, manufacturing compliance, and regulatory pathways so you build on stable soil.',
    badge: 'STAGE 01',
    color: '#3b82f6', // blue
    icon: Lightbulb,
    imageUrl: stage1,
    metrics: [
      { label: 'DELIVERABLE', value: 'Feasibility Blueprint' },
      { label: 'TIMELINE', value: 'Week 1-2' }
    ]
  },
  {
    id: 2,
    title: 'Market Positioning',
    subtitle: 'Strategic Competitive Moat',
    description: 'We conduct a deep-dive analysis of your competition to lock in a premium pricing structure and luxury messaging hook that makes traditional brands look plain.',
    badge: 'STAGE 02',
    color: '#8b5cf6', // purple
    icon: Target,
    imageUrl: stage2,
    metrics: [
      { label: 'DELIVERABLE', value: 'Market Positioning Moat' },
      { label: 'TIMELINE', value: 'Week 2-3' }
    ]
  },
  {
    id: 3,
    title: 'Product Development',
    subtitle: 'ISO Lab Formulations',
    description: 'Working hands-on with premier ISO-certified laboratories, we lead custom formulation trials and ship high-end sensory product prototypes directly to your door.',
    badge: 'STAGE 03',
    color: '#ec4899', // pink
    icon: Beaker,
    imageUrl: stage3,
    metrics: [
      { label: 'LAB CLEARANCE', value: 'FDA/ISO Standard' },
      { label: 'TIMELINE', value: 'Week 4-7' }
    ]
  },
  {
    id: 4,
    title: 'Branding & Packaging',
    subtitle: 'Bespoke Visual & Tactile Identity',
    description: 'We design mesmerizing physical boxes, bottles, and sensory tactile labels styled with custom micro-embossing and gold foil stamps that command instant attention.',
    badge: 'STAGE 04',
    color: '#f97316', // orange
    icon: Package,
    imageUrl: stage4,
    metrics: [
      { label: 'SPECIFICATION', value: '3D Render & CAD File' },
      { label: 'TIMELINE', value: 'Week 8-10' }
    ]
  },
  {
    id: 5,
    title: 'Website & Store Setup',
    subtitle: 'Blazing Fast E-Commerce Setup',
    description: 'Our engineering team constructs pixel-perfect, high-converting digital checkout funnels on custom Shopify frameworks and syncs key luxury online marketplaces.',
    badge: 'STAGE 05',
    color: '#10b981', // emerald
    icon: Globe,
    imageUrl: stage5,
    metrics: [
      { label: 'PLATFORM', value: 'Headless Shopify' },
      { label: 'TIMELINE', value: 'Week 11-12' }
    ]
  },
  {
    id: 6,
    title: 'Launch Strategy',
    subtitle: 'Co-Founder Scale Playbook',
    description: 'We deploy an ultra-targeted creator seed strategy, laser ad optimization funnels, and organic amplification loops to build persistent brand momentum.',
    badge: 'STAGE 06',
    color: '#f59e0b', // amber
    icon: Rocket,
    imageUrl: stage6,
    metrics: [
      { label: 'LAUNCH FUNNEL', value: 'Creator & Laser Ad' },
      { label: 'TIMELINE', value: 'Week 13+' }
    ]
  }
];

export default function LaunchProcess() {
  const [activeStepId, setActiveStepId] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-rotate steps every 6 seconds unless paused
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveStepId((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0];

  return (
    <section 
      id="launch-process"
      className="bg-[#fafafc] relative overflow-visible select-none border-b border-slate-200/50 py-16 sm:py-24"
    >
      {/* Brand aesthetic background lighting elements */}
      <div className="absolute top-[15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#2d44d0]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#8b5cf6]/4 blur-[140px] pointer-events-none" />
      
      {/* Soft structural blueprint grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,68,208,0.008)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(45,68,208,0.008)_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* Main Process Interactive Area */}
      <div className="max-w-6xl mx-auto px-6 relative z-25 mb-16 md:mb-24">
        
        {/* Header Block with luxurious typography and layout spacing */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 mb-2 sm:mb-3.5 border border-slate-200/60 shadow-sm"
          >
            <Activity className="w-3 h-3 text-[#2d44d0] animate-pulse" />
            <span className="font-mono text-[8.5px] tracking-widest uppercase font-black text-slate-600">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-light text-2xl sm:text-3xl md:text-5xl text-slate-950 tracking-tight leading-[1.1] mb-3"
          >
            From Zero to Launch — <span className="font-semibold bg-gradient-to-r from-violet-600 via-[#2d44d0] to-indigo-700 bg-clip-text text-transparent">Step by Step</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-slate-500 text-xs sm:text-[14px] font-light leading-relaxed max-w-xl mx-auto"
          >
            An exceptionally polished, co-founder driven physical launch framework designed to map your vision onto high-conversion global shelves.
          </motion.p>
        </div>

        {/* Cinematic Dual-Pane Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* LEFT SIDE: STEP SELECTOR CARDS (Interactive navigation) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-3 relative">
            {steps.map((st) => {
              const isSelected = st.id === activeStepId;
              const StepIcon = st.icon;
              return (
                <button
                  key={st.id}
                  onMouseEnter={() => {
                    setActiveStepId(st.id);
                    setAutoplay(false);
                  }}
                  onClick={() => {
                    setActiveStepId(st.id);
                    setAutoplay(false);
                  }}
                  className="w-full text-left p-4.5 sm:p-5 rounded-2xl border border-transparent transition-all duration-300 relative overflow-visible flex items-center gap-4.5 cursor-pointer group select-none"
                  style={{
                    backgroundColor: isSelected ? 'transparent' : 'rgba(255, 255, 255, 0.4)',
                  }}
                >
                  {/* Fluid liquid slide indicator background in light theme */}
                  {isSelected && (
                    <motion.div 
                      layoutId="active-button-glow-bg"
                      className="absolute inset-0 z-0 bg-white/95 rounded-2xl border shadow-[0_12px_32px_rgba(31,41,55,0.06)]"
                      style={{ 
                        borderColor: `${st.color}25`,
                      }}
                      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                    />
                  )}

                  {/* Left Accent Glow line */}
                  {isSelected && (
                    <motion.div 
                      layoutId="active-bg-line"
                      className="absolute inset-y-3.5 left-0 w-1.5 rounded-r-full z-10"
                      style={{ backgroundColor: st.color }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Icon Frame - Colorful Animated Icon */}
                  <div className="relative shrink-0 z-10">
                    {/* Pulsing ring matching step signature color */}
                    {isSelected && (
                      <motion.div
                        className="absolute -inset-1 rounded-xl opacity-35 blur-[3px]"
                        style={{ backgroundColor: st.color }}
                        animate={{
                          scale: [0.95, 1.15, 0.95],
                          opacity: [0.25, 0.45, 0.25],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    <div 
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl flex items-center justify-center border transition-all duration-300 relative z-10"
                      style={{ 
                        backgroundColor: isSelected ? `${st.color}0a` : 'white',
                        borderColor: isSelected ? `${st.color}25` : '#f1f5f9',
                        color: isSelected ? st.color : '#64748b',
                        boxShadow: isSelected 
                          ? `0 6px 16px -4px ${st.color}15, inset 0 0 0 1px ${st.color}10` 
                          : '0 2px 6px rgba(15, 23, 42, 0.01)'
                      }}
                    >
                      <motion.div
                        animate={isSelected ? { 
                          scale: [1, 1.12, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ 
                          duration: 2.2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          repeatType: "reverse"
                        }}
                      >
                        <StepIcon className="w-5.5 h-5.5" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 relative z-10 text-left">
                    <span 
                      className="block font-mono text-[9px] font-extrabold tracking-widest uppercase mb-0.5"
                      style={{ color: isSelected ? st.color : '#94a3b8' }}
                    >
                      {st.badge}
                    </span>
                    <span className={`block font-sans text-sm sm:text-[15.5px] font-bold leading-none transition-colors duration-250 ${
                      isSelected ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {st.title}
                    </span>
                  </div>

                  <motion.div
                    className="relative z-10 shrink-0"
                    animate={isSelected ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight 
                      className={`w-4.5 h-4.5 transition-all duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ color: st.color }}
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: CINEMATIC SHOWCASE PREVIEW */}
          <div className="col-span-1 lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStepId}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  borderColor: `${activeStep.color}25`,
                  boxShadow: `0 32px 64px -16px rgba(15, 23, 42, 0.05), inset 0 0 0 2px rgba(255, 255, 255, 0.8)`
                }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-square bg-[#f8fafc] rounded-[2.5rem] border border-slate-200/80 p-5.5 sm:p-7 flex flex-col justify-between relative overflow-hidden group shadow-[0_24px_50px_rgba(15,23,42,0.02)]"
              >
                {/* 100% Opacity image in light theme */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={activeStep.imageUrl}
                    alt={activeStep.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                  />
                  
                  {/* Subtle color cast overlay */}
                  <div 
                    className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-15 mix-blend-color"
                    style={{ backgroundColor: activeStep.color }}
                  />
                  
                  {/* Bottom elegant scrim so text reads nicely */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/40 to-transparent z-5 pointer-events-none" />
                </div>

                {/* Top HUD Header Section floating on image with light backdrop */}
                <div className="relative z-10 flex items-center justify-between">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-md border border-white px-3 py-1.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.06)]"
                  >
                    <span className="w-2.5 h-2.5 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: activeStep.color }} />
                    <span className="font-mono text-[9px] text-slate-800 font-extrabold uppercase tracking-widest leading-none">
                      {activeStep.badge}
                    </span>
                  </motion.div>
                  
                  {/* Elegant floating serial badge */}
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    className="font-display font-black text-4xl sm:text-5xl select-none leading-none text-white tracking-tighter"
                    style={{ 
                      textShadow: '0 4px 14px rgba(15, 23, 42, 0.25)'
                    }}
                  >
                    0{activeStep.id}
                  </motion.span>
                </div>

                {/* Floating Bottom HUD Information Section - Only main heading in a smaller, elegant size */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="relative z-10 bg-white/95 backdrop-blur-md border border-white px-5 py-3 rounded-2xl shadow-sm text-left max-w-max"
                >
                  <h3 className="font-display font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight leading-none">
                    {activeStep.title}
                  </h3>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Closing Conversion Banner */}
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-[1.5px] overflow-hidden shadow-2xl mt-6"
        >
          {/* Color Border Animation Layer */}
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-r from-[#2d44d0] via-[#8b5cf6] to-[#ec4899]"
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
          <div className="relative z-10 w-full bg-gradient-to-br from-white via-slate-50/95 to-[#2d44d0]/5 text-slate-950 rounded-[2.4rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 text-left relative overflow-hidden">
            {/* Aesthetic corner radial glows */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-100/10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-pink-100/5 blur-[100px] pointer-events-none" />
            
            {/* Fine technical line blueprint pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,68,208,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,68,208,0.012)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-xl flex-1 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200/85 text-slate-700 mb-3.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2d44d0] animate-pulse" />
                <span className="font-mono text-[8.5px] tracking-widest uppercase font-bold">
                  SCALE FORMATION STRATEGY
                </span>
              </div>
              <h4 className="font-display font-medium text-xl sm:text-3xl text-slate-950 tracking-tight leading-tight mb-3">
                Ready to construct your real physical brand?
              </h4>
              <p className="font-sans text-xs sm:text-[13px] text-slate-600 font-light leading-relaxed mb-4">
                We eliminate technical noise, design stunning tactile sensory packaging, negotiate solid MOQs with ISO certified laboratories, and launch you with absolute co-founder confidence.
              </p>
              
              {/* Spec lines */}
              <div className="flex gap-4 items-center flex-wrap">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11.5px] font-sans font-medium">Lab clearance guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11.5px] font-sans font-medium">Trade-mark execution handled</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col items-center gap-5 shrink-0 w-full lg:w-auto">
              {/* Visual credential asset */}
              <div className="w-full sm:w-[240px] bg-white/80 backdrop-blur-md rounded-xl p-3 border border-slate-200/60 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200/50">
                  <img 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=300&auto=format&fit=crop" 
                    alt="Packaging alignment sketch"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-[7.5px] font-mono text-slate-400 uppercase tracking-wider">SHELF INTEGRITY STATUS</span>
                  <span className="block text-[11.5px] font-semibold text-slate-900">Prestige Grade Mold</span>
                  <span className="block text-[8px] text-emerald-600 font-bold">APPROVED ✓</span>
                </div>
              </div>

              <a 
                href="#contact" 
                className="flex-shrink-0 group relative px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest bg-slate-950 text-white overflow-hidden transition-all duration-350 shadow-md hover:bg-slate-900 hover:scale-101 active:scale-97 cursor-pointer w-full text-center block"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-bold transition-transform">
                  Consult With Us Live
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
