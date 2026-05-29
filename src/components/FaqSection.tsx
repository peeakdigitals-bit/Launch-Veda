import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare } from 'lucide-react';
import buildBrand1 from '@/build Brand (1).png';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "What industries do you work with?",
      answer: "We primarily work with wellness, beauty, skincare, perfume, luxury, and modern D2C brands."
    },
    {
      question: "Do you build Shopify websites?",
      answer: "Yes. We design and develop premium Shopify experiences optimized for conversions."
    },
    {
      question: "Do you provide marketing services?",
      answer: "Yes. We offer Meta ads, Google ads, creative strategy, and scaling systems."
    },
    {
      question: "Can you help launch a new brand from scratch?",
      answer: "Absolutely. Launch Veda specializes in creating complete launch ecosystems for new brands."
    },
    {
      question: "Do you create AI-generated creatives?",
      answer: "Yes. We combine AI-powered creative systems with premium art direction and marketing psychology."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default open first faq for interactive polish

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative py-24 md:py-36 overflow-hidden bg-slate-50/40 border-t border-b border-slate-200/50 select-none z-10"
    >
      {/* Editorial delicate atmospheric lightning */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-orange-100/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-50/30 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-4 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span className="font-mono text-[9px] tracking-widest text-orange-700 uppercase font-bold">
              KNOWLEDGE BASE
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-light text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            Frequently Asked <span className="font-semibold text-orange-600">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-sans text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Everything you need to know about partnering with Launch Veda to formulate, build, and scale your brand.
          </motion.p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LIFESTYLE IMAGE COLUMN */}
          <div className="col-span-1 lg:col-span-5 relative" id="faq-visual-column">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-950 shadow-[0_30px_70px_rgba(0,0,0,0.25)]"
            >
              <img 
                src={buildBrand1} 
                alt="Launch Veda luxury production visual" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover brightness-[0.92] hover:scale-102 transition-transform duration-700" 
              />
            </motion.div>
          </div>

          {/* QUESTIONS & ANSWERS ACCORDIONS */}
          <div className="col-span-1 lg:col-span-7 space-y-4" id="faq-accordions-column">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group rounded-2xl border-2 transition-all duration-300 overflow-hidden bg-white ${
                    isOpen 
                      ? 'border-orange-500/40 shadow-[0_12px_24px_rgba(249,115,22,0.03)]' 
                      : 'border-slate-200/60 hover:border-slate-350 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-[0_8px_16px_rgba(15,23,42,0.02)]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4 items-center pr-4">
                      <div className={`p-2 rounded-xl transition-all duration-350 shrink-0 border ${
                        isOpen 
                          ? 'bg-orange-500 text-white border-orange-500' 
                          : 'bg-slate-50 text-slate-400 border-slate-100 group-hover:text-slate-700 group-hover:bg-slate-100/50'
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="font-display font-medium text-slate-900 text-sm sm:text-base leading-tight group-hover:text-orange-600 transition-colors duration-250">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                      isOpen 
                        ? 'bg-orange-50 bg-opacity-80 text-orange-600 border-orange-200/50 rotate-180' 
                        : 'text-slate-405 border-slate-200 hover:text-slate-700 hover:bg-slate-50'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-6 pt-0 md:px-6 md:pb-7 flex gap-4 pl-[3.75rem]">
                          <p className="font-sans text-slate-550 text-xs sm:text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
