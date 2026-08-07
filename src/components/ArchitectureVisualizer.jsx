import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Cpu, Server, Database, FileText, CheckCircle } from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [activeNode, setActiveNode] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const nodes = [
    {
      id: "client",
      title: "1. Client & ICN UI",
      sub: "IBM Content Navigator",
      icon: FileText,
      tech: "Custom Desktops, Dojo, Entry Templates",
      details: "Initiates document intake, customer applications, and user action requests via customized IBM Content Navigator desktops."
    },
    {
      id: "baw",
      title: "2. Process Orchestration",
      sub: "IBM BAW v24.0",
      icon: Cpu,
      tech: "Human Services, Process Engine, Tracking",
      details: "Executes business process logic, routes approval tasks to bank staff, and manages process state transitions."
    },
    {
      id: "api",
      title: "3. API Middleware",
      sub: "RESTful Web Services",
      icon: Server,
      tech: "Core Java, PE/CE Java APIs, REST",
      details: "Acts as an integration layer translating workflow actions into Content Engine object calls and external core banking APIs."
    },
    {
      id: "filenet",
      title: "4. ECM Repository",
      sub: "IBM FileNet P8",
      icon: Database,
      tech: "Content Engine, ACLs, Document Classes",
      details: "Stores customer documents securely, enforces security ACLs/ACEs, and manages document lifecycles and metadata."
    }
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setActiveNode(0);
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < nodes.length) {
        setActiveNode(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1800);
  };

  return (
    <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6 border border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="text-indigo-400" size={22} /> Enterprise Workflow Visualizer
          </h3>
          <p className="text-xs text-gray-400">Click any component or run a step-by-step transaction simulation</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-2 transition shadow-lg shadow-indigo-600/30"
          >
            <Play size={14} className={isSimulating ? "animate-pulse" : ""} />
            {isSimulating ? "Simulating Request..." : "Simulate Flow"}
          </button>
          <button
            onClick={() => { setActiveNode(0); setIsSimulating(false); }}
            className="p-2 rounded-xl glass-panel text-gray-300 hover:text-white text-xs transition"
            title="Reset Visualizer"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isActive = activeNode === idx;

          return (
            <div
              key={node.id}
              onClick={() => { if (!isSimulating) setActiveNode(idx); }}
              className={`p-4 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-102'
                  : 'bg-slate-900/50 border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-white/5 text-indigo-400'}`}>
                  <Icon size={20} />
                </div>
                {isActive && (
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-white">{node.title}</h4>
                <p className="text-[11px] text-indigo-300 font-medium">{node.sub}</p>
              </div>

              <span className="text-[10px] text-gray-400 font-mono block truncate">{node.tech}</span>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-5 rounded-xl bg-slate-900/80 border border-indigo-500/30 space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
              Selected Layer Capabilities
            </span>
            <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
              <CheckCircle size={12} className="text-emerald-400" /> Active Architecture Context
            </span>
          </div>
          <h4 className="text-base font-bold text-white">{nodes[activeNode].title} ({nodes[activeNode].sub})</h4>
          <p className="text-xs text-gray-300 leading-relaxed">{nodes[activeNode].details}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}