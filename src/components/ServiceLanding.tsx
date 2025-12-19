import React, { useEffect } from 'react';
import { Check, X, Clock, ArrowLeft, ShieldCheck } from 'lucide-react';
import AdvancedDiagnostic from './AdvancedDiagnostic';

interface ServiceLandingProps {
  onBack: () => void;
}

const ServiceLanding: React.FC<ServiceLandingProps> = ({ onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white pb-20 animate-in slide-in-from-right duration-300">
      
      {/* NAVEGAÇÃO / BOTÃO VOLTAR */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4" aria-label="Navegação secundária">
        <div className="container mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group font-medium focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg px-2 py-1"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft size={20} aria-hidden="true" className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Página Inicial</span>
          </button>
        </div>
      </nav>

      {/* Container Principal: Define a largura para TODAS as seções */}
      <div className="container mx-auto px-6 space-y-24 mt-10">

        {/* --- HERO --- */}
        <section aria-labelledby="hero-title">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
              Engenharia Eletrônica Avançada
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Conserto de Placa-Mãe
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto mb-6 text-lg">
              Recuperação de alto nível para Notebooks, Desktops e MacBooks. 
              Identificamos e corrigimos a falha na raiz, sem condenar seu equipamento.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-[#112211] text-brand-green px-6 py-2 rounded-full border border-brand-green/20 text-sm font-bold">
              <Clock size={18} aria-hidden="true" />
              <span>Tempo Médio: 2 a 4 dias úteis</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group h-full min-h-[400px]">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop" 
                alt="Close-up de um Processador Ryzen instalado em uma placa-mãe de alta performance" 
                width={1000}
                height={667}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Lista */}
            <div className="bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 text-white">
                O que está incluso no serviço?
              </h3>
              <ul className="space-y-4">
                {[
                  "Análise forense do esquema elétrico",
                  "Substituição de componentes SMD e BGA",
                  "Reballing de Chipset/GPU (se necessário)",
                  "Desoxidação completa em banho químico",
                  "Laudo técnico detalhado"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 bg-[#1a1a1a] p-5 rounded-xl border border-white/5 hover:border-brand-green/20 transition-colors">
                    <Check size={20} className="text-brand-green shrink-0" strokeWidth={3} aria-hidden="true" />
                    <span className="text-gray-300 text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- COMPARATIVO --- */}
        <section aria-labelledby="compare-title" className="bg-[#111] p-8 md:p-16 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="text-center mb-12 relative z-10">
            <h2 id="compare-title" className="text-3xl md:text-4xl font-bold text-white mb-2">Por que escolher o reparo?</h2>
            <p className="text-gray-400 text-base">Compare e veja a economia real no seu bolso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* VS Decorativo */}
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-16 h-16 bg-[#222] border-4 border-[#111] rounded-full font-black text-gray-500 text-sm shadow-xl">VS</div>

            {/* Card Ruim */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-center mb-8 border-b border-white/5 pb-6">
                <h3 className="text-red-400 font-bold text-xl mb-2">Trocar Placa</h3>
                <div className="text-4xl lg:text-5xl font-black text-white">R$ 2.500+</div>
              </div>
              <ul className="space-y-4 text-base text-gray-500">
                <li className="flex gap-3"><X size={20} className="text-red-500 shrink-0" aria-hidden="true" /> Peças paralelas/usadas</li>
                <li className="flex gap-3"><X size={20} className="text-red-500 shrink-0" aria-hidden="true" /> Perda de dados frequente</li>
                <li className="flex gap-3"><X size={20} className="text-red-500 shrink-0" aria-hidden="true" /> Custo inviável</li>
              </ul>
            </div>

            {/* Card Bom */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-brand-green/50 shadow-[0_0_50px_-10px_rgba(0,255,100,0.1)] relative overflow-hidden transform hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 bg-brand-green text-black text-xs font-black px-4 py-2 rounded-bl-2xl uppercase tracking-wider">ECONOMIA DE 70%</div>
              <div className="text-center mb-8 border-b border-white/10 pb-6">
                <h3 className="text-brand-green font-bold text-xl mb-2">Nosso Reparo</h3>
                <div className="text-4xl lg:text-5xl font-black text-white">R$ 450 - 850</div>
              </div>
              <ul className="space-y-4 text-base text-white">
                <li className="flex gap-3"><ShieldCheck size={20} className="text-brand-green shrink-0" aria-hidden="true" /> Peça 100% original</li>
                <li className="flex gap-3"><ShieldCheck size={20} className="text-brand-green shrink-0" aria-hidden="true" /> Dados preservados</li>
                <li className="flex gap-3"><ShieldCheck size={20} className="text-brand-green shrink-0" aria-hidden="true" /> Garantia de 6 meses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- FORMULÁRIO --- */}
        <section aria-labelledby="form-title">
          <div className="text-center mb-10">
             <h2 id="form-title" className="text-3xl font-bold text-white mb-2">Salve seu equipamento hoje</h2>
             <p className="text-gray-400">Preencha abaixo para falar diretamente com o técnico no WhatsApp.</p>
          </div>
          
          <div className="w-full border-t border-white/5 pt-12">
            <AdvancedDiagnostic />
          </div>
        </section>

      </div>
    </main>
  );
};

export default ServiceLanding;