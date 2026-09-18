import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  FileText, 
  Database, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  ArrowRight, 
  Server,
  Layers
} from 'lucide-react';

const workflowSteps = [
  {
    id: 'step-1',
    stepNumber: '01',
    name: 'Document Ingestion',
    tech: 'IBM FileNet P8 CPE',
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
    description: 'Loan application metadata and PDF collaterals are indexed and committed into the FileNet Content Engine Object Store.',
    log: 'POST /fncm/v1/LoanObjectStore/documents -> Status: 201 Created [DocID: doc_7749x]'
  },
  {
    id: 'step-2',
    stepNumber: '02',
    name: 'UCA Event Trigger',
    tech: 'IBM BAW Undercover Agent',
    icon: Zap,
    color: 'from-purple-500 to-pink-600',
    description: 'A FileNet Event Action triggers an asynchronous Undercover Agent (UCA) to instantiate the Banking Loan BPD.',
    log: 'UCA_MessageReceived: LoanApplicationEvent -> InstanceID: BAW-240-99841'
  },
  {
    id: 'step-3',
    stepNumber: '03',
    name: 'Automated Credit Rule',
    tech: 'Java REST Web Service',
    icon: Cpu,
    color: 'from-amber-500 to-orange-600',
    description: 'Service flow executes a backend core banking REST API to compute debt-to-income ratio and credit scoring.',
    log: 'REST Invocation: https://corebank.api/credit-eval -> Score: 785 (Approved)'
  },
  {
    id: 'step-4',
    stepNumber: '04',
    name: 'CSHS Manager Approval',
    tech: 'Client-Side Human Service',
    icon: Layers,
    color: 'from-emerald-500 to-teal-600',
    description: 'Loan dossier routes to the Branch Manager Coach view with integrated ICN document previewer for final sign-off.',
    log: 'CSHS_CoachView: ManagerSignOff -> Action: COMPLETED_AND_RELEASED'
  }
];

export default function WorkflowSimulator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [executionLogs, setExecutionLogs] = useState([workflowSteps[0].log]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < workflowSteps.length - 1) {
            const next = prev + 1;
            setExecutionLogs((logs) => [...logs, workflowSteps[next].log]);
            return next;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleStepClick = (index) => {
    setIsPlaying(false);
    setCurrentStepIndex(index);
    setExecutionLogs(workflowSteps.slice(0, index + 1).map((s) => s.log));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
    setExecutionLogs([workflowSteps[0].log]);
  };

  const activeStep = workflowSteps[currentStepIndex];

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden space-y-8 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 font-semibold">
            <Server size={12} /> BPMN 2.0 & FileNet Architecture Sandbox
          </div>
          <h3 className="text-2xl font-black text-white">Enterprise Loan Origination Simulation</h3>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-600/30 hover:scale-105'
            }`}
          >
            {isPlaying ? 'Pause Process' : <><Play size={14} fill="currentColor" /> Run Simulation</>}
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition hover:bg-white/10"
            title="Reset Workflow"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Interactive Process Pipeline Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
        {workflowSteps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = currentStepIndex === idx;
          const isCompleted = currentStepIndex > idx;

          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(idx)}
              className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between gap-3 ${
                isActive
                  ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/20 scale-[1.02]'
                  : isCompleted
                  ? 'bg-slate-950/60 border-emerald-500/30 text-gray-300'
                  : 'bg-slate-950/40 border-white/5 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-mono font-bold text-gray-400">
                  STEP {step.stepNumber}
                </span>
                {isCompleted ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : isActive ? (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                ) : null}
              </div>

              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-md`}>
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs leading-tight">{step.name}</h4>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">{step.tech}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-3 relative z-10"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Active Execution Node: {activeStep.name}
            </span>
            <span className="text-[11px] font-mono text-gray-400">Engine: {activeStep.tech}</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {activeStep.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Live System Execution Terminal Logs */}
      <div className="space-y-2 relative z-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 px-1">
          <span>Enterprise Middleware Transaction Stream</span>
          <span className="text-emerald-400">● LIVE CONNECTION</span>
        </div>
        <div className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-gray-300 space-y-1.5 max-h-36 overflow-y-auto">
          {executionLogs.map((log, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-indigo-400 shrink-0">&gt;</span>
              <span className={i === executionLogs.length - 1 ? 'text-emerald-300 font-semibold' : 'text-gray-400'}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}