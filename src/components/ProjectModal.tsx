import React from 'react';
import { X, ExternalLink, Github, Check, Layers, Code2, Sparkles, Server } from 'lucide-react';
import { Project, Theme } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  theme: Theme;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, theme }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 transition-all ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-pink-900/15 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className={`absolute top-5 right-5 p-2 rounded-full border transition-colors ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
              : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-6 pr-8">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-500/15 text-pink-400 border border-pink-500/30">
              {project.category}
            </span>
            {project.metrics && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {project.metrics}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h3>

          <p className={`text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Long Description & Highlights */}
        {project.longDescription && (
          <div className={`p-4 rounded-2xl border mb-6 text-sm leading-relaxed ${
            theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className="font-bold text-pink-500 mb-2 flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Visão Geral do Projeto</span>
            </h4>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              {project.longDescription}
            </p>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-pink-500" />
            <span>Tecnologias Utilizadas</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-pink-300'
                    : 'bg-pink-50 border-pink-200 text-pink-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t border-slate-700/30">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3 rounded-xl text-sm font-bold border transition-all flex items-center justify-center space-x-2 ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Ver Código no GitHub</span>
            </a>
          )}

          <a
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-400 hover:to-rose-500 transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
          >
            <span>Acessar Projeto</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
