"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-24 lg:px-32 max-w-4xl mx-auto text-center">
      <motion.div
        initial="initial"
        animate="animate"
        className="bento-card py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 blur-[100px] -z-10" />

        <motion.h1 {...fadeUp} className="text-5xl md:text-7xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-muted text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          I'm always open to new opportunities, creative collaborations, or just a coffee chat about the future of technology.
        </motion.p>

        <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="flex flex-col items-center gap-6">
          <a
            href="mailto:hello@pranavreddy.dev"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-accent/20"
          >
            <Mail size={22} />
            Say Hello
          </a>

          <div className="flex gap-6 mt-8">
            <a href="#" className="text-muted hover:text-accent transition-colors font-medium">LinkedIn</a>
            <a href="#" className="text-muted hover:text-accent transition-colors font-medium">Twitter</a>
            <a href="#" className="text-muted hover:text-accent transition-colors font-medium">GitHub</a>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
