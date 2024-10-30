import React, { useState } from 'react';
import { Book, Calendar, DollarSign, FileText, MessageSquare, Award } from 'lucide-react';

interface StudentPortalProps {
  email: string;
  onLogout: () => void;
}

const StudentPortal: React.FC<StudentPortalProps> = ({ email, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = [
    { icon: Book, label: 'Learning Materials', id: 'materials' },
    { icon: Calendar, label: 'Schedule', id: 'schedule' },
    { icon: DollarSign, label: 'Payments', id: 'payments' },
    { icon: FileText, label: 'Progress Reports', id: 'progress' },
    { icon: MessageSquare, label: 'Messages', id: 'messages' },
    { icon: Award, label: 'Certificates', id: 'certificates' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'materials':
        return <LearningMaterials />;
      case 'schedule':
        return <Schedule />;
      case 'payments':
        return <Payments />;
      case 'progress':
        return <ProgressReports />;
      case 'messages':
        return <Messages />;
      case 'certificates':
        return <Certificates />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-yellow-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Student Portal</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="mb-4">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center text-white hover:text-yellow-200 w-full text-left ${
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
          <h1 className="text-3xl font-bold">Welcome, Student</h1>
          <button
            onClick={onLogout}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
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
        <h3 className="text-xl font-semibold mb-2">Completed Lessons</h3>
        <p className="text-3xl font-bold">8</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Upcoming Lessons</h3>
        <p className="text-3xl font-bold">3</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Quiz Score</h3>
        <p className="text-3xl font-bold">85%</p>
      </div>
    </div>
    {/* Add more overview content here */}
  </div>
);

const LearningMaterials: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Learning Materials</h2>
    {/* Add learning materials functionality */}
  </div>
);

const Schedule: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Schedule</h2>
    {/* Add scheduling functionality */}
  </div>
);

const Payments: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Payments</h2>
    {/* Add payment functionality */}
  </div>
);

const ProgressReports: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Progress Reports</h2>
    {/* Add progress reporting functionality */}
  </div>
);

const Messages: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Messages</h2>
    {/* Add messaging functionality */}
  </div>
);

const Certificates: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Certificates</h2>
    {/* Add certificate functionality */}
  </div>
);

export default StudentPortal;