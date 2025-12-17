import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const benefits = [
  "Orçamento sem compromisso",
  "Garantia estendida",
  "Laboratório próprio"
];

interface FormData {
  equipamento: string;
  servico: string;
  modelo: string;
  problema: string;
  nome: string;
  email: string; 
}

interface FormErrors {
  equipamento?: string;
  servico?: string;
  modelo?: string;
  problema?: string;
  nome?: string;
  email?: string; 
}

const AdvancedDiagnostic: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    equipamento: '',
    servico: '',
    modelo: '',
    problema: '',
    nome: '',
    email: '' 
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validação simples de e-mail
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    switch (name) {
      case 'equipamento':
      case 'servico':
        if (!value) errorMessage = 'Por favor, selecione uma opção.';
        break;
      case 'modelo':
        if (!value.trim()) errorMessage = 'O modelo é obrigatório.';
        break;
      case 'problema':
        if (value.length < 10) errorMessage = 'Descreva com pelo menos 10 caracteres.';
        break;
      case 'nome':
        if (value.length < 3) errorMessage = 'O nome deve ter pelo menos 3 letras.';
        break;
      case 'email': 
        if (!validateEmail(value)) errorMessage = 'Digite um e-mail válido.';
        break;
      default:
        break;
    }

    setErrors(prev => ({ ...prev, [name]: errorMessage }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const formFields = ['equipamento', 'servico', 'modelo', 'problema', 'nome', 'email'];
    let hasError = false;
    
    formFields.forEach(field => {
      const value = formData[field as keyof FormData];
      validateField(field, value);
      
      // Checagem extra na hora do envio
      if (!value || 
         (field === 'problema' && value.length < 10) || 
         (field === 'nome' && value.length < 3) ||
         (field === 'email' && !validateEmail(value))) {
        hasError = true;
        setTouched(prev => ({ ...prev, [field]: true }));
      }
    });

    if (!hasError) {
      // --- LÓGICA DE ENVIO DO WHATSAPP ---
      
      const technicianPhone = "5511999999999"; 

      const text = 
`*Nova Solicitação de Diagnóstico* 🛠️

👤 *Cliente:* ${formData.nome}
📧 *E-mail:* ${formData.email}

💻 *Equipamento:* ${formData.equipamento}
🔖 *Modelo:* ${formData.modelo}
🔧 *Serviço:* ${formData.servico}

📝 *Descrição do Problema:*
${formData.problema}`;

      const whatsappUrl = `https://wa.me/${technicianPhone}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    }
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
                  <div className="bg-brand-orange/10 p-1 rounded-full mr-4 flex items-center justify-center" aria-hidden="true">
                    <Check className="text-brand-orange w-4 h-4 stroke-[3px]" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-white/5 shadow-inner">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Campo: EQUIPAMENTO */}
              <div>
                <label htmlFor="equipamento" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">Equipamento</label>
                <select
                  id="equipamento"
                  name="equipamento"
                  value={formData.equipamento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors appearance-none text-sm 
                    ${touched.equipamento && errors.equipamento ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-green'}`}
                >
                  <option value="" disabled className="text-gray-500">Selecione...</option>
                  <option value="notebook">Notebook</option>
                  <option value="desktop">Desktop (PC)</option>
                  <option value="placa-video">Placa de Vídeo</option>
                  <option value="placa-linha-branca">Placa de Linha Branca</option>
                  <option value="outro">Outro</option>
                </select>
                {touched.equipamento && errors.equipamento && (
                  <p className="mt-1 text-xs text-red-400 flex items-center"><AlertCircle size={12} className="mr-1"/>{errors.equipamento}</p>
                )}
              </div>

              {/* Campo: SERVIÇO */}
              <div>
                <label htmlFor="servico" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">Serviço</label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors appearance-none text-sm 
                    ${touched.servico && errors.servico ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-green'}`}
                >
                  <option value="" disabled className="text-gray-500">Selecione uma opção...</option>
                  <option value="micro-soldagem" className="text-white"> Micro-soldagem</option>
                  <option value="diagnostico" className="text-white"> Não sei / Diagnóstico</option>
                  <option value="limpeza" className="text-white">Limpeza</option>
                  <option value="recuperacao-placa" className="text-white">Recuperação Placa</option>
                </select>
                {touched.servico && errors.servico && (
                  <p className="mt-1 text-xs text-red-400 flex items-center"><AlertCircle size={12} className="mr-1"/>{errors.servico}</p>
                )}
              </div>

              {/* Campo: MODELO */}
              <div>
                <label htmlFor="modelo" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">Modelo do Aparelho</label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={50}
                  placeholder="Ex: Dell G15..."
                  className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm
                    ${touched.modelo && errors.modelo ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-green'}`}
                />
                {touched.modelo && errors.modelo && (
                  <p className="mt-1 text-xs text-red-400 flex items-center"><AlertCircle size={12} className="mr-1"/>{errors.modelo}</p>
                )}
              </div>

              {/* Campo: PROBLEMA */}
              <div>
                <label htmlFor="problema" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">Problema</label>
                <textarea
                  id="problema"
                  name="problema"
                  rows={3}
                  value={formData.problema}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={500}
                  placeholder="Descreva o defeito..."
                  className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none text-sm
                    ${touched.problema && errors.problema ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-green'}`}
                />
                <div className="flex justify-between mt-1">
                  {touched.problema && errors.problema ? (
                     <p className="text-xs text-red-400 flex items-center"><AlertCircle size={12} className="mr-1"/>{errors.problema}</p>
                  ) : <span></span>}
                  <span className="text-[10px] text-gray-600">{formData.problema.length}/500</span>
                </div>
              </div>

              {/* GRID: NOME E EMAIL LADO A LADO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Campo: NOME */}
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">Seu Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={60}
                    placeholder="Nome completo"
                    className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm
                      ${touched.nome && errors.nome ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-green'}`}
                  />
                  {touched.nome && errors.nome && (
                    <p className="mt-1 text-xs text-red-400 flex items-center"><AlertCircle size={12} className="mr-1"/>{errors.nome}</p>
                  )}
                </div>

                {/* Campo: EMAIL  */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-green mb-2 uppercase tracking-wider">Seu E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={100}
                    placeholder="exemplo@email.com"
                    className={`w-full bg-[#111] border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm
                      ${touched.email && errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-brand-green'}`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center"><AlertCircle size={12} className="mr-1"/>{errors.email}</p>
                  )}
                </div>
              </div>

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