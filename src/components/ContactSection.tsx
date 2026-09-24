import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const mailtoUrl = `mailto:${RESUME_DATA.contact.email}?subject=${encodeURIComponent(
      subject || `Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800">
      <div className="mb-12">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
          Contact Details
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4">Contact Information</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="font-medium text-white hover:text-cyan-400 transition-colors text-sm"
                  >
                    {RESUME_DATA.contact.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 text-[11px] text-cyan-400 mt-1 hover:underline"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400">Phone / WhatsApp</div>
                  <a
                    href={`tel:${RESUME_DATA.contact.phone}`}
                    className="font-medium text-white hover:text-blue-400 transition-colors text-sm"
                  >
                    {RESUME_DATA.contact.formattedPhone}
                  </a>
                  <div className="text-slate-500 text-[11px] mt-0.5">Available for calls & messages</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400">Location</div>
                  <div className="font-medium text-white text-sm">{RESUME_DATA.contact.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Job Opportunity / Inquiry"
                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </button>

              {submitted && (
                <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Opening email client...</span>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
