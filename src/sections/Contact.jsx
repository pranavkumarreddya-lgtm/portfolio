import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Globe, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (This is a demo form)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#090514]/60 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/15 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div variants={fadeUpVariant} className="mb-4">
              <span className="text-pink-400 font-black tracking-widest uppercase text-xs flex items-center gap-1.5">
                <Sparkles size={14} className="animate-pulse" />
                Let's Talk
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Let's Connect and <span className="text-gradient-feminine">Build Something</span> Together.
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-lg text-slate-300 leading-relaxed mb-10 max-w-md font-normal">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="space-y-6 mb-10">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl glass-card-dark border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600 transition-all duration-300 shadow-[0_0_20px_rgba(244,114,182,0.3)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email Me At</p>
                  <p className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">{personalInfo.email}</p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-card-dark text-slate-300 hover:text-pink-300 border border-white/10 hover:border-pink-400/50 shadow-sm flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer" aria-label="GitHub">
                <Globe size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-card-dark text-slate-300 hover:text-pink-300 border border-white/10 hover:border-pink-400/50 shadow-sm flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer" aria-label="LinkedIn">
                <User size={20} />
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-card-dark text-slate-300 hover:text-pink-300 border border-white/10 hover:border-pink-400/50 shadow-sm flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer" aria-label="Instagram">
                <MessageSquare size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - 3D Glass Contact Form */}
          <motion.div 
            variants={fadeUpVariant}
            className="group flex"
          >
            <TiltCard className="w-full">
              <div 
                className="glass-card-dark p-8 md:p-10 rounded-3xl border border-pink-500/30 shadow-[0_0_50px_rgba(0,0,0,0.7)] transition-all duration-300 preserve-3d cursor-grab active:cursor-grabbing hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.35)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h3 
                  className="text-2xl font-black text-white mb-8"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090514]/90 border border-white/15 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-400 transition-all text-white placeholder:text-slate-500"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090514]/90 border border-white/15 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-400 transition-all text-white placeholder:text-slate-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-300 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090514]/90 border border-white/15 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-400 transition-all text-white placeholder:text-slate-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-black hover:opacity-95 transition-all shadow-[0_0_25px_rgba(244,114,182,0.45)] hover:shadow-[0_0_35px_rgba(244,114,182,0.7)] group cursor-pointer"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
