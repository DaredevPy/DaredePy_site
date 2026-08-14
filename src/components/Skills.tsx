import React from 'react';
import { Code2, Terminal, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Theme } from '../types';

interface SkillsProps {
  theme: Theme;
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-pink-500" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-pink-500" />;
      default:
        return <Code2 className="w-6 h-6 text-pink-500" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-500 border border-pink-500/20">
            <Code2 className="w-4 h-4" />
            <span>Stack & Competências</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
          }`}>
            Habilidades Técnicas
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Conhecimentos consolidados em linguagens, frameworks, algoritmos e ferramentas de desenvolvimento.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-slate-100 backdrop-blur-md'
                  : 'bg-white/90 border-pink-900/10 text-slate-900 backdrop-blur-md'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-700/30">
                <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{category.title}</h3>
                  <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    4 tecnologias-chave
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                        <span>{skill.name}</span>
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold border ${
                        theme === 'dark'
                          ? 'bg-pink-500/15 text-pink-400 border-pink-500/30'
                          : 'bg-pink-500/10 text-pink-700 border-pink-500/20'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    {/* Proficiency Progress Bar */}
                    <div className={`h-2 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-slate-950/80' : 'bg-slate-100'
                    }`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
