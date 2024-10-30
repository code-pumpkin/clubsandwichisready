import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { ChevronRight } from 'lucide-react';

interface Content {
  id: number;
  title: string;
  description: string;
  videoId?: string;
  readingContent?: string;
}

const ContentPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  
  // This is a mock database. In a real application, you would fetch this data from an API.
  const content: Content[] = [
    { id: 101, title: 'Welcome to the Course', description: "An introduction to what you'll learn in this course.", videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
    { id: 102, title: 'Course Overview', description: 'A detailed look at the course structure and content.', videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
    { id: 201, title: 'Course Syllabus', description: 'A comprehensive overview of the course syllabus.', readingContent: 'This is the course syllabus content...' },
    { id: 202, title: 'Learning Objectives', description: 'Detailed learning objectives for the course.', readingContent: 'By the end of this course, you will be able to...' },
  ];

  const currentContent = content.find(c => c.id === Number(id));

  if (!currentContent) {
    return <div>Content not found</div>;
  }

  const handleNext = () => {
    setShowQuiz(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{currentContent.title}</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        {type === 'video' && currentContent.videoId && (
          <VideoPlayer videoId={currentContent.videoId} />
        )}
        {type === 'reading' && currentContent.readingContent && (
          <div className="p-4">
            <p>{currentContent.readingContent}</p>
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">{currentContent.description}</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            onClick={handleNext}
          >
            Next <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
      {showQuiz && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Quiz</h2>
          {/* Add your Quiz component here */}
          <p>Quiz content goes here...</p>
        </div>
      )}
    </div>
  );
};

export default ContentPage;