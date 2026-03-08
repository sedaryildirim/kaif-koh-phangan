import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-kaif-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/assets/images/kaif-interior-shot.jpg" 
              alt="Cozy and stylish interior of Kaif Cafe with ocean view" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-kaif-blue font-medium uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              What is Kaïf?
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-kaif-ink/70 leading-relaxed">
            <p>
              Kaïf is a word that transcends language — borrowed from Arabic, embraced across cultures, it describes that perfect state of bliss. A feeling of deep pleasure, of being exactly where you're meant to be. That's what we set out to create on the shores of Koh Phangan.
            </p>
            <p>
              Born from a love of Middle Eastern flavours, fresh island ingredients, and the laid-back rhythm of Thai beach life, Kaïf is where Levantine soul food meets tropical paradise. Our kitchen serves up everything from shakshuka and freshly baked laffa to açaí bowls and cold brew — all made from scratch, every single day.
            </p>
            <p>
              Whether you're starting the morning with eggs benedict on the terrace, lingering over a long lunch with friends, or catching the sunset with a cocktail in hand — this is your place to slow down, eat well, and feel that kaïf.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                backgroundColor: "rgba(168, 198, 188, 0.15)",
                borderColor: "rgba(168, 198, 188, 0.4)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
              }}
              className="p-6 rounded-2xl border border-kaif-ink/5 bg-white shadow-sm transition-all text-center cursor-default"
            >
              <div className="text-3xl font-serif font-bold text-kaif-blue mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-kaif-ink/40 leading-tight">Made fresh daily</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                backgroundColor: "rgba(168, 198, 188, 0.15)",
                borderColor: "rgba(168, 198, 188, 0.4)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
              }}
              className="p-6 rounded-2xl border border-kaif-ink/5 bg-white shadow-sm transition-all text-center cursor-default"
            >
              <div className="text-3xl font-serif font-bold text-kaif-blue mb-1">7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-kaif-ink/40 leading-tight">Days a week</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                backgroundColor: "rgba(168, 198, 188, 0.15)",
                borderColor: "rgba(168, 198, 188, 0.4)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
              }}
              className="p-6 rounded-2xl border border-kaif-ink/5 bg-white shadow-sm transition-all text-center flex flex-col items-center justify-center cursor-default"
            >
              <div className="text-3xl font-serif font-bold text-kaif-blue mb-1">
                <Heart size={24} fill="currentColor" className="text-kaif-blue" aria-hidden="true" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-kaif-ink/40 leading-tight">Made with love</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
