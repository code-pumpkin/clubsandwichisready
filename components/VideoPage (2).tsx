import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string;
}

const VideoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showTranscript, setShowTranscript] = useState(false);
  
  // Mock data - replace with actual data fetching in a real application
  const videos: Video[] = [
    { id: 101, title: 'Getting Started with Driving', description: "Learn the basics of getting started with driving.", videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
    { id: 102, title: 'Basic Vehicle Controls', description: 'Understanding the fundamental controls of a vehicle.', videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
    { id: 103, title: 'Road Safety Basics', description: 'Essential knowledge for staying safe on the road.', videoId: 'VIVaqt4VhKc?si=3zW_Rs-VECnVuOSj' },
  ];

  const video = videos.find(v => v.id === Number(id));

  if (!video) {
    return <div>Video not found</div>;
  }

  const currentIndex = videos.findIndex(v => v.id === Number(id));
  const prevVideo = videos[currentIndex - 1];
  const nextVideo = videos[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <VideoPlayer videoId={video.videoId} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">{video.description}</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setShowTranscript(!showTranscript)}
          >
            {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
          </button>
          {showTranscript && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Transcript</h3>
              <p>Video transcript goes here...</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        {prevVideo ? (
          <Link to={`/video/${prevVideo.id}`} className="flex items-center text-blue-600 hover:underline">
            <ChevronLeft size={20} className="mr-1" />
            Previous: {prevVideo.title}
          </Link>
        ) : (
          <div></div>
        )}
        {nextVideo ? (
          <Link to={`/video/${nextVideo.id}`} className="flex items-center text-blue-600 hover:underline">
            Next: {nextVideo.title}
            <ChevronRight size={20} className="ml-1" />
          </Link>
        ) : (
          <Link to="/quiz/201" className="flex items-center text-blue-600 hover:underline">
            Next: Take Quiz
            <ChevronRight size={20} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default VideoPage;