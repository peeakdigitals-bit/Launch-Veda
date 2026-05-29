import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Zap, Compass, Star, Minimize2 } from 'lucide-react';

export default function Marquee() {
  const marqueeItems = [
    { text: "CINEMATIC VISION", icon: Sparkles },
    { text: "60FPS LIQUID FLOW", icon: Zap },
    { text: "TURN IDEA INTO BRAND", icon: Compass },
    { text: "AWWWARDS QUALITIES", icon: Trophy },
    { text: "APPLE DESIGN INSPIRED", icon: Star },
    { text: "INTERACTIVE DEPTH", icon: Minimize2 },
  ];

  // Double the list to make seamless infinite looping
  const combinedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="py-12 bg-white overflow-hidden border-t border-b border-slate-100 relative z-30 select-none">
      {/* Light subtle container rays */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-white pointer-events-none" />

      <div className="w-full flex overflow-hidden">
        {/* Continuous loop translating left */}
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-16 whitespace-nowrap items-center select-none"
        >
          {combinedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 flex-shrink-0">
                <span className="font-display font-bold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase leading-none">
                  {item.text}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-accent-orange animate-pulse shadow-md">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
