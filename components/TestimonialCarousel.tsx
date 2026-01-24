
import React, { useRef, useState, useEffect } from 'react';

const testimonials = [
  "https://res.cloudinary.com/drcqck3r9/image/upload/v1769281006/S-_1__covscs.webp",
  "https://res.cloudinary.com/drcqck3r9/image/upload/v1769281007/S-_2__sqwcg4.webp",
  "https://res.cloudinary.com/drcqck3r9/image/upload/v1769281007/S-_3__atrzf2.webp",
  "https://res.cloudinary.com/drcqck3r9/image/upload/v1769281008/S-_4__pxxor4.webp",
  "https://res.cloudinary.com/drcqck3r9/image/upload/v1769281008/S-_5__thl7ov.webp"
];

export const TestimonialCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const next = () => {
    if (activeIndex < testimonials.length - 1) {
      scrollTo(activeIndex + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    }
  };

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Container do Carrossel */}
      <div className="relative overflow-visible group">
        
        {/* Setas de Navegação - Laranja-Amarelado */}
        <button 
          onClick={prev}
          disabled={activeIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff9d00] text-[#00355b] p-3 rounded-full shadow-lg transition-all duration-300 transform active:scale-90 ${activeIndex === 0 ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100 hover:bg-[#ffb54d] -translate-x-4 md:-translate-x-6'}`}
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={next}
          disabled={activeIndex === testimonials.length - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#ff9d00] text-[#00355b] p-3 rounded-full shadow-lg transition-all duration-300 transform active:scale-90 ${activeIndex === testimonials.length - 1 ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100 hover:bg-[#ffb54d] translate-x-4 md:translate-x-6'}`}
          aria-label="Próximo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Area */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((img, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-full snap-center px-2"
            >
              <div className="relative transition-transform duration-500 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src={img} 
                  alt={`Depoimento ${i+1}`} 
                  className="w-full h-auto block pointer-events-none select-none" 
                  loading="lazy" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paginação (Dots) */}
      <div className="flex justify-center items-center gap-2 mt-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-[#ff9d00]' : 'w-2 bg-[#00355b]/10'}`}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>

      {/* Indicador de Arraste */}
      <div className="flex justify-center items-center gap-3 mt-8 text-[#00355b]/40 font-bold text-[10px] uppercase tracking-[0.2em]">
        <span className="w-8 h-[1px] bg-[#00355b]/10"></span>
        <span>Arraste para o lado</span>
        <span className="w-8 h-[1px] bg-[#00355b]/10"></span>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
