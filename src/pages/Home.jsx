import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, ArrowRight, Cpu, Server, Database, Code } from 'lucide-react';
import InteractiveTerminal from '../components/InteractiveTerminal';

// Custom clean SVG for LinkedIn to avoid icon name conflicts
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-24">
      {/* Hero Section */}
<section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-10">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex-1 space-y-6"
  >
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/30">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      Available for Enterprise ECM & BPM Workflow Projects
    </div>

    <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
      Sai Vardhan Reddy <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Machanagari</span>
    </h1>

    <h2 className="text-xl sm:text-2xl text-gray-400 font-medium">
      IBM FileNet P8 & BAW Enterprise Developer
    </h2>

    <p className="text-gray-400 leading-relaxed max-w-xl text-base">
      Experienced in designing and implementing enterprise ECM and workflow applications using <span className="text-indigo-300 font-semibold">IBM FileNet P8</span>, <span className="text-indigo-300 font-semibold">IBM BAW v24.0</span>, <span className="text-indigo-300 font-semibold">Java</span>, and <span className="text-indigo-300 font-semibold">REST APIs</span>.
    </p>

    {/* Buttons Container */}
    <div className="flex flex-wrap gap-3 pt-2">
      {/* 1. Direct Resume Download */}
      <a 
        href="/SAI VARDHAN REDDY M.pdf" 
        download="SAI VARDHAN REDDY M.pdf" 
        className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition text-sm"
      >
        <Download size={18} /> Download Resume
      </a>

      {/* 2. In-Browser PDF Preview */}
      <a 
        href="/SAI VARDHAN REDDY M.pdf" 
        target="_blank" 
        rel="noreferrer" 
        className="px-4 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-semibold flex items-center gap-2 transition border border-white/10 text-sm"
      >
        <ExternalLink size={16} /> Preview PDF
      </a>

      {/* 3. Contact Route */}
      <Link to="/contact" className="px-5 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-semibold flex items-center gap-2 transition text-sm">
        Get in Touch <ArrowRight size={16} />
      </Link>

      {/* 4. LinkedIn Link */}
      <a href="https://linkedin.com/in/msvreddy02" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-semibold flex items-center gap-2 transition text-sm">
        <LinkedinIcon size={16} /> LinkedIn
      </a>
    </div>
  </motion.div>

  {/* Profile Image */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
    <img 
      src="/profile.jpg" 
      alt="Sai Vardhan Reddy Machanagari" 
      className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-white/20 shadow-2xl"
    />
  </motion.div>
</section>

      {/* Tech Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "BPM & ECM Platforms", desc: "IBM FileNet P8, BAW 24.0, BPM 8.6", icon: Cpu },
          { title: "Integrations", desc: "REST APIs, CE/PE Java API, FileNet", icon: Server },
          { title: "Database Systems", desc: "Oracle Database, SQL, MS SQL Server", icon: Database },
          { title: "Core Tech", desc: "Java, J2EE, JavaScript, ICN Plugins", icon: Code },
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl space-y-2">
            <item.icon className="text-indigo-400" size={24} />
            <h3 className="font-semibold text-white text-base">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Interactive Terminal CLI */}
      <section className="pt-6">
        <h3 className="text-center text-xs font-mono uppercase tracking-widest text-indigo-400 mb-4">
          Interactive Developer CLI
        </h3>
        <InteractiveTerminal />
      </section>
    </div>
  );
}