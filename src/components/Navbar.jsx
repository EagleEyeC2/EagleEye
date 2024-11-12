import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold text-red-600">
          EagleEye
        </button>
        <div className="flex items-center space-x-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-red-600 transition">
            Home
          </button>
          <button onClick={() => scrollToSection('features')} className="hover:text-red-600 transition">
            Features
          </button>
          <button onClick={() => scrollToSection('videos')} className="hover:text-red-600 transition">
            Videos
          </button>
          <button onClick={() => scrollToSection('prices')} className="hover:text-red-600 transition">
            Prices
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition">
            Contact
          </button>
          <a
            href="https://t.me/EagleEyeC2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;