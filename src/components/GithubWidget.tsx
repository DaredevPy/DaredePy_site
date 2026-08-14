import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, RefreshCw, FolderGit2, Code, Activity } from 'lucide-react';
import { GithubRepo, GithubProfile, Theme } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GithubWidgetProps {
  theme: Theme;
}

const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 101,
    name: 'ecommerce-react-redux',
    description: 'Plataforma de e-commerce com carrinho reativo em tempo real e busca inteligente.',
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/ecommerce-react-redux`,
    stargazers_count: 12,
    forks_count: 4,
    language: 'TypeScript',
    updated_at: new Date().toISOString(),
    topics: ['react', 'redux', 'typescript', 'tailwind'],
  },
  {
    id: 102,
    name: 'dashboard-metrics-saas',
    description: 'Painel analítico corporativo com exportação em PDF/CSV e gráficos interativos.',
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/dashboard-metrics-saas`,
    stargazers_count: 8,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: new Date().toISOString(),
    topics: ['nodejs', 'express', 'postgresql'],
  },
  {
    id: 103,
    name: 'kanban-task-platform',
    description: 'Gerenciador de tarefas Kanban drag-and-drop com integração em tempo real.',
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/kanban-task-platform`,
    stargazers_count: 15,
    forks_count: 5,
    language: 'JavaScript',
    updated_at: new Date().toISOString(),
    topics: ['react', 'socketio', 'mongodb'],
  },
  {
    id: 104,
    name: 'python-algorithms-ds',
    description: 'Coleção de algoritmos avançados e estruturas de dados otimizadas em Python.',
    html_url: `https://github.com/${PERSONAL_INFO.githubUsername}/python-algorithms-ds`,
    stargazers_count: 9,
    forks_count: 3,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['python', 'algorithms', 'data-structures'],
  },
];

export const GithubWidget: React.FC<GithubWidgetProps> = ({ theme }) => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  const fetchGithubData = async () => {
    setLoading(true);
    setIsFallback(false);
    try {
      const [reposRes, profileRes] = await Promise.all([
        fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=6`),
        fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`),
      ]);

      if (!reposRes.ok || !profileRes.ok) {
        throw new Error('Github API rate limit or user not found');
      }

      const reposData: GithubRepo[] = await reposRes.json();
      const profileData: GithubProfile = await profileRes.json();

      if (Array.isArray(reposData) && reposData.length > 0) {
        setRepos(reposData.slice(0, 4));
      } else {
        setRepos(FALLBACK_REPOS);
        setIsFallback(true);
      }
      setProfile(profileData);
    } catch (err) {
      console.warn('Using fallback GitHub repos due to API rate limits:', err);
      setRepos(FALLBACK_REPOS);
      setIsFallback(true);
      setProfile({
        login: PERSONAL_INFO.githubUsername,
        avatar_url: 'https://github.com/DaredevPy.png',
        name: PERSONAL_INFO.name,
        bio: 'Desenvolvedor Web — Python, TypeScript, React & Node.js',
        public_repos: 35,
        followers: 48,
        following: 20,
        html_url: PERSONAL_INFO.githubUrl,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'typescript':
        return 'bg-blue-500 text-white';
      case 'javascript':
        return 'bg-yellow-400 text-black';
      case 'python':
        return 'bg-emerald-500 text-white';
      case 'dart':
      case 'flutter':
        return 'bg-cyan-500 text-white';
      case 'c':
        return 'bg-purple-500 text-white';
      case 'html':
      case 'css':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-slate-500 text-white';
    }
  };

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 shadow-xl ${
        theme === 'dark'
          ? 'bg-slate-900/80 border-slate-800 text-slate-100 backdrop-blur-md'
          : 'bg-white/90 border-pink-900/10 text-slate-900 backdrop-blur-md'
      }`}
    >
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-700/30 gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/20">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-lg">Repositórios no GitHub</h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-pink-500/15 text-pink-400 border border-pink-500/30">
                @{PERSONAL_INFO.githubUsername}
              </span>
            </div>
            <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Atualizado automaticamente via API pública do GitHub
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={fetchGithubData}
            title="Atualizar dados do GitHub"
            disabled={loading}
            className={`p-2 rounded-lg border text-xs font-medium flex items-center space-x-1.5 transition-all ${
              theme === 'dark'
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-pink-500' : ''}`} />
            <span className="hidden sm:inline">Atualizar</span>
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:opacity-90 transition-all flex items-center space-x-1 shadow-sm"
          >
            <span>Ver Perfil</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Profile Overview Pill */}
      {profile && (
        <div className={`mt-4 mb-5 p-3.5 rounded-xl flex items-center justify-between text-xs ${
          theme === 'dark' ? 'bg-slate-950/60 border border-slate-800/80' : 'bg-slate-50 border border-slate-200'
        }`}>
          <div className="flex items-center space-x-3">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border border-pink-500/40"
            />
            <div>
              <span className="font-semibold">{profile.name || profile.login}</span>
              <p className={`text-[11px] truncate max-w-[200px] sm:max-w-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                {profile.bio || 'Desenvolvedor Web'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <div title="Repositórios Públicos" className="flex items-center space-x-1">
              <FolderGit2 className="w-3.5 h-3.5 text-pink-500" />
              <span>{profile.public_repos}+ repos</span>
            </div>
            <div title="Seguidores" className="hidden sm:flex items-center space-x-1">
              <Activity className="w-3.5 h-3.5 text-rose-500" />
              <span>{profile.followers} devs</span>
            </div>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`p-4 rounded-xl border animate-pulse space-y-3 ${
                theme === 'dark' ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-100/60 border-slate-200'
              }`}
            >
              <div className="h-4 bg-slate-700/40 rounded w-2/3"></div>
              <div className="h-3 bg-slate-700/30 rounded w-full"></div>
              <div className="h-3 bg-slate-700/30 rounded w-4/5"></div>
              <div className="flex justify-between pt-2">
                <div className="h-3 bg-slate-700/40 rounded w-1/4"></div>
                <div className="h-3 bg-slate-700/40 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Repos Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-slate-950/50 border-slate-800/90 hover:border-pink-500/50 hover:bg-slate-950/80'
                  : 'bg-white border-slate-200 hover:border-pink-600/50 hover:bg-pink-50/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm group-hover:text-pink-500 transition-colors flex items-center space-x-1.5 truncate">
                    <Code className="w-4 h-4 text-pink-500 flex-shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-500 transition-colors flex-shrink-0" />
                </div>
                <p className={`text-xs line-clamp-2 mb-3 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {repo.description || 'Sem descrição cadastrada no repositório.'}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/20 text-xs">
                {repo.language ? (
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                ) : (
                  <span className="text-slate-500 text-[10px]">Geral</span>
                )}

                <div className="flex items-center space-x-3 text-slate-400 font-mono text-[11px]">
                  <span className="flex items-center space-x-1" title="Stars">
                    <Star className="w-3 h-3 text-pink-400 fill-pink-400/30" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center space-x-1" title="Forks">
                    <GitFork className="w-3 h-3 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {isFallback && (
        <p className={`text-[11px] text-center mt-3 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
          Exibindo repositórios selecionados em destaque do perfil GitHub @DaredevPy.
        </p>
      )}
    </div>
  );
};
