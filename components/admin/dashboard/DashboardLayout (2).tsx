import React, { useState } from 'react';
import {
  Users,
  Calendar,
  Car,
  DollarSign,
  FileText,
  MessageSquare,
  Settings,
  Menu,
  X,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  setActiveSection: (section: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, onLogout, setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: Users, label: 'User Management', id: 'users' },
    { icon: Calendar, label: 'Classes & Events', id: 'classes' },
    { icon: Car, label: 'Vehicle Management', id: 'vehicles' },
    { icon: DollarSign, label: 'Billing & Financials', id: 'billing' },
    { icon: FileText, label: 'Reports & Analytics', id: 'reports' },
    { icon: MessageSquare, label: 'Messaging', id: 'messaging' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-blue-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false);
              }}
              className="flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 w-full"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
          <button
            onClick={onLogout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {children}
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

export default DashboardLayout;
