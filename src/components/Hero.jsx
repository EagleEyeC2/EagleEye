import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-8">
          Welcome to <span className="text-red-600">EagleEye</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          This website is the only official website of EagleEye on Google, you can also follow the latest updates and other topics related to EagleEye on this website.
        </p>
        <div className="flex justify-center">
          <a
            href="https://t.me/EagleEyeC2"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;