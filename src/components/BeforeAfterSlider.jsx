import React, { useState, useRef, useEffect } from 'react';
import { SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="antes-depois" className="py-20 relative overflow-hidden bg-pbIce">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-flagBlue/10 border border-flagBlue/20 text-flagBlue text-xs font-black uppercase tracking-widest">
            <SlidersHorizontal className="w-4 h-4 text-poolCyan-dark" />
            Transformação Surreal em 1 Dia
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-flagBlue tracking-tight">
            Antes & Depois <span className="text-poolCyan-dark italic font-normal">Interativo</span>
          </h2>
          <p className="text-slate-600 font-medium text-base">
            Arraste o controle central para comparar a piscina antiga com azulejos desgastados e a transformação completa pelo Método Plaster Americano.
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[320px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-flagBlue/20 cursor-ew-resize select-none touch-none"
          >
            
            {/* AFTER Image (Background Base) */}
            <img
              src="/images/after_pool.png"
              alt="Depois: Piscina Plaster Americano Pool Brothers"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-flagBlue text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md z-10 shadow-lg border border-white/20">
              Depois: Método Americano
            </div>

            {/* BEFORE Image (Clipped Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/before_pool.png"
                alt="Antes: Piscina antiga desgastada com azulejos"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
              />
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-stripedRed text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md z-10 shadow-lg">
                Antes: Azulejos Desgastados
              </div>
            </div>

            {/* Vertical Divider & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-poolCyan shadow-glow-cyan z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-flagBlue border-2 border-poolCyan flex items-center justify-center shadow-2xl text-white hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-5 h-5 text-poolCyan" />
              </div>
            </div>

          </div>

          <div className="text-center mt-4 text-xs text-slate-500 font-bold">
            💡 Dica: Arraste a barra para os lados para visualizar todos os detalhes da obra.
          </div>
        </div>

      </div>
    </section>
  );
}
