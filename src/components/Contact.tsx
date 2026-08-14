import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare, ExternalLink, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactForm, Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: 'Projeto / Freela',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    'Projeto / Freela',
    'Oportunidade CLT / PJ',
    'Consultoria Técnica',
    'Parceria / Outros',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Por favor, insira um e-mail válido.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Por favor, escreva uma mensagem com no mínimo 10 caracteres.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getFormattedWhatsappText = () => {
    return `Olá Renato, meu nome é *${formData.name || '[Nome]'}* (${formData.email || '[Email]'}).\n\n*Assunto:* ${formData.subject}\n\n*Mensagem:*\n${formData.message || '[Sua mensagem aqui]'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = encodeURIComponent(getFormattedWhatsappText());
    const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappRaw}?text=${formattedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    if (!formData.message.trim()) {
      setErrors({ message: 'Escreva algo antes de copiar a mensagem.' });
      return;
    }
    navigator.clipboard.writeText(getFormattedWhatsappText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-500 border border-pink-500/20">
            <MessageSquare className="w-4 h-4" />
            <span>Fale Comigo</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
          }`}>
            Vamos conversar sobre o seu próximo projeto?
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Envie uma mensagem direta formatada no WhatsApp ou entre em contato pelos canais oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards Box */}
            <div className={`p-8 rounded-3xl border shadow-xl space-y-6 ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-slate-100 backdrop-blur-md'
                : 'bg-white/90 border-pink-900/10 text-slate-900 backdrop-blur-md'
            }`}>
              <h3 className="font-bold text-xl mb-4 flex items-center space-x-2">
                <span className="text-pink-500">Informações de Contato</span>
              </h3>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-4 rounded-2xl border flex items-center space-x-4 transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-950/60 border-slate-800 hover:border-pink-500/40 text-slate-200'
                    : 'bg-slate-50 border-slate-200 hover:border-pink-600/40 text-slate-800'
                }`}
              >
                <div className="p-3 rounded-xl bg-pink-500/15 text-pink-500 border border-pink-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">E-mail Direto</span>
                  <span className="font-semibold text-sm sm:text-base break-all">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border flex items-center space-x-4 transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-950/60 border-slate-800 hover:border-emerald-500/40 text-slate-200'
                    : 'bg-slate-50 border-slate-200 hover:border-emerald-600/40 text-slate-800'
                }`}
              >
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp / Telefone</span>
                  <span className="font-semibold text-sm sm:text-base">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              {/* Location */}
              <div className={`p-4 rounded-2xl border flex items-center space-x-4 ${
                theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="p-3 rounded-xl bg-pink-500/15 text-pink-500 border border-pink-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Localização</span>
                  <span className="font-semibold text-sm sm:text-base">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-700/30 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Redes Sociais & Perfis
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border font-semibold text-xs flex items-center justify-center space-x-2 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border font-semibold text-xs flex items-center justify-center space-x-2 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <Github className="w-4 h-4 text-pink-500" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border shadow-xl ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-800 text-slate-100 backdrop-blur-md'
                : 'bg-white/95 border-pink-900/10 text-slate-900 backdrop-blur-md'
            }`}>
              
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl">Formulário para WhatsApp</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Preencha os campos para gerar uma mensagem pronta e direcionar para o aplicativo.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  ⚡ Validação em tempo real
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5">Seu Nome *</label>
                    <input
                      type="text"
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 bg-red-500/10'
                          : theme === 'dark'
                            ? 'bg-slate-950 border-slate-700 focus:border-pink-500 text-slate-100'
                            : 'bg-slate-50 border-slate-300 focus:border-pink-600 text-slate-900'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5">Seu E-mail *</label>
                    <input
                      type="email"
                      placeholder="carlos@empresa.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 bg-red-500/10'
                          : theme === 'dark'
                            ? 'bg-slate-950 border-slate-700 focus:border-pink-500 text-slate-100'
                            : 'bg-slate-50 border-slate-300 focus:border-pink-600 text-slate-900'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Assunto Selection */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5">Assunto Principal *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {subjectOptions.map((subj) => (
                      <button
                        type="button"
                        key={subj}
                        onClick={() => setFormData({ ...formData, subject: subj })}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                          formData.subject === subj
                            ? 'bg-pink-500 text-white border-pink-500 font-bold'
                            : theme === 'dark'
                              ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-semibold">Sua Mensagem *</label>
                    <span className="text-[11px] text-slate-400">
                      {formData.message.length} caracteres
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Descreva brevemente seu projeto, prazos desejados ou dúvida..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 bg-red-500/10'
                        : theme === 'dark'
                          ? 'bg-slate-950 border-slate-700 focus:border-pink-500 text-slate-100'
                          : 'bg-slate-50 border-slate-300 focus:border-pink-600 text-slate-900'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Live Formatted Preview */}
                <div className={`p-4 rounded-2xl border text-xs space-y-1 font-mono ${
                  theme === 'dark' ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <span className="text-[10px] text-pink-500 font-bold tracking-wider uppercase block">
                    Pré-visualização da mensagem no WhatsApp
                  </span>
                  <p className="whitespace-pre-wrap leading-relaxed text-[11px]">
                    {getFormattedWhatsappText()}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className={`w-full sm:w-auto py-3.5 px-5 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      copied
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                        : theme === 'dark'
                          ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                          : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Mensagem</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
