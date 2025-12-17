import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 md:px-0">
      <div className="bg-[#131117]/90 backdrop-blur-md py-3 px-6 md:px-10 rounded-full border border-white/10 shadow-2xl w-full max-w-6xl flex justify-between items-center transition-all duration-300">
        
        {/* Logo e Marca */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group" title="Voltar ao início">
           <img src="/logo.png" alt="Logo Minha Placa" className="h-10 md:h-14 w-auto group-hover:scale-110 transition-transform" /> 
           
           <div className="flex flex-col leading-tight">
             <span className="text-white font-extrabold text-lg tracking-tight">Minha Placa</span>
             <span className="text-brand-green text-[10px] font-bold tracking-widest uppercase hidden md:block">Minha Vida</span>
           </div>
        </a>
        
        {/* Navegação */}
        <nav className="hidden md:flex gap-8">
          <a href="#servicos" className="text-gray-300 font-medium text-sm md:text-base hover:text-white hover:font-bold transition-all">Expertise</a>
          <a href="#detalhes" className="text-gray-300 font-medium text-sm md:text-base hover:text-white hover:font-bold transition-all">Serviço</a>
          <a href="#depoimentos" className="text-gray-300 font-medium text-sm md:text-base hover:text-white hover:font-bold transition-all">Depoimentos</a>
          <a href="#faq" className="text-gray-300 font-medium text-sm md:text-base hover:text-white hover:font-bold transition-all">Dúvidas</a>
        </nav>

        {/* Botão */}
        <a href="#diagnostico" className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-brand-orangeHover transition-all shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-1">
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;