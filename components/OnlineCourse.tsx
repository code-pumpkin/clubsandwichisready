import React, { useState } from 'react';
import { Play, FileText, CheckSquare, AlertCircle } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  duration: string;
}

interface Quiz {
  id: number;
  title: string;
  questions: number;
  timeLimit: string;
}

interface Content {
  id: number;
  title: string;
  type: string;
}

interface LearningUnit {
  video: Video;
  quiz: Quiz;
}

interface Module {
  id: number;
  title: string;
  units: LearningUnit[];
  content: Content[];
  midTermTest?: Quiz;
  finalTest: Quiz;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Driving",
    units: [
      {
        video: { id: 1, title: 'Getting Started with Driving', duration: '15:30' },
        quiz: { id: 1, title: 'Getting Started Quiz', questions: 5, timeLimit: '5 minutes' },
      },
      {
        video: { id: 2, title: 'Basic Vehicle Controls', duration: '12:45' },
        quiz: { id: 2, title: 'Vehicle Controls Quiz', questions: 5, timeLimit: '5 minutes' },
      },
      {
        video: { id: 3, title: 'Road Safety Basics', duration: '18:20' },
        quiz: { id: 3, title: 'Road Safety Quiz', questions: 5, timeLimit: '5 minutes' },
      },
    ],
    content: [
      { id: 1, title: "Driver's Manual Chapter 1", type: 'PDF' },
      { id: 2, title: 'Vehicle Parts Diagram', type: 'Image' },
    ],
    midTermTest: { id: 4, title: 'Mid-Module Test', questions: 15, timeLimit: '15 minutes' },
    finalTest: { id: 5, title: 'Module 1 Final Test', questions: 30, timeLimit: '30 minutes' },
  },
  {
    id: 2,
    title: "Traffic Rules and Regulations",
    units: [
      {
        video: { id: 6, title: 'Understanding Road Signs', duration: '14:55' },
        quiz: { id: 6, title: 'Road Signs Quiz', questions: 5, timeLimit: '5 minutes' },
      },
      {
        video: { id: 7, title: 'Right of Way Rules', duration: '16:30' },
        quiz: { id: 7, title: 'Right of Way Quiz', questions: 5, timeLimit: '5 minutes' },
      },
      {
        video: { id: 8, title: 'Speed Limits and Lane Usage', duration: '13:45' },
        quiz: { id: 8, title: 'Speed and Lanes Quiz', questions: 5, timeLimit: '5 minutes' },
      },
    ],
    content: [
      { id: 3, title: 'Traffic Rules Handbook', type: 'PDF' },
      { id: 4, title: 'Interactive Road Scenarios', type: 'Web App' },
    ],
    midTermTest: { id: 9, title: 'Mid-Module Test', questions: 20, timeLimit: '20 minutes' },
    finalTest: { id: 10, title: 'Module 2 Final Test', questions: 40, timeLimit: '40 minutes' },
  },
];

const OnlineCourse: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'course' | 'content'>('course');

  const currentModule = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Online Course</h1>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {modules.map((module) => (
          <button
            key={module.id}
            className={`px-4 py-2 rounded-full ${
              activeModule === module.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveModule(module.id)}
          >
            Module {module.id}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">{currentModule.title}</h2>
        
        <div className="flex space-x-4 border-b mb-4">
          <TabButton icon={<Play size={18} />} label="Course" isActive={activeTab === 'course'} onClick={() => setActiveTab('course')} />
          <TabButton icon={<FileText size={18} />} label="Study Materials" isActive={activeTab === 'content'} onClick={() => setActiveTab('content')} />
        </div>

        <div className="mt-6">
          {activeTab === 'course' && <CourseSection module={currentModule} />}
          {activeTab === 'content' && <ContentSection content={currentModule.content} />}
        </div>
      </div>
    </div>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
        isActive ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

const CourseSection: React.FC<{ module: Module }> = ({ module }) => {
  return (
    <div className="space-y-8">
      {module.units.map((unit, index) => (
        <div key={unit.video.id} className="space-y-4">
          <VideoItem video={unit.video} />
          <QuizItem quiz={unit.quiz} />
          {index === Math.floor(module.units.length / 2) - 1 && module.midTermTest && (
            <TestItem test={module.midTermTest} isMidTerm />
          )}
        </div>
      ))}
      <TestItem test={module.finalTest} isFinal />
    </div>
  );
};

const VideoItem: React.FC<{ video: Video }> = ({ video }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
    <div className="flex items-center">
      <Play className="text-blue-500 mr-3" size={24} />
      <div>
        <h3 className="font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-500">{video.duration}</p>
      </div>
    </div>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Watch</button>
  </div>
);

const QuizItem: React.FC<{ quiz: Quiz }> = ({ quiz }) => (
  <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
    <div className="flex items-center">
      <CheckSquare className="text-green-500 mr-3" size={24} />
      <div>
        <h3 className="font-semibold">{quiz.title}</h3>
        <p className="text-sm text-gray-500">{quiz.questions} questions • {quiz.timeLimit}</p>
      </div>
    </div>
    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Take Quiz</button>
  </div>
);

const TestItem: React.FC<{ test: Quiz; isMidTerm?: boolean; isFinal?: boolean }> = ({ test, isMidTerm, isFinal }) => (
  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
    <div className="flex items-center">
      <AlertCircle className="text-yellow-500 mr-3" size={24} />
      <div>
        <h3 className="font-semibold">{test.title}</h3>
        <p className="text-sm text-gray-500">{test.questions} questions • {test.timeLimit}</p>
      </div>
    </div>
    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
      {isMidTerm ? 'Take Mid-Term Test' : isFinal ? 'Take Final Test' : 'Take Test'}
    </button>
  </div>
);

const ContentSection: React.FC<{ content: Content[] }> = ({ content }) => {
  return (
    <div className="space-y-4">
      {content.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FileText className="text-indigo-500 mr-3" size={24} />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.type}</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">View</button>
        </div>
      ))}
    </div>
  );
};

export default OnlineCourse;