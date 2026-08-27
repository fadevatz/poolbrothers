import React from 'react';
import { MapPin, Target, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="quem-somos" className="py-20 sm:py-28 relative overflow-hidden bg-white text-slate-900">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-poolCyan/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-flagBlue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-flagBlue leading-tight">
            Quem Somos: <span className="text-poolCyan-dark italic font-normal">25 Anos de Tradição</span> nos EUA
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Consolidamos nosso nome construindo e transformando piscinas de altíssimo padrão nas áreas mais exclusivas dos Estados Unidos.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Story Paragraph */}
            <div className="space-y-4 text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Especialistas em Re-imaginar o Luxo e a Engenharia de Piscinas
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Com mais de <strong className="text-flagBlue font-bold">25 anos de atuação contínua</strong> no mercado norte-americano, a <strong className="text-slate-900 font-bold">Pool Brothers</strong> construiu sua trajetória na linha de frente dos estados de <span className="text-slate-900 font-bold">Massachusetts, Flórida e Califórnia</span>.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Somos especialistas dedicados à criação e revestimento de piscinas de alto padrão, combinando técnicas avançadas de engenharia hidráulica e acabamentos minerais nobres que eliminam rejuntes e falhas tradicionais.
              </p>
            </div>

            {/* US States Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider w-full mb-1">Presença Consolidada nos EUA:</span>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-flagBlue/40 transition-colors shadow-sm">
                <MapPin className="w-4 h-4 text-stripedRed" />
                Massachusetts
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-flagBlue/40 transition-colors shadow-sm">
                <MapPin className="w-4 h-4 text-stripedRed" />
                Flórida
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-flagBlue/40 transition-colors shadow-sm">
                <MapPin className="w-4 h-4 text-stripedRed" />
                Califórnia
              </div>
            </div>

            {/* Mission Callout Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-flagBlue text-white border-2 border-stripedRed shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Target className="w-32 h-32 text-poolCyan" />
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-poolCyan/20 flex items-center justify-center border border-poolCyan/40">
                  <Sparkles className="w-4 h-4 text-poolCyan" />
                </div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Nossa Missão</h4>
              </div>
              
              <p className="text-slate-100 text-base sm:text-lg font-medium leading-relaxed italic">
                "Proporcionar aos nossos clientes uma experiência única e memorável, superando expectativas ao entregar produtos de qualidade superior, durabilidade máxima e estética impecável."
              </p>
            </div>

            {/* Value Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-poolCyan-dark shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Qualidade Sem Concessões</h5>
                  <p className="text-xs text-slate-600">Padrão rigoroso americano em cada m².</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-poolCyan-dark shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Atendimento Personalizado</h5>
                  <p className="text-xs text-slate-600">Acompanhamento exclusivo do projeto à entrega.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Crew Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group hover:border-flagBlue/40 transition-all duration-500">
              
              {/* Generated Realistic Crew Image */}
              <img 
                src="/images/quem_somos_equipe.png" 
                alt="Equipe especialista da Pool Brothers trabalhando na aplicação de revestimento em piscina de luxo" 
                className="w-full h-[450px] sm:h-[540px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85" />
              
              {/* Badge overlay on Image */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                <Shield className="w-4 h-4 text-stripedRed" />
                <span>Mão de Obra Certificada EUA</span>
              </div>

              {/* Floating Stat Card on Image Bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/15 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-poolCyan font-bold uppercase tracking-wider block mb-1">Engenharia em Ação</span>
                    <h5 className="text-white font-bold text-lg sm:text-xl">Equipe Própria & Altamente Especializada</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white block">+25</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Anos EUA</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
