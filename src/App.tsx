import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import HowItWorks from './components/HowItWorks';
import Warranty from './components/Warranty';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ'; 

function App() {
  return (
    <div className="bg-hero-pattern min-h-screen pt-[180px] pb-20 overflow-x-hidden">
      <Header />
      
      <main className="container mx-auto px-6 relative space-y-24">
        <Hero />
        <Services />
        <ServiceDetails />
        <HowItWorks />
        <Warranty />
        <Testimonials />
        <FAQ /> 
      </main>
    </div>
  );
}

export default App;