import React, { useState } from 'react'; // 1. Importar useState
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails'; // Mantido como pediu
import ServiceLanding from './components/ServiceLanding'; // 2. Importar a nova página
import HowItWorks from './components/HowItWorks';
import Warranty from './components/Warranty';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AdvancedDiagnostic from './components/AdvancedDiagnostic';
import Footer from './components/Footer';

function App() {
  // 3. Estado para controlar a navegação (Home vs Landing)
  const [showLanding, setShowLanding] = useState(false);

  // SE O ESTADO FOR 'TRUE', MOSTRA A PÁGINA NOVA (SERVICE LANDING)
  if (showLanding) {
    return (
      <ServiceLanding 
        onBack={() => {
          window.scrollTo(0, 0); // Rola para o topo ao voltar
          setShowLanding(false); // Volta para a Home
        }} 
      />
    );
  }

  // SENÃO, MOSTRA O SITE NORMAL (HOME)
  return (
    <div className="bg-hero-pattern min-h-screen pt-32 pb-0 overflow-x-hidden">
      <Header />
      
      <main className="container mx-auto px-6 relative space-y-12 mb-20">
        <Hero />
        
        <ServiceDetails onDetailsClick={() => setShowLanding(true)} />
               
        <HowItWorks />
        <Warranty />
        <Testimonials />
        <FAQ />
        <AdvancedDiagnostic />
      </main>

      <Footer />
    </div>
  );
}

export default App;