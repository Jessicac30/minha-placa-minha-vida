import React from 'react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Check, 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  FileText 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Serviços', target: '#servicos' },
    { name: 'Diagnóstico', target: '#diagnostico' },
    { name: 'Garantia e Segurança', target: '#garantia' }
  ];

  return (
    <footer id="contato" className="bg-[#050505] border-t border-white/10 pt-16 pb-8 mt-20 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Grid Principal - 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* --- Coluna 1: Marca --- */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Minha Placa Minha Vida
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Assistência técnica premium especializada em conserto de placas-mãe, 
                micro-soldagem BGA e recuperação de eletrônicos.
              </p>
            </div>

            {/* REDES SOCIAIS COM LINKS ATIVOS */}
            <div className="flex gap-3">
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5511999999999" // 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Fale conosco no WhatsApp"
                className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-black transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/minhaplacam" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
                className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/minhaplacam" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Curta nossa página no Facebook"
                className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              
            </div>
          </div>

          {/* --- Coluna 2: Links Úteis --- */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Links Úteis
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.target} className="text-gray-400 hover:text-brand-green text-sm flex items-center gap-2 transition-colors">
                    <Check size={14} className="text-brand-green" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Coluna 3: Empresa --- */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <FileText size={18} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block text-white mb-1">CNPJ</strong>
                  <span>12.345.678/0001-90</span>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block text-white mb-1">Endereço</strong>
                  <span>São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>

          {/* --- Coluna 4: Atendimento --- */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block text-white mb-1">WhatsApp</strong>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </li>
              
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block text-white mb-1">E-mail</strong>
                  <a href="mailto:contato@minhaplaca.com.br" className="hover:text-brand-green transition-colors">
                    contato@minhaplaca.com.br
                  </a>
                </div>
              </li>

              <li className="flex gap-3 text-sm text-gray-400">
                <Clock size={18} className="text-brand-green shrink-0" />
                <div>
                  <strong className="block text-white mb-1">Horário</strong>
                  <span className="block">Seg-Sex: 9h às 18h</span>
                  <span className="block">Sáb: 9h às 13h</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Barra Inferior --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Minha Placa Minha Vida. Todos os direitos reservados.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;