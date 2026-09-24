import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Check, Copy, MapPin, Mail, Phone, UserCheck, Languages } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800">
      <div className="mb-10">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
          Profile Overview
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          About & Career Objective
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Career Objective Box (8 cols) */}
        <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h3 className="text-sm font-semibold uppercase text-cyan-400 tracking-wider mb-3">
            Career Objective
          </h3>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            "{RESUME_DATA.careerObjective}"
          </p>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
            <button
              onClick={() => copyToClipboard(RESUME_DATA.contact.email, 'email')}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
            >
              {copiedField === 'email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span>{RESUME_DATA.contact.email}</span>
            </button>

            <button
              onClick={() => copyToClipboard(RESUME_DATA.contact.phone, 'phone')}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
            >
              {copiedField === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Phone className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span>{RESUME_DATA.contact.formattedPhone}</span>
            </button>
          </div>
        </div>

        {/* Personal Details & Languages (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>Personal Details</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Age:</span>
                <span className="text-white font-medium">{RESUME_DATA.personalInfo.age}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Nationality:</span>
                <span className="text-white font-medium">{RESUME_DATA.personalInfo.nationality}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Marital Status:</span>
                <span className="text-white font-medium">{RESUME_DATA.personalInfo.maritalStatus}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-medium">{RESUME_DATA.contact.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Languages className="w-4 h-4 text-cyan-400" />
              <span>Languages</span>
            </h3>
            <div className="space-y-2 text-xs">
              {RESUME_DATA.languages.map((lang) => (
                <div key={lang.name} className="flex justify-between">
                  <span className="text-slate-300">{lang.name}</span>
                  <span className="text-cyan-400 font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
