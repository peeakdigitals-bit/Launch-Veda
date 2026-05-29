import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Sparkles, 
  Package, 
  Factory, 
  Rocket, 
  ShieldCheck, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface Step {
  id: string;
  number: string;
  title: string;
  accent: string;
  glowColor: string;
  accentColor: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
  tag: string;
}

function StepCard({ step, index, Icon }: { step: Step; index: number; Icon: React.ComponentType<any>; key?: React.Key }) {
  // Smooth cinematic and highly polished state-free motion variants
  const cardVariants = {
    initial: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 } 
    },
    hover: {
      y: -8,
      borderColor: "rgba(148, 163, 184, 0.4)", // slate-400 equivalent
      boxShadow: "0 20px 48px -12px rgba(15, 23, 42, 0.08), 0 4px 12px -4px rgba(15, 23, 42, 0.03)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const arrowVariants = {
    hover: {
      scale: 1.08,
      x: 2,
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-80px" }}
      variants={cardVariants}
      className="relative bg-white rounded-3xl border border-slate-200/80 p-8 flex flex-col justify-between h-full min-h-[420px] overflow-hidden flex-1 cursor-pointer transition-colors duration-300 shadow-[0_12px_24px_-10px_rgba(15,23,42,0.03)]"
    >
      {/* Permanent Elegant Gradient Strip Border */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${step.accent}`}
      />

      {/* Exquisite Light Ambient Watermarked Magazine-style Number */}
      <div 
        className="absolute right-6 top-6 font-display font-black text-7xl select-none pointer-events-none text-slate-100"
      >
        {step.number}
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full flex-1">
        <div>
          {/* Header Metadata Space */}
          <div className="flex items-center justify-between mb-8">
            <motion.div 
              variants={iconVariants}
              className="w-13 h-13 rounded-2xl flex items-center justify-center border shadow-sm relative overflow-hidden"
              style={{
                backgroundColor: `${step.accentColor}0a`,
                borderColor: `${step.accentColor}18`,
                color: step.accentColor
              }}
            >
              <Icon className="w-5.5 h-5.5" />
            </motion.div>

            {/* System Stage Badge */}
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{
                  backgroundColor: step.accentColor,
                  boxShadow: `0 0 6px ${step.accentColor}80`
                }}
              />
              <span className="font-mono text-[9px] tracking-wider font-bold text-slate-500 uppercase">
                Stage {step.id === "category" ? "Alpha" : step.id === "naming" ? "Beta" : step.id === "packaging" ? "Gamma" : step.id === "sourcing" ? "Delta" : step.id === "website" ? "Epsilon" : "Zeta"}
              </span>
            </div>
          </div>

          {/* Micro Tag Descriptor */}
          <span 
            className="font-mono text-[9px] font-bold tracking-[0.16em] block mb-2 px-0.5 uppercase"
            style={{ color: step.accentColor }}
          >
            {step.tag}
          </span>

          {/* Core Bold Title */}
          <h3 
            className="font-display font-semibold text-lg sm:text-xl text-slate-950 mb-3 leading-snug"
          >
            {step.title}
          </h3>

          {/* Descriptive Content Paragraph */}
          <p 
            className="font-sans text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-6 font-normal"
          >
            {step.description}
          </p>
        </div>

        <div>
          {/* Key Deliverables Grid */}
          <div className="border-t border-slate-100/90 pt-5 mt-2">
            <div className="flex flex-col gap-2.5">
              {step.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2.5">
                  <div 
                    className="flex items-center justify-center w-4 h-4 rounded-full border shrink-0 bg-slate-50 border-slate-100"
                  >
                    <CheckCircle2 
                      className="w-2.5 h-2.5 shrink-0 text-slate-400" 
                    />
                  </div>
                  <span 
                    className="font-sans text-[11px] font-medium text-slate-600"
                  >
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Bottom Interaction Footer */}
          <div className="mt-8 pt-4 flex items-center justify-between text-slate-400 font-mono text-[9px] uppercase font-bold tracking-widest border-t border-slate-100">
            <span className="text-slate-500/80">PROTOCOL ACCREDITED</span>
            <motion.div 
              variants={arrowVariants}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}dd)`,
              }}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const bgParticles = React.useMemo(() => {
    const arr = [];
    const particleColors = [
      'rgba(249, 115, 22, 0.4)',  // orange
      'rgba(16, 185, 129, 0.3)',  // green
      'rgba(6, 182, 212, 0.3)',   // cyan
      'rgba(139, 92, 246, 0.3)',  // purple
      'rgba(236, 72, 153, 0.3)'   // pink
    ];
    for (let i = 0; i < 18; i++) {
      const r1 = Math.sin(i * 13) * 0.5 + 0.5;
      const r2 = Math.cos(i * 17) * 0.5 + 0.5;
      const r3 = Math.sin(i * 23) * 0.5 + 0.5;
      const r4 = Math.cos(i * 29) * 0.5 + 0.5;
      
      const size = r1 * 5 + 3; // 3px to 8px
      const left = r2 * 100;
      const top = r3 * 100;
      const duration = 20 + r4 * 30; // 20s to 50s
      
      arr.push({
        id: i,
        size,
        left: `${left}%`,
        top: `${top}%`,
        color: particleColors[Math.floor(r1 * particleColors.length)],
        duration,
        xMove: (r2 - 0.5) * 80,
        yMove: (r3 - 0.5) * 80
      });
    }
    return arr;
  }, []);

  const steps: Step[] = [
    {
      id: "category",
      number: "01",
      title: "Product Category Selection",
      accent: "from-[#f97316] to-[#f43f5e]",
      glowColor: "rgba(249, 115, 22, 0.08)",
      accentColor: "#f97316",
      description: "Data-driven research to pinpoint high-margin and fast-moving segments in modern personal and consumer beauty grids.",
      icon: Compass,
      tag: "CATEGORY INTELLIGENCE",
      details: ["Margin Modeling", "Competitor Matrix Screening", "Volume Sizing Reports"]
    },
    {
      id: "naming",
      number: "02",
      title: "Brand Naming",
      accent: "from-[#06b6d4] to-[#3b82f6]",
      glowColor: "rgba(6, 182, 212, 0.08)",
      accentColor: "#06b6d4",
      description: "Creating names with global trademark clearing, matching .com digital rights, and unforgettable aesthetic presence.",
      icon: Sparkles,
      tag: "DIGITAL PHONETIC IDENTITY",
      details: ["Global Trademark Clearing", "Digital Domain Registry", "Syllabic Weight Testing"]
    },
    {
      id: "packaging",
      number: "03",
      title: "Packaging Design",
      accent: "from-[#10b981] to-[#059669]",
      glowColor: "rgba(16, 185, 129, 0.08)",
      accentColor: "#10b981",
      description: "Designing rich geometric custom structures, high-end outer box material sheets, and exquisite custom glass bottles.",
      icon: Package,
      tag: "TACTILE PACKAGING DESIGN",
      details: ["Custom Glass Molding", "Structural Board Sourcing", "Anti-Scratch Coating Plates"]
    },
    {
      id: "sourcing",
      number: "04",
      title: "Manufacturer Sourcing",
      accent: "from-[#eab308] to-[#ca8a04]",
      glowColor: "rgba(234, 179, 8, 0.08)",
      accentColor: "#eab308",
      description: "Direct alignment to world-class formulation chemists, ISO certified labs, and solid low Minimum Order Quantities.",
      icon: Factory,
      tag: "SUPPLY CHAIN ONBOARDING",
      details: ["Accredited Lab Match", "Proprietary Chemistry Blocks", "Secure Vendor Sourcing"]
    },
    {
      id: "website",
      number: "05",
      title: "Website & Marketplace Launch",
      accent: "from-[#8b5cf6] to-[#6366f1]",
      glowColor: "rgba(139, 92, 246, 0.08)",
      accentColor: "#8b5cf6",
      description: "Forming blistering-fast custom storefront engines with checkout automation optimized for seamless visitor conversion.",
      icon: Rocket,
      tag: "HIGH CONVERSION ECOSYSTEM",
      details: ["Speed-Optimized UX Store", "Custom Checkout Funnels", "Marketplace Catalog Sync"]
    },
    {
      id: "legal",
      number: "06",
      title: "Legal & Compliance",
      accent: "from-[#ec4899] to-[#db2777]",
      glowColor: "rgba(236, 72, 153, 0.08)",
      accentColor: "#ec4899",
      description: "Navigating cosmetic portals, product filings, global barcode licenses, and protective intellectual IP setups.",
      icon: ShieldCheck,
      tag: "SAFEGUARDIAN COMPLIANCE",
      details: ["FDA Portal Filings", "Global Barcode Allocation", "Trademark Filing & Safeguard"]
    }
  ];

  return (
    <section 
      id="what-we-do" 
      className="bg-[#fafafc] py-24 md:py-36 relative overflow-hidden border-b border-slate-200/50 font-sans"
    >

      {/* Dynamic Background Particle System & Ambient Animated Color Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Soft floating background color blobs with slow translation loops */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-100/25 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-100/25 blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -45, 0],
            y: [0, 35, -55, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-emerald-100/15 blur-[110px]"
        />

        {/* Elegant Floating Dot Particles */}
        {bgParticles.map((pt) => (
          <motion.div
            key={pt.id}
            animate={{
              x: [0, pt.xMove, -pt.xMove, 0],
              y: [0, pt.yMove, -pt.yMove, 0],
              opacity: [0.15, 0.45, 0.25, 0.15]
            }}
            transition={{
              duration: pt.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              left: pt.left,
              top: pt.top,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
              borderRadius: '50%',
              backgroundColor: pt.color,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Subgrid reference lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header Block using dynamic orange to pink-emerald transitions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/5 border border-slate-200/80 mb-5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-mono text-[9px] tracking-widest text-slate-800 uppercase font-bold">
                OUR OPERATIONAL ECOSYSTEM
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.05] mb-6"
            >
              We don’t just design brands.<br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                We build actual physical businesses.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:max-w-sm"
          >
            <p className="font-sans text-slate-500 text-sm sm:text-base font-light leading-relaxed text-left md:text-right">
              Whether you&apos;re starting from zero or stuck with an idea, we align with you to configure and launch every high-performance layer.
            </p>
          </motion.div>
        </div>

        {/* 3x2 High Fidelity Interactive Grid of Luxury Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              index={index} 
              Icon={step.icon} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

