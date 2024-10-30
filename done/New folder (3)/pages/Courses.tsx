import React from 'react';
import { Car, Truck, Bike } from 'lucide-react';

const Courses = () => {
  const courses = [
    { title: 'Basic Driving Course', icon: Car, description: 'Perfect for beginners learning to drive a car for the first time.', duration: '4 weeks', price: '$499' },
    { title: 'Advanced Driving Techniques', icon: Car, description: 'Enhance your skills with defensive driving and advanced maneuvers.', duration: '2 weeks', price: '$299' },
    { title: 'Commercial Truck Driving', icon: Truck, description: 'Prepare for your CDL with our comprehensive truck driving course.', duration: '8 weeks', price: '$1999' },
    { title: 'Motorcycle Safety Course', icon: Bike, description: 'Learn to ride safely and confidently with our motorcycle course.', duration: '3 weeks', price: '$399' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Driving Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <course.icon className="mx-auto mb-4 text-blue-600" size={48} />
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Duration: {course.duration}</span>
                  <span>Price: {course.price}</span>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
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