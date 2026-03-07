import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { menuData } from '../data/menu';
import { MenuTab } from '../types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>('drinks');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const filteredMenu = useMemo(() => {
    return menuData[activeTab].filter(item => {
      return activeFilters.length === 0 || 
             activeFilters.every(filter => item.tags.includes(filter));
    });
  }, [activeTab, activeFilters]);

  const tabs: { id: MenuTab; label: string }[] = [
    { id: 'drinks', label: 'Drinks' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'allDay', label: 'All Day' },
  ];

  const filters = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten Free' },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-kaif-sand">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="text-kaif-blue font-medium uppercase tracking-widest text-sm">Taste the Island</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-12">Our Menu</h2>
        
        <div className="flex justify-center gap-8 border-b border-kaif-ink/10 mb-8 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 text-sm uppercase tracking-widest font-bold transition-all whitespace-nowrap",
                activeTab === tab.id ? "text-kaif-blue border-b-2 border-kaif-blue" : "text-kaif-ink/40"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto justify-center">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                aria-pressed={activeFilters.includes(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                  activeFilters.includes(filter.id) 
                    ? "bg-kaif-blue text-white border-kaif-blue" 
                    : "bg-white text-kaif-ink/60 border-kaif-ink/10 hover:border-kaif-blue"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          key={`${activeTab}-${activeFilters.join(',')}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-left"
        >
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-serif font-bold group-hover:text-kaif-blue transition-colors">{item.name}</h3>
                    <div className="flex gap-1">
                      {item.tags.includes('vegetarian') && <div className="w-2 h-2 rounded-full bg-green-500" title="Vegetarian" />}
                      {item.tags.includes('vegan') && <div className="w-2 h-2 rounded-full bg-emerald-600" title="Vegan" />}
                      {item.tags.includes('gluten-free') && <div className="w-2 h-2 rounded-full bg-amber-500" title="Gluten Free" />}
                    </div>
                  </div>
                  <span className="text-kaif-blue font-medium whitespace-nowrap ml-4">{item.price} THB</span>
                </div>
                <p className="text-kaif-ink/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-kaif-ink/40 italic">
              No items found matching your search or filters.
            </div>
          )}
        </motion.div>
        
        <div className="mt-16">
          <p className="text-kaif-ink/40 italic text-sm">
            * Please inform our staff of any allergies. Vegan and gluten-free options available.
          </p>
        </div>
      </div>
    </section>
  );
};
