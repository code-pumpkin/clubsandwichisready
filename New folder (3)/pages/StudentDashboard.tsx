import React from 'react';
import { BookOpen, Calendar, Clock, Award } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="text-blue-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Enrolled Courses</h2>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="text-green-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="text-yellow-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Hours Completed</h2>
            <p className="text-3xl font-bold">18</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="text-purple-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <p className="text-3xl font-bold">5</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Basic Driving Course</p>
                  <p className="text-sm text-gray-500">Instructor: John Smith</p>
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
                  <p className="font-semibold">Defensive Driving</p>
                  <p className="text-sm text-gray-500">Instructor: Jane Doe</p>
                </div>
                <div className="w-1/3">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  <p className="text-right text-sm mt-1">30% Complete</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Basic Driving - Parking Practice</p>
                  <p className="text-sm text-gray-500">May 15, 2023 | 10:00 AM - 12:00 PM</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Upcoming</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Defensive Driving - Hazard Perception</p>
                  <p className="text-sm text-gray-500">May 18, 2023 | 2:00 PM - 4:00 PM</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Upcoming</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Basic Driving - Highway Driving</p>
                  <p className="text-sm text-gray-500">May 20, 2023 | 9:00 AM - 11:00 AM</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Upcoming</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 inline-block">
                <Award className="text-yellow-600" size={32} />
              </div>
              <p className="mt-2 font-semibold">First Lesson Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 inline-block">
                <Award className="text-green-600" size={32} />
              </div>
              <p className="mt-2 font-semibold">Perfect Parking</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block">
                <Award className="text-blue-600" size={32} />
              </div>
              <p className="mt-2 font-semibold">Highway Master</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block">
                <Award className="text-purple-600" size={32} />
              </div>
              <p className="mt-2 font-semibold">Defensive Driver</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 inline-block">
                <Award className="text-red-600" size={32} />
              </div>
              <p className="mt-2 font-semibold">Night Driving Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;