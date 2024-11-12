import React from 'react';
import { FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-6 rounded-lg text-center w-full md:w-1/2">
              <FaTelegram className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <a 
                href="https://t.me/EagleEyeC2" 
                className="text-gray-400 hover:text-red-600 transition"
              >
                Contact us on Telegram
              </a>
            </div>
          </div>
          <div className="mt-12 bg-gray-800 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>
              <a
                href="https://t.me/EagleEyeC2"
                className="block w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition text-center"
              >
                Contact on Telegram
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;