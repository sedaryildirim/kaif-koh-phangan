import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, ExternalLink, Copy } from 'lucide-react';
import { toast } from 'sonner';

export const Location: React.FC = () => {
  const address = "Chaloklum Bay, Koh Phangan, Surat Thani 84280, Thailand";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success('Address copied to clipboard', {
      description: 'You can now paste it into your maps app.',
      duration: 3000,
    });
  };

  return (
    <section id="location" className="py-16 px-6 bg-kaif-sand">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="text-kaif-blue font-medium uppercase tracking-widest text-sm">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Visit Kaif</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-kaif-blue/10 flex items-center justify-center text-kaif-blue shrink-0">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Address</h4>
                  <button 
                    onClick={copyToClipboard}
                    className="text-[10px] uppercase tracking-widest font-bold text-kaif-blue hover:text-kaif-blue/70 transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100"
                  >
                    <Copy size={10} />
                    Copy
                  </button>
                </div>
                <p className="text-kaif-ink/70 text-sm">{address}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-kaif-blue/10 flex items-center justify-center text-kaif-blue shrink-0">
                <Clock size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Hours</h4>
                <p className="text-kaif-ink/70 text-sm">Open Daily: 8:00 AM — 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="https://share.google/1T5SlyruOXKairdIj" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Get directions to Kaif on Google Maps"
              className="inline-flex items-center gap-2 bg-kaif-blue text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-kaif-blue/90 transition-all shadow-md"
            >
              Get Directions
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[450px] rounded-2xl overflow-hidden shadow-xl relative"
        >
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?q=9.78696148572007,100.00386117116436&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            title="Kaif Location Map"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg pointer-events-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-kaif-blue mb-1">Directly on the beach</p>
            <p className="text-xs text-kaif-ink font-medium">Look for the white umbrellas right next to the Chaloklum pier.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
