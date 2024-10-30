import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CourseContent from './components/CourseContent';
import VideoPage from './components/VideoPage';
import Quiz from './components/Quiz';
import Test from './components/Test';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<CourseContent />} />
              <Route path="/video/:id" element={<VideoPage />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/test/:id" element={<Test />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;