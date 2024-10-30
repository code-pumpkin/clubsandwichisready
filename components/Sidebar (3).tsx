import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, Users, Calendar, DollarSign, BookOpen, TrendingUp, Settings, HelpCircle, MessageSquare } from 'lucide-react';
import { MenuItem, roleConfigs } from '../config/roleConfig';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentRole: string;
}

const iconComponents: { [key: string]: React.ComponentType<{ size?: number }> } = {
  Menu,
  Users,
  Calendar,
  DollarSign,
  BookOpen,
  TrendingUp,
  Settings,
  HelpCircle,
  MessageSquare,
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentRole }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { menuItems, roleName } = roleConfigs[currentRole];

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:block bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}>
      <div className="flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">DriveEd {roleName}</span>
      </div>
      <nav>
        {menuItems.map((item: MenuItem) => (
          <div key={item.name} className="mb-2">
            <div
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                location.pathname.startsWith(item.path) ? 'bg-blue-500' : 'hover:bg-gray-700'
              }`}
              onClick={() => item.subItems ? toggleSubmenu(item.name) : onClose()}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  {renderIcon(item.icon)}
                  <span>{item.name}</span>
                </div>
                {item.subItems && (
                  openSubmenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </div>
            {item.subItems && openSubmenu === item.name && (
              <div className="ml-6 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className={`block py-2 px-4 rounded transition duration-200 ${
                      location.pathname === subItem.path ? 'bg-blue-600' : 'hover:bg-gray-700'
                    }`}
                    onClick={() => onClose()}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;