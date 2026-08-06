import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">About Me</h1>
        <p className="text-gray-400 text-lg">
          Software Developer with 1.5+ years of experience in Enterprise Application Development and BPM[cite: 1].
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <Briefcase />
            <h2>Professional Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            I specialize in enterprise workflow automation using IBM Business Automation Workflow (BAW) and IBM BPM[cite: 1]. Experienced in designing BPMN processes, Human Services, Integration Services, and Coach UI components[cite: 1].
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-indigo-400 font-bold text-xl">
            <GraduationCap />
            <h2>Education & Base</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
              <span><strong>Degree:</strong> B.Tech in Information Technology (2024)[cite: 1]</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
              <span><strong>College:</strong> Marri Laxman Reddy Institute of Technology[cite: 1]</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
              <span><strong>Location:</strong> Hyderabad, Telangana, India[cite: 1]</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}