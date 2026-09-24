import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ThreeCanvasHero } from './components/ThreeCanvasHero';
import { AboutSection } from './components/AboutSection';
import { AcademicJourney } from './components/AcademicJourney';
import { Skills3DMatrix } from './components/Skills3DMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onContactClick={handleContactClick}
      />

      <main className="flex-1">
        {/* Modern 3D Hero with real photo in suit */}
        <ThreeCanvasHero
          onOpenResume={() => setResumeOpen(true)}
          onContactClick={handleContactClick}
        />

        {/* Profile & Career Objective */}
        <AboutSection />

        {/* Academic Journey (BSCS, ICS, Matric & Coursework) */}
        <AcademicJourney />

        {/* Technical & Soft Skills (C, C++, Java OOP, MS Office, AI Tools) */}
        <Skills3DMatrix />

        {/* Direct Contact Form & Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Fullscreen Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
