import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure modal is rendered before focusing
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-kaif-ink/80 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
            className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-kaif-ink/5 flex justify-between items-center bg-kaif-cream">
              <h2 id="privacy-modal-title" className="text-2xl font-serif font-bold">Privacy Policy</h2>
              <button 
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close Privacy Policy"
                className="p-2 hover:bg-kaif-ink/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-kaif-blue"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-kaif-ink/70 space-y-6 text-sm leading-relaxed">
              <section>
                <h3 className="font-bold text-kaif-ink mb-2 uppercase tracking-widest text-xs">1. Information We Collect</h3>
                <p>We collect information you provide directly to us when you make a reservation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.</p>
              </section>
              <section>
                <h3 className="font-bold text-kaif-ink mb-2 uppercase tracking-widest text-xs">2. How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, to process your reservations, and to communicate with you about your visits and special offers.</p>
              </section>
              <section>
                <h3 className="font-bold text-kaif-ink mb-2 uppercase tracking-widest text-xs">3. Information Sharing</h3>
                <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
              </section>
              <section>
                <h3 className="font-bold text-kaif-ink mb-2 uppercase tracking-widest text-xs">4. Security</h3>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
              </section>
              <section>
                <h3 className="font-bold text-kaif-ink mb-2 uppercase tracking-widest text-xs">5. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at our physical location in Chaloklum Bay, Koh Phangan.</p>
              </section>
            </div>
            <div className="p-6 bg-kaif-cream border-t border-kaif-ink/5 text-center">
              <button 
                onClick={onClose}
                className="bg-kaif-blue text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-kaif-blue/90 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
