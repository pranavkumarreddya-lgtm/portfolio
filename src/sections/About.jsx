import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpeg';
import TiltCard from '../components/TiltCard';

export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stackBadges = ["Python", "Java", "JavaScript", "Django", "React", "MySQL", "MongoDB", "Git"];

  return (
    <section id="about" className="py-24 px-6 bg-[#090514]/60 backdrop-blur-xs overflow-hidden relative">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-pink-600/15 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column - Extra Large 3D Image Frame */}
        <motion.div 
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <TiltCard className="w-full max-w-lg">
            <div 
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-pink-400/50 shadow-[0_0_60px_rgba(244,114,182,0.45)] cursor-grab active:cursor-grabbing preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src={profilePhoto} 
                alt="Sunidhi Reddy" 
                className="w-full h-full object-cover"
                style={{ transform: 'translateZ(30px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating 3D Badge */}
              <div 
                className="absolute bottom-6 right-6 glass-card-dark px-4.5 py-2.5 rounded-2xl shadow-[0_0_25px_rgba(244,114,182,0.5)] border border-pink-500/50 font-black text-pink-300 text-xs tracking-widest uppercase z-20"
                style={{ transform: 'translateZ(60px)' }}
              >
                SW ENGINEER
              </div>
            </div>
          </TiltCard>
          
          {/* Decorative Rose Gold Elements */}
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[radial-gradient(circle,rgba(244,114,182,0.2)_2px,transparent_2px)] bg-[length:16px_16px] -z-10 rounded-full"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl -z-10"></div>
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div 
          className="order-1 lg:order-2 flex flex-col items-start space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4">
            <h2 className="text-4xl font-black text-white tracking-tight">About Me</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
          </motion.div>
          
          <motion.div variants={fadeUpVariant} className="space-y-4 text-lg text-slate-300 leading-relaxed font-normal">
            <p>
              I'm <span className="font-bold text-pink-400">{personalInfo.name}</span>, a {personalInfo.title} based in <span className="font-semibold text-slate-100">{personalInfo.location}</span>. 
            </p>
            <p>
              {personalInfo.bio}
            </p>
          </motion.div>
          
          <motion.div variants={fadeUpVariant} className="pt-4 w-full">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {stackBadges.map((badge, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-full glass-card-dark border border-white/10 text-sm font-semibold text-slate-200 shadow-sm hover:border-pink-400/60 hover:text-pink-300 hover:shadow-[0_0_20px_rgba(244,114,182,0.35)] transition-all cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
