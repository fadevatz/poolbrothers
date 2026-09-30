import React from 'react';
import { Instagram, Phone, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-flagBlue-dark text-white border-t-4 border-stripedRed pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 text-left">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-medium">
              Pioneiros no Brasil no autêntico Método Americano de construção e reforma de piscinas de luxo (Plaster Jateado e Tela Armada). Mais rapidez, 0 entulho e elegância sem emendas.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:text-poolCyan hover:bg-white/20 transition-colors border border-white/10 shadow"
                aria-label="Instagram Pool Brothers"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-poolCyan uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-bold">
              <li><a href="#quem-somos" className="hover:text-poolCyan transition-colors">Quem Somos</a></li>
              <li><a href="#diferenciais" className="hover:text-poolCyan transition-colors">Diferenciais</a></li>
              <li><a href="#metodo" className="hover:text-poolCyan transition-colors">O Método Americano</a></li>
              <li><a href="#servicos" className="hover:text-poolCyan transition-colors">Serviços Premium</a></li>
              <li><a href="#cores" className="hover:text-poolCyan transition-colors">Catálogo de Cores</a></li>
              <li><a href="#galeria" className="hover:text-poolCyan transition-colors">Galeria de Fotos</a></li>
              <li><a href="#arquitetos" className="hover:text-poolCyan transition-colors">Espaço Arquitetos</a></li>
              <li><a href="#contato" className="hover:text-poolCyan transition-colors">Contato & Orçamento</a></li>
            </ul>
          </div>

          {/* Contact Direct Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-poolCyan uppercase tracking-widest">Central de Contato</h4>
            <div className="space-y-2.5 text-xs text-slate-200 font-bold">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-poolCyan" />
                <span>+55 (11) 99999-9999</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-poolCyan" />
                <span>contato@brotherspoolbrasil.com.br</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-bold">
          <p>© {new Date().getFullYear()} Pool Brothers. Todos os direitos reservados. O Autêntico Método Americano.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-poolCyan hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
