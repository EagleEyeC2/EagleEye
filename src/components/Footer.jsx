import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-400">
          <a
            href="tg://resolve?domain=HideInFog"
            className="text-red-600 hover:text-red-500 transition"
          >
            Contact on Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;