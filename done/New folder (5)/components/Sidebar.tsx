import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Video, FileText, Award } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Book, text: 'Course Content', path: '/' },
    { icon: Video, text: 'Live Sessions', path: '/live' },
    { icon: FileText, text: 'Resources', path: '/resources' },
    { icon: Award, text: 'Certificates', path: '/certificates' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;