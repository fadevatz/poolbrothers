import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, Waves } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Método', href: '#metodo' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cores', href: '#cores' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Espaço do Arquiteto', href: '#arquitetos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
          : 'bg-gradient-to-b from-flagBlue-dark/90 via-flagBlue-dark/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="group">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors relative group py-1 ${
                  isScrolled ? 'text-flagBlue hover:text-poolCyan-dark' : 'text-white hover:text-poolCyan drop-shadow'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-poolCyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button: Primary Flag Blue Button with Wave Accent */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contato"
              className="btn-primary-pb"
            >
              <span>Solicitar Orçamento</span>
              <svg width="18" height="12" viewBox="0 0 24 14" fill="none" className="shrink-0">
                <path d="M2 7C5 3 9 3 12 7C15 11 19 11 22 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M2 11C5 7 9 7 12 11C15 15 19 15 22 11" stroke="#00D2D2" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-flagBlue hover:bg-slate-200 focus:outline-none"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-flagBlue hover:text-poolCyan py-3 border-b border-slate-100 flex items-center min-h-[44px]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-pb w-full text-center min-h-[44px] justify-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
