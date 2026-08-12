import React, { useState, Component } from 'react';
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

// Fail-safe Error Boundary for 3D WebGL Canvas
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Canvas Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 w-full h-full bg-[#090514] pointer-events-none opacity-60 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-950/40 via-purple-950/70 to-slate-950"></div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#090514] text-slate-100 font-sans cursor-none selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
      <Preloader onComplete={() => setIsLoaded(true)} />
      <CustomCursor />
      
      {isLoaded && (
        <>
          {/* Global Continuous 3D WebGL Background Canvas with Error Boundary */}
          <WebGLErrorBoundary>
            <ThreeCanvas />
          </WebGLErrorBoundary>

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
