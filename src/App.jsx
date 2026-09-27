import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Differentials from './components/Differentials';
import AboutAuthority from './components/AboutAuthority';
import Services from './components/Services';
import ColorSwatches from './components/ColorSwatches';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Gallery from './components/Gallery';
import ArchitectsSpace from './components/ArchitectsSpace';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-pool-dark text-slate-100 font-sans selection:bg-pool-cyan selection:text-pool-dark relative">
      
      {/* Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        <AboutUs />
        <Differentials />
        <AboutAuthority />
        <Services />
        <ColorSwatches />
        <BeforeAfterSlider />
        <Gallery />
        <ArchitectsSpace />
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Action */}
      <WhatsAppButton />

    </div>
  );
}

