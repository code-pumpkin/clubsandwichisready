import React from 'react';
import Navigation from '../Navigation';

interface InstructorNavigationProps {
  onLogout: () => void;
}

const InstructorNavigation: React.FC<InstructorNavigationProps> = ({ onLogout }) => {
  const navigationItems = [
    { label: 'Student Management', href: '#students' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Vehicle Management', href: '#vehicles' },
    { label: 'Reports', href: '#reports' },
    { label: 'Messages', href: '#messages' },
  ];

  return <Navigation items={navigationItems} onLoginClick={onLogout} />;
};

export default InstructorNavigation;