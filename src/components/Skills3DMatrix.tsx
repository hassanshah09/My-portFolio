import React, { useState } from 'react';
import { RESUME_DATA, SkillItem } from '../data/portfolioData';
import { CheckCircle2, Zap, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { Card3D } from './Card3D';

export const Skills3DMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'web-mobile', label: 'Web & Mobile Apps' },
    { id: 'design-backend', label: 'Figma & Cloud' },
    { id: 'core-programming', label: 'C, C++ & Java' },
    { id: 'office-linux', label: 'MS Office & Linux' },
  ];

  const filterSkills = (skill: SkillItem) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web-mobile') return ['web-frontend', 'app-dev'].includes(skill.id);
    if (activeCategory === 'design-backend') return ['figma-design', 'firebase-sql'].includes(skill.id);
    if (activeCategory === 'core-programming') return ['core-cpp', 'core-java'].includes(skill.id);
    if (activeCategory === 'office-linux') return ['ms-office', 'linux-systems', 'ai-prompting'].includes(skill.id);
    return true;
  };

  const filteredSkills = RESUME_DATA.skillsList.filter(filterSkills);

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Skills & Expertise
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Real skills, official software tools, and development frameworks directly from my academic and practical portfolio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredSkills.map((skill) => (
          <Card3D key={skill.id} depth={8}>
            <div className="h-full rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 transition-all overflow-hidden flex flex-col justify-between shadow-xl group">
              {/* Point-Specific High Quality Visual Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-md border border-slate-700/70 text-[11px] font-mono text-cyan-400">
                  {skill.badge}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 mb-5">
                    {skill.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tool Pills */}
                <div className="pt-4 border-t border-slate-800/90 flex flex-wrap gap-1.5">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-medium text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card3D>
        ))}
      </div>

      {/* Soft Skills & Key Strengths Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Soft Skills */}
        <Card3D depth={6}>
          <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors shadow-lg">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Professional Soft Skills</span>
            </h3>
            <div className="space-y-3.5">
              {RESUME_DATA.softSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white mr-1.5">{skill.name}:</span>
                    <span className="text-slate-400">{skill.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card3D>

        {/* Key Strengths */}
        <Card3D depth={6}>
          <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors shadow-lg">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Key Professional Strengths</span>
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              {RESUME_DATA.keyStrengths.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-emerald-400 font-bold">▪</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card3D>
      </div>
    </section>
  );
};
