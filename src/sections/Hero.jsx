import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Sparkles, Code2, HeartHandshake, Layers } from 'lucide-react';
import profilePhoto from '../assets/profile.jpeg';
import TiltCard from '../components/TiltCard';

export default function Hero() {
  const floatAnimation = (delay) => ({
    initial: { y: 0 },
    animate: {
      y: [-14, 14, -14],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }
    }
  });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const stats = [
    { label: "Projects Built", value: "5+", icon: <Layers size={18} className="text-pink-400" /> },
    { label: "Core Technologies", value: "8+", icon: <Code2 size={18} className="text-fuchsia-400" /> },
    { label: "Code Passion", value: "100%", icon: <HeartHandshake size={18} className="text-rose-400" /> },
  ];

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 bg-[#090514]/30 flex items-center overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <motion.div 
          className="flex flex-col items-start space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div 
            variants={fadeUpVariant} 
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full glass-card-dark border border-pink-500/40 text-pink-300 text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(244,114,182,0.35)] backdrop-blur-md"
          >
            <Sparkles size={14} className="text-pink-400 animate-pulse" />
            {personalInfo.title}
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Hi, I'm <span className="text-gradient-feminine glow-text">{personalInfo.name.split(' ')[0]}</span>.
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed font-normal">
            I build fast, scalable, and beautifully designed applications using Python, Django, React, and modern full-stack web technologies.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-extrabold hover:opacity-95 transition-all shadow-[0_0_30px_rgba(244,114,182,0.5)] hover:shadow-[0_0_45px_rgba(244,114,182,0.8)] cursor-pointer"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-8 py-4 rounded-full glass-card-dark text-slate-200 font-extrabold border border-white/20 hover:border-pink-400/60 hover:bg-pink-950/40 transition-all backdrop-blur-md shadow-lg cursor-pointer"
            >
              Get In Touch
              <Sparkles size={18} className="text-pink-400" />
            </a>
          </motion.div>

          {/* Interactive Stat Cards Feature */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-3 gap-4 pt-6 w-full max-w-lg">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card-dark p-3.5 rounded-2xl border border-pink-500/20 text-center flex flex-col items-center justify-center hover:border-pink-400/50 transition-all">
                <div className="mb-1">{stat.icon}</div>
                <span className="text-xl font-black text-white">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Extra Big Profile Photo Image & Floating Badges */}
        <motion.div 
          className="relative flex justify-center items-center lg:justify-end mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Image Frame - EXTRA BIG PRESENTATION */}
          <TiltCard className="w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[510px] lg:h-[510px] z-10">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-pink-400/60 shadow-[0_0_80px_rgba(244,114,182,0.55)] cursor-grab active:cursor-grabbing preserve-3d">
              <img 
                src={profilePhoto} 
                alt="Sunidhi Reddy" 
                className="w-full h-full object-cover"
                style={{ transform: 'translateZ(30px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-transparent to-fuchsia-500/20 mix-blend-overlay"></div>
            </div>
          </TiltCard>

          {/* Background Decorative Rose Gold & Sakura Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-gradient-to-r from-pink-500/30 to-fuchsia-600/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

          {/* Floating Glass Tech Badges */}
          <motion.div 
            className="absolute top-6 left-0 md:-left-4 z-20 flex items-center gap-2.5 glass-card-dark px-4 py-2.5 rounded-full border border-pink-500/40 shadow-[0_0_20px_rgba(244,114,182,0.4)] backdrop-blur-md"
            variants={floatAnimation(0)}
            initial="initial"
            animate="animate"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#306998] shadow-[0_0_10px_#306998]"></div>
            <span className="text-xs font-black tracking-wider text-slate-200">Python</span>
          </motion.div>

          <motion.div 
            className="absolute bottom-10 left-2 z-20 flex items-center gap-2.5 glass-card-dark px-4 py-2.5 rounded-full border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.4)] backdrop-blur-md"
            variants={floatAnimation(1)}
            initial="initial"
            animate="animate"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]"></div>
            <span className="text-xs font-black tracking-wider text-slate-200">Django</span>
          </motion.div>

          <motion.div 
            className="absolute top-28 right-0 md:-right-6 z-20 flex items-center gap-2.5 glass-card-dark px-4 py-2.5 rounded-full border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md"
            variants={floatAnimation(2)}
            initial="initial"
            animate="animate"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB]"></div>
            <span className="text-xs font-black tracking-wider text-slate-200">React</span>
          </motion.div>

          <motion.div 
            className="absolute bottom-24 right-4 md:-right-2 z-20 flex items-center gap-2.5 glass-card-dark px-4 py-2.5 rounded-full border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-md"
            variants={floatAnimation(1.5)}
            initial="initial"
            animate="animate"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#F7DF1E] shadow-[0_0_10px_#F7DF1E]"></div>
            <span className="text-xs font-black tracking-wider text-slate-200">JavaScript</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
