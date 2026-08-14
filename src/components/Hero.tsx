import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Terminal, Code, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Theme } from '../types';
import { GithubWidget } from './GithubWidget';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Availability Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border backdrop-blur-md shadow-sm transition-all animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              <span className={theme === 'dark' ? 'text-emerald-300' : 'text-emerald-800'}>
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
                theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
              }`}>
                Renato Pimenta — <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                  {PERSONAL_INFO.title}
                </span>
              </h1>
              <p className={`text-base sm:text-xl leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                "{PERSONAL_INFO.subtitle}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => scrollTo('projetos')}
                className="px-7 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-400 hover:to-rose-500 transition-all duration-200 shadow-lg hover:shadow-pink-500/25 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contato')}
                className={`px-7 py-4 rounded-xl font-bold text-base border transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-700 text-slate-100 hover:bg-slate-800 hover:border-pink-500/40'
                    : 'bg-white/90 border-pink-900/15 text-slate-900 hover:bg-pink-50 hover:border-pink-500/40'
                }`}
              >
                <MessageSquare className="w-5 h-5 text-pink-500" />
                <span>Fale Comigo</span>
              </button>
            </div>

            {/* Quick Tech Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Stack Principal:</span>
              {['Python', 'TypeScript', 'React', 'Node.js', 'Flutter', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-md border font-medium ${
                    theme === 'dark'
                      ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                      : 'bg-white/80 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Github Widget */}
          <div className="lg:col-span-5">
            <GithubWidget theme={theme} />
          </div>

        </div>
      </div>
    </section>
  );
};
