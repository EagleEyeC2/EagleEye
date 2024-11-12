import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Videos = () => {
  const tutorials = [
    {
      title: "Installation Guide",
      description: "Step-by-step tutorial on installing EagleEye on your system",
      duration: "15:30"
    },
    {
      title: "Server Setup",
      description: "Complete guide to setting up your EagleEye server",
      duration: "12:45"
    },
    {
      title: "Basic Operations",
      description: "Learn the fundamental operations of EagleEye",
      duration: "20:15"
    },
    {
      title: "Advanced Features",
      description: "Deep dive into advanced EagleEye features",
      duration: "25:00"
    }
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <FaPlay className="text-4xl text-red-600 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                <p className="text-gray-400 mb-4">{tutorial.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600">{tutorial.duration}</span>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold transition">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;