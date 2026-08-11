import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience & Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 transition-all duration-300">
      {/* Outer Floating Pill Container (Adjusted py-1.5 to allow bigger logo) */}
        <div 
          className={`max-w-6xl mx-auto px-5 py-1.5 sm:py-2 rounded-2xl transition-all duration-300 flex items-center justify-between backdrop-blur-xl relative border ${
            scrolled
              ? 'bg-slate-950/85 border-indigo-500/40 shadow-2xl shadow-indigo-500/20'
              : 'bg-[#0B0F17]/80 border-white/15 shadow-xl shadow-indigo-500/10'
          }`}
        >
          {/* Subtle Ambient Top Glow Line */}
          <div className="absolute -top-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70"></div>

          {/* Logo Section with Explicit Inline Height Style */}
          <NavLink 
            to="/" 
            className="flex items-center focus:outline-none outline-none group z-10 my-auto"
          >
            <img 
              src="/logo_icon.png" 
              alt="SVR Logo" 
              style={{ height: '42px', width: 'auto' }}
              className="max-h-none object-contain transition-transform duration-200 group-hover:scale-105 sm:!h-[48px] md:!h-[54px]"
            />
          </NavLink>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-950/60 border border-white/10 relative">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-colors duration-200 outline-none focus:outline-none ${
                  isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {/* Dynamic Sliding Gradient Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg shadow-indigo-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none z-10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 max-w-6xl mx-auto p-4 rounded-2xl bg-[#0B0F17]/95 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-bold shadow-lg shadow-indigo-600/30"
                      : "text-gray-200 hover:text-indigo-300 hover:bg-white/5"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}