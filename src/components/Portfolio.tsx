import React, { useState } from 'react';
import { Briefcase, ExternalLink, Github, Eye, Layers, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, Theme } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  theme: Theme;
}

type FilterCategory = 'Todos' | 'React' | 'Node.js' | 'TypeScript' | 'HTML/CSS';

export const Portfolio: React.FC<PortfolioProps> = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: FilterCategory[] = ['Todos', 'React', 'Node.js', 'TypeScript', 'HTML/CSS'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'Todos') return true;
    if (project.category === activeFilter) return true;
    return project.technologies.some((tech) =>
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section id="projetos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-500 border border-pink-500/20">
            <Briefcase className="w-4 h-4" />
            <span>Portfólio & Projetos</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
          }`}>
            Projetos em Destaque
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore algumas das soluções web que desenvolvi focando em performance, arquitetura limpa e UI/UX intuitiva.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/25 font-bold scale-105'
                    : theme === 'dark'
                      ? 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-pink-500/30'
                      : 'bg-white/90 border border-pink-900/10 text-slate-700 hover:text-slate-900 hover:bg-pink-50 hover:border-pink-300'
                }`}
              >
                <span>{filter}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-slate-100 backdrop-blur-md hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/10'
                  : 'bg-white/90 border-pink-900/10 text-slate-900 backdrop-blur-md hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/10'
              }`}
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    theme === 'dark'
                      ? 'bg-pink-500/15 text-pink-400 border-pink-500/30'
                      : 'bg-pink-500/10 text-pink-600 border-pink-500/20'
                  }`}>
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className={`text-[11px] font-mono font-medium ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      ⚡ {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                        theme === 'dark'
                          ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 border-t border-slate-800/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center space-x-2 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-slate-800/80 border-slate-700 text-pink-400 hover:bg-slate-700 hover:text-pink-300 hover:border-pink-500/40'
                      : 'bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100 hover:border-pink-300'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Detalhes</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                    title="Ver Repositório no GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={theme}
      />
    </section>
  );
};
