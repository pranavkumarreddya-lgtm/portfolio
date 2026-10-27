"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Hero3D from '@/components/Hero3D';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-24 lg:px-32">
      <section className="pt-20 pb-32 flex flex-col items-center text-center max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 blur-[80px] -z-10 rounded-full" />
            <motion.h1
              {...fadeUp}
              className="text-6xl md:text-8xl font-bold tracking-tight mb-6 flex items-center justify-center lg:justify-start gap-4"
            >
              Hi, I'm <Image src="/images/signature.png" alt="Pranav Reddy Signature" width={400} height={120} className="inline-block" priority />
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted max-w-lg mb-10 leading-relaxed"
            >
              Full Stack Engineer & UI/UX Designer. I build immersive 3D experiences
              and high-performance applications where code meets art.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/work" className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent-dark transition-all hover:scale-105 shadow-lg shadow-accent/20">
                View My Work
              </Link>
              <div className="flex gap-3">
                <a href="#" className="p-4 glass rounded-full hover:text-accent transition-all hover:-translate-y-1">
                  <Github size={20} />
                </a>
                <a href="#" className="p-4 glass rounded-full hover:text-accent transition-all hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-4 glass rounded-full hover:text-accent transition-all hover:-translate-y-1">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full flex items-center justify-center"
          >
            {/* 3D Element in background */}
            <div className="absolute -right-20 -bottom-20 w-full h-full z-10 pointer-events-none opacity-60">
              <Hero3D />
            </div>

            {/* Large Profile Image on top */}
            <div className="relative w-64 h-80 md:w-[350px] md:h-[500px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/home-profile.webp"
                alt="Pranav Reddy"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] -z-20 rounded-full" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
