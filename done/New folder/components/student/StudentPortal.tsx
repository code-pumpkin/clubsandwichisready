import React, { useState } from 'react';
import { Book, Video, Calendar, DollarSign, FileText, MessageSquare, Award, Menu, X, User } from 'lucide-react';
// import LearningMaterials from './LearningMaterials';
// import OnlineClasses from './OnlineClasses';
// import Schedule from './Schedule';
// import Payments from './Payments';
// import ProgressReports from './ProgressReports';
// import Messages from './Messages';
// import Certificates from './Certificates';
// import Overview from './Overview';

interface StudentPortalProps {
  email: string;
  onLogout: () => void;
}

const StudentPortal: React.FC<StudentPortalProps> = ({ email, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: Book, label: 'Learning Materials', id: 'materials' },
    { icon: Video, label: 'Online Classes', id: 'classes' },
    { icon: Calendar, label: 'Schedule', id: 'schedule' },
    { icon: DollarSign, label: 'Payments', id: 'payments' },
    { icon: FileText, label: 'Progress Reports', id: 'progress' },
    { icon: MessageSquare, label: 'Messages', id: 'messages' },
    { icon: Award, label: 'Certificates', id: 'certificates' },
  ];

  const renderContent = () => {
    const title = activeSection === 'overview' ? 'Overview' : 
      menuItems.find(item => item.id === activeSection)?.label || 'Unknown Section';
    return <GenericSection title={title} />;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-yellow-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-2xl font-bold">Student Portal</h2>
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
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-700 w-full ${
                activeSection === item.id ? 'bg-yellow-700' : ''
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
            <h1 className="text-2xl font-bold ml-4">Welcome, Student</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span>{email}</span>
            <button
              onClick={onLogout}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
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

export default StudentPortal;
