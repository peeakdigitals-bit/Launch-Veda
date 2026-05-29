import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Building2, 
  FileText, 
  Layers, 
  TrendingUp, 
  Percent, 
  Compass, 
  Sparkles,
  Award
} from 'lucide-react';

const buildBrandImg = '/build Brand.png';

interface CounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ endValue, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Smooth cubic out easing for luxurious feeling
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * endValue);
      
      setCount(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, endValue, duration]);

  return (
    <span ref={elementRef} className="font-display font-semibold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function BrandStatsCounter() {
  const stats = [
    {
      id: "manufacturer",
      value: 1000,
      suffix: "+",
      type: "count",
      label: "Manufacturer Support",
      icon: Building2,
      color: "text-orange-600 bg-orange-50 border-orange-100",
      description: "Direct ties with certified formulation houses globally."
    },
    {
      id: "landing-pages",
      value: 500,
      suffix: "+",
      type: "count",
      label: "Landing Pages",
      icon: FileText,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      description: "Conversion-optimized high performance digital sales pipelines."
    },
    {
      id: "brand-concepts",
      value: 200,
      suffix: "+",
      type: "count",
      label: "Premium Brand Concepts",
      icon: Layers,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      description: "Bespoke cinematic brand identities crafted from zero."
    },
    {
      id: "ad-impressions",
      value: 10, // We can animate up to 10M or display "Millions" with beautiful layout
      suffix: "M+",
      type: "text",
      textVal: "Millions+",
      label: "Ad Impressions",
      icon: TrendingUp,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      description: "Multi-channel creative direction reaching global scales."
    },
    {
      id: "industries--served",
      type: "text",
      textVal: "Multiple",
      label: "Industries Served",
      icon: Award,
      color: "text-rose-600 bg-rose-50 border-rose-100",
      description: "From premium perfumery and wellness to luxury cosmetics."
    }
  ];

  return (
    <section 
      id="brand-stats" 
      className="relative py-24 md:py-32 overflow-hidden border-b border-slate-200/50 bg-white"
    >
      {/* Luxurious abstract subtle details */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-50/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-[120px] pointer-events-none" />
      
      {/* Editorial delicate layout grid backdrop */}
      <div className="absolute inset-0 bg-[#0f172a]/[0.003] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT HALF: Stunning cinematic luxury image with overlapping wireframe layouts */}
          <div className="col-span-1 lg:col-span-6 relative" id="stats-visual-container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] bg-slate-50 border border-slate-200/40 p-4 shadow-[0_24px_50px_rgba(15,23,42,0.02)] overflow-hidden"
            >
              {/* Inner frame structure */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-250">
                <img 
                  src={buildBrandImg} 
                  alt="Build Brand with Launch Veda" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700" 
                />
                
                {/* Visual Glass floating card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg text-left">
                  <span className="font-mono text-[9px] font-bold text-orange-600 uppercase tracking-widest block mb-1">
                    FORMULATION SYSTEM
                  </span>
                  <h4 className="font-display text-slate-900 text-sm font-semibold tracking-tight">
                    End-to-End Production Integrity
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Geometric luxury ambient design border behind */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[2.5rem] border border-orange-200/40 pointer-events-none hidden sm:block transform translate-x-2 translate-y-2 select-none" />
          </div>

          {/* RIGHT HALF: Refined Display Header & Count Indicators */}
          <div className="col-span-1 lg:col-span-6 text-left" id="stats-content-panel">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 mb-5 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono text-[9px] tracking-widest text-orange-700 uppercase font-bold">
                PROVEN BENCHMARKS
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-light text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-8"
            >
              Built For <span className="font-semibold text-orange-600">Fast Growing Brands</span>
            </motion.h2>

            {/* Stats items render list */}
            <div className="space-y-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group flex gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/50 transition-all duration-300 pointer-events-none select-none"
                  >
                    {/* Floating mini icon showcase */}
                    <div className={`p-3 rounded-xl border ${stat.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        
                        {/* Interactive Counter animation render segment */}
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {stat.type === 'count' ? (
                            <AnimatedCounter endValue={stat.value as number} suffix={stat.suffix} />
                          ) : (
                            <motion.span 
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: i * 0.1 }}
                              className="font-display font-bold uppercase tracking-tight text-slate-800"
                            >
                              {stat.textVal}
                            </motion.span>
                          )}
                        </div>

                        {/* Visual metric tags */}
                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                          {stat.label}
                        </span>

                      </div>

                      <p className="font-sans text-slate-500 text-xs sm:text-sm">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
