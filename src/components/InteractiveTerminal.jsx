import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'welcome', output: 'Type "help" to see available interactive CLI commands.' },
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      let output = '';

      switch (trimmed) {
        case 'help':
          output = 'Available commands: bio, skills, experience, contact, clear';
          break;
        case 'bio':
          output = 'Sai Vardhan Reddy Machanagari — IBM FileNet P8 & BAW Developer with 2+ years ECM/BPM experience.';
          break;
        case 'skills':
          output = 'Platforms:  IBM BAW 24.0, IBM BPM 8.6, IBM FileNet P8 | Tech: Java, REST APIs, Oracle DB, SQL Server, ICN Plugins';
          break;
        case 'experience':
          output = 'IBM BAW Developer @ Eidiko Systems Integrators | Key Client: Ahli Bank (CAS, Islamic Automation, Account Opening)';
          break;
        case 'contact':
          output = 'Email: msvreddy02@gmail.com | LinkedIn: linkedin.com/in/msvreddy02';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          output = `Command not recognized: "${trimmed}". Type "help" for options.`;
      }

      setHistory((prev) => [...prev, { cmd: input, output }]);
      setInput('');
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl font-mono text-xs max-w-3xl mx-auto">
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="text-gray-400 font-sans ml-2 text-xs flex items-center gap-1.5">
            <TerminalIcon size={14} className="text-indigo-400" /> saivardhan-cli ~ bash
          </span>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="p-5 space-y-3 max-h-64 overflow-y-auto text-gray-300">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400">
              <span>visitor@msvreddy:~$</span>
              <span className="text-white">{item.cmd}</span>
            </div>
            <p className="text-gray-400 pl-4">{item.output}</p>
          </div>
        ))}

        {/* Command Input Prompt */}
        <div className="flex items-center gap-2 pt-1 text-indigo-400">
          <span>visitor@msvreddy:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="type 'help'..."
            className="bg-transparent text-white outline-none flex-1 border-none focus:ring-0 text-xs font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}