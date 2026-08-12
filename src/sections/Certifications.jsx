import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/certifications';
import TiltCard from '../components/TiltCard';

export default function Certifications() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-[#030712]/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Official <span className="text-gradient-3d">Certifications</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto shadow-[0_0_12px_rgba(168,85,247,0.6)]"></motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={fadeUpVariant}
              className="group flex"
            >
              <TiltCard className="w-full">
                <div 
                  className="glass-card-dark glass-card-hover p-8 rounded-3xl border border-white/10 transition-all duration-300 flex flex-col h-full preserve-3d cursor-grab active:cursor-grabbing"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="w-14 h-14 bg-slate-900 border border-purple-500/40 text-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <Award size={28} />
                  </div>
                  
                  <h3 
                    className="text-xl font-extrabold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {cert.name}
                  </h3>
                  
                  <p 
                    className="text-slate-400 text-sm font-medium mb-8 flex-1"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    Issued by <span className="text-slate-200 font-semibold">{cert.issuer}</span>
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 size={14} />
                      <span>{cert.score}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
