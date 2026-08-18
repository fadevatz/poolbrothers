import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [chatOpen, setChatOpen] = useState(false);

  const defaultMessage = "Olá! Gostaria de um orçamento para construção/reforma de piscina com o Método Americano.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      
      {/* Floating Pop-over Chat Widget */}
      {chatOpen && (
        <div className="mb-3 max-w-sm w-72 sm:w-80 bg-white p-4 sm:p-5 rounded-3xl border-2 border-flagBlue shadow-2xl animate-fadeIn space-y-4 text-left text-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-flagBlue flex items-center justify-center text-white font-black text-xs shadow">
                PB
              </div>
              <div>
                <h4 className="text-xs font-black text-flagBlue">Pool Brothers VIP</h4>
                <p className="text-xs text-emerald-600 font-bold">Online agora • Resposta rápida</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-slate-400 hover:text-slate-700 font-bold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-slate-100 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-bold">
            👋 Olá! Como podemos ajudar no seu projeto de piscina com o Método Americano hoje?
          </div>

          <a
            href={`https://wa.me/5511999999999?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Send className="w-4 h-4" />
            Iniciar Conversa no WhatsApp
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-35" />
        <MessageSquare className="w-7 h-7 relative z-10" />
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-stripedRed border-2 border-white z-20" />
      </button>

    </div>
  );
}
