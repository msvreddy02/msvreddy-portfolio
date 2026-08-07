import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, Search } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ArchitectureVisualizer from '../components/ArchitectureVisualizer';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract category filters dynamically
  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  // Dynamic search and filter logic
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
    <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/30">
          <Cpu size={14} /> 2+ Years Enterprise ECM & BPM Experience
        </div>
        <h1 className="text-4xl font-extrabold text-white">Experience & Major Projects</h1>
        <p className="text-gray-400 text-lg">Enterprise Banking Automation, IBM BAW Integration & IBM FileNet P8 Integration</p>
      </motion.div>

      {/* Main Role Banner */}
      <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-indigo-500 flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400">Current Employer</span>
          <h2 className="text-2xl font-bold text-white">IBM BAW Developer</h2>
          <p className="text-gray-300 font-medium">Eidiko Systems Integrators Pvt. Ltd.</p>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20 font-semibold">
            Full-Time Position
          </span>
          <span className="text-xs text-gray-400">Enterprise Content & Process Automation</span>
        </div>
      </div>

      {/* Architecture Visualizer Widget */}
      <ArchitectureVisualizer />

      {/* Search & Dynamic Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pt-4 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-card text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-60">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Dynamic Project Cards Grid */}
      <div className="space-y-8">
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={proj.id || idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 md:p-8 rounded-2xl space-y-6"
          >
            {/* Project Title & Client */}
            <div className="flex flex-wrap justify-between items-start gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  <Layers size={16} /> Client: {proj.client}
                </div>
                <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
              </div>
              <span className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                Role: {proj.role}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">{proj.description}</p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((techItem, tIdx) => (
                <span key={tIdx} className="px-2.5 py-1 rounded-md bg-indigo-600/15 text-indigo-300 text-xs font-mono border border-indigo-500/20">
                  {techItem}
                </span>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {proj.highlights.map((hl, hIdx) => (
                <div key={hIdx} className="glass-panel p-4 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-indigo-400" />
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