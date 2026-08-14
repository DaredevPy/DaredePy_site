import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import { ASSETS } from './assets/images';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('rp_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('rp_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 selection:bg-pink-500 selection:text-white ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-pink-50/20 text-slate-900'
    }`}>
      {/* Page Background Image Container with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `url(${ASSETS.workspaceBg})`,
        }}
      >
        {/* Contrast Tint Overlays for AA Readability */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95 backdrop-blur-[3px]'
              : 'bg-gradient-to-b from-pink-50/85 via-white/80 to-pink-100/90 backdrop-blur-[2px]'
          }`}
        />
      </div>

      {/* Main Content Container above Background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          openPrivacyModal={() => setPrivacyModalOpen(true)}
        />

        <main className="flex-grow">
          <Hero theme={theme} />
          <About theme={theme} />
          <Portfolio theme={theme} />
          <Skills theme={theme} />
          <Contact theme={theme} />
        </main>

        <Footer
          theme={theme}
          openPrivacyModal={() => setPrivacyModalOpen(true)}
        />
      </div>

      {/* Privacy Policy Disclosure Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}
