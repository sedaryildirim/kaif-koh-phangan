import React from 'react';
import { motion } from 'motion/react';
import { galleryImages } from '../data/gallery';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-kaif-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-kaif-blue font-medium uppercase tracking-widest text-sm">Visuals</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4">The Kaif Vibe</h2>
        </div>
        
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="break-inside-avoid relative overflow-hidden rounded-xl shadow-sm border border-kaif-ink/5"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
