import React from 'react';
import { Sparkles, Grid, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutAuthority() {
  return (
    <section id="metodo" className="py-20 sm:py-28 relative overflow-hidden bg-flagBlue text-white shadow-inner">
      
      {/* Background Refraction Illumination */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-poolCyan/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            O Autêntico Método Americano
          </h2>
          
          <p className="text-slate-200 font-normal text-base sm:text-lg leading-relaxed">
            A fusão perfeita entre a tecnologia de revestimento mineral contínuo e a elegância de azulejos e pastilhas nobres na linha d'água.
          </p>
        </div>

        {/* Hero Highlight Banner: Combination of Plaster + Tiles */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16 text-left relative overflow-hidden group hover:border-poolCyan/50 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-snug">
                Revestimento Monolítico no Fundo + Pastilhas de Luxo na Linha D'água
              </h3>

              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
                Unimos o melhor da tecnologia americana ao acabamento de alto padrão. Aplicamos o <strong className="text-poolCyan">Plaster Mineral</strong> no fundo e paredes da piscina — eliminando rejuntes encardidos, trincas e infiltrações —, enquanto a linha d'água e os degraus recebem pastilhas de vidro ou azulejos nobres.
              </p>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                O resultado é uma piscina com manutenção extremamente reduzida, facilidade de limpeza e valorização imediata do seu imóvel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-poolCyan shrink-0" />
                  <span className="text-sm font-semibold text-white">Fundo 100% contínuo (zero rejunte soltando)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-poolCyan shrink-0" />
                  <span className="text-sm font-semibold text-white">Linha d'água com pastilhas de alta durabilidade</span>
                </div>
              </div>
            </div>

            {/* Photo Card Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group/img">
                <img 
                  src="/images/after_pool.png" 
                  alt="Piscina de luxo concluída combinando revestimento Plaster e pastilhas na linha d'água" 
                  className="w-full h-[320px] sm:h-[380px] object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-poolCyan" />
                    <span>Manutenção Reduzida & Valorização do Imóvel</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Column Clean Grid (Materials & Coatings) */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/15 pb-4">
            <div>
              <h3 className="font-display text-3xl font-bold text-white">
                Soluções e Revestimentos Aplicados
              </h3>
              <p className="text-slate-200 text-sm sm:text-base">
                Conheça os três pilares de materiais utilizados no Método Americano.
              </p>
            </div>
            <a href="#contato" className="inline-flex items-center gap-2 text-poolCyan font-bold text-sm hover:underline">
              <span>Consultar materiais para o seu projeto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 01: Plaster Mineral */}
            <div className="bg-white text-slate-900 rounded-2xl p-8 space-y-5 border-2 border-transparent hover:border-poolCyan transition-all shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-flagBlue/10 flex items-center justify-center border border-flagBlue/20">
                  <Sparkles className="w-6 h-6 text-flagBlue" />
                </div>
                
                <div>
                  <span className="text-xs font-bold text-poolCyan-dark uppercase tracking-wider block mb-1">Tecnologia Base</span>
                  <h4 className="text-xl font-bold text-flagBlue">Plaster Mineral Quartz & Pebble</h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Revestimento monolítico mineral jateado a alta pressão. Proporciona superfície 100% contínua sem rejunte, toque aveludado e refração azul cristalina sob o sol.
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-poolCyan-dark shrink-0" />
                  <span>Aplicação pneumática ágil em 1 dia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-poolCyan-dark shrink-0" />
                  <span>Sem peças soltando no fundo</span>
                </li>
              </ul>
            </div>

            {/* Card 02: Azulejos & Pastilhas */}
            <div className="bg-white text-slate-900 rounded-2xl p-8 space-y-5 border-2 border-transparent hover:border-poolCyan transition-all shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-poolCyan/10 flex items-center justify-center border border-poolCyan/30">
                  <Grid className="w-6 h-6 text-poolCyan-dark" />
                </div>
                
                <div>
                  <span className="text-xs font-bold text-flagBlue uppercase tracking-wider block mb-1">Acabamento Combinado</span>
                  <h4 className="text-xl font-bold text-flagBlue">Azulejos & Pastilhas de Luxo</h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Mosaicos de vidro e cerâmicas nobres instalados na linha d'água, prainhas e escadas. Encaixe nivelado e harmonizado com a camada mineral.
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-poolCyan-dark shrink-0" />
                  <span>Moldura elegante para a linha d'água</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-poolCyan-dark shrink-0" />
                  <span>Transição suave ao toque</span>
                </li>
              </ul>
            </div>

            {/* Card 03: Agilidade & Transformação em 1 Dia */}
            <div className="bg-white text-slate-900 rounded-2xl p-8 space-y-5 border-2 border-transparent hover:border-poolCyan transition-all shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-stripedRed/10 flex items-center justify-center border border-stripedRed/30">
                  <Clock className="w-6 h-6 text-stripedRed" />
                </div>
                
                <div>
                  <span className="text-xs font-bold text-stripedRed uppercase tracking-wider block mb-1">Velocidade Recorde</span>
                  <h4 className="text-xl font-bold text-flagBlue">Transformação Ágil em Até 1 Dia</h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Esqueça obras arrastadas por meses. Com o jateamento pneumático de vazão contínua, a aplicação é finalizada em apenas poucas horas, liberando a piscina rapidamente.
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-poolCyan-dark shrink-0" />
                  <span>Aplicação jateada concluída em 1 dia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-poolCyan-dark shrink-0" />
                  <span>Zero entulho ou quebradeira na sua obra</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
