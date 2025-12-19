import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      aria-label="Introdução e Diagnóstico"
      className="bg-bg-component rounded-3xl border border-white/10 shadow-xl p-6 md:p-12 mb-10 relative overflow-hidden min-h-[550px] flex items-center"
    >
      
      {/* 1. IMAGEM DE FUNDO */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photo.png')" }}
        aria-hidden="true" 
      ></div>

      {/* 2. OVERLAY */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/90 to-[#0d1117]/30 z-0"
        aria-hidden="true"
      ></div>
      
      {/* 3. CONTEÚDO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">
        
        {/* LADO ESQUERDO (TEXTO) */}
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          
          {/* --- BADGE --- */}
          <div className="
            inline-flex items-center justify-center gap-2 
            text-[0.6rem] sm:text-xs font-bold text-brand-orange uppercase 
            tracking-normal sm:tracking-widest 
            mb-5 border border-brand-orange/20 px-3 py-1.5 rounded-full 
            bg-brand-orange/10 backdrop-blur-sm 
            max-w-full whitespace-nowrap
          ">
         
            <span className="text-[0.6rem] shrink-0" aria-hidden="true">●</span> 
            <span>Não vendemos peças, vendemos soluções</span>
          </div>
          
        
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
            Não condene seu equipamento. <span className="text-brand-highlight">Nós recuperamos!</span>
          </h1>
          
          <p className="text-sm sm:text-lg text-gray-300 mb-8 max-w-[95%] mx-auto lg:mx-0 font-medium leading-relaxed">
            Assistência Técnica Premium. Focada em salvar seu investimento com tecnologia de ponta. 
            Não vendemos peças, vendemos soluções definitivas.
          </p>
          
          <a 
            href="#diagnostico" 
            className="inline-block bg-brand-orange text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-xs sm:text-sm uppercase 
            hover:bg-brand-orange/90 transition-all hover:-translate-y-1 shadow-lg shadow-brand-orange/20
            focus:outline-none focus:ring-4 focus:ring-brand-orange/50"
          >
            Iniciar Diagnóstico Grátis
          </a>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 text-center" role="list">
            <div role="listitem">
              <p className="text-xl sm:text-3xl font-bold text-white">+5k</p>
              <p className="text-gray-400 text-[0.6rem] sm:text-sm font-semibold uppercase mt-1">Placas Salvas</p>
            </div>
            <div role="listitem">
              <p className="text-xl sm:text-3xl font-bold text-white">98%</p>
              <p className="text-gray-400 text-[0.6rem] sm:text-sm font-semibold uppercase mt-1">Sucesso</p>
            </div>
            <div role="listitem">
              <p className="text-xl sm:text-3xl font-bold text-white">12</p>
              <p className="text-gray-400 text-[0.6rem] sm:text-sm font-semibold uppercase mt-1">Anos Mercado</p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO (MASCOTE) */}
        <div className="hidden lg:flex justify-center lg:justify-end relative w-full h-full items-center"> 
          <img 
            src="/logo.png" 
            alt="Mascote da Minha Placa: uma casinha tecnológica com chips eletrônicos" 
            width={600}
            height={600}
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto max-w-[400px] lg:max-w-[600px] drop-shadow-2xl animate-float motion-reduce:animate-none object-contain" 
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;