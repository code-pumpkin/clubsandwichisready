import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DriveRight Academy</h3>
            <p>Your journey to safe and confident driving starts here.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/courses" className="hover:text-blue-300">Courses</Link></li>
              <li><Link to="/why-us" className="hover:text-blue-300">Why Us</Link></li>
              <li><Link to="/blog" className="hover:text-blue-300">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="hover:text-blue-300">Driving Tips</Link></li>
              <li><Link to="/resources" className="hover:text-blue-300">Cheat Sheets</Link></li>
              <li><Link to="/resources" className="hover:text-blue-300">Videos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-300"><Instagram /></a>
              <a href="#" className="hover:text-blue-300"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 DriveRight Academy. All rights reserved.</p>
          <Link to="/terms" className="hover:text-blue-300">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;