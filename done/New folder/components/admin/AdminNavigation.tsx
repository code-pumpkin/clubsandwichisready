import React from 'react';
import Navigation from '../Navigation';

interface AdminNavigationProps {
  onLogout: () => void;
}

const AdminNavigation: React.FC<AdminNavigationProps> = ({ onLogout }) => {
  const navigationItems = [
    { label: 'User Management', href: '#users' },
    { label: 'Classes & Events', href: '#classes' },
    { label: 'Vehicle Management', href: '#vehicles' },
    { label: 'Billing & Financials', href: '#billing' },
    { label: 'Reports & Analytics', href: '#reports' },
    { label: 'Messaging', href: '#messaging' },
    { label: 'Settings', href: '#settings' },
  ];

  return <Navigation items={navigationItems} onLoginClick={onLogout} />;
};

export default AdminNavigation;