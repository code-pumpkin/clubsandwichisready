import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">DriveMaster</h3>
            <p>Your path to safe and confident driving</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-200"><Twitter size={24} /></a>
            <a href="#" className="hover:text-blue-200"><Instagram size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 DriveMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;