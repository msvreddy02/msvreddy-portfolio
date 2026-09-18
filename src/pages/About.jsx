import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, CheckCircle2, Award, Download, ExternalLink, Code2, Sparkles, Building2 } from 'lucide-react';
import { aboutData } from '../data/aboutData';
import TiltCard from '../components/TiltCard';

export default function About() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-14 overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2 relative z-10"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Sparkles size={13} />
            Enterprise Workflow Specialist
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {aboutData.header.title}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            {aboutData.header.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
          <a
            href={aboutData.header.resumeUrl}
            download="SAI VARDHAN REDDY M.pdf"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href={aboutData.header.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-bold text-sm flex items-center gap-2 transition border border-white/10 hover:scale-105"
          >
            <ExternalLink size={16} /> Preview PDF
          </a>
        </div>
      </motion.div>

      {/* Quick Stats Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
      >
        {aboutData.stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-indigo-500/40 text-center flex flex-col justify-center items-center gap-1 shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider leading-tight text-center px-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Overview Grid */}
      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        
        {/* Professional Summary */}
        <div className="glass-card p-7 rounded-2xl space-y-4 border border-white/10 hover:border-indigo-500/30 transition">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <Briefcase />
            <h2>{aboutData.summary.title}</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            {aboutData.summary.description}
          </p>
        </div>

        {/* Current Position */}
        <div className="glass-card p-7 rounded-2xl border-l-4 border-l-indigo-500 border border-white/10 flex flex-col justify-between gap-6 hover:border-indigo-500/30 transition">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-bold tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Building2 size={14} /> Current Position
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                Full-Time Role
              </span>
            </div>
            <h3 className="text-xl font-black text-white">IBM BAW & FileNet Developer</h3>
            <p className="text-sm text-gray-400">Eidiko Systems Integrators Pvt. Ltd. | Hyderabad, India</p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
              <GraduationCap size={18} />
              <span>{aboutData.education.title}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {aboutData.education.details.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span><strong>{item.label}:</strong> {item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Technical Stack Badges */}
      <section className="space-y-4 relative z-10">
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <Code2 className="text-indigo-400" size={24} />
          <h2>Core Technical Stack</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {aboutData.skills.map((skill, idx) => (
            <span key={idx} className="px-3.5 py-2 rounded-xl glass-card border border-white/10 text-xs font-mono text-gray-200 flex items-center gap-2 hover:border-indigo-500/40 transition">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400"></span>
              <strong className="text-white">{skill.name}</strong>
              <span className="text-[11px] text-indigo-300 opacity-80">({skill.category})</span>
            </span>
          ))}
        </div>
      </section>

      {/* Competencies Section with 3D Holographic Tilt Cards */}
      <section className="space-y-6 relative z-10 [perspective:1000px]">
        <div className="flex items-center gap-3 text-white font-bold text-2xl">
          <Award className="text-indigo-400" size={28} />
          <h2>Professional Competencies & Specializations</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {aboutData.competencies.map((cert, idx) => (
            <TiltCard key={idx} className="h-full">
              <div className="h-full glass-card p-6 rounded-2xl space-y-3 relative overflow-hidden border border-white/10 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all bg-gradient-to-b from-slate-900/90 to-slate-950/90">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 inline-block">
                    {cert.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug">{cert.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{cert.description}</p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-medium">
                  {/* <span>Issuer: <strong className="text-gray-300">{cert.issuer}</strong></span> */}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

    </div>
  );
}