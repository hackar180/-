import React, { useState } from 'react';
import { Menu, X, Search, Book, Map, Users, Heart, Mail, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'Humanitarian Blog', id: 'blog', icon: Heart },
    { label: 'Travel Guides', id: 'travel', icon: Map },
    { label: 'Meet the Team', id: 'team', icon: Users },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-earth-tan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-lg">
              <Book size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bn text-xl font-bold text-brand-green leading-tight">জীবন বদলের গল্প</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">Stories of Changing Lives</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${activePage === item.id ? 'text-brand-gold underline underline-offset-8' : 'text-gray-600'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <Search className="text-gray-400 cursor-pointer group-hover:text-brand-gold transition-colors" size={20} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-earth-tan overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-4 w-full px-4 py-3 text-left rounded-lg transition-colors hover:bg-earth-tan"
                >
                  <item.icon size={18} className="text-brand-gold" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
