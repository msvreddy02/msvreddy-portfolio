import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, CheckCircle2, Award, Download, ExternalLink, Code2 } from 'lucide-react';
import { aboutData } from '../data/aboutData';

export default function About() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-16">
      {/* Header & Resume Download Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-white">{aboutData.header.title}</h1>
          <p className="text-gray-400 text-lg">
            {aboutData.header.tagline}
          </p>
        </div>

        {/* Quick Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {aboutData.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 text-center space-y-1">
            <div className="text-2xl font-extrabold text-indigo-400">{stat.value}</div>
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
        ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={aboutData.header.resumeUrl}
            download="SAI VARDHAN REDDY M.pdf"
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href={aboutData.header.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition border border-white/10"
          >
            <ExternalLink size={16} /> Preview PDF
          </a>
        </div>
      </motion.div>

      {/* Overview Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl space-y-4 border border-white/10">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <Briefcase />
            <h2>{aboutData.summary.title}</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            {aboutData.summary.description}
          </p>
        </div>

        {/* Current Position Highlights */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-indigo-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400">Current Position</span>
            <h3 className="text-xl font-bold text-white">IBM BAW & FileNet Developer</h3>
            <p className="text-sm text-gray-300">Eidiko Systems Integrators Pvt. Ltd. | Hyderabad, India</p>
        </div>
        <span className="px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold">
            Full-Time Role
        </span>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4 border border-white/10">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <GraduationCap />
            <h2>{aboutData.education.title}</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            {aboutData.education.details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
                <span><strong>{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Technical Stack Badges */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <Code2 className="text-indigo-400" size={24} />
          <h2>Core Technical Stack</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {aboutData.skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-lg glass-card border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <strong>{skill.name}</strong>
              <span className="text-[10px] text-indigo-300 opacity-70">({skill.category})</span>
            </span>
          ))}
        </div>
      </section>

      {/* Competencies Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-white font-bold text-2xl">
          <Award className="text-indigo-400" size={28} />
          <h2>Professional Competencies & Specializations</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {aboutData.competencies.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl space-y-3 relative overflow-hidden border border-white/10 flex flex-col justify-between hover:border-indigo-500/40 transition"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 inline-block">
                  {cert.category}
                </span>
                <h3 className="text-white font-bold text-base leading-snug">{cert.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{cert.description}</p>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-medium">
                <span>Issuer: {cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}