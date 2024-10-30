import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  onLoginClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ items, onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">DriveMaster</span>
        </div>
        <div className="hidden md:flex space-x-4">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-blue-200">
              {item.label}
            </a>
          ))}
          <button
            onClick={onLoginClick}
            className="bg-white text-blue-600 px-4 py-2 rounded-md flex items-center"
          >
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 hover:text-blue-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              onLoginClick();
              setIsMenuOpen(false);
            }}
            className="bg-white text-blue-600 px-4 py-2 rounded-md flex items-center mt-2"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;