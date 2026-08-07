import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, CheckCircle2, Award, Download, ExternalLink, FileText } from 'lucide-react';

export default function About() {
  const certifications = [
    {
      title: "IBM Business Automation Workflow (BAW) Developer",
      issuer: "IBM",
      category: "BPM & Workflow Architecture",
    },
    {
      title: "IBM FileNet P8 Content Engine & Process Engine Developer",
      issuer: "IBM",
      category: "Enterprise Content Management (ECM)",
    },
    {
      title: "IBM Content Navigator (ICN) Customization & Plugins",
      issuer: "IBM",
      category: "Custom UI & Dojo Extensions",
    },
  ];

  return (
    <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-16">
      {/* Header & Resume Download Action */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-white">About Me</h1>
          <p className="text-gray-400 text-lg">
            IBM FileNet P8 & BAW Developer with 4+ years of ECM/BPM experience[cite: 2].
          </p>
        </div>

        {/* Action Buttons for Resume */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/SAI_VARDHAN_REDDY_RESUME.pdf"
            download="SAI_VARDHAN_REDDY_RESUME.pdf"
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="/SAI_VARDHAN_REDDY_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition"
          >
            <ExternalLink size={16} /> Preview PDF
          </a>
        </div>
      </motion.div>

      {/* Overview Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <Briefcase />
            <h2>Professional Summary</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            Specialized in Enterprise Content Management (ECM) architecture, Process Engine workflow design, IBM Content Navigator (ICN) customization, and IBM Business Automation Workflow (BAW) integrations[cite: 2]. Hands-on expertise in Content Engine object models, ACLs/ACEs, Java APIs, and RESTful web services[cite: 2].
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <GraduationCap />
            <h2>Education Qualification</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
              <span><strong>Degree:</strong> Bachelor of Technology (B.Tech)[cite: 2]</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
              <span><strong>Institution:</strong> Marri Laxman Reddy Institute Of Technology and Management[cite: 2]</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
              <span><strong>Location:</strong> Hyderabad, Telangana, India[cite: 2]</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Certifications Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-white font-bold text-2xl">
          <Award className="text-indigo-400" size={28} />
          <h2>Professional Competencies & Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl space-y-3 relative overflow-hidden"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                {cert.category}
              </span>
              <h3 className="text-white font-bold text-base leading-snug">{cert.title}</h3>
              <p className="text-xs text-gray-400 font-medium">Issuer: {cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}