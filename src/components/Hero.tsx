import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Clock, MapPin, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          src="/assets/images/kaif-hero-image.jpg" 
          alt="Aerial view of Kaif Beachside Cafe at Chaloklum Bay" 
          className="w-full h-[120%] object-cover absolute top-0 left-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium"
        >
          Chaloklum Bay • Koh Phangan
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-serif font-bold mb-8 tracking-[0.15em] flex items-center justify-center"
        >
          <span className="text-white font-light mr-8 md:mr-16">{"{"}</span>
          KAIF
          <span className="text-white font-light ml-8 md:ml-16">{"}"}</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <Clock size={16} aria-hidden="true" />
            <span>Open 8am — 8pm</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-white rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            <span>Direct Beach Access</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            href="#menu" 
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 bg-white text-kaif-ink px-8 py-4 rounded-full font-medium hover:bg-kaif-sand transition-colors group w-full sm:w-auto justify-center shadow-lg shadow-black/5"
          >
            Explore Menu
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </motion.a>
          <motion.a 
            href="https://delivery-kpg.com/stores/kaif"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            Order Online
            <ChevronRight size={18} aria-hidden="true" />
          </motion.a>
          <motion.a 
            href="#location" 
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            Find Us
            <MapPin size={18} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" aria-hidden="true" />
      </motion.div>
    </section>
  );
};
