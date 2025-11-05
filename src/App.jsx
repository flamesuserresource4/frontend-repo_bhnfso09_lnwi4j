import Hero from './components/Hero';
import CoreSections from './components/CoreSections';
import FooterCTA from './components/FooterCTA';
import AIChatWidget from './components/AIChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 font-sans text-slate-800">
      <Hero />
      <CoreSections />
      <FooterCTA />
      <AIChatWidget />
    </div>
  );
}

export default App;
