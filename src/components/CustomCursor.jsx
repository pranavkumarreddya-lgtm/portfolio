import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const onMouseMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    const handleMouseEnterClickable = () => setIsHovering(true);
    const handleMouseLeaveClickable = () => setIsHovering(false);

    const addListeners = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [onclick], .cursor-pointer');
      clickables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterClickable);
        el.addEventListener('mouseleave', handleMouseLeaveClickable);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [onMouseMove]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Outer Glowing Neon Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 56 : 34,
            height: isHovering ? 56 : 34,
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 1.15 : 1,
            borderColor: isHovering ? 'rgba(168, 85, 247, 0.9)' : 'rgba(99, 102, 241, 0.6)',
            backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.1)' : 'rgba(99, 102, 241, 0)',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="rounded-full border-2 border-indigo-500/60 shadow-[0_0_20px_rgba(99,102,241,0.4)] backdrop-blur-[1px]"
        />
      </motion.div>

      {/* Glowing Inner Core Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 10 : 6,
            height: isHovering ? 10 : 6,
            opacity: isVisible ? 1 : 0,
            backgroundColor: isHovering ? '#06b6d4' : '#818cf8',
            boxShadow: isHovering 
              ? '0 0 15px 3px rgba(6, 182, 212, 0.9)' 
              : '0 0 10px 2px rgba(129, 140, 248, 0.8)',
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 400 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}
