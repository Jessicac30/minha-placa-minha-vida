import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialItem {
  id: number;
  image: string;
  name: string;
  device: string;
  service: string;
  date: string;
  content: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    image: "/avatar-mariana.jpg",
    name: "Mariana Silva",
    device: "Notebook Dell",
    service: "REPARO PLACA",
    date: "DEZ 2024",
    content: "Salvaram meu notebook que a autorizada tinha condenado. Serviço incrível, economizei muito!"
  },
  {
    id: 2,
    image: "/avatar-roberto.jpg",
    name: "Roberto Costa",
    device: "PC Gamer",
    service: "MICRO-SOLDAGEM",
    date: "NOV 2025",
    content: "Economizei R$ 2.000 consertando a placa de vídeo em vez de trocar. Ficou nova de novo."
  },
  {
    id: 3,
    image: "/avatar-ana.jpg",
    name: "Ana Paula",
    device: "Brastemp Inverter",
    service: "PLACA GELADEIRA",
    date: "DEZ 2025",
    content: "Minha geladeira voltou a funcionar perfeitamente. Recomendo demais o trabalho deles."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" aria-label="Depoimentos de Clientes">
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-text-muted text-lg">
            Histórias reais de equipamentos recuperados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-bg-body rounded-2xl border-l-4 border-brand-green p-6 md:p-8 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300 shadow-lg hover:shadow-brand-green/5 overflow-hidden"
            >
              
              <div>
                {/* ACESSIBILIDADE NAS ESTRELAS:
                    1. role="img": Diz que esse grupo de elementos é uma imagem.
                    2. aria-label: O leitor vai falar "Avaliação: 5 de 5 estrelas" em vez de ler os ícones.
                */}
                <div 
                  className="flex gap-1 mb-4 text-amber-500" 
                  role="img" 
                  aria-label="Avaliação: 5 de 5 estrelas"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    /* aria-hidden="true": Esconde o ícone visual do leitor de tela para não repetir informação */
                    <Star key={star} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>

                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  {item.service} • {item.date}
                </div>

                <blockquote className="text-gray-300 italic mb-8 leading-relaxed">
                  "{item.content}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.image} 
                  alt={`Foto de ${item.name}`} // Acessibilidade: Descrição da imagem
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-green shrink-0"
                />
                
                <div>
                  <h4 className="text-white font-bold text-base leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {item.device}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;