import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MobileApp from './pages/MobileApp';
import Contact from './pages/Contact';
import AdminPortal from './pages/AdminPortal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;