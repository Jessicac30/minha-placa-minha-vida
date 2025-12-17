import React from 'react';
import { ShieldCheck, Lock, Cpu, FileText } from 'lucide-react';

interface WarrantyItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const warrantyItems: WarrantyItem[] = [
  {
    id: 1,
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Garantia Estendida",
    subtitle: "3 a 6 Meses"
  },
  {
    id: 2,
    icon: <Lock className="w-8 h-8" />,
    title: "Privacidade Total",
    subtitle: "Dados Seguros"
  },
  {
    id: 3,
    icon: <Cpu className="w-8 h-8" />,
    title: "Lab Próprio",
    subtitle: "Sem Terceirização"
  },
  {
    id: 4,
    icon: <FileText className="w-8 h-8" />,
    title: "Orçamento Claro",
    subtitle: "Sem Surpresas"
  }
];

const Warranty: React.FC = () => {
  return (
    <section id="garantia" aria-label="Garantia e Segurança">
      {/* Container Principal "Bloco de Vidro" */}
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Garantia e Segurança
          </h2>
          <p className="text-text-muted text-lg">
            Sua tranquilidade é nossa prioridade.
          </p>
        </div>

        {/* Grid de 4 Colunas (1 no mobile, 2 no tablet, 4 no desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {warrantyItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-bg-body border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-green/10"
            >
              {/* Ícone */}
              <div className="text-brand-green mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Texto */}
              <h3 className="text-white font-bold text-lg mb-1">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Warranty;