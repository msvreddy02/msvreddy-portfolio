import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Search, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
          <Sparkles size={14} className="text-indigo-400" />
          <span>Enterprise Production Deployments</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Experience & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Major Projects</span>
        </h1>
        <p className="text-gray-400 text-base max-w-2xl">
          Enterprise banking workflows, IBM BAW process modeling, and FileNet P8 document lifecycle automation.
        </p>
      </motion.div>

      {/* Current Position Banner */}
      <div className="glass-card p-6 rounded-2xl border-l-4 border-l-indigo-500 border border-white/10 flex flex-wrap justify-between items-center gap-4 relative z-10 shadow-xl">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 flex items-center gap-1.5">
            <Building2 size={14} /> Current Organization
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">IBM BAW Developer</h2>
          <p className="text-gray-300 text-sm font-medium">Eidiko Systems Integrators Pvt. Ltd. | Hyderabad, India</p>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 font-bold">
            Full-Time Role
          </span>
          <span className="text-xs text-gray-400 font-mono">ECM & Workflow Practice</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pt-4 border-t border-white/10 relative z-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-card text-gray-400 hover:text-white border border-white/10 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-64">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/70 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-indigo-500 transition shadow-inner"
          />
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-6 relative z-10">
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={proj.id || idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card p-6 md:p-7 rounded-2xl space-y-5 border border-white/10 hover:border-indigo-500/40 transition-all shadow-xl"
          >
            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-3 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  <Layers size={15} /> Client: {proj.client}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">{proj.title}</h3>
              </div>
              <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-xl">
                Role: <strong className="text-white">{proj.role}</strong>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">{proj.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((techItem, tIdx) => (
                <span key={tIdx} className="px-3 py-1 rounded-lg bg-indigo-600/15 text-indigo-300 text-xs font-mono font-semibold border border-indigo-500/20">
                  {techItem}
                </span>
              ))}
            </div>

            {/* Key Deliverables & Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {proj.highlights.map((hl, hIdx) => (
                <div key={hIdx} className="p-3.5 rounded-xl border border-white/5 bg-slate-950/40 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                    {hl.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-normal">{hl.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}