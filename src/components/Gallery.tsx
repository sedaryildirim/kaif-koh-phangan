import React from 'react';
import { motion } from 'motion/react';
import { galleryImages } from '../data/gallery';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-kaif-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-kaif-blue font-medium uppercase tracking-widest text-sm">Visuals</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">The {'{'} Kaif {'}'} Vibe</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.slice(0, 6).map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-2xl shadow-sm border border-kaif-ink/5 group aspect-[4/3]"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
