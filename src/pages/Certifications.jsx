import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, ZoomIn, Layers } from 'lucide-react';
import { certificationsData } from '../data/certificationsData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically extract categories
  const categories = ['All', ...new Set(certificationsData.map((item) => item.category))];

  // Dynamically filter certs based on category tab
  const filteredCerts = activeCategory === 'All'
    ? certificationsData
    : certificationsData.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/30">
          <Award size={14} /> Verified Enterprise Credentials
        </div>
        <h1 className="text-4xl font-extrabold text-white">Certifications & Credentials</h1>
        <p className="text-gray-400 text-lg">
          Official IBM FileNet P8, BAW, and Enterprise Content Management specializations.
        </p>
      </motion.div>

      {/* Dynamic Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === category
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'glass-card text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 group flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300"
          >
            {/* Image Preview Window */}
            <div className="relative h-48 bg-linear-to-br from-indigo-950 via-slate-900 to-purple-950 flex items-center justify-center p-4 border-b border-white/10 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />

              {/* Styled Fallback Badge when no image is found */}
              <div className="hidden flex-col items-center justify-center text-center p-4 space-y-2">
                <div className="p-3 bg-indigo-600/30 rounded-full border border-indigo-500/40 text-indigo-300">
                  <Award size={32} />
                </div>
                <span className="text-xs font-bold text-white">{cert.title}</span>
                <span className="text-[10px] text-indigo-300 font-mono">{cert.issuer}</span>
              </div>

              {/* Hover Zoom Prompt */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-indigo-600 text-white shadow-lg">
                  <ZoomIn size={20} />
                </div>
                <span className="text-xs font-semibold text-white">Click to View Certificate</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-400 font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    {cert.category}
                  </span>
                  <span className="text-gray-400 font-mono text-[11px]">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags & Modal Action */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 rounded-xl glass-panel text-xs font-semibold text-indigo-300 hover:text-white hover:bg-indigo-600/30 transition flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={14} /> View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-2xl w-full rounded-2xl overflow-hidden border border-white/20 p-6 space-y-6 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition"
              >
                <X size={20} />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold">
                  {selectedCert.issuer}
                </span>
                <h2 className="text-2xl font-bold text-white">{selectedCert.title}</h2>
              </div>

              {/* Modal Image Box */}
              <div className="relative h-64 bg-slate-900 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-2">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  className="w-full h-full object-contain"
                />
                <div className="hidden flex-col items-center justify-center text-center p-6 space-y-2">
                  <Award size={48} className="text-indigo-400" />
                  <p className="text-sm font-semibold text-white">{selectedCert.title}</p>
                  <p className="text-xs text-gray-400">Credential ID: {selectedCert.credentialId}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Overview</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedCert.description}</p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}