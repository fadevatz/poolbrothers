import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-pbIce">
      
      {/* Background Video with Crisp Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          poster="/images/hero_pool.png"
          className="w-full h-full object-cover object-center filter brightness-[0.75]"
        >
          <source src="/videos/hero_pool_video.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-swimming-pool-water-2634/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-swimming-pool-with-blue-water-41555-large.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <img
            src="/images/hero_pool.png"
            alt="Piscina de Luxo Método Americano Pool Brothers"
            className="w-full h-full object-cover object-center filter brightness-[0.85]"
          />
        </video>
        {/* Layered Gradient Overlays for High Contrast & Smooth Framing */}
        <div className="absolute inset-0 bg-gradient-to-b from-flagBlue-dark/95 via-flagBlue-dark/40 to-pbIce" />
        <div className="absolute inset-0 bg-gradient-to-r from-flagBlue-dark/90 via-flagBlue-dark/50 to-transparent" />
      </div>

      {/* Hero Content Container (Centered & Clean) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-8 animate-fade-in-up">

          {/* Main Headline with Editorial Cormorant Garamond */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            O Autêntico Método Americano. <br className="hidden sm:inline" />
            <span className="text-poolCyan italic font-normal">Design Único de Piscinas de Luxo.</span>
          </h1>

          {/* Updated Subtitle Copy */}
          <p className="text-lg sm:text-xl text-slate-100 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow">
            Trouxemos para o Brasil a tecnologia EUA que é sucesso no mercado norte-americano. Acabamento contínuo em Plaster de quartzo, sem emendas, sem rejuntes e com aplicação concluída em até 1 dia.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary Button Flag Blue (#003B73) */}
            <a
              href="#contato"
              className="btn-primary-pb w-full sm:w-auto justify-center min-h-[44px]"
            >
              <span>Solicitar Orçamento VIP</span>
              <svg width="18" height="12" viewBox="0 0 24 14" fill="none">
                <path d="M2 7C5 3 9 3 12 7C15 11 19 11 22 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M2 11C5 7 9 7 12 11C15 15 19 15 22 11" stroke="#00D2D2" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </a>

            {/* Secondary Button Pool Cyan (#00D2D2) */}
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Pool%20Brothers."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-pb w-full sm:w-auto justify-center min-h-[44px]"
            >
              <MessageSquare className="w-5 h-5 text-flagBlue-dark" />
              <span>Atendimento Direto WhatsApp</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
