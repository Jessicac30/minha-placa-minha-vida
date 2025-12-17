import React from 'react';
import { Clock, Check, } from 'lucide-react';

const ServiceDetails: React.FC = () => {
  return (
    <section id="detalhes" className="relative z-10">
      
      {/* Container Card */}
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden relative shadow-2xl">
        
        {/* Grid: 1 Coluna no Mobile, 2 no Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* LADO ESQUERDO: Imagem */}
          <div className="relative group h-full min-h-[300px] md:min-h-[400px]">
            {/* Efeito de brilho atrás da imagem */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-green opacity-20 group-hover:opacity-40 blur transition duration-500 rounded-2xl"></div>
            
            <img 
              src="/placa-mae.png" 
              alt="Processador Ryzen em placa mãe sendo reparada" 
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>

          {/* LADO DIREITO: Conteúdo */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Conserto de Placa-Mãe
            </h2>

            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              Não condene seu computador. Nosso laboratório identifica curtos e 
              componentes queimados que a maioria das assistências não vê.
            </p>

            {/* Badge de Tempo */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-4 py-2 rounded-full mb-8">
              <Clock size={18} />
              <span className="text-sm font-bold">Tempo Médio: 2 a 4 dias úteis</span>
            </div>

            {/* Lista de Benefícios */}
            <ul className="space-y-4 mb-10">
              {[
                "Análise de esquema elétrico detalhado",
                "Troca de componentes queimados (SMD/BGA)",
                "Banho químico ultrassônico (desoxidação)",
                "Testes de estresse de 24h"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Ícone (Laranja) */}
                  <div className="mt-1">
                    <Check className="text-brand-orange stroke-[3]" size={20} />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botão de Ação */}
            <a 
              href="#contato" 
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-brand-orangeHover transition-all hover:-translate-y-1 shadow-lg shadow-brand-orange/20"
            >
              Ver Detalhes do Serviço
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;