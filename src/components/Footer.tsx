import React from 'react';
import { ArrowUp } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#05070d] py-12 px-6 md:px-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-white text-sm">
            {RESUME_DATA.name}
          </div>
          <div className="text-slate-500 text-xs mt-0.5">
            {RESUME_DATA.title} · Riphah International University, Islamabad
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-400 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#academics" className="hover:text-cyan-400 transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-cyan-400 transition-colors text-xs font-medium"
          >
            Resume
          </button>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
        <div>
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </div>
        <div>
          {RESUME_DATA.contact.location}
        </div>
      </div>
    </footer>
  );
};
