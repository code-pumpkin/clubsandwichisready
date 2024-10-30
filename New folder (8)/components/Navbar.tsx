import React from 'react';
import Navigation from './Navigation';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return <Navigation items={navigationItems} onLoginClick={onLoginClick} />;
};

export default Navbar;