import React from 'react';
import { Hero } from './components/Hero';
import { EquipmentSection } from './components/EquipmentSection';
import { TechniquesSection } from './components/TechniquesSection';
import { StylingGuide } from './components/StylingGuide';
import { BeforeAfter } from './components/BeforeAfter';
import { InteractiveTips } from './components/InteractiveTips';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <InteractiveTips />
      <BeforeAfter />
      <EquipmentSection />
      <TechniquesSection />
      <StylingGuide />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">Created for professional hotel photographers worldwide</p>
          <p className="mt-4 text-gray-400">© 2023 Hotel Photography Guide</p>
        </div>
      </footer>
    </div>
  );
}

export default App;