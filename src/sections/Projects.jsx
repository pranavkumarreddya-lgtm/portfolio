import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Code, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import TiltCard from '../components/TiltCard';

export default function Projects() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardGlows = [
    "hover:border-pink-400/60 hover:shadow-[0_0_35px_rgba(244,114,182,0.45)]",
    "hover:border-fuchsia-400/60 hover:shadow-[0_0_35px_rgba(232,121,249,0.45)]",
    "hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(192,132,252,0.45)]",
    "hover:border-amber-300/60 hover:shadow-[0_0_35px_rgba(252,211,77,0.45)]"
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#090514]/50 overflow-hidden relative">
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
            Featured <span className="text-gradient-feminine">Projects</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="h-1.5 w-24 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-full mx-auto shadow-[0_0_15px_rgba(244,114,182,0.7)]"></motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeUpVariant}
              className="group flex"
            >
              <TiltCard className="w-full">
                <div 
                  className={`flex flex-col glass-card-dark rounded-3xl overflow-hidden border border-white/10 transition-all duration-350 h-full preserve-3d cursor-grab active:cursor-grabbing ${cardGlows[index % cardGlows.length]}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Container with Hover Overlay */}
                  <div 
                    className="relative aspect-video overflow-hidden border-b border-white/10"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-[#090514]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-md">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-slate-950 rounded-full text-xs font-black hover:bg-pink-100 transition-colors cursor-pointer shadow-lg"
                      >
                        <Eye size={14} /> View Live
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white rounded-full text-xs font-black hover:opacity-90 transition-colors shadow-[0_0_20px_rgba(244,114,182,0.6)] cursor-pointer"
                      >
                        <Code size={14} /> View Code
                      </a>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 
                      className="text-xl font-black text-white mb-2 group-hover:text-pink-300 transition-colors"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-normal"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div 
                      className="flex flex-wrap gap-2 mb-6"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 glass-card-dark border border-pink-500/30 text-pink-300 rounded-md text-xs font-bold shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Links */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-pink-400 transition-colors cursor-pointer"
                        aria-label="GitHub Repository"
                      >
                        <GitBranch size={20} />
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-pink-400 transition-colors cursor-pointer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 glass-card-dark border border-pink-500/40 text-pink-300 font-black rounded-full hover:border-pink-400 hover:text-white shadow-[0_0_25px_rgba(244,114,182,0.4)] hover:shadow-[0_0_40px_rgba(244,114,182,0.7)] transition-all group cursor-pointer"
          >
            Explore All My Repositories 
            <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
