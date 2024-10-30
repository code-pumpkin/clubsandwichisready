import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, Clock } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  videos: Video[];
}

interface Video {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

const CourseContent: React.FC = () => {
  const modules: Module[] = [
    {
      id: 1,
      title: 'Introduction to the Course',
      videos: [
        { id: 101, title: 'Welcome to the Course', duration: '5:30', completed: true },
        { id: 102, title: 'Course Overview', duration: '10:15', completed: false },
      ],
    },
    {
      id: 2,
      title: 'Fundamentals',
      videos: [
        { id: 201, title: 'Basic Concepts', duration: '15:45', completed: false },
        { id: 202, title: 'Getting Started', duration: '12:20', completed: false },
      ],
    },
    // Add more modules as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Course Content</h1>
      {modules.map((module) => (
        <div key={module.id} className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold p-4 bg-gray-50 border-b">{module.title}</h2>
          <ul>
            {module.videos.map((video) => (
              <li key={video.id} className="border-b last:border-b-0">
                <Link
                  to={`/video/${video.id}`}
                  className="flex items-center p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mr-4">
                    {video.completed ? (
                      <CheckCircle className="text-green-500" size={24} />
                    ) : (
                      <Play className="text-blue-500" size={24} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock size={16} className="mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;