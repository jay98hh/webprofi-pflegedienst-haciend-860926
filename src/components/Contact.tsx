import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Nachricht gesendet! Wir melden uns bald bei Ihnen.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <p className="text-xl text-gray-600">Nehmen Sie Kontakt mit uns auf</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-color)' }}>
              Kontaktdaten
            </h3>
            <div className="space-y-6">
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-1 mr-4" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <p className="font-medium text-gray-900">Adresse</p>
                  <p className="text-gray-600">Hamburg</p>
                  <p className="text-gray-600">22359 Hamburg</p>
                </div>
              </div>
              
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mt-1 mr-4" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <p className="font-medium text-gray-900">Telefon</p>
                  <a href="tel:015158333431" className="text-gray-600 hover:underline">
                    015158333431
                  </a>
                </div>
              </div>
              
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mt-1 mr-4" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <p className="font-medium text-gray-900">E-Mail</p>
                  <a href="mailto:info@morepics.de" className="text-gray-600 hover:underline">
                    info@morepics.de
                  </a>
                </div>
              </div>
              
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mt-1 mr-4" style={{ color: 'var(--primary-color)' }} />
                <div>
                  <p className="font-medium text-gray-900">Öffnungszeiten</p>
                  <p className="text-gray-600">Mo: 09:00-17:00, Di: 09:00-17:00, Mi: 09:00-17:00, Do: 09:00-17:00, Fr: 09:00-17:00, Sa: 09:00-13:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary-color)' }}>
              Nachricht senden
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ihre E-Mail"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ '--tw-ring-color': 'var(--primary-color)' } as React.CSSProperties}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;