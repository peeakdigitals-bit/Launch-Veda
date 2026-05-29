import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowRight,
  MessageSquare,
  BadgeAlert,
  CheckCircle2,
  Lock,
  MessageCircle,
  MapPin
} from 'lucide-react';
import buildBrandGif from '@/build Brand.gif';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

interface ContactUsProps {
  onHomePage?: boolean;
  key?: React.Key;
}

export default function ContactUs({ onHomePage = false }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Cosmetics',
    budget: '₹5L - ₹15L',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handlePhoneChange = (val: string) => {
    setFormData(prev => ({ ...prev, phone: val }));
    
    // real-time validation
    if (!val.trim()) {
      setErrors(prev => ({ ...prev, phone: 'Phone number is required.' }));
    } else {
      const clean = val.replace(/[^0-9]/g, '');
      const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
      if (clean.length < 10) {
        setErrors(prev => ({ ...prev, phone: 'Phone number must have at least 10 digits.' }));
      } else if (clean.length > 14) {
        setErrors(prev => ({ ...prev, phone: 'Phone number cannot exceed 14 digits.' }));
      } else if (!phoneRegex.test(val)) {
        setErrors(prev => ({ ...prev, phone: 'Invalid phone format (need digits, spacing, +, -, parenthesis).' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    }
  };

  const handleEmailChange = (val: string) => {
    setFormData(prev => ({ ...prev, email: val }));
    
    // real-time validation
    if (!val.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email address is required.' }));
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address (e.g., user@domain.com).' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };

  const handleNameChange = (val: string) => {
    setFormData(prev => ({ ...prev, name: val }));
    if (!val.trim()) {
      setErrors(prev => ({ ...prev, name: 'Name is required.' }));
    } else {
      setErrors(prev => ({ ...prev, name: '' }));
    }
  };

  const handleBlur = (field: 'name' | 'phone' | 'email') => {
    const val = formData[field];
    if (field === 'name') {
      if (!val.trim()) {
        setErrors(prev => ({ ...prev, name: 'Name is required.' }));
      }
    } else if (field === 'phone') {
      if (!val.trim()) {
        setErrors(prev => ({ ...prev, phone: 'Phone number is required.' }));
      } else {
        const clean = val.replace(/[^0-9]/g, '');
        const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
        if (clean.length < 10) {
          setErrors(prev => ({ ...prev, phone: 'Phone number must have at least 10 digits.' }));
        } else if (clean.length > 14) {
          setErrors(prev => ({ ...prev, phone: 'Phone number cannot exceed 14 digits.' }));
        } else if (!phoneRegex.test(val)) {
          setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone format.' }));
        }
      }
    } else if (field === 'email') {
      if (!val.trim()) {
        setErrors(prev => ({ ...prev, email: 'Email address is required.' }));
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          setErrors(prev => ({ ...prev, email: 'Please enter a valid email address (e.g., user@domain.com).' }));
        }
      }
    }
  };

  const launchTypes = [
    { value: 'Cosmetics', label: 'Cosmetics' },
    { value: 'Perfumes', label: 'Perfumes' },
    { value: 'Ayurveda', label: 'Ayurveda' },
    { value: 'Wellness', label: 'Wellness' },
    { value: 'Other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '< ₹5 Lakhs', label: '< ₹5L' },
    { value: '₹5L - ₹15L', label: '₹5L - ₹15L' },
    { value: '₹15L - ₹50L', label: '₹15L - ₹50L' },
    { value: '₹50 Lakhs+', label: '₹50L+' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger complete sync validation check
    const currentErrors = {
      name: '',
      phone: '',
      email: ''
    };

    if (!formData.name.trim()) {
      currentErrors.name = 'Name is required.';
    }

    if (!formData.phone.trim()) {
      currentErrors.phone = 'Phone number is required.';
    } else {
      const clean = formData.phone.replace(/[^0-9]/g, '');
      const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
      if (clean.length < 10) {
        currentErrors.phone = 'Phone number must have at least 10 digits.';
      } else if (clean.length > 14) {
        currentErrors.phone = 'Phone number cannot exceed 14 digits.';
      } else if (!phoneRegex.test(formData.phone)) {
        currentErrors.phone = 'Please enter a valid phone number (e.g., +91 9876543210).';
      }
    }

    if (!formData.email.trim()) {
      currentErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        currentErrors.email = 'Please enter a valid email address (e.g., you@domain.com).';
      }
    }

    setErrors(currentErrors);

    if (currentErrors.name || currentErrors.phone || currentErrors.email) {
      setErrorText('Please correct the validation errors in the fields below.');
      return;
    }

    setErrorText('');
    setIsSubmitting(true);

    const leadsCol = collection(db, 'leads');
    const leadDocRef = doc(leadsCol);

    try {
      await setDoc(leadDocRef, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        type: formData.type,
        budget: formData.budget,
        message: formData.message,
        createdAt: serverTimestamp()
      });

      // Submit lead to Support Email via FormSubmit AJAX service
      try {
        await fetch('https://formsubmit.co/ajax/support@launchveda.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `🚀 New LaunchVeda Lead: ${formData.name} (${formData.type})`,
            'Client Name': formData.name,
            'Phone Number': formData.phone,
            'Email Address': formData.email,
            'Formulation Category': formData.type,
            'Target Budget': formData.budget,
            'Brand Vision Message': formData.message || 'No custom message specified.'
          })
        });
      } catch (emailErr) {
        console.warn('Backup email dispatch silent error:', emailErr);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      setIsSubmitting(false);
      setErrorText('We encountered an error saving your request. Please try again.');
      handleFirestoreError(error, OperationType.CREATE, `leads/${leadDocRef.id}`);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-white select-none z-10"
    >
      {/* Decorative ambient backdrop glows */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-orange-100/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-orange-50/25 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/40 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-sans text-[10px] tracking-widest text-orange-700 uppercase font-bold">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-light text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-6"
          >
            Let’s Build <span className="font-semibold text-orange-600">Your Brand</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your idea — or even if you don’t have one yet. We’ll help you figure it out.
          </motion.p>
        </div>

        {/* ================= MAIN DUAL INTERFACES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT PANEL: LUXURY LIFESTYLE IMAGE CARD */}
          <div className="col-span-1 lg:col-span-6 flex flex-col h-full" id="contact-visual-panel">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] bg-slate-50 border-2 border-slate-200/50 p-4 shadow-[0_24px_50px_rgba(15,23,42,0.02)] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative w-full h-full flex-1 rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/50">
                <img 
                  src={buildBrandGif} 
                  alt="Launch Veda luxury branding project" 
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.9] hover:scale-102 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual Glass floating card overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg text-left">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Lock className="w-3.5 h-3.5 text-orange-600" />
                    <span className="font-sans text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                      SECURE SUBMISSION
                    </span>
                  </div>
                  <h4 className="font-display text-slate-900 text-sm font-semibold tracking-tight">
                    NDA Protected Formulation Pipeline
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL: LEAD CAPTURE FORM */}
          <div className="col-span-1 lg:col-span-6 flex flex-col h-full">
            <motion.div 
               initial={{ opacity: 0, y: 30, borderColor: "rgba(226, 232, 240, 0.8)" }}
               whileInView={{ 
                 opacity: 1, 
                 y: 0,
                 borderColor: [
                   "rgba(251, 146, 60, 0.45)", 
                   "rgba(252, 211, 77, 0.45)", 
                   "rgba(251, 146, 60, 0.45)"
                 ]
               }}
               viewport={{ once: true }}
               transition={{ 
                 y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                 opacity: { duration: 0.8 },
                 borderColor: { duration: 8, repeat: Infinity, ease: "linear" }
               }}
               className="relative w-full h-full min-h-[500px] lg:min-h-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-tr from-white via-orange-50/20 to-amber-50/25 text-slate-900 shadow-[0_50px_100px_rgba(249,115,22,0.09),0_20px_45px_rgba(15,23,42,0.05),0_1px_8px_rgba(0,0,0,0.02)] border-2 overflow-hidden"
            >
              {/* Dynamic decorative colorful background flares for premium luxury light theme */}
              <div className="absolute top-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-orange-400/[0.12] blur-[90px] pointer-events-none animate-pulse duration-4000" />
              <div className="absolute bottom-[-15%] left-[-15%] w-[300px] h-[300px] rounded-full bg-orange-300/[0.08] blur-[90px] pointer-events-none animate-pulse duration-3000" />
              {/* Elegant delicate subtle line blueprint backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.012)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="brand-lead-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-between space-y-4 sm:space-y-5 text-left relative z-10"
                  >
                    {errorText && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3.5 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-3 text-rose-700 text-xs font-sans"
                      >
                        <BadgeAlert className="w-4.5 h-4.5 text-rose-500 flex-shrink-0" />
                        <span>{errorText}</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Name field */}
                      <div className="space-y-1.5 focus-within:translate-y-[-1px] transition-transform duration-200">
                        <label className="font-sans text-[11.5px] font-semibold text-slate-600 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-orange-500/80" /> Name <span className="text-orange-505">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          onBlur={() => handleBlur('name')}
                          placeholder="Your Name"
                          className={`w-full bg-slate-50/70 border rounded-xl py-2.5 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 font-sans tracking-tight focus:outline-none focus:ring-1 shadow-sm duration-200 ${
                            errors.name 
                              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200/50 text-rose-950 bg-rose-50/10' 
                              : 'border-slate-200 hover:border-slate-300 focus:border-orange-500/80 focus:ring-orange-500/40'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, y: -4 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -4 }}
                              className="text-[10px] text-rose-600 font-sans font-medium mt-1 pl-1"
                            >
                              ⚠️ {errors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone Number Field */}
                      <div className="space-y-1.5 focus-within:translate-y-[-1px] transition-transform duration-200">
                        <label className="font-sans text-[11.5px] font-semibold text-slate-600 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-orange-500/80" /> Phone number <span className="text-orange-505">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          placeholder="e.g. +91 9876543210"
                          className={`w-full bg-slate-50/70 border rounded-xl py-2.5 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 font-sans tracking-tight focus:outline-none focus:ring-1 shadow-sm duration-200 ${
                            errors.phone 
                              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200/50 text-rose-950 bg-rose-50/10' 
                              : 'border-slate-200 hover:border-slate-300 focus:border-orange-500/80 focus:ring-orange-500/40'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, y: -4 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -4 }}
                              className="text-[10px] text-rose-600 font-sans font-medium mt-1 pl-1"
                            >
                              ⚠️ {errors.phone}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Email address field */}
                    <div className="space-y-1.5 focus-within:translate-y-[-1px] transition-transform duration-200">
                      <label className="font-sans text-[11.5px] font-semibold text-slate-600 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-orange-500/80" /> Email address <span className="text-orange-505">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. you@domain.com"
                        className={`w-full bg-slate-50/70 border rounded-xl py-2.5 px-4 text-xs sm:text-sm text-slate-950 placeholder-slate-400 font-sans tracking-tight focus:outline-none focus:ring-1 shadow-sm duration-200 ${
                          errors.email 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200/50 text-rose-950 bg-rose-50/10' 
                            : 'border-slate-200 hover:border-slate-300 focus:border-orange-500/80 focus:ring-orange-500/40'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, y: -4 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -4 }}
                            className="text-[10px] text-rose-600 font-sans font-medium mt-1 pl-1"
                          >
                            ⚠️ {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* What do you want to launch? */}
                    <div className="space-y-2">
                      <label className="font-sans text-[11.5px] font-semibold text-slate-600 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500" /> What do you want to launch?
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {launchTypes.map((item) => {
                          const isSelected = formData.type === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, type: item.value })}
                              className={`font-sans px-3.5 py-1.5 rounded-full text-[10.5px] font-bold border cursor-pointer transition-all duration-300 ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-transparent text-white shadow-md shadow-orange-500/10' 
                                  : 'bg-slate-100/75 border-slate-200/70 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                              }`}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Range Selection */}
                    <div className="space-y-2">
                      <label className="font-sans text-[11.5px] font-semibold text-slate-600 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Budget range
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {budgetRanges.map((item) => {
                          const isSelected = formData.budget === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: item.value })}
                              className={`font-sans px-3.5 py-1.5 rounded-full text-[10.5px] font-bold border cursor-pointer transition-all duration-300 ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-transparent text-white shadow-md shadow-orange-500/10' 
                                  : 'bg-slate-100/75 border-slate-200/70 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                              }`}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5 flex-1 flex flex-col">
                      <label className="font-sans text-[11.5px] font-semibold text-slate-600 flex items-center gap-1.5 mb-1">
                        <MessageSquare className="w-3.5 h-3.5 text-orange-505" /> Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand vision..."
                        rows={3}
                        className="w-full flex-1 min-h-[70px] bg-slate-50/70 border border-slate-200 hover:border-slate-300 focus:border-orange-500/80 rounded-xl py-2.5 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 font-sans tracking-tight focus:outline-none focus:ring-1 focus:ring-orange-500/40 shadow-sm resize-none duration-200"
                      />
                    </div>

                    {/* CTA Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative py-3 sm:py-3.5 mt-2 bg-slate-950 hover:bg-black disabled:bg-slate-300 disabled:text-slate-500 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.25)] active:scale-[0.99] flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Preparing launcher matrix...</span>
                        </>
                      ) : (
                        <>
                          <span>Start my brand</span>
                          <ArrowRight className="w-4 h-4 text-white/90" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Form Success State Screen */
                  <motion.div
                    key="success-receipt"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="h-full flex flex-col justify-center items-center text-center space-y-7 py-8 px-4"
                  >
                    {/* Mail Sended Animation in Center */}
                    <div className="relative flex items-center justify-center h-28 w-28 my-3">
                      {/* Pulse backgrounds */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-orange-500/10 border border-orange-500/15"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.35, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
                        className="absolute inset-4 rounded-full bg-emerald-500/10 border border-emerald-500/15"
                      />

                      {/* Moving Letter, Envelope and Check Combo */}
                      <motion.div
                        initial={{ y: 35, scale: 0, rotate: -25 }}
                        animate={{ y: 0, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 180, damping: 15 }}
                        className="relative z-10 w-20 h-20 bg-gradient-to-tr from-slate-50 to-white rounded-2xl border-2 border-slate-200 shadow-[0_12px_28px_rgba(15,23,42,0.06)] flex items-center justify-center overflow-hidden"
                      >
                        {/* Custom SVG Envelope with sliding letter inside */}
                        <svg className="w-10 h-10 text-slate-850" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" referrerPolicy="no-referrer">
                          {/* Sliding Letter Card */}
                          <motion.path
                            d="M6 10V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
                            strokeWidth="1.5"
                            stroke="#cbd5e1"
                            fill="#f8fafc"
                            initial={{ y: -15, opacity: 0 }}
                            animate={{ y: [0, 8, 8], opacity: [0, 1, 1] }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                          />
                          {/* Inner details of the letter card */}
                          <motion.line
                            x1="9" y1="6" x2="15" y2="6" stroke="#94a3b8" strokeWidth="1"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                          />
                          <motion.line
                            x1="9" y1="8" x2="13" y2="8" stroke="#cbd5e1" strokeWidth="1"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                          />

                          {/* Envelope Back & Sides */}
                          <path d="M22 6H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" fill="white" stroke="#1e293b" />
                          
                          {/* Envelope interactive flap closing */}
                          <motion.path
                            d="M22 6l-10 7L2 6"
                            stroke="#1e293b"
                            initial={{ rotateX: 180, y: -4 }}
                            animate={{ rotateX: [180, 0, 0] }}
                            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                          />
                        </svg>

                        {/* Large Super-Clean Glowing Emerald Check Badge that pops on completion */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 280, damping: 12, delay: 1.8 }}
                          className="absolute inset-0 bg-emerald-500 flex items-center justify-center text-white"
                        >
                          <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" referrerPolicy="no-referrer">
                            <motion.path
                              d="M20 6L9 17L4 12"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: 2.1, ease: "easeOut" }}
                            />
                          </svg>
                        </motion.div>
                      </motion.div>

                      {/* Celebration sparks bursting outward */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30) * (Math.PI / 180);
                        const distance = 54;
                        const px = Math.cos(angle) * distance;
                        const py = Math.sin(angle) * distance;

                        return (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full z-0"
                            style={{
                              backgroundColor: i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#f97316' : '#3b82f6'
                            }}
                            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                            animate={{ x: px, y: py, scale: [0, 1.4, 0], opacity: [1, 1, 0] }}
                            transition={{
                              duration: 1.3,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 2.0
                            }}
                          />
                        );
                      })}
                    </div>

                    <div className="space-y-3.5 max-w-sm mx-auto">
                      <h3 className="font-display font-medium text-2xl text-slate-900 tracking-tight">
                        Namaste, {formData.name}! ✨
                      </h3>
                      <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Thank you for reaching out to LaunchVeda. Your request has been successfully received, and our team will get back to you within <strong>24 hours</strong>.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', type: 'Cosmetics', budget: '₹5L - ₹15L', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-full border border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-950 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer mt-2"
                    >
                      Submit Another Idea
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

        {/* ================= SMALL SEPARATE CONTACT INFO SECTION ================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-200/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            
            {/* CORPORATE HQ ADDRESS */}
            <motion.a
              href="https://maps.app.goo.gl/RTyQAjJuLszM21TJ6"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-[1.75rem] bg-slate-50 hover:bg-orange-50/15 border border-slate-200/80 hover:border-orange-200/40 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(249,115,22,0.03)] flex gap-4 items-start transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100/60 border border-orange-200/40 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white font-sans font-semibold">
                <MapPin className="w-4.5 h-4.5 text-accent-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[9px] font-bold text-slate-400 group-hover:text-orange-600 uppercase tracking-widest block leading-none transition-colors duration-250">
                    Office Headquarters
                  </span>
                  <span className="text-[10px] text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-250 transform -translate-x-1 group-hover:translate-x-0">
                    →
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-850 font-bold leading-tight group-hover:text-slate-950">
                  LaunchVeda Workspace
                </p>
                <p className="font-sans text-[10.5px] text-slate-500 font-light leading-relaxed group-hover:text-slate-700">
                  Tower T3, 221, 2nd Floor, Golden I Noida Extension, Greater Noida West Uttar Pradesh – 201308, India
                </p>
              </div>
            </motion.a>

            {/* DIRECT PHONE CALL */}
            <motion.a
              href="tel:+91-9266983622"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-5 rounded-[1.75rem] bg-slate-50 hover:bg-orange-50/15 border border-slate-200/80 hover:border-orange-200/40 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(249,115,22,0.03)] flex gap-4 items-center transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100/60 border border-orange-200/40 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
                <Phone className="w-4 h-4 text-accent-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] font-bold text-slate-400 group-hover:text-orange-600 uppercase tracking-widest block leading-none transition-colors duration-250">
                  Call Direct
                </span>
                <p className="font-sans text-xs text-slate-850 font-bold group-hover:text-orange-600 duration-200">
                  +91-9266983622
                </p>
                <p className="font-sans text-[10px] text-slate-400 font-light leading-none">
                  Available Mon - Sat (9 AM - 6 PM)
                </p>
              </div>
            </motion.a>

            {/* EMAIL COMMUNICATION */}
            <motion.a
              href="mailto:support@launchveda.com"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-[1.75rem] bg-slate-50 hover:bg-orange-50/15 border border-slate-200/80 hover:border-orange-200/40 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(249,115,22,0.03)] flex gap-4 items-center transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100/60 border border-orange-200/40 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
                <Mail className="w-4 h-4 text-accent-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="font-mono text-[9px] font-bold text-slate-400 group-hover:text-orange-600 uppercase tracking-widest block leading-none transition-colors duration-250">
                  Write To Us
                </span>
                <p className="font-sans text-xs text-slate-850 font-bold group-hover:text-orange-600 duration-200 truncate">
                  support@launchveda.com
                </p>
                <p className="font-sans text-[10px] text-slate-400 font-light leading-none">
                  Response within 12 Hours
                </p>
              </div>
            </motion.a>

          </div>
        </div>

      </div>
    </section>
  );
}
