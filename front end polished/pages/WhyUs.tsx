import React from 'react';
import { CheckCircle, Star, Clock, Users, Award, Smile } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'High Pass Rate',
    description: 'Our students have a 95% first-time pass rate on their driving tests.'
  },
  {
    icon: Star,
    title: 'Experienced Instructors',
    description: 'Learn from certified professionals with over 10 years of teaching experience.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Choose from a wide range of time slots that fit your busy schedule.'
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'We tailor our teaching methods to suit your individual learning style.'
  },
  {
    icon: Award,
    title: 'State-of-the-Art Vehicles',
    description: 'Practice in modern, well-maintained cars equipped with the latest safety features.'
  },
  {
    icon: Smile,
    title: 'Supportive Learning Environment',
    description: 'We create a positive, stress-free atmosphere to help you learn effectively.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Why Choose DriveRight Academy?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <reason.icon size={48} className="text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{reason.title}</h2>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-xl text-gray-600 mb-8">Here's what our students have to say:</p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">"DriveRight Academy gave me the confidence I needed to pass my test on the first try. The instructors were patient, knowledgeable, and made learning to drive fun!"</p>
            <p className="font-semibold">- Sarah J., Recent Graduate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;