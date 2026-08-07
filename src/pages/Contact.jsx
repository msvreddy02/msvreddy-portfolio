import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
        <p className="text-gray-400 text-lg">
          Interested in discussing enterprise ECM, IBM BAW workflows, or consulting opportunities?
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Details Side */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">Contact Details</h3>

            <div className="space-y-4 text-sm">
              <a href="mailto:msvreddy02@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail size={18} />
                </div>
                <span>msvreddy02@gmail.com</span>
              </a>

              <a href="tel:+919381349022" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Phone size={18} />
                </div>
                <span>+91 94929 42173</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin size={18} />
                </div>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Working Form Side */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5">
            <h3 className="text-xl font-bold text-white">Send a Message</h3>

            {/* Hidden Input for Web3Forms Access Key */}
            {/* ⚠️ STEP: Replace 'YOUR_WEB3FORMS_ACCESS_KEY' below with your key from web3forms.com */}
            <input type="hidden" name="access_key" value="48207200-6752-4e5a-a95f-70666f294b17" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            {/* Status Feedback Banners */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-2">
                <AlertCircle size={18} />
                <span>Please ensure your access key is set, or try emailing directly.</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enterprise Workflow Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Hi Sai Vardhan, I would like to discuss a project..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending Message...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}