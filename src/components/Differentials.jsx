import React from 'react';
import { Zap, Sparkles, MapPin, CheckCircle, Star } from 'lucide-react';

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-white text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stripedRed/10 border border-stripedRed/20 text-stripedRed text-xs font-black uppercase tracking-widest">
            <Star className="w-4 h-4 text-stripedRed" />
            Por Que Escolher a Pool Brothers?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue tracking-tight">
            Diferenciais <span className="text-poolCyan-dark italic font-normal">Incomparáveis</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Combinamos a agilidade do mercado americano com a exclusividade exigida pelas obras de altíssimo padrão.
          </p>
        </div>

        {/* 3 Key Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Differential 1: Velocidade Incomparável */}
          <div className="card-pb p-8 space-y-6 relative overflow-hidden group border-2 border-flagBlue/15">
            <div className="w-14 h-14 rounded-2xl bg-flagBlue flex items-center justify-center shadow-lg shadow-flagBlue/25">
              <Zap className="w-7 h-7 text-poolCyan" />
            </div>

            <div className="space-y-3 text-left">
              <span className="text-xs font-black text-stripedRed tracking-widest uppercase">01. Agilidade Extrema</span>
              <h3 className="font-display text-3xl font-bold text-flagBlue">Velocidade Incomparável</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                O que a concorrência tradicional leva de <strong>3 a 4 dias</strong> para aplicar manualmente, a equipe Pool Brothers executa em <strong>até 1 único dia</strong> com nosso maquinário hidráulico jateado.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-50 text-red-800 font-bold border border-red-200">
                <span>Método Tradicional:</span>
                <span>3 a 4 dias</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-flagBlue text-white font-black shadow">
                <span>Método Pool Brothers:</span>
                <span className="bg-poolCyan text-flagBlue-dark px-2.5 py-0.5 rounded text-xs font-bold uppercase">Até 1 Dia</span>
              </div>
            </div>
          </div>

          {/* Differential 2: Obra Limpa */}
          <div className="card-pb p-8 space-y-6 relative overflow-hidden group border-2 border-flagBlue/15">
            <div className="w-14 h-14 rounded-2xl bg-stripedRed flex items-center justify-center shadow-lg shadow-stripedRed/25">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            <div className="space-y-3 text-left">
              <span className="text-xs font-black text-flagBlue tracking-widest uppercase font-mono">02. RESPEITO AO SEU ESPAÇO</span>
              <h3 className="font-display text-3xl font-bold text-flagBlue">Obra 100% Limpa</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Esqueça poeira excessiva, sacos de rejunte rasgados e semanas de entulho no jardim da sua mansão. O processo de jateamento é contínuo, rápido e não gera resíduos acumulados na residência.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-left font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-poolCyan-dark shrink-0" />
                <span>Sem entulhos de azulejos velhos soltando</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-poolCyan-dark shrink-0" />
                <span>Preservação total do paisagismo ao redor</span>
              </div>
            </div>
          </div>

          {/* Differential 3: Exclusividade de Atendimento */}
          <div className="card-pb p-8 space-y-6 relative overflow-hidden group border-2 border-flagBlue/15">
            <div className="w-14 h-14 rounded-2xl bg-poolCyan flex items-center justify-center shadow-lg shadow-poolCyan/25">
              <MapPin className="w-7 h-7 text-flagBlue-dark" />
            </div>

            <div className="space-y-3 text-left">
              <span className="text-xs font-black text-flagBlue tracking-widest uppercase font-mono">03. ATENDIMENTO VIP</span>
              <h3 className="font-display text-3xl font-bold text-flagBlue">Exclusividade de Região</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Atuação focada em polos de altíssimo padrão em <strong>São Paulo</strong> (Capital, Alphaville, Quinta da Baroneza) e no <strong>Paraná</strong> (Londrina, Maringá e Porto Rico), oferecendo atendimento boutique personalizado.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-left">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <MapPin className="w-4 h-4 text-stripedRed shrink-0" />
                <span><strong>São Paulo:</strong> Capital, Alphaville, Barueri, Fazenda da Grama</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <MapPin className="w-4 h-4 text-stripedRed shrink-0" />
                <span><strong>Paraná:</strong> Londrina, Maringá e Porto Rico</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
