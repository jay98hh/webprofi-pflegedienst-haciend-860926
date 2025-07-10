import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pflegedienst HACIENDA</h3>
            <p className="text-gray-400"></p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="text-gray-400 space-y-2">
              <p>Hamburg, 22359 Hamburg</p>
              <p>015158333431</p>
              <p>info@morepics.de</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <div className="text-gray-400 space-y-2">
              <a href="#" className="hover:text-white block">Impressum</a>
              <a href="#" className="hover:text-white block">Datenschutz</a>
              <a href="#" className="hover:text-white block">AGB</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pflegedienst HACIENDA. Alle Rechte vorbehalten.</p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;