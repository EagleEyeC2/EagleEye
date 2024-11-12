import React from 'react';
import { FaCheckCircle, FaTelegram } from 'react-icons/fa';

const Pricing = () => {
  const features = [
    "Help & Support",
    "Unlimited License",
    "All Available Features",
    "Future Updates For Free"
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">EagleEye Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Pricing */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">LIFETIME LICENSE</h3>
            <div className="text-4xl font-bold text-red-600 mb-8">$1000</div>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-red-600 text-xl flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/EagleEyeC2"
              className="block w-full bg-red-600 hover:bg-red-700 text-center py-3 rounded-lg font-semibold transition"
            >
              Order Now
            </a>
          </div>

          {/* Right Column - Contact Card */}
          <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-700">
              <img
                src="https://t.me/i/userpic/320/EagleEyeC2.jpg"
                alt="Telegram Representative"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjY3IDAgNS4xLjk4IDcgMi42MUwxNyA5aC0ydjJoMnYyaC0ydjJoMnYyaC0ydjJoLTJ2LTJoLTJ2MmgtMnYtMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJWOWgyTDcuMzkgNy42MUM5LjI5IDUuOTggMTEuNzIgNSAxNCA1eiIvPjwvc3ZnPg==';
                }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Contact Representative</h3>
            <p className="text-gray-400 mb-6 text-center">Official EagleEye Sales Representative</p>
            <div className="flex items-center space-x-2 mb-8">
              <FaTelegram className="text-2xl text-red-600" />
              <span className="font-medium">https://t.me/EagleEyeC2</span>
            </div>
            <div className="w-full p-6 bg-gray-900 rounded-lg mb-6">
              <ul className="space-y-3">
                <li className="text-gray-400">✓ Fast Response</li>
                <li className="text-gray-400">✓ Secure Transaction</li>
                <li className="text-gray-400">✓ Professional Support</li>
              </ul>
            </div>
            <a
              href="https://t.me/EagleEyeC2"
              className="block w-full bg-red-600 hover:bg-red-700 text-center py-3 rounded-lg font-semibold transition"
            >
              Contact on Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;