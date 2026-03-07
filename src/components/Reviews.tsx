import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/reviews';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-kaif-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10"><Quote size={120} aria-hidden="true" /></div>
        <div className="absolute bottom-10 right-10 rotate-180"><Quote size={120} aria-hidden="true" /></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <span className="text-white/60 font-medium uppercase tracking-widest text-sm">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-16">What Guests Say</h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold uppercase tracking-widest text-sm">{review.name}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{review.meta}</span>
                </div>
                <div className="flex gap-0.5 text-yellow-400" aria-label={`${review.rating} star rating`}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" aria-hidden="true" />)}
                </div>
              </div>
              <p className="text-sm italic font-serif leading-relaxed text-white/80 mb-6 flex-grow text-left">"{review.text}"</p>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] text-white/40 uppercase tracking-widest">{review.date}</span>
                <div className="flex gap-2">
                  <span className="text-[9px] px-2 py-1 bg-white/5 rounded-full uppercase tracking-tighter">Food 5/5</span>
                  <span className="text-[9px] px-2 py-1 bg-white/5 rounded-full uppercase tracking-tighter">Service 5/5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
