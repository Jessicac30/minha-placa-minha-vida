import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "Orçamento sem compromisso",
  "Garantia estendida",
  "Laboratório próprio"
];

const AdvancedDiagnostic: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Formulário enviado!");
  };

  return (
    <section id="diagnostico" aria-label="Diagnóstico Avançado">
      <div className="bg-bg-component rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          
          <div className="flex flex-col pt-2">
            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
              Diagnóstico Avançado
            </h2>
            <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-md">
              Preencha os dados. Nosso técnico analisará seu caso e entrará em contato.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-300 font-medium">
                  {/* ACESSIBILIDADE: aria-hidden="true"
                      Isso diz ao leitor de tela para IGNORAR o ícone e ler apenas o texto.
                  */}
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-4 flex items-center justify-center" aria-hidden="true">
                    <Check className="text-brand-orange w-4 h-4 stroke-[3px]" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-white/5 shadow-inner">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="equipamento" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">
                  Equipamento
                </label>
                <select
                  id="equipamento"
                  name="equipamento"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors appearance-none text-sm"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="text-gray-500">Selecione...</option>
                  <option value="notebook">Notebook</option>
                  <option value="desktop">Desktop (PC)</option>
                  <option value="placa-video">Placa de Vídeo</option>
                  <option value="placa-linha-branca">Placa de Linha Branca</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="servico" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">
                  Serviço
                </label>
                <select
                  id="servico"
                  name="servico"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors appearance-none text-sm"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="text-gray-500">
                    Selecione uma opção...
                  </option>
                  <option value="micro-soldagem" className="text-white">
                    Micro-soldagem
                  </option>
                  <option value="diagnostico" className="text-white">
                    Não sei / Diagnóstico
                  </option>
                  <option value="limpeza" className="text-white">Limpeza</option>
                  <option value="recuperacao-placa" className="text-white">Recuperação Placa</option>
                </select>
              </div>

              <div>
                <label htmlFor="modelo" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">
                  Modelo do Aparelho
                </label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  placeholder="Ex: Dell G15..."
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="problema" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">
                  Problema
                </label>
                <textarea
                  id="problema"
                  name="problema"
                  rows={3}
                  placeholder="Descreva o defeito..."
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors resize-none text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="nome" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-colors text-sm"
                  required
                />
              </div>

              {/* ACESSIBILIDADE: motion-reduce
                  Adicionei classes para desligar a animação (scale) se o usuário tiver sensibilidade a movimento.
              */}
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-100 motion-reduce:transform-none motion-reduce:transition-none uppercase tracking-wide text-sm mt-2 focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange focus:ring-offset-[#0a0a0a] outline-none"
              >
                Solicitar Análise no WhatsApp
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvancedDiagnostic;