import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { Card3D } from './Card3D';

export const AcademicJourney: React.FC = () => {
  return (
    <section id="academics" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800">
      <div className="mb-12">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
          Academic Track
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Education & Coursework
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education Timeline with 3D Tilt (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {RESUME_DATA.education.map((edu, idx) => (
            <Card3D key={edu.degree} depth={8}>
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs font-semibold text-cyan-400">{edu.score}</span>
                </div>
                <div className="text-sm font-medium text-slate-300 mb-2">
                  {edu.institution}
                </div>
                <div className="text-xs text-slate-400 mb-2">
                  {edu.status}
                </div>
                {edu.details && (
                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/80">
                    {edu.details}
                  </div>
                )}
              </div>
            </Card3D>
          ))}
        </div>

        {/* Academic Projects & Coursework (5 cols) */}
        <div className="lg:col-span-5">
          <Card3D depth={8}>
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex items-center gap-2.5 mb-5">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Academic Projects & Coursework</h3>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.academicCoursework.map((coursework, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{coursework}</span>
                  </div>
                ))}
              </div>

              {/* Declaration Note */}
              <div className="mt-8 pt-5 border-t border-slate-800 text-[11px] text-slate-500 italic">
                "{RESUME_DATA.declaration}"
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};
