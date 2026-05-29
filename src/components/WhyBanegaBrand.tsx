import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Compass, 
  Workflow, 
  Target, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Award
} from 'lucide-react';

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  badge: string;
  gradient: string;
  hoverBgTo: string;
  hoverBorder: string;
  hoverTitle: string;
  leftIndicator: string;
  badgeBg: string;
  textColorClass: string;
}

export default function WhyBanegaBrand() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values: ValueCard[] = [
    {
      id: 1,
      title: "Partner Mindset (not agency)",
      description: "We don't send cold invoices or run away. We sit together as equity-aligned co-founders, advising on formulas, container safety, and core units.",
      icon: Users,
      badge: "Alliance",
      gradient: "linear-gradient(135deg, #f97316, #ea580c)", // Orange
      hoverBgTo: "slate-50",
      hoverBorder: "hover:border-orange-500/30",
      hoverTitle: "group-hover:text-orange-600",
      leftIndicator: "bg-orange-500",
      badgeBg: "bg-orange-50 text-orange-700 border-orange-200/50",
      textColorClass: "text-orange-600"
    },
    {
      id: 2,
      title: "Built for Beginners",
      description: "No confusing corporate buzzwords or toxic jargon. We hold your hand from legal trademark registry all the way to marketplace barcode labels.",
      icon: Compass,
      badge: "Zero-To-One",
      gradient: "linear-gradient(135deg, #10b981, #059669)", // Emerald
      hoverBgTo: "slate-50",
      hoverBorder: "hover:border-emerald-500/30",
      hoverTitle: "group-hover:text-emerald-600",
      leftIndicator: "bg-emerald-500",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
      textColorClass: "text-emerald-600"
    },
    {
      id: 3,
      title: "End-to-End Execution",
      description: "From custom box packaging die-cuts, manufacturing contracts, down to setting up sub-500ms commerce speedways. We build the physical + digital pipeline.",
      icon: Workflow,
      badge: "Turnkey",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", // Violet
      hoverBgTo: "slate-50",
      hoverBorder: "hover:border-violet-500/30",
      hoverTitle: "group-hover:text-violet-600",
      leftIndicator: "bg-violet-500",
      badgeBg: "bg-violet-50 text-violet-700 border-violet-200/50",
      textColorClass: "text-violet-600"
    },
    {
      id: 4,
      title: "Market-Focused Approach",
      description: "We analyze high-gross margin trends and white space competitor openings. If it doesn't solve a real desire or generate revenue, we pivot early.",
      icon: Target,
      badge: "Data-Driven",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", // Cyan
      hoverBgTo: "slate-50",
      hoverBorder: "hover:border-cyan-500/30",
      hoverTitle: "group-hover:text-cyan-600",
      leftIndicator: "bg-cyan-500",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200/50",
      textColorClass: "text-cyan-600"
    },
    {
      id: 5,
      title: "Fast & Structured Launch",
      description: "Deploying our rigorous proprietary launch timelines, reducing human operational error and securing optimal MoQs with global lab providers.",
      icon: TrendingUp,
      badge: "Accelerated",
      gradient: "linear-gradient(135deg, #ec4899, #db2777)", // Pink
      hoverBgTo: "slate-50",
      hoverBorder: "hover:border-pink-500/30",
      hoverTitle: "group-hover:text-pink-600",
      leftIndicator: "bg-pink-500",
      badgeBg: "bg-pink-50 text-pink-700 border-pink-200/50",
      textColorClass: "text-pink-500"
    }
  ];

  return (
    <section 
      id="why-launchveda"
      className="bg-[#fafafc] py-24 md:py-32 relative overflow-hidden select-none border-b border-slate-200"
    >
      {/* Decorative ambient blurred backing filters using multi colors */}
      <div className="absolute top-[25%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-orange-100/30 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-pink-100/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Core Segment: Value Propositions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
          
          {/* Sticky Left Column with heading layout */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
                The LaunchVeda Filter
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display font-light text-4xl sm:text-5xl lg:text-5.5xl text-slate-950 tracking-tight leading-[1.15] mb-6"
            >
              Why <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">LaunchVeda</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm font-light"
            >
              We demolished the traditional sluggish agency model. Here is the modern stakeholder architecture built to scale physical luxury products securely.
            </motion.p>
            
            {/* Visual reassurance stamp */}
            <div className="hidden lg:flex items-center gap-3 text-slate-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Built by experienced creators</span>
            </div>
          </div>

          {/* Right Column Grid Stack */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const isHovered = hoveredCard === value.id;

              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCard(value.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`bg-white rounded-[2.25rem] border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 transition-all duration-350 shadow-[0_4px_24px_rgba(15,23,42,0.015)] hover:shadow-[0_22px_45px_rgba(15,23,42,0.04)] relative group cursor-pointer ${value.hoverBorder}`}
                >
                  {/* Visual Left Badge/Badge Graphic block overlay */}
                  <div className="flex-shrink-0 flex sm:flex-col justify-between items-center sm:items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white relative shadow-md transition-all duration-300 group-hover:scale-106"
                      style={{
                        background: isHovered 
                          ? value.gradient
                          : `linear-gradient(135deg, #1e293b, #0f172a)`
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <span className={`font-mono text-[9px] uppercase tracking-wider font-bold sm:mt-1.5 px-2.5 py-0.5 rounded border ${value.badgeBg}`}>
                      {value.badge}
                    </span>
                  </div>

                  {/* Core description details */}
                  <div className="text-left flex-1 min-w-0">
                    <h3 className={`font-display font-semibold text-lg sm:text-xl text-slate-900 mb-2 tracking-tight transition-colors duration-200 ${value.hoverTitle}`}>
                      {value.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>

                  {/* Progress fill visual tag overlay */}
                  <div className={`absolute left-0 bottom-0 top-0 w-1.2 rounded-l-full scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300 ${value.leftIndicator}`} />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
