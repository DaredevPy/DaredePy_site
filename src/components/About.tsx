import React, { useState } from 'react';
import { Award, Briefcase, Clock, ShieldCheck, UserCheck, CheckCircle2, Sparkles, ZoomIn, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ASSETS } from '../assets/images';
import { Theme } from '../types';

interface AboutProps {
  theme: Theme;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  return (
    <section id="sobre" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-500 border border-pink-500/20">
            <UserCheck className="w-4 h-4" />
            <span>Sobre Mim</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
          }`}>
            Construindo soluções funcionais com paixão pelo código
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Conheça mais sobre minha trajetória profissional e pilares de atuação.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setPhotoModalOpen(true)}
              className={`group relative rounded-3xl p-3 border shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer max-w-sm w-full ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-white/90 border-pink-900/10'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src={ASSETS.profileRenato}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Photo Zoom Overlay Badge */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-pink-400 text-xs font-semibold flex items-center space-x-1.5 shadow-lg border border-pink-500/30">
                    <ZoomIn className="w-4 h-4" />
                    <span>Eu.jpeg (Ampliar)</span>
                  </span>
                </div>

                {/* Modality Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-pink-400" />
                    <span className="font-semibold">{PERSONAL_INFO.modality}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
                    Ativo
                  </span>
                </div>
              </div>
            </div>

            <p className={`text-xs mt-3 text-center ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Foto real de perfil (Eu.jpeg) • Clique para expandir
            </p>
          </div>

          {/* Right Column: Bio & Text Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`p-8 rounded-3xl border shadow-xl space-y-6 ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-slate-200 backdrop-blur-md'
                : 'bg-white/90 border-pink-900/10 text-slate-800 backdrop-blur-md'
            }`}>
              
              <div className="space-y-4 leading-relaxed text-base sm:text-lg">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-pink-500 first-letter:mr-2">
                  {PERSONAL_INFO.bioParagraph1}
                </p>
                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {PERSONAL_INFO.bioParagraph2}
                </p>
              </div>

              {/* Guiding Principles Pills */}
              <div className="pt-4 border-t border-slate-700/30 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="font-medium">Arquitetura Limpa & SOLID</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="font-medium">APIs RESTful & Microserviços</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="font-medium">Acessibilidade & UI/UX Reativa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="font-medium">Testes & Código Limpo</span>
                </div>
              </div>

            </div>

            {/* Metrics / Statistics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border text-center transition-all duration-200 hover:scale-[1.03] shadow-md ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 border-slate-800 text-slate-100'
                      : 'bg-white/90 border-pink-900/10 text-slate-900'
                  }`}
                >
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className={`text-xs font-semibold ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Expanded Photo Preview Modal */}
      {photoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-md w-full p-4 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl text-slate-100">
            <button
              onClick={() => setPhotoModalOpen(false)}
              aria-label="Fechar"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden mt-6 mb-4">
              <img
                src={ASSETS.profileRenato}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-bold text-lg">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-pink-400 font-mono">Eu.jpeg • Foto Real de Perfil</p>
              <p className="text-xs text-slate-400 pt-2">{PERSONAL_INFO.modality}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
