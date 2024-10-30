import React from 'react';
import { Download, FileText, Video, Book } from 'lucide-react';

const resources = [
  {
    title: 'Driving Cheat Sheet',
    description: 'A quick reference guide for essential driving rules and tips.',
    icon: FileText,
    type: 'PDF',
    size: '2.3 MB'
  },
  {
    title: 'Winter Driving Safety Video',
    description: 'Learn how to navigate safely in snowy and icy conditions.',
    icon: Video,
    type: 'MP4',
    size: '45 MB'
  },
  {
    title: 'Road Signs Handbook',
    description: 'Comprehensive guide to understanding all road signs.',
    icon: Book,
    type: 'PDF',
    size: '5.1 MB'
  },
  {
    title: 'Parallel Parking Tutorial',
    description: 'Step-by-step video guide to master parallel parking.',
    icon: Video,
    type: 'MP4',
    size: '30 MB'
  }
];

const Resources: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Driving Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <resource.icon size={32} className="text-blue-600 mr-4" />
                <h2 className="text-2xl font-semibold">{resource.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{resource.type} • {resource.size}</span>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  <Download size={18} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Official Driver's Manual</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Practice Tests</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Traffic Laws and Regulations</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Vehicle Maintenance Guide</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;