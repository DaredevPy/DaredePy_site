import React from 'react';
import { X, ShieldCheck, HardDrive, Lock } from 'lucide-react';
import { Theme } from '../types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-lg rounded-3xl border shadow-2xl p-6 sm:p-8 transition-all ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-pink-900/15 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className={`absolute top-5 right-5 p-2 rounded-full border transition-colors ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
              : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 rounded-2xl bg-pink-500/15 text-pink-500 border border-pink-500/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Política de Privacidade</h3>
            <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
              Compromisso com a transparência e proteção de dados
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed mb-6">
          <div className={`p-4 rounded-2xl border flex items-start space-x-3 ${
            theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <Lock className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold mb-1">Confidencialidade das Mensagens</h4>
              <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
                Todas as informações inseridas no formulário de contato são estritamente confidenciais e utilizadas exclusivamente para a formação do texto enviado ao WhatsApp pessoal de Renato Pimenta.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border flex items-start space-x-3 ${
            theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <HardDrive className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold mb-1">Uso de LocalStorage</h4>
              <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
                O armazenamento local do navegador (<code className="font-mono text-pink-400">localStorage</code>) é utilizado unicamente para salvar a sua preferência visual de tema (Modo Claro / Modo Escuro - chave <code className="font-mono text-pink-400">rp_theme</code>). Nenhum cookie de rastreamento de terceiros é instalado.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-400 hover:to-rose-500 transition-colors shadow-md cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
