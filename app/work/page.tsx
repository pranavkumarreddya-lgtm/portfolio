"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Work() {
  const projects = [
    {
      title: "Aether OS",
      category: "Web OS / SaaS",
      desc: "A fully functional operating system in the browser with window management and app ecosystem.",
      tags: ["Next.js", "WebAssembly", "Three.js"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Lumina AI",
      category: "Generative Art",
      desc: "AI-powered design tool that transforms text prompts into high-fidelity architectural renders.",
      tags: ["PyTorch", "React", "OpenAI"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Nexus Commerce",
      category: "E-commerce",
      desc: "High-performance headless commerce engine with real-time inventory synchronization.",
      tags: ["Shopify", "Hydrogen", "Tailwind"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Void Protocol",
      category: "Web3 / Finance",
      desc: "Decentralized liquidity aggregator with advanced routing algorithms for minimal slippage.",
      tags: ["Solidity", "Ethers.js", "Next.js"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <main className="min-h-screen px-6 py-32 md:px-24 lg:px-32 max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        animate="animate"
        className="text-center mb-20"
      >
        <motion.h1 {...fadeUp} className="text-5xl font-bold mb-4">Selected <span className="text-gradient">Work</span></motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-muted max-w-2xl mx-auto text-lg">
          A collection of projects that push the boundaries of the web, focusing on immersive interactions and performance.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bento-card overflow-hidden relative"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                <ExternalLink size={20} />
              </div>
              <ArrowUpRight className="text-muted group-hover:text-accent transition-colors" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-accent text-sm font-medium mb-4">{project.category}</p>
            <p className="text-muted mb-6 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-black/5 border border-black/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
