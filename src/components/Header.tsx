import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Pflegedienst HACIENDA
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-200 transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-gray-200 transition-colors">Leistungen</a>
            <a href="#contact" className="text-white hover:text-gray-200 transition-colors">Kontakt</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block text-white hover:text-gray-200 px-3 py-2">Home</a>
              <a href="#services" className="block text-white hover:text-gray-200 px-3 py-2">Leistungen</a>
              <a href="#contact" className="block text-white hover:text-gray-200 px-3 py-2">Kontakt</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;