import React, { useState } from 'react';
import { Users, Calendar, Car, FileText, MessageSquare, User, Menu, X } from 'lucide-react';

interface InstructorDashboardProps {
  email: string;
  onLogout: () => void;
}

const InstructorDashboard: React.FC<InstructorDashboardProps> = ({ email, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: Users, label: 'Student Management', id: 'students' },
    { icon: Calendar, label: 'Schedule', id: 'schedule' },
    { icon: Car, label: 'Vehicle Management', id: 'vehicles' },
    { icon: FileText, label: 'Reports', id: 'reports' },
    { icon: MessageSquare, label: 'Messages', id: 'messages' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'students':
        return <StudentManagement />;
      case 'schedule':
        return <Schedule />;
      case 'vehicles':
        return <VehicleManagement />;
      case 'reports':
        return <Reports />;
      case 'messages':
        return <Messages />;
      default:
        return <Overview />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-green-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-2xl font-bold">Instructor Dashboard</h2>
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
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 w-full ${
                activeSection === item.id ? 'bg-green-700' : ''
              }`}
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
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold ml-4">Welcome, Instructor</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <User size={24} />
            </button>
            <button
              onClick={onLogout}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {renderContent()}
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

const Overview: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">Today's Lessons</h3>
      <p className="text-3xl font-bold">5</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">Students Assigned</h3>
      <p className="text-3xl font-bold">12</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">Hours Taught This Week</h3>
      <p className="text-3xl font-bold">28</p>
    </div>
  </div>
);

const StudentManagement: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Student Management</h2>
    {/* Add student management functionality */}
  </div>
);

const Schedule: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Schedule</h2>
    {/* Add scheduling functionality */}
  </div>
);

const VehicleManagement: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Vehicle Management</h2>
    {/* Add vehicle management functionality */}
  </div>
);

const Reports: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Reports</h2>
    {/* Add reporting functionality */}
  </div>
);

const Messages: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Messages</h2>
    {/* Add messaging functionality */}
  </div>
);

export default InstructorDashboard;
