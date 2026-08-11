import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, ArrowRight, Cpu, Server, Database, Code, Sparkles, ShieldCheck, Award } from 'lucide-react';
import InteractiveTerminal from '../components/InteractiveTerminal';

// Custom clean SVG for LinkedIn
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-20 overflow-hidden">
      
      {/* 🔮 Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-6 relative z-10">
        
        {/* Left Column: Headline & Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs font-semibold text-indigo-300 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Sparkles size={14} className="text-indigo-400" />
            Available for Enterprise ECM & BPM Workflow Projects
          </div>

          {/* Main Hero Title */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
              Sai Vardhan Reddy
            </h1>
            <h1 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight leading-tight">
              Machanagari
            </h1>
            <h2 className="text-xl sm:text-2xl text-indigo-200 font-bold pt-2 flex items-center gap-2">
              <Cpu size={22} className="text-pink-400" /> IBM FileNet P8 & BAW Enterprise Developer
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-xl text-base">
            Experienced in designing and implementing enterprise ECM and workflow applications using <span className="text-indigo-300 font-semibold">IBM FileNet P8</span>, <span className="text-indigo-300 font-semibold">IBM BAW v24.0</span>, <span className="text-indigo-300 font-semibold">Java</span>, and <span className="text-indigo-300 font-semibold">REST APIs</span>.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="/SAI VARDHAN REDDY M.pdf" 
              download="SAI VARDHAN REDDY M.pdf" 
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold flex items-center gap-2 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 text-sm"
            >
              <Download size={18} /> Download Resume
            </a>

            <a 
              href="/SAI VARDHAN REDDY M.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-bold flex items-center gap-2 transition border border-white/10 hover:scale-105 text-sm"
            >
              <ExternalLink size={16} /> Preview PDF
            </a>

            <Link to="/contact" className="px-5 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-bold flex items-center gap-2 transition hover:scale-105 text-sm">
              Get in Touch <ArrowRight size={16} />
            </Link>

            <a href="https://linkedin.com/in/msvreddy02" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-bold flex items-center gap-2 transition hover:scale-105 text-sm">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Premium Profile Image with Floating Stat Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col items-center"
        >
          {/* Main Avatar Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/30">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative border-4 border-slate-900">
              <img 
                src="/profile.jpg" 
                alt="Sai Vardhan Reddy Machanagari" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Floating Minimal Badge Under Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="-mt-6 relative z-20 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/15 shadow-xl flex items-center gap-2 backdrop-blur-md"
          >
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-xs font-semibold text-gray-200">2+ Years Enterprise Banking Experience</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {[
          { title: "BPM & ECM Platforms", desc: "IBM FileNet P8, BAW 24.0, BPM 8.6", icon: Cpu },
          { title: "Integrations", desc: "REST APIs, CE/PE Java API, FileNet", icon: Server },
          { title: "Database Systems", desc: "Oracle Database, SQL, MS SQL Server", icon: Database },
          { title: "Core Tech", desc: "Java, J2EE, JavaScript, ICN Plugins", icon: Code },
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl space-y-2 border border-white/10 hover:border-indigo-500/40 transition">
            <item.icon className="text-indigo-400" size={24} />
            <h3 className="font-semibold text-white text-base">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Interactive Terminal CLI */}
      <section className="pt-6 relative z-10">
        <h3 className="text-center text-xs font-mono uppercase tracking-widest text-indigo-400 mb-4">
          Interactive Developer CLI
        </h3>
        <InteractiveTerminal />
      </section>
    </div>
  );
}