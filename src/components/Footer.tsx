import React from 'react';
import { ShieldCheck, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
  openPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, openPrivacyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 relative transition-colors ${
      theme === 'dark'
        ? 'bg-slate-950/90 border-slate-800 text-slate-300'
        : 'bg-white/90 border-pink-900/10 text-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <span className="font-bold text-base tracking-tight text-pink-500">
              {PERSONAL_INFO.initials} — {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="text-xs">
              © {new Date().getFullYear()} Renato Pimenta. Todos os direitos reservados.
            </span>
          </div>

          {/* Center Links */}
          <div className="flex items-center space-x-6 text-xs font-medium">
            <button
              onClick={openPrivacyModal}
              className="hover:text-pink-500 transition-colors flex items-center space-x-1.5 cursor-pointer underline underline-offset-4 decoration-pink-500/40"
            >
              <ShieldCheck className="w-4 h-4 text-pink-500" />
              <span>Política de Privacidade</span>
            </button>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="E-mail"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 hover:text-white hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              title="Voltar ao topo"
              className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold hover:opacity-90 transition-all shadow-md cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
