import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Master the Road with DriveMaster</h1>
        <p className="text-lg md:text-xl mb-8">Your journey to becoming a confident driver starts here</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;