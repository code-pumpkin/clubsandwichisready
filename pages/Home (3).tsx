import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-600 text-white" style={{ minHeight: '90vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Revolutionize Your Driving School with Drivify360
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Streamline operations, enhance student experience, and grow your business with our comprehensive ERP solution tailored for driving schools.
          </p>
          <div className="mt-10">
            <a href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Drivify360?</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Efficient Management</h3>
            <p className="mt-2 text-gray-600">Streamline scheduling, student records, and financial operations all in one place.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Mobile Integration</h3>
            <p className="mt-2 text-gray-600">Enhance learning with our mobile app featuring accurate location mapping and real-time updates.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Data-Driven Insights</h3>
            <p className="mt-2 text-gray-600">Make informed decisions with comprehensive analytics and reporting tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;