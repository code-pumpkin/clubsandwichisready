import React from 'react';
import { Car, Truck, Bike, Shield, Clock, Award } from 'lucide-react';

const courses = [
  {
    title: 'Beginner Driver\'s Course',
    description: 'Perfect for first-time drivers. Learn the basics and build confidence on the road.',
    icon: Car,
    price: '$499',
    duration: '30 hours',
    features: [
      { icon: Shield, text: 'Comprehensive safety training' },
      { icon: Clock, text: 'Flexible scheduling options' },
      { icon: Award, text: 'Certificate of completion' }
    ],
    includes: [
      '10 hours of classroom instruction',
      '20 hours of behind-the-wheel training',
      'Practice tests for written exam',
      'Vehicle provided for driving test'
    ]
  },
  {
    title: 'Defensive Driving Course',
    description: 'Enhance your skills and learn advanced techniques to stay safe in any situation.',
    icon: Car,
    price: '$299',
    duration: '15 hours',
    features: [
      { icon: Shield, text: 'Advanced hazard perception training' },
      { icon: Clock, text: 'Reduce insurance premiums' },
      { icon: Award, text: 'State-approved curriculum' }
    ],
    includes: [
      '8 hours of classroom instruction',
      '7 hours of practical driving scenarios',
      'Simulation of various road conditions',
      'Personal risk assessment'
    ]
  },
  {
    title: 'Commercial Driver\'s License (CDL) Prep',
    description: 'Prepare for your CDL test with our comprehensive course for aspiring truck drivers.',
    icon: Truck,
    price: '$799',
    duration: '60 hours',
    features: [
      { icon: Shield, text: 'DOT regulations and safety' },
      { icon: Clock, text: 'Job placement assistance' },
      { icon: Award, text: 'CDL test preparation' }
    ],
    includes: [
      '40 hours of classroom instruction',
      '20 hours of hands-on vehicle training',
      'Air brakes and combination vehicle training',
      'Hazardous materials handling (optional)'
    ]
  },
  {
    title: 'Motorcycle Safety Course',
    description: 'Learn to ride safely and confidently with our specialized motorcycle training.',
    icon: Bike,
    price: '$399',
    duration: '20 hours',
    features: [
      { icon: Shield, text: 'Motorcycle-specific safety gear training' },
      { icon: Clock, text: 'License waiver program available' },
      { icon: Award, text: 'Certified by Motorcycle Safety Foundation' }
    ],
    includes: [
      '10 hours of classroom instruction',
      '10 hours of on-motorcycle training',
      'Motorcycle and helmet provided for training',
      'Road skills and traffic navigation practice'
    ]
  }
];

const Courses: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Driving Courses</h1>
        <div className="grid grid-cols-1 gap-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <course.icon size={48} className="text-blue-600 mr-4" />
                <h2 className="text-3xl font-semibold">{course.title}</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{course.description}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Course Features:</h3>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <feature.icon size={24} className="text-green-500 mr-2" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {course.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                  <span className="text-gray-500 ml-2">/ {course.duration}</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;