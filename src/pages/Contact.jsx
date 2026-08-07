import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="inline-block">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z"/>
  </svg>
);

export default function Contact() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto space-y-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-white">Get In Touch</h1>
        <p className="text-gray-400 text-base max-w-md mx-auto">
          Feel free to reach out for collaborations, enterprise workflow discussions, or networking.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="mailto:msvreddy02@gmail.com" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-indigo-500 transition">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="text-xs text-gray-400 uppercase font-semibold">Email</h3>
            <p className="text-white font-medium text-sm">msvreddy02@gmail.com</p>
          </div>
        </a>

        <a href="https://linkedin.com/in/msvreddy02" target="_blank" rel="noreferrer" className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-indigo-500 transition">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <LinkedinIcon size={24} />
          </div>
          <div>
            <h3 className="text-xs text-gray-400 uppercase font-semibold">LinkedIn</h3>
            <p className="text-white font-medium text-sm">linkedin.com/in/msvreddy02</p>
          </div>
        </a>
      </div>
    </div>
  );
}