import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/experience';
import TiltCard from '../components/TiltCard';

export default function Experience() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-[#070B14]/60 overflow-hidden relative">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
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
            Education & <span className="text-gradient-rainbow">Experience</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-[0_0_15px_rgba(6,182,212,0.7)]"></motion.div>
        </motion.div>

        <div className="relative">
          {/* Vertical 3D Electric Rainbow Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] md:-ml-[2px] rounded-full"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-8`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                  }}
                >
                  {/* Glowing 3D Timeline Node */}
                  <motion.div 
                    variants={fadeUpVariant}
                    className="absolute left-4 md:left-1/2 -ml-3 md:-ml-3.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.9)] z-10 mt-6 md:mt-0 flex items-center justify-center"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                  </motion.div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                   {/* Content Card */}
                  <motion.div 
                    variants={fadeUpVariant}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12"
                  >
                    <TiltCard>
                      <div 
                        className="glass-card-dark glass-card-hover p-6 md:p-8 rounded-3xl border border-white/10 transition-all duration-300 preserve-3d cursor-grab active:cursor-grabbing"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        
                        {/* Header Section */}
                        <div 
                          className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6"
                          style={{ transform: 'translateZ(30px)' }}
                        >
                          <div>
                            <h3 className="text-xl font-black text-white">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-cyan-400 font-extrabold mt-1">
                              <Briefcase size={16} />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full self-start shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <div className="h-px w-full bg-white/10 mb-6"></div>

                        {/* Side-by-side Sub-lists */}
                        <div 
                          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                          style={{ transform: 'translateZ(20px)' }}
                        >
                          
                          {/* Skills */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Skills Gained</h4>
                            <ul className="space-y-2">
                              {exp.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]"></div>
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span 
                                  key={i}
                                  className="px-2.5 py-1 glass-card-dark border border-white/10 text-cyan-300 rounded-md text-xs font-semibold hover:border-cyan-400/50 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
