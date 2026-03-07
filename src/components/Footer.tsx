import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  return (
    <footer className="bg-kaif-ink text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold tracking-widest">
            <span className="opacity-40 font-light mr-1">{"{"}</span>
            Kaif
            <span className="opacity-40 font-light ml-1">{"}"}</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Modern beachside dining in the heart of Chaloklum Bay. Fresh flavors, peaceful vibes.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Follow Kaif on Instagram" className="hover:text-kaif-blue transition-colors"><Instagram size={20} /></a>
            <a href="#" aria-label="Follow Kaif on Facebook" className="hover:text-kaif-blue transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-3 text-white/50 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-3 text-white/50 text-sm">
            <li className="flex items-center gap-2"><MapPin size={14} aria-hidden="true" /> Chaloklum Bay, Koh Phangan</li>
            <li className="flex items-center gap-2"><Clock size={14} aria-hidden="true" /> Open Daily: 8am — 8pm</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-[10px] uppercase tracking-[0.2em]">
        <span>© 2024 Kaif Koh Phangan. All rights reserved.</span>
        <div className="flex gap-8">
          <button 
            onClick={onPrivacyClick} 
            className="hover:text-white transition-colors"
            aria-label="View Privacy Policy"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
};
