import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-hero-pattern min-h-screen pt-[180px] pb-20">
      <Header />
      
      <main className="container mx-auto px-6 relative">
        <Hero />
      </main>
    </div>
  );
}

export default App