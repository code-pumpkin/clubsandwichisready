import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car size={32} className="text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">DriveRight</span>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link></li>
            <li><Link to="/courses" className="text-gray-600 hover:text-blue-600 transition duration-300">Courses</Link></li>
            <li><Link to="/why-us" className="text-gray-600 hover:text-blue-600 transition duration-300">Why Us</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 transition duration-300">Blog</Link></li>
            <li><Link to="/resources" className="text-gray-600 hover:text-blue-600 transition duration-300">Resources</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link to="/login" className="text-blue-600 hover:text-blue-800 transition duration-300">Log In</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;