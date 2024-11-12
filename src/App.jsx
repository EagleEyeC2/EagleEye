import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="videos">
          <Videos />
        </div>
        <div id="prices">
          <Pricing />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;