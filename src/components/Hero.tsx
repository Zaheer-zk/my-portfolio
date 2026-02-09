'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'; // Kept for future use
import { useRef } from 'react';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { div } from 'framer-motion/client';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  /* Removed custom particle state and effect in favor of new components */

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950 text-white"
    >
      <div className="absolute inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Zaheer Khan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Senior Software Development Engineer at EDGE Corporation
          </motion.p>
          <motion.p
            className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0"
             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Specializing in enterprise-grade full-stack solutions with scalability and performance in mind.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center relative"
          style={{ y, opacity, scale }}
        >
             {/* Gradient glow behind the image */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20 transform scale-75"></div>
            
            <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
               {/* Placeholder for user image */}
               <div className="w-full h-full relative">
                    <Image 
                      src="/hero-image.png" 
                      alt="Zaheer Khan" 
                      fill 
                      className="object-cover" 
                      priority 
                    />
               </div>
            </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
