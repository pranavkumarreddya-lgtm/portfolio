import React from 'react';
import { motion } from 'framer-motion';
import { User, Globe, MessageSquare, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] border-t border-white/10 pt-16 pb-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.a 
              href="#hero" 
              className="font-black text-2xl text-white tracking-tight mb-2 inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name.split(' ')[0]}<span className="text-purple-400">.</span>
            </motion.a>
            <p className="text-slate-400 text-sm max-w-xs">
              Building impactful applications and solving real-world problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['About', 'Process', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold text-slate-300 hover:text-purple-400 transition-colors cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons & Top Scroll */}
          <div className="flex items-center gap-4">
            <motion.a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full glass-card-dark text-slate-300 hover:text-purple-400 border border-white/10 flex items-center justify-center transition-colors cursor-pointer" 
              aria-label="GitHub"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <Globe size={18} />
            </motion.a>
            <motion.a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full glass-card-dark text-slate-300 hover:text-purple-400 border border-white/10 flex items-center justify-center transition-colors cursor-pointer" 
              aria-label="LinkedIn"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <User size={18} />
            </motion.a>
            <motion.a 
              href={personalInfo.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full glass-card-dark text-slate-300 hover:text-purple-400 border border-white/10 flex items-center justify-center transition-colors cursor-pointer" 
              aria-label="Instagram"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <MessageSquare size={18} />
            </motion.a>
            
            <motion.button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] ml-4 cursor-pointer"
              aria-label="Scroll to top"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-slate-400 font-medium">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Designed & Built with <span className="text-purple-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
