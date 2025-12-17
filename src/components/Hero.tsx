import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-bg-component rounded-3xl border border-white/10 shadow-xl p-12 mb-10 relative overflow-hidden min-h-[600px] flex items-center">
      
      {/* 1. IMAGEM DE FUNDO */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photo.png')" }}
      ></div>

      {/* 2. OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/90 to-[#0d1117]/30 z-0"></div>
      
      {/* 3. CONTEÚDO */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center relative z-10 w-full">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-widest mb-5 border border-brand-orange/20 px-3 py-1 rounded-full bg-brand-orange/10 backdrop-blur-sm">
            <span className="text-[0.6rem]">●</span> Não vendemos peças, vendemos soluções
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
            Não condene seu equipamento. <span className="text-brand-highlight">Nós recuperamos!</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-[90%] font-medium">
            Assistência Técnica Premium. Focada em salvar seu investimento com tecnologia de ponta. 
            Não vendemos peças, vendemos soluções definitivas.
          </p>
          
          <a href="#diagnostico" className="inline-block bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-sm uppercase hover:bg-brand-orangeHover transition-all hover:-translate-y-1 shadow-lg shadow-brand-orange/20">
            Iniciar Diagnóstico Grátis
          </a>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-5 mt-10 pt-8 border-t border-white/10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white">+5k</h3>
              <p className="text-text-muted text-sm font-semibold uppercase mt-1">Placas Salvas</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">98%</h3>
              <p className="text-text-muted text-sm font-semibold uppercase mt-1">Sucesso</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">12</h3>
              <p className="text-text-muted text-sm font-semibold uppercase mt-1">Anos Mercado</p>
            </div>
          </div>
        </div>

        {/* Mascote */}
        <div className="hidden md:flex justify-center"> 
          <img 
            src="/logo.png" 
            alt="Mascote Minha Placa" 
            className="w-full max-w-[520px] drop-shadow-2xl animate-float motion-reduce:animate-none" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;