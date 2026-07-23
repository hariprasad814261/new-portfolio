import { Navbar } from './components/Navbar';
import { AuraBackground } from './components/AuraBackground';
import { HeroBlock } from './components/HeroBlock';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CallToAction } from './components/CallToAction';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function App() {
  useScrollAnimation();

  return (
    <div className="bg-[#09090b] text-white min-h-screen selection:bg-white/10">
      {/* Fixed background glow layer */}
      <AuraBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-20">
        <HeroBlock />
        <About />
        <Projects />
        <CallToAction />
      </main>
    </div>
  );
}
