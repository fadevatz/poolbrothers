import React, { useState } from 'react';
import { Compass, CheckCircle2, FileText, Building } from 'lucide-react';

export default function ArchitectsSpace() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [architectData, setArchitectData] = useState({
    nome: '',
    cau: '',
    email: '',
    telefone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="arquitetos" className="py-24 relative overflow-hidden bg-flagBlue text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-flagBlue-dark p-8 sm:p-14 rounded-3xl border-4 border-poolCyan/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-poolCyan text-xs font-black uppercase tracking-widest">
                <Compass className="w-4 h-4 text-stripedRed" />
                Espaço Exclusivo para Profissionais
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Arquitetos & <span className="text-poolCyan italic font-normal">Engenheiros</span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed">
                Eleve o padrão dos seus projetos residenciais integrando o autêntico <strong>Método Americano de Piscinas</strong>. Oferecerece aos seus clientes uma tecnologia sem emendas, com acabamento exclusivo e entrega de obra extremamente ágil.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-poolCyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-white">Especificação Sob Medida</h4>
                    <p className="text-xs text-slate-300">Apoio técnico no dimensionamento e especificações executivas.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-poolCyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-black text-white">Programa de Parceria VIP</h4>
                    <p className="text-xs text-slate-300">Condições exclusivas para escritórios de arquitetura.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-secondary-pb"
                >
                  <FileText className="w-5 h-5 text-flagBlue-dark" />
                  <span>Caderno Técnico & Cadastramento</span>
                </button>
              </div>

            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 p-8 rounded-3xl border-2 border-flagBlue shadow-2xl text-left space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-flagBlue" />
                    <h4 className="text-lg font-black text-flagBlue">Parceria Corporativa</h4>
                  </div>
                  <span className="text-xs font-bold text-white bg-stripedRed px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Pool Brothers Pro
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Trabalhamos em sintonia total com escritórios de alto padrão em SP e PR, respeitando o cronograma de obra e os parâmetros de design especificados.
                </p>

                <div className="space-y-3 text-xs text-slate-700 font-bold">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span>Amostrário Físico de Plaster:</span>
                    <span className="text-flagBlue font-black">Sob solicitação</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span>Arquivos 3D CAD/BIM:</span>
                    <span className="text-flagBlue font-black">Inclusos no Pack</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Suporte Executivo de Obra:</span>
                    <span className="text-flagBlue font-black">Presencial & Remoto</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for Architect Registration */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-flagBlue-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white text-slate-900 max-w-lg w-full p-8 rounded-3xl border-2 border-flagBlue shadow-2xl relative space-y-6 text-left">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-xl"
            >
              ✕
            </button>

            {!formSubmitted ? (
              <>
                <div className="text-center space-y-2">
                  <span className="text-xs font-black text-stripedRed uppercase tracking-widest">Portal do Arquiteto</span>
                  <h3 className="text-2xl font-black text-flagBlue">Acesse o Caderno Especificador</h3>
                  <p className="text-xs text-slate-600 font-medium">Preencha os dados do seu escritório para receber as especificações técnicas completas e catálogo de texturas.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-flagBlue uppercase mb-1">Nome Completo / Escritório</label>
                    <input
                      type="text"
                      required
                      placeholder="Arq. Fernando Silva"
                      value={architectData.nome}
                      onChange={e => setArchitectData({...architectData, nome: e.target.value})}
                      className="input-pb"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-flagBlue uppercase mb-1">CAU / CREA</label>
                      <input
                        type="text"
                        placeholder="CAU A12345-6"
                        value={architectData.cau}
                        onChange={e => setArchitectData({...architectData, cau: e.target.value})}
                        className="input-pb"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-flagBlue uppercase mb-1">WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={architectData.telefone}
                        onChange={e => setArchitectData({...architectData, telefone: e.target.value})}
                        className="input-pb"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-flagBlue uppercase mb-1">E-mail Profissional</label>
                    <input
                      type="email"
                      required
                      placeholder="contato@escritorio.com.br"
                      value={architectData.email}
                      onChange={e => setArchitectData({...architectData, email: e.target.value})}
                      className="input-pb"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-pb w-full text-center"
                  >
                    Baixar Especificação & Solicitar Amostras
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-flagBlue/10 text-flagBlue flex items-center justify-center mx-auto border-2 border-flagBlue">
                  <CheckCircle2 className="w-8 h-8 text-poolCyan-dark" />
                </div>
                <h3 className="text-2xl font-black text-flagBlue">Solicitação Enviada!</h3>
                <p className="text-sm text-slate-600 font-medium">
                  Obrigado, {architectData.nome}. Nosso consultor técnico entrará em contato via WhatsApp para disponibilizar a pasta técnica digital.
                </p>
                <button
                  onClick={() => { setModalOpen(false); setFormSubmitted(false); }}
                  className="btn-secondary-pb"
                >
                  Fechar Janela
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
