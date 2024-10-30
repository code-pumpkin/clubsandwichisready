import React from 'react';
import { Book, Users, Car } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Book, title: 'Comprehensive Curriculum', description: 'Learn theory and practical skills' },
    { icon: Users, title: 'Expert Instructors', description: 'Learn from experienced professionals' },
    { icon: Car, title: 'Modern Fleet', description: 'Practice with our well-maintained vehicles' },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon size={48} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;