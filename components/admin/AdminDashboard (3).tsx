import React, { useState } from 'react';
import { Users, Calendar, Car, DollarSign, FileText, MessageSquare, Settings, User, Menu, X, Home, HelpCircle, Bell } from 'lucide-react';
import Overview from './Overview';
import UserManagement from './UserManagement';
import ClassesAndEvents from './ClassesAndEvents';
import VehicleManagement from './VehicleManagement';
import BillingAndFinancials from './BillingAndFinancials';
import ReportsAndAnalytics from './ReportsAndAnalytics';
import Messaging from './Messaging';
import SettingsSection from './SettingsSection';

interface AdminDashboardProps {
  email: string;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ email, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', id: 'overview' },
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden mr-3">
            <Menu size={24} />
          </button>
          <span className="text-xl font-bold text-blue-600">DriveMaster Admin</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <HelpCircle size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <Bell size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <User size={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-gray-200 w-64 p-4 space-y-4 absolute inset-y-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 transition duration-200 ease-in-out z-20 mt-16 md:mt-0`}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center space-x-2 py-2 px-4 rounded transition duration-200 hover:bg-gray-300 w-full ${
                activeSection === item.id ? 'bg-gray-300 font-semibold' : ''
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{menuItems.find(item => item.id === activeSection)?.label}</h1>
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;