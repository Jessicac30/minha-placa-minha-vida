import React from 'react';
import { Cpu, Sparkles, Zap } from 'lucide-react';

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: <Cpu className="w-8 h-8" />,
    title: "Micro-soldagem",
    description: "Substituição de componentes SMD/BGA em placas de notebooks e desktops."
  },
  {
    id: 2,
    icon: <Sparkles className="w-8 h-8" />,
    title: "Limpeza Técnica",
    description: "Higienização profunda e troca de pasta térmica para performance."
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8" />,
    title: "Eletrodomésticos",
    description: "Recuperação de placas lógicas de geladeiras, lava e seca e ar-condicionado."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" aria-label="Nossos Serviços">
      
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>

        <div className="text-center mb-12 md:mb-16 relative z-10">
          <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-2 block">
            O QUE FAZEMOS DE MELHOR
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Soluções Técnicas de <span className="text-brand-orange">Verdade</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Fugimos do "troca-troca" de peças. Nossa engenharia foca na recuperação do seu hardware original.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {services.map((item) => (
            <div 
              key={item.id}
              className="group bg-bg-body border border-white/5 rounded-2xl p-6 md:p-8 hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-brand-green/10 motion-reduce:hover:transform-none motion-reduce:transition-none"
            >
              <div 
                className="w-16 h-16 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors duration-300 motion-reduce:transition-none"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;