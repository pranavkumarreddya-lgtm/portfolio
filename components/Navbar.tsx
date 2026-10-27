"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center gap-8 text-sm font-medium text-foreground/80">
      <Link href="/" className="hover:text-accent transition-colors">Home</Link>
      <Link href="/about" className="hover:text-accent transition-colors">About</Link>
      <Link href="/work" className="hover:text-accent transition-colors">Work</Link>
      <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
    </nav>
  );
}
