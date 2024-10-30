import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About DriveTech ERP</h1>
        <div className="bg-white shadow rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            DriveTech ERP is a cutting-edge Enterprise Resource Planning solution designed specifically for driving schools. Our mission is to empower driving instructors and school administrators with the tools they need to run efficient, successful, and growth-oriented businesses.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Founded by a team of experienced software developers and former driving instructors, we understand the unique challenges faced by driving schools. Our platform combines powerful management tools with user-friendly interfaces to create a seamless experience for both administrators and students.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Innovation in education technology</li>
            <li>Commitment to road safety</li>
            <li>Customer-centric approach</li>
            <li>Continuous improvement and adaptation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;