import React, { useState } from 'react';
import { Image as ImageIcon, Eye, MapPin, X } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Mansão Alphaville - Plaster Azul Turquesa',
      category: 'residenciais',
      location: 'Alphaville, São Paulo',
      image: '/images/hero_pool.png',
      technique: 'Plaster Jateado + Automação LED'
    },
    {
      id: 2,
      title: 'Residencial Quinta da Baroneza - Design Orgânico',
      category: 'plaster',
      location: 'Itatiba, São Paulo',
      image: '/images/after_pool.png',
      technique: 'Plaster Americano Sem Emendas'
    },
    {
      id: 3,
      title: 'Villa Porto Rico - Reforma de Estanqueidade',
      category: 'tela-armada',
      location: 'Porto Rico, Paraná',
      image: '/images/tela_armada.png',
      technique: 'Tela Armada Slate Carbono'
    },
    {
      id: 4,
      title: 'Estate Flórida (EUA) - Projeto Piloto',
      category: 'plaster',
      location: 'Miami, Estados Unidos',
      image: '/images/plaster_method.png',
      technique: 'Plaster de Quartzo Importado'
    },
    {
      id: 5,
      title: 'Condomínio de Luxo Maringá - Automação Completa',
      category: 'residenciais',
      location: 'Maringá, Paraná',
      image: '/images/architect_space.png',
      technique: 'Trocador de Calor Inverter + Ozônio'
    },
    {
      id: 6,
      title: 'Mansão Londrina - Borda Infinita',
      category: 'plaster',
      location: 'Londrina, Paraná',
      image: '/images/hero_pool.png',
      technique: 'Plaster Jateado 1 Dia'
    }
  ];

  const filteredProjects = activeFilter === 'todos'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="galeria" className="py-24 relative overflow-hidden bg-white text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-flagBlue/10 border border-flagBlue/20 text-flagBlue text-xs font-black uppercase tracking-widest">
            <ImageIcon className="w-4 h-4 text-poolCyan-dark" />
            Portfólio de Luxo
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue tracking-tight">
            Galeria de <span className="text-poolCyan-dark italic font-normal">Projetos Executados</span>
          </h2>
          <p className="text-slate-600 font-medium text-base">
            Conheça a sofisticação e o acabamento impecável das piscinas executadas pela Pool Brothers nos EUA e nas regiões mais nobres do Brasil.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'todos', label: 'Todos os Projetos' },
            { id: 'plaster', label: 'Método Plaster' },
            { id: 'tela-armada', label: 'Tela Armada' },
            { id: 'residenciais', label: 'Mansões & Resorts' },
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                activeFilter === filter.id
                  ? 'bg-flagBlue text-white shadow-md'
                  : 'bg-slate-100 text-flagBlue hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="card-pb overflow-hidden cursor-pointer group relative text-left"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-flagBlue-dark/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-flagBlue opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-stripedRed text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-flagBlue group-hover:text-poolCyan-dark transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-500 font-bold">
                  {project.technique}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-flagBlue-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white p-6 sm:p-8 rounded-3xl border-2 border-flagBlue shadow-2xl text-left text-slate-900">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-flagBlue text-white flex items-center justify-center font-bold text-lg hover:bg-flagBlue-hover shadow"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="rounded-2xl overflow-hidden mb-4 max-h-[70vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 space-y-1">
              <span className="text-xs font-bold text-stripedRed uppercase tracking-widest">{selectedImage.location}</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-flagBlue">{selectedImage.title}</h3>
              <p className="text-xs text-slate-600 font-bold">Técnica: {selectedImage.technique}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
