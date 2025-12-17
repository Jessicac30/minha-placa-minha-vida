import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';

function App() {
  return (
    <div className="bg-hero-pattern min-h-screen pt-[180px] pb-20 overflow-x-hidden">
      <Header />
      
      {/* Container Principal com espaçamento vertical entre seções */}
      <main className="container mx-auto px-6 relative space-y-24">
        <Hero />
        <Services />
        <ServiceDetails />
      </main>
    </div>
  );
}

export default App;