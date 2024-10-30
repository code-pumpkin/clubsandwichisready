import React from 'react';
import Navigation from '../Navigation';

interface StudentNavigationProps {
  onLogout: () => void;
}

const StudentNavigation: React.FC<StudentNavigationProps> = ({ onLogout }) => {
  const navigationItems = [
    { label: 'Learning Materials', href: '#materials' },
    { label: 'Online Classes', href: '#classes' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Payments', href: '#payments' },
    { label: 'Progress Reports', href: '#progress' },
    { label: 'Messages', href: '#messages' },
    { label: 'Certificates', href: '#certificates' },
  ];

  return <Navigation items={navigationItems} onLoginClick={onLogout} />;
};

export default StudentNavigation;