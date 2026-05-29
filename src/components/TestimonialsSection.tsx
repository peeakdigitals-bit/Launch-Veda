import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Star, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  brand: string;
  initials: string;
  tag: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "“Launch Veda completely transformed our brand identity and website experience. The visuals looked world-class.”",
      author: "Aarav Sharma",
      role: "Founder",
      brand: "Aura Alchemy",
      initials: "AA",
      tag: "BRAND REFRESH"
    },
    {
      id: 2,
      quote: "“Their landing page and ad creatives significantly improved our conversions and engagement.”",
      author: "Samantha Sen",
      role: "Marketing Director",
      brand: "Silk & Stone Skincare",
      initials: "SS",
      tag: "GROWTH SHIELD"
    },
    {
      id: 3,
      quote: "“From strategy to execution, everything felt premium, modern, and performance-driven.”",
      author: "Vikram Mehta",
      role: "CEO & Co-Founder",
      brand: "Ostara Botanical",
      initials: "OB",
      tag: "FULL LAUNCH"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50/20 via-white to-[#fafafc] select-none z-10"
    >
      {/* Delicate premium layout lighting and abstract ambient blobs */}
      <div className="absolute top-1/4 left-[-10%] w-[380px] h-[380px] rounded-full bg-orange-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[420px] h-[420px] rounded-full bg-blue-50/25 blur-[120px] pointer-events-none" />

      {/* Grid Alignment Blueprint Lineage overlay */}
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.22] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= HEADER Block ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-4 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span className="font-sans text-[10px] tracking-widest text-orange-700 uppercase font-bold">
              FOUNDER TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-light text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            What <span className="font-semibold text-orange-600">Founders Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-sans text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light"
          >
            Hear from visionary builders who partnered with us to craft outstanding products, digital experiences, and systems.
          </motion.p>
        </div>

        {/* ================= TESTIMONIAL CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-[1.5px] rounded-[2.25rem] bg-slate-200/70 hover:bg-gradient-to-tr hover:from-orange-500 hover:via-amber-450 hover:to-blue-400 transition-all duration-500 shadow-[0_16px_45px_rgba(15,23,42,0.012)] hover:shadow-[0_30px_70px_rgba(249,115,22,0.09)] overflow-hidden"
            >
              {/* High-fidelity color flow flare behind content on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/5 via-amber-300/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col justify-between p-7.5 rounded-[2.18rem] bg-white h-full relative z-10 transition-colors duration-300">
                
                {/* Top Section */}
                <div className="space-y-6">
                  
                  {/* Visual Header Tag & Rating */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] font-extrabold tracking-widest text-slate-400 group-hover:text-orange-600 uppercase transition-colors duration-300">
                      {test.tag}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <Quote className="w-10 h-10 text-orange-500/5 absolute -top-4 -left-3 pointer-events-none group-hover:scale-105 transition-transform duration-300" />
                    <p className="font-display font-light text-slate-800 text-sm sm:text-[15px] leading-relaxed relative z-10 group-hover:text-slate-950 transition-colors">
                      {test.quote}
                    </p>
                  </div>

                </div>

                {/* Bottom section with Founder avatar profile details */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  {/* Beautiful luxury initials avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-2 border-slate-200/50 flex items-center justify-center font-display text-xs font-bold text-white tracking-widest shrink-0 transition-all duration-300 group-hover:border-orange-500/30 shadow-md">
                    {test.initials}
                  </div>

                  <div className="text-left">
                    <h4 className="font-display font-semibold text-slate-950 text-sm tracking-tight">
                      {test.author}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 font-light flex items-center gap-1">
                      <span>{test.role},</span>
                      <strong className="text-orange-550 group-hover:text-orange-600 transition-colors font-medium">
                        {test.brand}
                      </strong>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
