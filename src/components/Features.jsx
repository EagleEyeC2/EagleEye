import React from 'react';
import { FaShieldAlt, FaBolt, FaDesktop, FaLock, FaWindows, FaVideo, FaHeadset, FaTools } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaWindows className="text-4xl mb-4 text-red-600" />,
      title: "EagleEye Quality",
      description: "Highest Quality support for Windows 7, 8, 8.1, 10, 11"
    },
    {
      icon: <FaVideo className="text-4xl mb-4 text-red-600" />,
      title: "EagleEye Tutorial",
      description: "Video tutorials for installation on your system or server"
    },
    {
      icon: <FaHeadset className="text-4xl mb-4 text-red-600" />,
      title: "EagleEye Support",
      description: "24/7 technical support and troubleshooting assistance"
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-red-600" />,
      title: "Military-Grade Security",
      description: "End-to-end encryption with advanced authentication protocols"
    }
  ];

  const toolFeatures = [
    "Live Screen",
    "Terminal",
    "Chat",
    "KeyLogger Offline/Online",
    "Voice Monitoring",
    "Webcam",
    "HVNC",
    "Rookit Attach",
    "File Manage",
    "Proxy Mapping"
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* New EagleEye Update Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">EagleEye New Update</h3>
          <p className="text-gray-400 text-center mb-8">
            EagleEye is a powerful Windows remote control tool that provides real-time enhanced access to all Windows hosts. 
            Scroll down to learn how to purchase.
          </p>
          
          <h4 className="text-xl font-bold mb-4 text-red-600">What You Get:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-800 p-3 rounded">
                <FaTools className="text-red-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center text-gray-400">
            <p>Plus the ability to add custom features anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;