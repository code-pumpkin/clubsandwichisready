import React, { useState } from 'react';
import { Bell, Search, Menu, User, Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button onClick={onMenuClick} className="text-gray-500 focus:outline-none focus:text-gray-600 md:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800 ml-2 md:ml-0">DriveEd Admin</h1>
          </div>

          <div className="flex items-center">
            <div className="relative mx-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search size={20} className="text-gray-400" />
              </span>
              <input
                className="form-input w-full sm:w-64 rounded-md pl-10 pr-4 py-2 border border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                type="text"
                placeholder="Search..."
              />
            </div>

            <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 relative">
              <Bell size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">3</span>
            </button>

            <div className="relative ml-4">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
                <span className="ml-2 text-gray-700">John Doe</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <User size={16} className="mr-2" /> Profile
                  </a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <Settings size={16} className="mr-2" /> Settings
                  </a>
                  <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <LogOut size={16} className="mr-2" /> Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;