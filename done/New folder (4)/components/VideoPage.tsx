import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Quiz from './Quiz';
import { Bookmark, ThumbsUp, MessageSquare } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string;
}

const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showQuiz, setShowQuiz] = useState(false);
  
  // This is a mock database. In a real application, you would fetch this data from an API.
  const videos: Video[] = [
    { id: 101, title: 'Welcome to the Course', description: "An introduction to what you'll learn in this course.", videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
    { id: 102, title: 'Course Overview', description: 'A detailed look at the course structure and content.', videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
    // Add more videos as needed
  ];

  const video = videos.find(v => v.id === Number(id));

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <VideoPlayer videoId={video.videoId} />
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <ThumbsUp size={20} className="mr-1" />
                <span>Like</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <Bookmark size={20} className="mr-1" />
                <span>Bookmark</span>
              </button>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setShowQuiz(!showQuiz)}
            >
              {showQuiz ? 'Hide Quiz' : 'Take Quiz'}
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{video.description}</p>u
        </div>
      </div>
      {showQuiz && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <Quiz />
        </div>
      )}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MessageSquare size={24} className="mr-2" />
          Discussion
        </h2>
        {/* Add a comment section here */}
        <p className="text-gray-600">Comments are coming soon!</p>
      </div>
    </div>
  );
};

export default VideoPage;