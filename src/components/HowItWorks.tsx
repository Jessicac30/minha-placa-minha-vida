import React from 'react';
import { FileText, Wrench, PackageCheck } from 'lucide-react';

interface StepItem {
  id: number;
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    stepNumber: "1",
    icon: <FileText className="w-8 h-8" />,
    title: "Solicitação",
    description: "Preencha o formulário e receba uma pré-análise imediata via WhatsApp."
  },
  {
    id: 2,
    stepNumber: "2",
    icon: <Wrench className="w-8 h-8" />,
    title: "Análise e Reparo",
    description: "Seu equipamento passa por diagnóstico físico e reparo especializado."
  },
  {
    id: 3,
    stepNumber: "3",
    icon: <PackageCheck className="w-8 h-8" />,
    title: "Devolução Segura",
    description: "Equipamento testado, higienizado e enviado com garantia total."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" aria-label="Como Funciona">
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-text-muted text-lg">
            Processo transparente e seguro, do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="group relative bg-bg-body border border-white/5 rounded-2xl p-8 hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/*  Fonte menor (5xl) no mobile para evitar sobreposição */}
              <div className="absolute top-2 right-4 text-4xl md:text-7xl lg:text-9xl lg:top-4 lg:right-8 font-black text-white opacity-[0.04] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                {step.stepNumber}
              </div>

              {/* Ícone */}
              <div 
                className="w-16 h-16 rounded-full bg-bg-card flex items-center justify-center text-brand-green mb-6 relative z-10 border border-white/5 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {step.icon}
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;