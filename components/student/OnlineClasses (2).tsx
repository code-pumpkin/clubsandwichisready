import React, { useState } from 'react';
import { Play, PauseCircle, SkipForward, SkipBack } from 'lucide-react';

const OnlineClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState('video');

  const renderVideoPlayer = () => (
    <div className="bg-black aspect-video relative">
      <video className="w-full h-full" controls>
        <source src="https://example.com/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2 md:p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-2 md:space-x-4 mb-2 md:mb-0">
            <button><SkipBack size={20} /></button>
            <button><Play size={20} /></button>
            <button><PauseCircle size={20} /></button>
            <button><SkipForward size={20} /></button>
          </div>
          <div>
            <span className="text-sm md:text-base">00:00 / 45:00</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Chapter Quiz</h3>
      <form>
        <div className="mb-4">
          <p className="font-semibold mb-2">1. What is the first step in the driving process?</p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="q1" value="a" className="mr-2" />
              <span>Turn on the engine</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="q1" value="b" className="mr-2" />
              <span>Fasten your seatbelt</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="q1" value="c" className="mr-2" />
              <span>Adjust your mirrors</span>
            </label>
          </div>
        </div>
        {/* Add more quiz questions here */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto">
          Submit Quiz
        </button>
      </form>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Online Classes</h2>
      <div className="mb-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`${
                activeTab === 'video'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex-1 text-center`}
              onClick={() => setActiveTab('video')}
            >
              Video Lesson
            </button>
            <button
              className={`${
                activeTab === 'quiz'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex-1 text-center`}
              onClick={() => setActiveTab('quiz')}
            >
              Chapter Quiz
            </button>
          </nav>
        </div>
      </div>
      {activeTab === 'video' ? renderVideoPlayer() : renderQuiz()}
    </div>
  );
};

export default OnlineClasses;