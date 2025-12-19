import React from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Consertam Celulares?",
    answer: "Não. Focamos exclusivamente em Computadores (Notebook/Desktop) e Placas de linha branca."
  },
  {
    id: 2,
    question: "O diagnóstico é pago?",
    answer: "O pré-orçamento é grátis. A análise física não tem custo se o serviço for aprovado."
  },
  {
    id: 3,
    question: "Vendem peças avulsas?",
    answer: "Não. Somos prestadores de serviço e vendemos a solução instalada (mão de obra + peças)."
  },
  {
    id: 4,
    question: "Qual a garantia?",
    answer: "Oferecemos de 3 a 6 meses de garantia estendida em reparos de placa."
  }
];

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="scroll-mt-40"
      aria-label="Dúvidas Frequentes"
    >
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-text-muted text-lg">
            Tire suas dúvidas antes de solicitar o serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="bg-bg-body border border-white/5 rounded-2xl p-8 hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-green/5 text-left motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {item.question}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;