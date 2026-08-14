import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Sparkles } from 'lucide-react';
import { Theme } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  openPrivacyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Projetos', href: '#projetos', id: 'projetos' },
    { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'bg-white/80 backdrop-blur-md border-b border-pink-900/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Identity */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="group flex items-center space-x-3 cursor-pointer"
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-md transition-all group-hover:scale-105 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white'
              : 'bg-gradient-to-br from-pink-600 to-rose-700 text-white'
          }`}>
            {PERSONAL_INFO.initials}
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg tracking-tight ${
              theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
            }`}>
              {PERSONAL_INFO.initials} — <span className="font-medium text-pink-500">{PERSONAL_INFO.name}</span>
            </span>
            <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Dev Web
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? theme === 'dark'
                      ? 'bg-pink-500/15 text-pink-400 font-semibold border border-pink-500/30'
                      : 'bg-pink-600/10 text-pink-700 font-semibold border border-pink-600/20'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-black/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            title={`Mudar para Modo ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
            className={`p-2.5 rounded-xl border transition-all duration-200 shadow-sm flex items-center space-x-2 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-700 text-pink-400 hover:bg-slate-800'
                : 'bg-white/90 border-pink-900/15 text-slate-800 hover:bg-pink-50'
            }`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-5 h-5 text-pink-400" />
                <span className="text-xs font-semibold text-pink-300 hidden sm:inline">Claro</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-slate-700" />
                <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Escuro</span>
              </>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className={`md:hidden p-2.5 rounded-xl border transition-colors ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-700 text-slate-200'
                : 'bg-white/90 border-pink-900/15 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b shadow-2xl transition-all duration-300 animate-fadeIn ${
            theme === 'dark'
              ? 'bg-slate-950/95 border-slate-800 text-slate-100 backdrop-blur-xl'
              : 'bg-white/95 border-pink-900/10 text-slate-900 backdrop-blur-xl'
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-pink-500/20 text-pink-400 font-semibold border border-pink-500/30'
                        : 'bg-pink-600/10 text-pink-700 font-semibold border border-pink-600/20'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:bg-slate-800/60'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
