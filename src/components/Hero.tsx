import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/kaif-hero-image.jpg" 
          alt="Aerial view of Kaif Beachside Cafe at Chaloklum Bay" 
          className="w-full h-full object-cover"
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
          className="text-7xl md:text-9xl font-serif font-bold mb-8 tracking-tighter flex items-center justify-center"
        >
          <span className="text-white font-light mr-4 md:mr-8">{"{"}</span>
          KAIF
          <span className="text-white font-light ml-4 md:ml-8">{"}"}</span>
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
          <a 
            href="#menu" 
            className="inline-flex items-center gap-2 bg-white text-kaif-ink px-8 py-4 rounded-full font-medium hover:bg-kaif-sand transition-all group w-full sm:w-auto justify-center"
          >
            Explore Menu
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a 
            href="#location" 
            className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
          >
            Find Us
            <MapPin size={18} aria-hidden="true" />
          </a>
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
