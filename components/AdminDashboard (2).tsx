import React, { useState } from 'react';
import { Users, Calendar, Car, DollarSign, FileText, MessageSquare, Settings } from 'lucide-react';

interface AdminDashboardProps {
  email: string;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ email, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { icon: Users, label: 'User Management', id: 'users' },
    { icon: Calendar, label: 'Classes & Events', id: 'classes' },
    { icon: Car, label: 'Vehicle Management', id: 'vehicles' },
    { icon: DollarSign, label: 'Billing & Financials', id: 'billing' },
    { icon: FileText, label: 'Reports & Analytics', id: 'reports' },
    { icon: MessageSquare, label: 'Messaging', id: 'messaging' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'classes':
        return <ClassesAndEvents />;
      case 'vehicles':
        return <VehicleManagement />;
      case 'billing':
        return <BillingAndFinancials />;
      case 'reports':
        return <ReportsAndAnalytics />;
      case 'messaging':
        return <Messaging />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="mb-4">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center text-white hover:text-blue-200 w-full text-left ${
                    activeSection === item.id ? 'font-bold' : ''
                  }`}
                >
                  <item.icon size={20} className="mr-2" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome, Admin</h1>
          <button
            onClick={onLogout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

const Overview: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Total Students</h3>
        <p className="text-3xl font-bold">250</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Active Instructors</h3>
        <p className="text-3xl font-bold">15</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Classes Today</h3>
        <p className="text-3xl font-bold">8</p>
      </div>
    </div>
    {/* Add more overview content here */}
  </div>
);

const UserManagement: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">User Management</h2>
    {/* Add tabs or sections for Students and Instructors */}
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Students</h3>
      {/* Add student management functionality */}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Instructors</h3>
      {/* Add instructor management functionality */}
    </div>
  </div>
);

const ClassesAndEvents: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Classes & Events</h2>
    {/* Add class and event management functionality */}
  </div>
);

const VehicleManagement: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Vehicle Management</h2>
    {/* Add vehicle management functionality */}
  </div>
);

const BillingAndFinancials: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Billing & Financials</h2>
    {/* Add billing and financial management functionality */}
  </div>
);

const ReportsAndAnalytics: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
    {/* Add reporting and analytics functionality */}
  </div>
);

const Messaging: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Messaging</h2>
    {/* Add messaging functionality */}
  </div>
);

const SettingsSection: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    {/* Add settings functionality */}
  </div>
);

export default AdminDashboard;