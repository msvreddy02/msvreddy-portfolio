import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Server, Database, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Available for Enterprise Workflow Projects
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Sai Vardhan Reddy <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Machanagari</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-400 font-medium">
            Software Developer & Enterprise BPM Specialist
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl text-base">
            Experienced in designing and implementing enterprise workflows using <span className="text-indigo-300 font-semibold">IBM Business Automation Workflow (BAW)</span>, <span className="text-indigo-300 font-semibold">JavaScript</span>, <span className="text-indigo-300 font-semibold">Core Java</span>, and <span className="text-indigo-300 font-semibold">REST APIs</span>[cite: 1].
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition">
              Get in Touch <ArrowRight size={18} />
            </Link>
            <a href="https://linkedin.com/in/msvreddy02" target="_blank" rel="noreferrer" className="px-6 py-3.5 rounded-xl glass-card text-gray-200 hover:text-white flex items-center gap-2 transition">
              <LinkedinIcon size={18} /> LinkedIn Profile
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
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
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
          { title: "BPM Platforms", desc: "IBM BAW 22.x/24.x, IBM BPM 8.6", icon: Cpu },
          { title: "Integrations", desc: "REST APIs, SOAP, IBM FileNet", icon: Server },
          { title: "Database Systems", desc: "Oracle Database, SQL, PL/SQL", icon: Database },
          { title: "Core Tech", desc: "JavaScript, Core Java, HTML5/CSS3", icon: Code },
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl space-y-2">
            <item.icon className="text-indigo-400" size={24} />
            <h3 className="font-semibold text-white text-base">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}