import React from 'react';
import { Star, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Hochwertige Dienstleistungen für Ihren Erfolg'
    },
    {
      icon: Shield,
      title: 'Zuverlässig',
      description: 'Vertrauen Sie auf unsere Erfahrung und Kompetenz'
    },
    {
      icon: Zap,
      title: 'Schnell',
      description: 'Effiziente Lösungen für Ihre Anforderungen'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-gray-600">Professionelle Services für Ihren Erfolg</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'var(--primary-color)' }}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;