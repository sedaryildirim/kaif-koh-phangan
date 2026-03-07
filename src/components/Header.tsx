import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#location", label: "Location" },
  ];

  return (
    <>
      <nav 
        aria-label="Main Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          scrolled ? "glass-nav py-3" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="/" className={cn("text-2xl font-serif font-bold tracking-widest transition-colors", scrolled ? "text-kaif-ink" : "text-white")}>
              <span className="opacity-40 font-light mr-1">{"{"}</span>
              Kaif
              <span className="opacity-40 font-light ml-1">{"}"}</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className={cn("hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest transition-colors", scrolled ? "text-kaif-ink" : "text-white")}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-kaif-blue transition-colors">{link.label}</a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            className={cn("md:hidden p-2 transition-colors", scrolled ? "text-kaif-ink" : "text-white")}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-kaif-cream flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-2xl font-serif"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
