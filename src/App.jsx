import { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Process from './sections/Process';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans cursor-none selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      <Preloader onComplete={() => setIsLoaded(true)} />
      <CustomCursor />
      
      {isLoaded && (
        <>
          {/* Global Continuous 3D WebGL Background Canvas with Scroll Animations */}
          <ThreeCanvas />

          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Process />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
