import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Database } from 'lucide-react';

export default function Projects() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Experience & Featured Work</h1>
        <p className="text-gray-400 text-lg">Enterprise Banking & BPM Automation</p>
      </motion.div>

      <div className="glass-card p-8 rounded-2xl border-l-4 border-l-indigo-500 space-y-6">
        <div className="flex flex-wrap justify-between items-start gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">IBM BPM Developer</h2>
            <p className="text-indigo-400 font-medium">Eidiko Systems Integrators (Aug 2024 - Present)[cite: 1]</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20 font-medium">
            Full-Time[cite: 1]
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Layers className="text-indigo-400" size={20} />
            <h3>Project: Conventional Account Services (CAS) — Client: Ahli Bank[cite: 1]</h3>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Designed and implemented end-to-end workflows for services such as Customer Maintenance, Cheque Book Issuance, Debit Card Limit Increase, Dormant Account Reactivation, Fixed Deposit Creation, and Balance Orders[cite: 1].
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="glass-panel p-4 rounded-xl space-y-2">
              <ShieldCheck className="text-indigo-400" size={18} />
              <h4 className="text-white text-sm font-semibold">Approval Workflows</h4>
              <p className="text-xs text-gray-400">Multi-level approval processes (Manager & Authorizer) with strict compliance checks[cite: 1].</p>
            </div>
            <div className="glass-panel p-4 rounded-xl space-y-2">
              <Database className="text-indigo-400" size={18} />
              <h4 className="text-white text-sm font-semibold">Integrations</h4>
              <p className="text-xs text-gray-400">Integrated Oracle DB & FileNet document storage via external REST APIs[cite: 1].</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}