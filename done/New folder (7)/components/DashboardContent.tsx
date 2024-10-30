import React from 'react';
import { AlertTriangle, Users, Calendar, DollarSign, BookOpen, TrendingUp } from 'lucide-react';
import { roleConfigs } from '../config/roleConfig';

const iconComponents: { [key: string]: React.ComponentType<{ size?: number }> } = {
  Users,
  Calendar,
  DollarSign,
  BookOpen,
  TrendingUp,
};

interface DashboardContentProps {
  role: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ role }) => {
  const { stats, dashboardTitle } = roleConfigs[role];

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{dashboardTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className={`${stat.color} rounded-full p-3 mr-4`}>
                {renderIcon(stat.icon)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <p>Recent activity for {role} role will be displayed here.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Alerts</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-yellow-600">
                <AlertTriangle size={20} className="mr-2" />
                <span>Sample alert 1 for {role}</span>
              </li>
              <li className="flex items-center text-red-600">
                <AlertTriangle size={20} className="mr-2" />
                <span>Sample alert 2 for {role}</span>
              </li>
              <li className="flex items-center text-blue-600">
                <AlertTriangle size={20} className="mr-2" />
                <span>Sample alert 3 for {role}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;