"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <main className="min-h-screen px-6 py-32 md:px-24 lg:px-32 max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div {...fadeUp} className="relative lg:scale-125 origin-left">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-all duration-500" />
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Pranav Reddy"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.h1 {...fadeUp} className="text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed mb-8">
            I am a Creative Technologist based in India, specializing in the intersection of
            high-performance engineering and immersive visual design. I believe that the web
            should be more than just functional—it should be an experience.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Code2 className="text-accent" />, title: "Engineering", desc: "Next.js, TS, Node" },
              { icon: <Palette className="text-accent" />, title: "Design", desc: "Figma, Framer, Adobe" },
              { icon: <Zap className="text-accent" />, title: "Speed", desc: "Web Vitals & SEO" },
              { icon: <Globe className="text-accent" />, title: "Vision", desc: "Web3 & 3D UX" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="bento-card p-4 flex items-start gap-4"
              >
                <div className="p-2 bg-accent/10 rounded-lg">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
