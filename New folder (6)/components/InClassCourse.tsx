import React from 'react';
import { Clipboard, Award, Calendar } from 'lucide-react';

const InClassCourse: React.FC = () => {
  const classDetails = {
    instructor: "John Doe",
    nextClass: "May 15, 2023 at 2:00 PM",
    completedClasses: 3,
    totalClasses: 10
  };

  const scores = [
    { id: 1, title: "Written Test 1", score: 85, maxScore: 100 },
    { id: 2, title: "Hazard Perception", score: 42, maxScore: 50 },
    { id: 3, title: "Traffic Signs Quiz", score: 18, maxScore: 20 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">In-Class Course</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Class Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <Clipboard className="text-blue-500 mr-2" size={20} />
            <p><span className="font-medium">Instructor:</span> {classDetails.instructor}</p>
          </div>
          <div className="flex items-center">
            <Calendar className="text-green-500 mr-2" size={20} />
            <p><span className="font-medium">Next Class:</span> {classDetails.nextClass}</p>
          </div>
          <div className="flex items-center col-span-2">
            <Award className="text-yellow-500 mr-2" size={20} />
            <p><span className="font-medium">Progress:</span> {classDetails.completedClasses} of {classDetails.totalClasses} classes completed</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Your Scores</h2>
        <div className="space-y-4">
          {scores.map((score) => (
            <div key={score.id} className="flex items-center justify-between">
              <span className="font-medium">{score.title}</span>
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-600">{score.score}</span>
                <span className="text-gray-500 ml-1">/ {score.maxScore}</span>
                <div className="ml-4 w-32 bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${(score.score / score.maxScore) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Instructor's Notes</h2>
        <p className="text-gray-700">
          John has shown great progress in understanding traffic rules and regulations. 
          He needs to work on his hazard perception skills. Overall, a dedicated student 
          with a positive attitude towards learning.
        </p>
      </div>
    </div>
  );
};

export default InClassCourse;