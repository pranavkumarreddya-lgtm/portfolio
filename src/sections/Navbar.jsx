import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import AudioToggle from '../components/AudioToggle';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#090514]/85 backdrop-blur-xl border-b border-pink-500/20 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          className="font-black text-2xl text-white tracking-tight z-50 relative group flex items-center gap-1 cursor-pointer" 
          onClick={() => setActiveSection('Home')}
        >
          <span className="group-hover:text-pink-400 transition-colors">
            {personalInfo.name.split(' ')[0]}
          </span>
          <span className="text-pink-400 animate-pulse">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`text-sm font-medium transition-colors hover:text-pink-300 relative py-1 cursor-pointer ${
                  activeSection === link.name ? 'text-pink-400 font-bold' : 'text-slate-300'
                }`}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.div 
                    layoutId="navbar-underline"
                    className="absolute left-0 bottom-0 w-full h-[2.5px] bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(244,114,182,0.9)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Interactive BGM Audio Synth Button */}
          <AudioToggle />

          <a
            href="#contact"
            onClick={() => setActiveSection('Contact')}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white text-sm font-extrabold hover:opacity-95 transition-all shadow-[0_0_25px_rgba(244,114,182,0.45)] hover:shadow-[0_0_35px_rgba(244,114,182,0.7)] cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <AudioToggle />
          <button 
            className="z-50 relative p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#090514]/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center h-screen w-full border-l border-white/10"
          >
            <div className="flex flex-col space-y-8 text-center w-full px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsOpen(false);
                  }}
                  className={`text-3xl font-black tracking-tight transition-colors ${
                    activeSection === link.name ? 'text-pink-400 glow-text' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 w-full max-w-[220px] mx-auto">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white text-lg font-black shadow-[0_0_30px_rgba(244,114,182,0.6)]"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
