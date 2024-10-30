import React from 'react';
import { Users, BookOpen, Calendar, Settings } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="text-blue-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="text-green-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Active Courses</h2>
            <p className="text-3xl font-bold">15</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="text-yellow-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
            <p className="text-3xl font-bold">28</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Settings className="text-purple-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold mb-2">System Health</h2>
            <p className="text-3xl font-bold">98%</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span>New user registration</span>
                <span className="text-sm text-gray-500">2 minutes ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Course "Advanced Driving" updated</span>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>New instructor approved</span>
                <span className="text-sm text-gray-500">3 hours ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>System backup completed</span>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Add New User
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                Create Course
              </button>
              <button className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300">
                Schedule Session
              </button>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;