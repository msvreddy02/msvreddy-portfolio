import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience & Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/70 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section without Focus Outline */}
        <NavLink 
          to="/" 
          className="flex items-center gap-3 text-white font-bold text-lg tracking-wide focus:outline-none outline-none group"
        >
          <div className="p-2 bg-indigo-600/20 rounded-xl border border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-600/30 transition-all">
            <Code2 size={22} />
          </div>
          <span>Sai Vardhan<span className="text-indigo-400">.dev</span></span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-200 outline-none focus:outline-none ${
                  isActive
                    ? "text-indigo-400 font-semibold bg-indigo-500/10 border border-indigo-500/20 shadow-sm shadow-indigo-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 backdrop-blur-xl px-6 py-6 border-b border-white/10 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                    : "text-gray-200 hover:text-indigo-300 hover:bg-white/5"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}