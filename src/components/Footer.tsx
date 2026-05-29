import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook,
  Compass, 
  ArrowUpRight, 
  Heart,
  Sparkle,
  ArrowRight,
  X,
  FileText,
  ShieldAlert
} from 'lucide-react';
import lvLogo from '@/assets/lv_logo_new.png';

// Premium custom Pinterest SVG icon for dark mode alignment
function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.17-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.993-.283 1.194.599 2.169 1.775 2.169 2.13 0 3.768-2.247 3.768-5.489 0-2.871-2.063-4.878-5.01-4.878-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.135-2.607 7.462-6.227 7.462-1.216 0-2.359-.631-2.75-1.378l-.749 2.853c-.27 1.029-1.001 2.32-1.493 3.123C9.179 23.633 10.551 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/launchveda/", 
      icon: Instagram, 
      glow: "rgba(244, 63, 94, 0.08)",
      color: "from-pink-500 via-rose-500 to-orange-500",
      textColor: "text-pink-600 group-hover:text-white",
      iconBg: "bg-pink-50 border-pink-100/80"
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/profile.php?id=61590478586919", 
      icon: Facebook, 
      glow: "rgba(59, 89, 152, 0.08)",
      color: "from-blue-600 via-sky-600 to-[#1877f2]",
      textColor: "text-blue-600 group-hover:text-white",
      iconBg: "bg-blue-50 border-blue-100/80"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com", 
      icon: Linkedin, 
      glow: "rgba(59, 130, 246, 0.08)",
      color: "from-blue-500 to-indigo-600",
      textColor: "text-sky-600 group-hover:text-white",
      iconBg: "bg-sky-50 border-sky-100/80"
    },
    { 
      name: "X / Twitter", 
      href: "https://x.com/launchveda", 
      icon: Twitter, 
      glow: "rgba(15, 23, 42, 0.05)",
      color: "from-slate-800 to-slate-900",
      textColor: "text-slate-700 group-hover:text-white",
      iconBg: "bg-slate-50 border-slate-200/80"
    }
  ];

  return (
    <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden border-t border-white/5 select-none z-30 font-sans text-white">
      
      {/* ================= DYNAMIC ATMOSPHERIC COSMIC LIGHT GLOWS ================= */}
      <motion.div 
        animate={{ 
          x: [0, 30, -15, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[-150px] left-[-5%] w-[450px] h-[450px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none z-0" 
      />

      <motion.div 
        animate={{ 
          x: [0, -25, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.05, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-[-120px] right-[-5%] w-[480px] h-[480px] rounded-full bg-blue-600/5 blur-[130px] pointer-events-none z-0" 
      />

      {/* Blueprint grid line layout system overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 items-start">
          
          {/* COLUMN 1: BRAND PROFILE */}
          <div className="md:col-span-6 space-y-6 text-left">
            <a href="#home" className="inline-block group transition-transform duration-300">
              <div className="relative flex items-center h-10">
                {/* Neon soft aura */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur-lg opacity-80" />
                <img 
                  src={lvLogo} 
                  alt="LaunchVeda Logo" 
                  className="relative h-full w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </a>
            
            <p className="font-sans text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-md font-light">
              Launch Veda is a premium creative growth studio helping modern brands launch, scale, and dominate digitally through storytelling, branding, design, and performance marketing.
            </p>

            {/* Indian Corporate Address HQ */}
            <a 
              href="https://maps.app.goo.gl/RTyQAjJuLszM21TJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 border-t border-white/5 space-y-1.5 max-w-md text-left block group/addr cursor-pointer hover:opacity-95 duration-200"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] font-bold text-slate-500 group-hover/addr:text-orange-400 uppercase tracking-widest block transition-colors duration-200">
                  Office Headquarters
                </span>
                <span className="text-[10px] text-orange-400 opacity-0 group-hover/addr:opacity-100 transition-all duration-200 transform translate-x-[-4px] group-hover/addr:translate-x-0">
                  →
                </span>
              </div>
              <p className="font-sans text-xs text-slate-400 group-hover/addr:text-slate-200 font-light leading-relaxed transition-colors duration-200">
                Tower T3, 221, 2nd Floor, Golden I Noida Extension, Greater Noida West Uttar Pradesh – 201308, India
              </p>
            </a>

            {/* Custom high-fidelity luxury badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-inner">
              <Compass className="w-3.5 h-3.5 text-orange-400 animate-spin duration-15000" />
              <span className="font-mono text-[9px] tracking-widest text-orange-350 uppercase font-black">
                Pioneering Growth Studio
              </span>
            </div>
          </div>

          {/* COLUMN 2: COMPANY SITEMAP LINKS */}
          <div className="md:col-span-3 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Company
              </h5>
            </div>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between font-sans text-sm font-semibold text-slate-300 hover:text-white transition-all duration-250 cursor-pointer py-1.5 border-b border-white/[0.04] max-w-[180px]"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 shrink-0" />
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="group flex items-center justify-between font-sans text-sm font-semibold text-slate-300 hover:text-white transition-all duration-250 cursor-pointer py-1.5 border-b border-white/[0.04] max-w-[180px] w-full text-left bg-transparent border-none text-slate-300"
                >
                  <span>Privacy Policy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 shrink-0" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="group flex items-center justify-between font-sans text-sm font-semibold text-slate-300 hover:text-white transition-all duration-250 cursor-pointer py-1.5 border-b border-white/[0.04] max-w-[180px] w-full text-left bg-transparent border-none text-slate-300"
                >
                  <span>Terms Of Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 shrink-0" />
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: VIBRANT GLOWING SOCIALS CHANNELS */}
          <div className="md:col-span-3 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <h5 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Socials
              </h5>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                const isHovered = hoveredSocial === idx;

                // Dedicated high-premium continuous loops for each social media icon without hover constraints
                let iconAnimation = {};
                let iconTransition = {};

                if (idx === 0) {
                  // Instagram: playful camera wiggle camera roll and scale-up loop
                  iconAnimation = { 
                    rotate: [0, -10, 10, -10, 10, 0], 
                    scale: [1, 1.1, 1.1, 1] 
                  };
                  iconTransition = { 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 1.5
                  };
                } else if (idx === 1) {
                  // Facebook: vertical elastic bounce loop
                  iconAnimation = { 
                    y: [0, -4, 0, -2, 0] 
                  };
                  iconTransition = { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 1.2
                  };
                } else if (idx === 2) {
                  // LinkedIn: horizontal side spring wiggle loop
                  iconAnimation = { 
                    x: [0, -2.5, 2.5, -1.5, 1.5, 0] 
                  };
                  iconTransition = { 
                    duration: 3.2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 1.3
                  };
                } else {
                  // X / Twitter: swift cinematic Y-axis spin loop
                  iconAnimation = { 
                    rotateY: [0, 180, 180, 0, 0] 
                  };
                  iconTransition = { 
                    duration: 5.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 1.8
                  };
                }

                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(idx)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex flex-col justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white transition-all duration-300 cursor-pointer overflow-hidden min-h-[92px]"
                    style={{
                      boxShadow: "none"
                    }}
                  >
                    {/* Concentric colored glowing radiant blob on hover */}
                    <div 
                      className="absolute -right-6 -bottom-6 w-14 h-14 rounded-full filter blur-md opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none z-0"
                      style={{
                        backgroundColor: social.glow.replace("0.22", "0.65").replace("0.15", "0.45").replace("0.18", "0.55")
                      }}
                    />

                    {/* Top Row Indicators */}
                    <div className="flex items-center justify-between w-full relative z-10">
                      <motion.div 
                        animate={iconAnimation}
                        transition={iconTransition}
                        className={`w-8 h-8 rounded-xl ${social.iconBg} border flex items-center justify-center ${social.textColor} group-hover:text-white group-hover:bg-gradient-to-tr group-hover:${social.color} transition-all duration-300 shrink-0`}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                    </div>

                    {/* Bottom Label Row */}
                    <div className="mt-4 relative z-10 text-left">
                      <span className="font-sans text-[11px] font-bold text-slate-700 group-hover:text-slate-950 transition-colors duration-300 block">
                        {social.name}
                      </span>
                    </div>

                    {/* Sliding color-bar highlighting active social platform identity */}
                    <div 
                      className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-r-md bg-gradient-to-b ${social.color} opacity-40 group-hover:opacity-100 transition-all duration-300`} 
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= HIGH CONTRAST INTEGRITY SYSTEM FOOTER BOTTOM ================= */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-500 font-mono text-[10px] uppercase tracking-wider text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-sans text-slate-400 font-light tracking-normal text-xs">
              © 2020 Launch Veda. All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
            <span className="text-[10px] font-sans font-medium text-slate-400 flex items-center gap-1.5 leading-none">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse shrink-0 inline" />
              <span>for visionary founders</span>
            </span>
          </div>

        </div>

      </div>

      {/* Dynamic E-E-A-T Compliance Consent & Trust Channels */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md pointer-events-auto select-text selection:bg-orange-550/20"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 text-slate-800 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-accent-orange">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                      {activeModal === 'privacy' 
                        ? 'Privacy Policy & CDSCO / FSSAI Regulatory Disclosures' 
                        : 'Terms of Service & Licensing Agreements'}
                    </h3>
                    <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">
                      Launch Veda Corporate Compliance Matrix
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Document Content */}
              <div className="flex-1 overflow-y-auto py-6 space-y-6 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pr-2 text-left">
                {activeModal === 'privacy' ? (
                  <>
                    <h4 className="font-display font-bold text-slate-900 text-base">Section 1: Data Alignment & Protection Principles</h4>
                    <p>
                      At Launch Veda, we construct premium D2C brand infrastructures. Protecting your intellectual property, custom formulations, bottle mold CAD vectors, and user telemetry is our foundational commitment. This policy governs all privacy practices under <strong>Section 43A of the Indian Information Technology Act, 2000</strong>.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Section 2: Information Collected & Intended Purposes</h4>
                    <p>
                      We strictly collect business details necessary for launching: contact information (Founder name, business email, telephone), formulation parameters (wellness requirements, organic certifications, CDSCO licensing data), and technical integration details (such as e-commerce checkout telemetry and Google Analytics tracking indices).
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Section 3: CDSCO, FSSAI & Laboratory Confidentiality</h4>
                    <p>
                      All chemical formulas, raw ingredient proportions, material-safety sheets (MSDS), and trademark files transferred through our co-founding matrix are held in sterile cryptographic nodes. We enforce direct, non-disclosure-backed co-owner conditions, guaranteeing zero raw formula data leaks to contract laboratory networks.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Section 4: No Fractional Data Claims</h4>
                    <p>
                      You retain 100% unilateral ownership of all physical formulation variants, legal safety approvals, trademark registrations, and digital node structures build on Shopify. No data or telemetry created during our partner terms is rented or sold to competitors.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Section 5: Cookies & Secure Site Analytics</h4>
                    <p>
                      We utilize secure, server-side cookies solely to monitor Core Web Vitals (including Time to First Byte, First Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint), enhancing technical sitemap processing and ranking outputs for Googlebot and Bingbot crawlers.
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="font-display font-bold text-slate-900 text-base">Agreement 1: Co-Founding Partner Framework</h4>
                    <p>
                      By scheduling a luxury consultation or requesting form templates from Launch Veda, you align with our custom co-founder engagement model. We prioritize skin-in-the-game support over transactional agency fees, working actively to eliminate typical launch barriers for first-time founders.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Agreement 2: Product Formulation & Laboratory Trials</h4>
                    <p>
                      All lab sampling runs are conducted in certified ISO, WHO-GMP, and FDA-compliant facilities in Noida or greater Delhi-NCR hubs. Turnaround times are estimated averages; specific formula stability and microbial clearances may alter production timing to ensure 100% legal compliance.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Agreement 3: Quality Approvals & Regulatory CDSCO Clears</h4>
                    <p>
                      Launch Veda leads the registration and submission process for CDSCO cosmetic manufacturing licenses, FSSAI nutritional approvals, and trade-mark registries. Licensing approvals are contingent upon governmental regulatory bodies; we provide full clerical execution to guarantee accuracy.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Agreement 4: Supply Chain Automation & Freight Handling</h4>
                    <p>
                      Factory manufacturing outputs, physical bottle fitments, outer shell foil stamp specifications, and pallet packaging must be cleared and approved during the 3D CAD step before production line initiation. Once production completes, ownership passes to client-founder nodes following final clearance audits.
                    </p>

                    <h4 className="font-display font-bold text-slate-900 text-base">Agreement 5: Digital Store Node Handover</h4>
                    <p>
                      Upon successful builds, ownership of high-converting digital storefront structures, Shopify administrative portals, warehouse automated integrations, and Google Search Console property tracking setup is handily transferred directly to the founder.
                    </p>
                  </>
                )}
              </div>

              {/* Secure Footer Stamp */}
              <div className="pt-6 border-t border-slate-100 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-left">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Verified Legal Integrity Channel</span>
                </div>
                <span className="text-right">Secured under Noida jurisdiction</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
