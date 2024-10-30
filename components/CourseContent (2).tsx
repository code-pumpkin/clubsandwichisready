import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  type: 'video' | 'quiz' | 'test';
  duration: string;
  questions?: number;
}

interface Module {
  id: number;
  title: string;
  content: ContentItem[];
}

const CourseContent: React.FC = () => {
  const [activeModule, setActiveModule] = useState(1);

  const modules: Module[] = [
    {
      id: 1,
      title: 'Introduction to Driving',
      content: [
        { id: 101, title: 'Getting Started with Driving', type: 'video', duration: '15:30' },
        { id: 201, title: 'Getting Started Quiz', type: 'quiz', duration: '5 minutes', questions: 5 },
        { id: 301, title: 'Mid-Module Test', type: 'test', duration: '15 minutes', questions: 15 },
        { id: 102, title: 'Basic Vehicle Controls', type: 'video', duration: '12:45' },
        { id: 202, title: 'Vehicle Controls Quiz', type: 'quiz', duration: '5 minutes', questions: 5 },
        { id: 103, title: 'Road Safety Basics', type: 'video', duration: '18:20' },
        { id: 203, title: 'Road Safety Quiz', type: 'quiz', duration: '5 minutes', questions: 5 },
        { id: 302, title: 'Module 1 Final Test', type: 'test', duration: '30 minutes', questions: 30 },
      ],
    },
    {
      id: 2,
      title: 'Advanced Driving Techniques',
      content: [
        // Add content for Module 2
      ],
    },
  ];

  const renderContentItem = (item: ContentItem) => {
    const icons = {
      video: Play,
      quiz: FileText,
      test: AlertCircle,
    };
    const Icon = icons[item.type];
    const buttonText = item.type === 'video' ? 'Watch' : 'Take ' + (item.type === 'quiz' ? 'Quiz' : 'Test');
    const buttonColor = item.type === 'video' ? 'bg-blue-500' : item.type === 'quiz' ? 'bg-green-500' : 'bg-yellow-500';

    return (
      <div key={item.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
        <div className="flex items-center">
          <Icon className="mr-4 text-gray-500" size={24} />
          <div>
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">
              {item.type === 'video' ? item.duration : `${item.questions} questions • ${item.duration}`}
            </p>
          </div>
        </div>
        <Link
          to={`/${item.type}/${item.id}`}
          className={`px-4 py-2 rounded-full text-white ${buttonColor} hover:opacity-90 transition-opacity`}
        >
          {buttonText}
        </Link>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Online Course</h1>
      <div className="flex mb-6 space-x-2">
        {modules.map((module) => (
          <button
            key={module.id}
            className={`px-4 py-2 rounded-full ${
              activeModule === module.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveModule(module.id)}
          >
            Module {module.id}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{modules.find(m => m.id === activeModule)?.title}</h2>
          <div className="flex mb-4 border-b">
            <button className="px-4 py-2 text-blue-500 border-b-2 border-blue-500">Course</button>
            <button className="px-4 py-2 text-gray-500">Study Materials</button>
          </div>
          {modules.find(m => m.id === activeModule)?.content.map(renderContentItem)}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;