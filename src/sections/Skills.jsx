import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FileJson, Database, Layout, Server, Settings, Box, Cloud, GitBranch, PenTool, Terminal, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      title: "Languages",
      accent: "text-pink-400 border-pink-500/40 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(244,114,182,0.4)]",
      iconColor: "text-pink-400 group-hover:drop-shadow-[0_0_12px_rgba(244,114,182,0.9)]",
      skills: [
        { name: "Python", icon: <Terminal size={32} /> },
        { name: "Java", icon: <Code2 size={32} /> },
        { name: "JavaScript", icon: <FileJson size={32} /> },
        { name: "C", icon: <Code2 size={32} /> },
        { name: "HTML/CSS", icon: <Layout size={32} /> },
        { name: "SQL", icon: <Database size={32} /> }
      ]
    },
    {
      title: "Frameworks",
      accent: "text-fuchsia-400 border-fuchsia-500/40 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(232,121,249,0.4)]",
      iconColor: "text-fuchsia-400 group-hover:drop-shadow-[0_0_12px_rgba(232,121,249,0.9)]",
      skills: [
        { name: "Django", icon: <Server size={32} /> },
        { name: "React", icon: <Layout size={32} /> },
        { name: "Node.js", icon: <Server size={32} /> },
        { name: "Bootstrap", icon: <PenTool size={32} /> },
        { name: "Tailwind", icon: <PenTool size={32} /> }
      ]
    },
    {
      title: "Databases",
      accent: "text-purple-400 border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]",
      iconColor: "text-purple-400 group-hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.9)]",
      skills: [
        { name: "MySQL", icon: <Database size={32} /> },
        { name: "MongoDB", icon: <Database size={32} /> },
        { name: "SQLite", icon: <Database size={32} /> },
        { name: "Firebase", icon: <Cloud size={32} /> }
      ]
    },
    {
      title: "Tools",
      accent: "text-amber-300 border-amber-400/40 hover:border-amber-300 hover:shadow-[0_0_30px_rgba(252,211,77,0.4)]",
      iconColor: "text-amber-300 group-hover:drop-shadow-[0_0_12px_rgba(252,211,77,0.9)]",
      skills: [
        { name: "Git", icon: <GitBranch size={32} /> },
        { name: "GitHub", icon: <GitBranch size={32} /> },
        { name: "VS Code", icon: <Settings size={32} /> },
        { name: "Postman", icon: <Box size={32} /> },
        { name: "Linux", icon: <Terminal size={32} /> }
      ]
    }
  ];

  const filterTabs = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools'];

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title === activeFilter);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#090514]/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-feminine">Tech Stack</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="h-1.5 w-24 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-full mx-auto shadow-[0_0_15px_rgba(244,114,182,0.7)]"></motion.div>
        </motion.div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(244,114,182,0.6)] border border-pink-400/60'
                  : 'glass-card-dark text-slate-300 hover:text-pink-300 border border-white/10 hover:border-pink-400/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="space-y-16">
            {filteredCategories.map((category) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className={`text-xl font-black mb-8 flex items-center gap-3 ${category.accent.split(' ')[0]}`}>
                  <Sparkles size={18} className="animate-pulse" />
                  {category.title}
                  <div className="h-px flex-1 bg-white/10"></div>
                </h3>
                
                {/* Responsive grid: 6 cols desktop, 3 cols mobile */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ 
                        scale: 1.12, 
                        y: -8,
                        z: 30,
                        rotateY: 15,
                        rotateX: -8,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className={`flex flex-col items-center justify-center p-6 glass-card-dark rounded-2xl border transition-all duration-300 group cursor-grab active:cursor-grabbing preserve-3d ${category.accent}`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div 
                        className={`${category.iconColor} transition-all duration-300 mb-3`}
                        style={{ transform: 'translateZ(30px)' }}
                      >
                        {skill.icon}
                      </div>
                      <span 
                        className="text-xs md:text-sm font-extrabold text-slate-200 group-hover:text-white text-center transition-colors"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
