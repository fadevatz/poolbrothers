import React, { useState } from 'react';
import { Palette, Droplets } from 'lucide-react';

export default function ColorSwatches() {
  const [activeLine, setActiveLine] = useState('aguas-brasil');
  const [selectedColor, setSelectedColor] = useState(null);

  const lines = {
    'aguas-brasil': {
      title: 'Linha Águas do Brasil',
      subtitle: 'Inspirada na riqueza e nos tons cristalinos das praias brasileiras',
      colors: [
        {
          id: 'branco-jeri',
          name: 'Branco Jericoacoara',
          tone: 'Branco Luminoso / Turquesa Claro',
          hex: '#EAEAEA',
          image: '/images/hero_pool.png',
          desc: 'Tonalidade de água cristalina inspirada no tom caribeño, realçando a luz solar.'
        },
        {
          id: 'verde-pipa',
          name: 'Verde Pipa',
          tone: 'Verde Turquesa Natural',
          hex: '#00D2D2',
          image: '/images/plaster_method.png',
          desc: 'Efeito esmeralda cristalino único, ideal para integração com paisagismo.'
        },
        {
          id: 'bege-arraial',
          name: 'Bege Arraial',
          tone: 'Areia Dourada Suave',
          hex: '#FDE68A',
          image: '/images/after_pool.png',
          desc: 'Tom quente e acolhedor que proporciona água verde-água brilhante.'
        },
        {
          id: 'azul-noronha',
          name: 'Azul Noronha',
          tone: 'Azul Oceânico Profundo',
          hex: '#003B73',
          image: '/images/tela_armada.png',
          desc: 'A clássica elegância dos mares profundos de Fernando de Noronha.'
        }
      ]
    },
    'destinos': {
      title: 'Linha Destinos Internacionais',
      subtitle: 'Cores sofisticadas que remetem aos resorts de altíssimo padrão pelo mundo',
      colors: [
        {
          id: 'verde-bali',
          name: 'Verde Bali',
          tone: 'Esmeralda Vulcânica (Hijau)',
          hex: '#059669',
          image: '/images/hero_pool.png',
          desc: 'Visual contemporâneo de pedra vulcânica natural em estado puro.'
        },
        {
          id: 'cinza-ny',
          name: 'Cinza Nova Iorque',
          tone: 'Slate / Concreto Moderno',
          hex: '#64748B',
          image: '/images/architect_space.png',
          desc: 'Estilo industrial chique com água azul acinzentada ultra sofisticada.'
        },
        {
          id: 'preto-dubai',
          name: 'Preto Dubai',
          tone: 'Espelho d\'Água Noturno',
          hex: '#1E293B',
          image: '/images/tela_armada.png',
          desc: 'Efeito espelhado dramático que reflete a arquitetura da casa.'
        },
        {
          id: 'bege-toscana',
          name: 'Bege Toscana',
          tone: 'Bege Rústico Chique',
          hex: '#D97706',
          image: '/images/after_pool.png',
          desc: 'Inspirado nas vilas italianas, tom caloroso e convidativo.'
        }
      ]
    }
  };

  const currentLine = lines[activeLine];

  return (
    <section id="cores" className="py-24 relative overflow-hidden bg-white text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-flagBlue/10 border border-flagBlue/20 text-flagBlue text-xs font-black uppercase tracking-widest">
            <Palette className="w-4 h-4 text-poolCyan-dark" />
            Catálogo Exclusivo de Cores Plaster
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue tracking-tight">
            Paleta de <span className="text-poolCyan-dark italic font-normal">Cores & Texturas</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Pigmentações minerais de Plaster jateado desenvolvidas para valorizar os mais diversos estilos arquitetônicos.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveLine('aguas-brasil')}
            className={`px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all min-h-[44px] ${
              activeLine === 'aguas-brasil'
                ? 'bg-flagBlue text-white shadow-lg shadow-flagBlue/25'
                : 'bg-slate-100 text-flagBlue border border-slate-200 hover:bg-slate-200'
            }`}
          >
            🏖️ Linha Águas do Brasil
          </button>
          <button
            onClick={() => setActiveLine('destinos')}
            className={`px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all min-h-[44px] ${
              activeLine === 'destinos'
                ? 'bg-flagBlue text-white shadow-lg shadow-flagBlue/25'
                : 'bg-slate-100 text-flagBlue border border-slate-200 hover:bg-slate-200'
            }`}
          >
            ✈️ Linha Destinos Internacionais
          </button>
        </div>

        {/* Line Subtitle */}
        <div className="text-center mb-8">
          <h3 className="font-display text-3xl font-bold text-flagBlue">{currentLine.title}</h3>
          <p className="text-xs text-poolCyan-dark font-bold mt-1">{currentLine.subtitle}</p>
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentLine.colors.map(color => (
            <div
              key={color.id}
              onClick={() => setSelectedColor(color)}
              className="card-pb p-6 cursor-pointer group space-y-4 transition-all hover:-translate-y-1"
            >
              {/* Color Swatch Circle */}
              <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-200" style={{ backgroundColor: color.hex }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="relative z-10 px-3 py-1 rounded-full bg-flagBlue text-white text-xs font-bold uppercase tracking-wider shadow">
                  {color.tone.split('/')[0]}
                </span>
              </div>

              <div className="space-y-1 text-left">
                <h4 className="text-lg font-black text-flagBlue group-hover:text-poolCyan-dark transition-colors">
                  {color.name}
                </h4>
                <p className="text-xs text-slate-500 font-bold">
                  {color.tone}
                </p>
                <p className="text-xs text-slate-600 pt-2 line-clamp-2 leading-relaxed font-medium">
                  {color.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-flagBlue font-black uppercase">
                <span>Ver Simulação</span>
                <Droplets className="w-4 h-4 text-poolCyan-dark group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Color Detail Modal */}
      {selectedColor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-flagBlue-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white max-w-lg w-full p-8 rounded-3xl border-2 border-flagBlue shadow-2xl relative space-y-6 text-left text-slate-900">
            
            <button
              onClick={() => setSelectedColor(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-xl"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-black text-poolCyan-dark uppercase tracking-widest">
                {selectedColor.tone}
              </span>
              <h3 className="text-3xl font-black text-flagBlue">{selectedColor.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{selectedColor.desc}</p>
            </div>

            <div className="rounded-2xl overflow-hidden h-48 relative border border-slate-200">
              <img
                src={selectedColor.image}
                alt={selectedColor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flagBlue-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-white/90 backdrop-blur-md text-xs text-flagBlue font-bold shadow">
                ✨ Simulação do tom de água sob a luz solar ao meio-dia.
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                onClick={() => setSelectedColor(null)}
                className="btn-primary-pb w-full text-center"
              >
                Solicitar Amostra da Cor {selectedColor.name}
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
