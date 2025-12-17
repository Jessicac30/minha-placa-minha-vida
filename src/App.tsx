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

    <div className="bg-hero-pattern min-h-screen pt-32 pb-0 overflow-x-hidden">
      <Header />
      
      <main className="container mx-auto px-6 relative space-y-12 mb-20">
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