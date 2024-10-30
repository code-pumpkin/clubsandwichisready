import React from 'react';
import { Gauge, Clock, MapPin, AlertTriangle } from 'lucide-react';

const InCarCourse: React.FC = () => {
  const performanceData = {
    totalHours: 12,
    averageSpeed: 28,
    skillLevel: 'Intermediate',
    nextLesson: 'May 20, 2023 at 10:00 AM'
  };

  const skills = [
    { name: 'Steering Control', score: 80 },
    { name: 'Lane Changing', score: 75 },
    { name: 'Parking', score: 70 },
    { name: 'Speed Control', score: 85 },
    { name: 'Traffic Awareness', score: 78 }
  ];

  const recentRoutes = [
    { id: 1, date: 'May 5, 2023', duration: '1h 30m', distance: '25 miles' },
    { id: 2, date: 'May 10, 2023', duration: '2h 00m', distance: '35 miles' },
    { id: 3, date: 'May 15, 2023', duration: '1h 45m', distance: '30 miles' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">In-Car Course</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Clock className="text-blue-500 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Total Hours</p>
                <p className="text-lg font-semibold">{performanceData.totalHours} hours</p>
              </div>
            </div>
            <div className="flex items-center">
              <Gauge className="text-green-500 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Average Speed</p>
                <p className="text-lg font-semibold">{performanceData.averageSpeed} mph</p>
              </div>
            </div>
            <div className="flex items-center">
              <AlertTriangle className="text-yellow-500 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Skill Level</p>
                <p className="text-lg font-semibold">{performanceData.skillLevel}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-red-500 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Next Lesson</p>
                <p className="text-lg font-semibold">{performanceData.nextLesson}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Skill Assessment</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-700">{skill.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Driving Routes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentRoutes.map((route) => (
                <tr key={route.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{route.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Instructor's Feedback</h2>
        <p className="text-gray-700">
          The student has shown significant improvement in overall driving skills. 
          Steering control and speed management are particularly strong. Areas for 
          improvement include parallel parking and merging onto highways. Recommend 
          additional practice in these areas during the next few lessons.
        </p>
      </div>
    </div>
  );
};

export default InCarCourse;