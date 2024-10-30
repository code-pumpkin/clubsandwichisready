import React from 'react';
import { Calendar, Users, CreditCard, BarChart2, Smartphone, BookOpen } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <Icon className="h-8 w-8 text-blue-600 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Scheduling System",
      description: "Effortlessly manage instructor and student schedules with our intuitive booking system."
    },
    {
      icon: Users,
      title: "Student Management",
      description: "Keep track of student progress, documents, and certifications in one centralized location."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Securely handle payments, invoices, and financial reporting with our integrated system."
    },
    {
      icon: BarChart2,
      title: "Analytics Dashboard",
      description: "Gain valuable insights into your school's performance with comprehensive data analytics."
    },
    {
      icon: Smartphone,
      title: "Mobile App Integration",
      description: "Enhance the learning experience with our feature-rich mobile app for students and instructors."
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Create and manage course content, quizzes, and learning materials with ease."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;