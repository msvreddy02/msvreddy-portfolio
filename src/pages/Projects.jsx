import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Database, FileText, Cpu, Server } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Digital Automation for Conventional Services",
      client: "Ahli Bank",
      role: "BPM Developer",
      tech: ["IBM FileNet P8 (CE, PE)", "IBM Content Navigator (ICN)", "IBM BAW v24.0", "Java/J2EE", "REST APIs", "Oracle DB"],
      description: "Engineered core FileNet object models and integrated IBM BAW process applications with FileNet P8 repositories via REST services and custom Java APIs. Designed operational workflows using Process Designer, establishing custom Work Queues, In-Baskets, and ICN plugins using Java and Dojo.",
      highlights: [
        { title: "Object Modeling & Workflow", text: "Configured Object Stores, Document Classes, Property Templates, Choice Lists, and Process Engine Work Queues." },
        { title: "ICN Customization", text: "Tailored IBM Content Navigator with personalized Desktops, Entry Templates, and custom Java/Dojo plugins ." },
        { title: "Automated Triggers", text: "Built custom Java Event Actions and Subscriptions for automated document processing and property updates ." },
        { title: "Security & Compliance", text: "Implemented FileNet ACLs, ACEs, and role-based authorization to strictly satisfy banking regulatory standards ." }
      ]
    },
    {
      title: "Digital Automation for Islamic Services",
      client: "Ahli Bank",
      role: "BPM Developer",
      tech: ["IBM FileNet P8", "IBM BAW", "IBM BPM 8.6", "Java/J2EE", "RESTful Web Services", "SQL Server"],
      description: "Built and optimized enterprise ECM and BPM solutions for end-to-end Islamic Account Services and cheque book processing . Led historical document migration and Process Engine performance tuning to accelerate customer request fulfillments .",
      highlights: [
        { title: "BAW Process Integration", text: "Integrated IBM BAW process applications with FileNet repositories for automated cheque book request routing and lifecycle management ." },
        { title: "Legacy Migration", text: "Executed document migration and validation of historical customer records and request files from legacy systems ." },
        { title: "Performance Tuning", text: "Optimized FileNet search indexing strategies, log analysis, RCA, and queue performance tuning on Process Engine ." },
        { title: "Custom Java Services", text: "Developed custom Java integration services connecting repositories with core banking middleware ." }
      ]
    },
    {
      title: "Conventional Account Opening",
      client: "Ahli Bank",
      role: "BPM Developer",
      tech: ["IBM BAW", "IBM FileNet P8", "IBM Content Navigator", "Java", "REST APIs", "Oracle DB"],
      description: "Designed automated Account Opening processes in IBM BAW integrated directly with IBM FileNet P8 for real-time customer identification document ingestion, verification, and indexing .",
      highlights: [
        { title: "Real-time Ingestion", text: "Connected BAW Human Tasks and Business Rules with FileNet for real-time document retrieval during approval steps ." },
        { title: "Operator Workflows", text: "Configured Process Designer custom Work Queues and ICN Entry Templates for bank verification teams ." },
        { title: "Automated Metadata Updates", text: "Built Java Event Actions for automated metadata updates upon BAW account opening approvals ." },
        { title: "System RCA & Diagnostics", text: "Executed log analysis and queue performance tuning across BAW and Process Engine components ." }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/30">
          <Cpu size={14} /> 2+ Years Enterprise ECM & BPM Experience 
        </div>
        <h1 className="text-4xl font-extrabold text-white">Experience & Major Projects</h1>
        <p className="text-gray-400 text-lg">Enterprise Banking Automation, IBM BAW Integration & IBM FileNet P8 Integration </p>
      </motion.div>

      {/* Main Role Banner */}
      <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-indigo-500 flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400">Current Employer </span>
          <h2 className="text-2xl font-bold text-white">IBM BAW Developer </h2>
          <p className="text-gray-300 font-medium">Eidiko Systems Integrators Pvt. Ltd. </p>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20 font-semibold">
            Full-Time Position 
          </span>
          <span className="text-xs text-gray-400">Enterprise Content & Process Automation </span>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
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
            <p className="text-gray-300 text-sm leading-relaxed">
              {proj.description}
            </p>

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