import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white" style={{
      '--primary-color': '#3B82F6',
      '--secondary-color': '#8B5CF6',
      '--accent-color': '#10B981',
      fontFamily: 'Inter, sans-serif'
    } as React.CSSProperties}>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;