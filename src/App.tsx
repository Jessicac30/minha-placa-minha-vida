import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="bg-hero-pattern min-h-screen pt-[180px] pb-20 overflow-x-hidden">
      <Header />
      
      {/* ADICIONEI 'space-y-24' PARA DAR ESPAÇO ENTRE AS SEÇÕES */}
      <main className="container mx-auto px-6 relative space-y-10">
        <Hero />
        <Services /> 
      </main>
    </div>
  );
}

export default App;