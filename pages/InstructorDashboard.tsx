import React from 'react';
import { Users, Calendar, Clock, Star } from 'lucide-react';

const InstructorDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Instructor Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="text-blue-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Active Students</h2>
            <p className="text-3xl font-bold">28</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="text-green-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="text-yellow-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Hours Taught</h2>
            <p className="text-3xl font-bold">156</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Star className="text-purple-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Average Rating</h2>
            <p className="text-3xl font-bold">4.8</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Schedule</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Basic Driving - John Doe</p>
                  <p className="text-sm text-gray-500">9:00 AM - 11:00 AM</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Today</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Advanced Maneuvers - Jane Smith</p>
                  <p className="text-sm text-gray-500">2:00 PM - 4:00 PM</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Today</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Highway Driving - Mike Johnson</p>
                  <p className="text-sm text-gray-500">10:00 AM - 12:00 PM</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Tomorrow</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Student Progress</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Emily Brown</p>
                  <p className="text-sm text-gray-500">Basic Driving Course</p>
                </div>
                <div className="w-1/3">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-right text-sm mt-1">75% Complete</p>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Alex Wilson</p>
                  <p className="text-sm text-gray-500">Advanced Driving Course</p>
                </div>
                <div className="w-1/3">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{width: '50%'}}></div>
                  </div>
                  <p className="text-right text-sm mt-1">50% Complete</p>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Sarah Davis</p>
                  <p className="text-sm text-gray-500">Defensive Driving Course</p>
                </div>
                <div className="w-1/3">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <p className="text-right text-sm mt-1">25% Complete</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;