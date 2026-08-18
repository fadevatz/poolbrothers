import React from 'react';
import { Wrench, ShieldCheck, Globe, UserCheck } from 'lucide-react';

export default function AboutAuthority() {
  return (
    <section id="metodo" className="py-24 relative overflow-hidden bg-white text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-flagBlue/10 border border-flagBlue/20 text-flagBlue text-xs font-black uppercase tracking-widest">
            <Globe className="w-4 h-4 text-stripedRed" />
            Tradição & Autoridade Internacional
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue tracking-tight">
            O Verdadeiro Padrão Americano, <span className="text-poolCyan-dark italic font-normal">Sem Imitações.</span>
          </h2>
          <p className="text-slate-600 font-normal text-base sm:text-lg leading-relaxed">
            Trouxemos a tecnologia que revolucionou o mercado dos EUA para as residências mais exclusivas do Brasil.
          </p>
        </div>

        {/* Highlight Banner (Cockpit Spec Sheet) */}
        <div className="bg-flagBlue text-white p-8 sm:p-12 rounded-3xl border-4 border-stripedRed shadow-2xl mb-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stripedRed text-white font-bold text-xs uppercase tracking-wider shadow">
                <span>Diferencial Crítico de Engenharia</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-snug">
                Tecnologia, Equipamentos e Profissionais Importados dos Estados Unidos.
              </h3>
              <p className="text-slate-200 text-base leading-relaxed font-normal">
                Enquanto concorrentes tentam improvisar com ferramentas manuais locais, a <strong className="text-poolCyan font-bold">Pool Brothers importa diretamente dos EUA</strong> o maquinário pneumático de jateamento de alta pressão, os pigmentos de Plaster e a mão de obra especializada com <strong>mais de 25 anos de atuação na Flórida e Califórnia</strong>. O resultado é um design único de piscina de luxo, sem junções e de durabilidade incomparável.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-poolCyan/40 flex items-center gap-4 text-left">
                <Wrench className="w-8 h-8 text-poolCyan shrink-0" />
                <div>
                  <span className="text-xs font-bold text-poolCyan uppercase tracking-widest block">Telemetria de Maquinário</span>
                  <h4 className="text-sm font-black text-white">Maquinário 100% EUA</h4>
                  <p className="text-xs text-slate-300">Pneumático & Hidráulico Próprio</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-poolCyan/40 flex items-center gap-4 text-left">
                <UserCheck className="w-8 h-8 text-poolCyan shrink-0" />
                <div>
                  <span className="text-xs font-bold text-poolCyan uppercase tracking-widest block">Certificação Técnica</span>
                  <h4 className="text-sm font-black text-white">+25 Anos de Prática EUA</h4>
                  <p className="text-xs text-slate-300">Técnicos Certificados nos EUA</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats & Key Pillars Grid (Cockpit Metric Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="card-pb p-7 space-y-3 border-2 border-flagBlue/20 hover:border-poolCyan">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-flagBlue uppercase tracking-wider">Métrica 01</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-flagBlue">
              +25
            </div>
            <h4 className="text-lg font-black text-slate-900">Anos de Prática nos EUA</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Décadas de atuação na Flórida e Califórnia aplicando Plaster e Tela Armada nas mansões mais exclusivas dos EUA.
            </p>
          </div>

          <div className="card-pb p-7 space-y-3 border-2 border-flagBlue/20 hover:border-poolCyan">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-poolCyan-dark uppercase tracking-wider">Métrica 02</span>
              <span className="w-2 h-2 rounded-full bg-poolCyan" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-poolCyan-dark">
              100%
            </div>
            <h4 className="text-lg font-black text-slate-900">Tecnologia EUA</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Bombas de jateamento pneumático de vazão contínua e agregados minerais importados diretamente dos EUA.
            </p>
          </div>

          <div className="card-pb p-7 space-y-3 border-2 border-flagBlue/20 hover:border-poolCyan">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stripedRed uppercase tracking-wider">Métrica 03</span>
              <span className="w-2 h-2 rounded-full bg-stripedRed" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-stripedRed">
              1 Dia
            </div>
            <h4 className="text-lg font-black text-slate-900">Aplicação Plaster</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Revestimento jateado e alisado em poucas horas, reduzindo o tempo de aplicação para apenas 1 único dia.
            </p>
          </div>

          <div className="card-pb p-7 space-y-3 border-2 border-flagBlue/20 hover:border-poolCyan">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-flagBlue uppercase tracking-wider">Métrica 04</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-flagBlue">
              Zero
            </div>
            <h4 className="text-lg font-black text-slate-900">Entulho na Obra</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Sem quebradeira prolongada nem sacos de rejunte espalhados pela área de lazer da sua residência.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
