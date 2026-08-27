import React, { useState } from 'react';
import { Sparkles, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('plaster');

  const services = [
    {
      id: 'plaster',
      title: 'Plaster (O Método Americano)',
      tagline: 'O Revestimento Premium Jateado sem Emendas',
      icon: Sparkles,
      image: '/images/plaster_method.png',
      badge: 'Carro-Chefe EUA',
      description: 'O Plaster é a tecnologia de revestimento mais utilizada nas piscinas de luxo dos Estados Unidos. Trata-se de uma mistura de minerais nobres e quartzo jateada com maquinário pneumático próprio direto sobre a estrutura.',
      highlights: [
        'Livre da sujeira e entulho gerados por pastilhas e azulejos tradicionais',
        'Acabamento aveludado e suave ao toque dos pés e mãos',
        'Aplicação ultrarrápida concluída em até 1 único dia',
        'Sem rejunte que escurece ou solta com o tempo',
        'Cores cristalinas estilo resort caribenho'
      ]
    },
    {
      id: 'tela-armada',
      title: 'Tela Armada (High-Resistance Liner)',
      tagline: 'Solução Definitiva para Reformas Estruturais',
      icon: Layers,
      image: '/images/tela_armada.png',
      badge: 'Estanqueidade 100%',
      description: 'Indicada especialmente para reformas de piscinas antigas com trincas estruturais, vazamentos crônicos ou movimentação de solo onde revestimentos rígidos voltam a rachar.',
      highlights: [
        'Membrana armada de PVC calandrado de altíssima espessura e resistência',
        'Garantia total contra vazamentos mesmo em estruturas com microfisuras',
        'Sem necessidade de refazer a impermeabilização tradicional da piscina',
        'Texturas modernas (pedra natural, slate carbono, areia de praia)',
        'Resistente aos raios UV e produtos químicos concentrados'
      ]
    },
    {
      id: 'equipamentos',
      title: 'Equipamentos & Automação Inteligente',
      tagline: 'Tecnologia para Conforto e Eficiência Energética',
      icon: Cpu,
      image: '/images/hero_pool.png',
      badge: 'Smart Pool',
      description: 'Transforme sua piscina em uma experiência 100% automatizada. Dimensionamos e instalamos os sistemas mais avançados do mercado internacional.',
      highlights: [
        'Bombas inverter de velocidade variável (Economia de até 80% de energia)',
        'Trocadores de calor de alta performance (Água aquecida o ano todo)',
        'Tratamento automatizado por ozônio e gerador de sal/cloro natural',
        'Iluminação LED RGB dimerizável sincronizada por aplicativo móvel',
        'Automação via Wi-Fi: controle temperatura e hidromassagem pelo celular'
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeTab);

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-pbIce">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue tracking-tight">
            Nossos Serviços <span className="text-poolCyan-dark italic font-normal">Premium</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Soluções exclusivas que unem velocidade de execução, estanqueidade absoluta e estética impecável.
          </p>
        </div>

        {/* Navigation Tabs (Editorial Cockpit Style) */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 min-h-[44px] ${
                  isActive
                    ? 'bg-flagBlue text-white shadow-lg shadow-flagBlue/25 scale-105 border border-poolCyan/50'
                    : 'bg-white text-flagBlue border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-poolCyan' : 'text-flagBlue'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        {currentService && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden text-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Service Details Column */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-flagBlue leading-tight">
                  {currentService.title}
                </h3>
                
                <p className="text-poolCyan-dark text-sm font-bold tracking-wide">
                  {currentService.tagline}
                </p>

                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {currentService.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-flagBlue font-mono">Parâmetros de Desempenho:</h4>
                  <div className="space-y-2.5">
                    {currentService.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-bold">
                        <CheckCircle2 className="w-5 h-5 text-poolCyan-dark shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contato"
                    className="btn-primary-pb min-h-[44px] justify-center"
                  >
                    <span>Orçamento para {currentService.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Service Visual Image Column */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-[280px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
