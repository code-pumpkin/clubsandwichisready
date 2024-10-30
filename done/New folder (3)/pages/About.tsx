import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About DriveMaster Academy</h1>
        
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            DriveMaster Academy has been a leader in driver education since 1995. Our mission is to create safer roads by providing top-quality driving instruction to students of all ages and skill levels.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a team of experienced and certified instructors, state-of-the-art training vehicles, and a comprehensive curriculum, we ensure that our students are well-prepared for the challenges of the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p>We prioritize safety in every aspect of our training.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Experienced Instructors</h3>
            <p>Learn from professionals with years of teaching experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Accredited Programs</h3>
            <p>Our courses meet and exceed state requirements.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded by retired traffic safety officer John Smith, DriveMaster Academy began with a simple goal: to make our roads safer by creating more skilled and responsible drivers. Over the years, we've expanded our offerings to include a wide range of courses for drivers of all types of vehicles.
          </p>
          <p className="text-gray-700">
            Today, we're proud to have helped thousands of students become confident, safe drivers. Our commitment to excellence and safety continues to drive us forward as we look to the future of driver education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;