import React from 'react';
import { MapPin, Clock, MessageCircle, BookOpen, Shield, LayoutDashboard } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  </div>
);

const MobileApp = () => {
  const features = [
    {
      icon: MapPin,
      title: "Accurate Location Mapping",
      description: "Real-time GPS tracking for precise location during driving lessons."
    },
    {
      icon: Clock,
      title: "Lesson Scheduling",
      description: "Easy-to-use interface for booking and managing driving lessons."
    },
    {
      icon: MessageCircle,
      title: "In-App Messaging",
      description: "Direct communication between students and instructors."
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to study materials, practice tests, and driving tips."
    },
    {
      icon: Shield,
      title: "Progress Tracking",
      description: "Monitor your learning progress and skill development."
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "Comprehensive admin controls and analytics on the go."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              DriveTech Mobile App
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Enhance your learning experience with our feature-rich mobile application designed for students, instructors, and administrators.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-base font-medium text-gray-900">
                Download the app now:
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    App Store
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img className="w-full" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mobile app screenshot" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Key Features
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;