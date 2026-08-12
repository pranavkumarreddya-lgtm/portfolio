import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Ideate",
      description: "Understand the core problem and outline feature requirements.",
      icon: <Lightbulb size={28} className="text-purple-400" />
    },
    {
      id: 2,
      title: "Design",
      description: "Create wireframes, mockups, and define the user experience.",
      icon: <PenTool size={28} className="text-purple-400" />
    },
    {
      id: 3,
      title: "Build",
      description: "Develop the application with clean, scalable, and maintainable code.",
      icon: <Code2 size={28} className="text-purple-400" />
    },
    {
      id: 4,
      title: "Deploy",
      description: "Launch to production with CI/CD and monitor performance.",
      icon: <Rocket size={28} className="text-purple-400" />
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="process" className="py-24 px-6 bg-[#030712]/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          className="text-center mb-20 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Here's how I turn ideas into <span className="text-gradient-3d">real-world applications</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto shadow-[0_0_12px_rgba(168,85,247,0.6)]"></motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Dashed connecting 3D line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] border-t-2 border-dashed border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                variants={fadeUpVariant}
                className="flex flex-col items-center group"
              >
                <TiltCard className="w-full">
                  <div 
                    className="glass-card-dark glass-card-hover p-8 rounded-3xl flex flex-col items-center text-center preserve-3d h-full cursor-grab active:cursor-grabbing border border-white/10"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Numbered Circular Badge with Icon */}
                    <div 
                      className="w-20 h-20 bg-slate-900/90 rounded-2xl flex items-center justify-center border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-6 relative group-hover:border-purple-400 transition-colors"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <div className="w-full h-full rounded-xl flex items-center justify-center relative">
                        {step.icon}
                        <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-black rounded-full flex items-center justify-center border-2 border-slate-950 shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                          {step.id}
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <h3 
                      className="text-xl font-extrabold text-white mb-3 group-hover:text-purple-300 transition-colors"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-slate-400 text-sm leading-relaxed"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
