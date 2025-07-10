import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Pflegedienst HACIENDA
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Professionelle Dienstleistungen für Ihre Bedürfnisse
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--primary-color)' }}
        >
          Kontakt aufnehmen
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;