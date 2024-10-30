import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CreditCard, BookOpen, Cog, Calendar, Car } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import Students from './admin/Students';
import Billing from './admin/Billing';
import Courses from './admin/Courses';
import AdminSettings from './admin/AdminSettings';
import Schedule from './admin/Schedule';
import Vehicles from './admin/Vehicles';

const AdminPortal = () => {
  const location = useLocation();

  const navItems = [
    { path: '', icon: LayoutDashboard, label: 'Dashboard' },
    { path: 'students', icon: Users, label: 'Students' },
    { path: 'billing', icon: CreditCard, label: 'Billing' },
    { path: 'courses', icon: BookOpen, label: 'Courses' },
    { path: 'schedule', icon: Calendar, label: 'Schedule' },
    { path: 'vehicles', icon: Car, label: 'Vehicles' },
    { path: 'settings', icon: Cog, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Drivify360</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={`/admin/${item.path}`}
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 ${
                location.pathname === `/admin/${item.path}` ? 'bg-gray-200' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="billing" element={<Billing />} />
            <Route path="courses" element={<Courses />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;