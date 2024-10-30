import React from 'react';
import { Link } from 'react-router-dom';
import { Car, GraduationCap, Monitor, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <GraduationCap className="mr-2" />
            DriveMaster
          </Link>
          <div className="flex space-x-4">
            <Link to="/online" className="flex items-center hover:text-blue-200">
              <Monitor className="mr-1" size={18} />
              Online
            </Link>
            <Link to="/in-class" className="flex items-center hover:text-blue-200">
              <User className="mr-1" size={18} />
              In-Class
            </Link>
            <Link to="/in-car" className="flex items-center hover:text-blue-200">
              <Car className="mr-1" size={18} />
              In-Car
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;