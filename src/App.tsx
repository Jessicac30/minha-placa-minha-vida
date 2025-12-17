import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import HowItWorks from './components/HowItWorks';
import Warranty from './components/Warranty';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AdvancedDiagnostic from './components/AdvancedDiagnostic';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-hero-pattern min-h-screen pt-[180px] pb-0 overflow-x-hidden"> 
      {/* Mudei pb-20 para pb-0, pois o Footer já tem padding interno */}
      
      <Header />
      
      <main className="container mx-auto px-6 relative space-y-16 mb-20"> 
        {/* Adicionei mb-20 para dar um espaço entre o form e o footer */}
        <Hero />
        <Services />
        <ServiceDetails />
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