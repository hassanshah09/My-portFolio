import React, { useState } from 'react';
import { FileText, Mail, Menu, X } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070a12]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap"
        >
          {RESUME_DATA.name}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#academics" className="hover:text-cyan-400 transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>
          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-[#090d16] border-b border-slate-800 flex flex-col gap-3 text-sm">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            About
          </a>
          <a
            href="#academics"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Education
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Contact
          </a>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-semibold text-center text-slate-200 bg-slate-900 border border-slate-700 rounded-lg"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="flex-1 py-2 text-xs font-semibold text-center text-slate-950 bg-cyan-400 rounded-lg"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
