import React, { useState } from 'react';
import { CheckCircle2, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    tipoProjeto: 'Plaster (Método Americano)',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-pbIce text-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue leading-tight tracking-tight">
              Transforme a sua <span className="text-poolCyan-dark italic font-normal">Piscina Hoje.</span>
            </h2>

            <p className="text-slate-600 font-medium text-base leading-relaxed">
              Fale diretamente com nossa equipe técnica de engenharia. Agende uma avaliação presencial em sua residência ou receba uma estimativa detalhada do seu projeto.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-flagBlue flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-poolCyan" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase">Regiões Atendidas</h4>
                  <p className="text-sm font-black text-flagBlue">São Paulo & Paraná</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stripedRed flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase">Garantia & Excelência</h4>
                  <p className="text-sm font-black text-flagBlue">Tecnologia Americana e Acabamento de Alta Durabilidade</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-flagBlue/20 shadow-2xl relative text-left">
              
              {!submitted ? (
                <>
                  <div className="mb-6 space-y-1">
                    <h3 className="font-display text-3xl font-bold text-flagBlue">Solicitar Orçamento / Visita Técnica</h3>
                    <p className="text-xs text-slate-500 font-bold">Preencha o formulário rápido abaixo. Resposta em até 2 horas úteis.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-flagBlue uppercase mb-1">Seu Nome Completo</label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Eduardo Mendes"
                          value={formData.nome}
                          onChange={e => setFormData({...formData, nome: e.target.value})}
                          className="input-pb"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-flagBlue uppercase mb-1">WhatsApp / Telefone</label>
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-8888"
                          value={formData.telefone}
                          onChange={e => setFormData({...formData, telefone: e.target.value})}
                          className="input-pb"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-flagBlue uppercase mb-1">Cidade</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: São Paulo"
                          value={formData.cidade}
                          onChange={e => setFormData({...formData, cidade: e.target.value})}
                          className="input-pb"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-flagBlue uppercase mb-1">Interesse Principal</label>
                        <select
                          value={formData.tipoProjeto}
                          onChange={e => setFormData({...formData, tipoProjeto: e.target.value})}
                          className="input-pb"
                        >
                          <option value="Plaster (Método Americano)">Plaster (Método Americano)</option>
                          <option value="Tela Armada High-Resistance">Tela Armada High-Resistance</option>
                          <option value="Equipamentos & Automação">Equipamentos & Automação</option>
                          <option value="Sou Arquiteto / Engenheiro">Sou Arquiteto / Engenheiro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-flagBlue uppercase mb-1">Detalhes do Projeto (Opcional)</label>
                      <textarea
                        rows="3"
                        placeholder="Descreva se é construção nova, reforma de azulejo antigo, dimensões estimadas..."
                        value={formData.mensagem}
                        onChange={e => setFormData({...formData, mensagem: e.target.value})}
                        className="input-pb"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary-pb w-full text-center py-4 min-h-[44px] justify-center"
                    >
                      Enviar Solicitação
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-flagBlue/10 text-flagBlue flex items-center justify-center mx-auto border-2 border-flagBlue">
                    <CheckCircle2 className="w-8 h-8 text-poolCyan-dark" />
                  </div>
                  <h3 className="text-2xl font-black text-flagBlue">Solicitação Recebida com Sucesso!</h3>
                  <p className="text-sm text-slate-600 font-medium">
                    Obrigado, {formData.nome}. Um de nossos consultores entrará em contato via WhatsApp no número {formData.telefone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary-pb"
                  >
                    Enviar Outra Solicitação
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
