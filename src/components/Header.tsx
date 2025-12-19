import React, { useState } from 'react';
import { Menu, X, ClipboardList } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Links do menu 
  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full">
      {/* Skip to main content - Acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-brand-orange focus:text-white focus:rounded-lg focus:font-bold focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      <div className="container mx-auto px-6">
        <div className="w-full bg-[#131117]/80 backdrop-blur-xl py-3 px-6 md:px-8 lg:px-16 rounded-full border border-white/20 shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)] flex justify-between items-center transition-all duration-300 relative">
          
          {/* Logo e Marca */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group" title="Voltar ao início">
             <img 
               src="/logo.png" 
               alt="Logo Minha Placa" 
               className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform object-contain" 
             /> 
             
             <div className="flex flex-col leading-tight">
               <span className="text-white font-extrabold text-lg tracking-tight">Minha Placa</span>
               <span className="text-brand-green text-[10px] font-bold tracking-widest uppercase hidden lg:block">Minha Vida</span>
             </div>
          </a>
          
          {/* Navegação Desktop 
          */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-300 font-medium text-sm md:text-base hover:text-white hover:font-bold transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
  
          {/* Área de Botões */}
          <div className="flex items-center gap-4">
            
            {/* Botão CTA Desktop (Só aparece em telas grandes) */}
            <a 
              href="#diagnostico"
              className="hidden lg:flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-1"
            >
              <ClipboardList size={18} />
              <span>Solicitar Análise</span>
            </a>
  
            {/* Botão Hambúrguer (Mobile e Tablet) com Acessibilidade */}
            <button 
              className="lg:hidden text-white p-1 hover:text-brand-green transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
  
          {/* Menu Dropdown (Mobile e Tablet) */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="absolute top-full left-0 mt-2 w-full bg-[#131117] border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5 lg:hidden"
            >
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 font-medium text-lg border-b border-white/5 py-2 hover:text-brand-green"
                >
                  {link.name}
                </a>
              ))}
               <a 
                  href="#diagnostico"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand-orange text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 mt-2"
                >
                  <ClipboardList size={20} />
                  Solicitar Análise
                </a>
            </div>
          )}
  
        </div>
      </div>
    </header>
  );
};

export default Header;