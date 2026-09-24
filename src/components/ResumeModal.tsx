import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Check, Copy } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${RESUME_DATA.name}
${RESUME_DATA.title}
${RESUME_DATA.contact.location} | ${RESUME_DATA.contact.phone} | ${RESUME_DATA.contact.email}
Education: BS Computer Science, Riphah International University, Islamabad
Technical Skills: C, C++, Java (OOP), MS Office, AI Tools & Prompt Engineering`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Header (hidden in print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400">CURRICULUM VITAE</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Official Resume Document</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 bg-slate-900 text-slate-200 print:bg-white print:text-black print:p-0">
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b border-slate-800 print:border-black">
            <div className="flex items-start gap-6">
              <img
                src={RESUME_DATA.image}
                alt="Syed Hassan Shah"
                className="w-24 h-28 rounded-xl object-cover border-2 border-cyan-500/40 print:border-black shrink-0"
              />
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
                  {RESUME_DATA.name}
                </h1>
                <div className="text-sm font-semibold tracking-wider text-cyan-400 print:text-slate-800 uppercase mt-1">
                  {RESUME_DATA.title}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 print:text-slate-700 mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400 print:text-black" />
                    {RESUME_DATA.contact.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-cyan-400 print:text-black" />
                    {RESUME_DATA.contact.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-cyan-400 print:text-black" />
                    {RESUME_DATA.contact.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50 text-xs font-mono space-y-1 sm:text-right shrink-0">
              <div>Age: <span className="text-white print:text-black font-semibold">{RESUME_DATA.personalInfo.age}</span></div>
              <div>Nationality: <span className="text-white print:text-black font-semibold">{RESUME_DATA.personalInfo.nationality}</span></div>
              <div>Status: <span className="text-white print:text-black font-semibold">{RESUME_DATA.personalInfo.maritalStatus}</span></div>
            </div>
          </div>

          {/* Body Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            {/* Left Sidebar Column (4 cols) */}
            <div className="md:col-span-4 space-y-6">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-mono font-bold text-cyan-400 print:text-slate-900 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 print:border-black">
                  Technical Skills
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
                  <li>▸ <strong>React & Web Dev</strong> — Basic (HTML, CSS, JS)</li>
                  <li>▸ <strong>Mobile App Dev</strong> — Basic (Flutter, Dart)</li>
                  <li>▸ <strong>UI/UX Design</strong> — Figma Designer</li>
                  <li>▸ <strong>Backend & DB</strong> — Firebase Expert, SQL</li>
                  <li>▸ <strong>C & C++</strong> — Logic, Pointers, Arrays</li>
                  <li>▸ <strong>Java (OOP)</strong> — Classes, Inheritance</li>
                  <li>▸ <strong>Linux (Basic)</strong> — Kali Linux, Ubuntu</li>
                  <li>▸ <strong>MS Office</strong> — Word, Excel, PowerPoint</li>
                  <li>▸ <strong>AI Tools</strong> — ChatGPT, Claude Prompting</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xs font-mono font-bold text-cyan-400 print:text-slate-900 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 print:border-black">
                  Soft Skills
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
                  <li>▸ Problem Solving</li>
                  <li>▸ Communication (Urdu & English)</li>
                  <li>▸ Time Management</li>
                  <li>▸ Teamwork</li>
                  <li>▸ Adaptability</li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xs font-mono font-bold text-cyan-400 print:text-slate-900 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 print:border-black">
                  Languages
                </h3>
                <div className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                  <div className="flex justify-between">
                    <span>Urdu</span>
                    <span className="text-cyan-400 print:text-black font-semibold">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-cyan-400 print:text-black font-semibold">Proficient</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Main Column (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              {/* Career Objective */}
              <div>
                <h3 className="text-xs font-mono font-bold text-cyan-400 print:text-slate-900 uppercase tracking-wider mb-2 pb-1 border-b border-slate-800 print:border-black">
                  Career Objective
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                  {RESUME_DATA.careerObjective}
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-mono font-bold text-cyan-400 print:text-slate-900 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 print:border-black">
                  Education
                </h3>
                <div className="space-y-3">
                  {RESUME_DATA.education.map((edu) => (
                    <div key={edu.degree} className="text-xs">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-bold text-white print:text-black">{edu.degree}</h4>
                        <span className="text-cyan-400 print:text-slate-900 font-mono">{edu.score}</span>
                      </div>
                      <div className="text-slate-400 print:text-slate-700">{edu.institution}</div>
                      <div className="text-slate-500 text-[11px]">{edu.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Projects & Coursework */}
              <div>
                <h3 className="text-xs font-mono font-bold text-cyan-400 print:text-slate-900 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800 print:border-black">
                  Academic Projects & Coursework
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 print:text-slate-800">
                  {RESUME_DATA.academicCoursework.map((course, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 print:text-black">■</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Declaration */}
              <div className="pt-4 border-t border-slate-800 print:border-black">
                <h4 className="text-xs font-mono font-bold text-slate-400 print:text-slate-700 uppercase mb-1">
                  Declaration
                </h4>
                <p className="text-xs text-slate-400 print:text-slate-800 italic">
                  "{RESUME_DATA.declaration}"
                </p>
                <div className="mt-3 text-xs font-semibold text-white print:text-black">
                  {RESUME_DATA.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
