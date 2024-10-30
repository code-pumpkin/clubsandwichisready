import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import OnlineCourse from './components/OnlineCourse';
import InClassCourse from './components/InClassCourse';
import InCarCourse from './components/InCarCourse';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/online" element={<OnlineCourse />} />
            <Route path="/in-class" element={<InClassCourse />} />
            <Route path="/in-car" element={<InCarCourse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;