import React from 'react';
import { Users, Calendar, CreditCard, BarChart2, Book, Settings } from 'lucide-react';

const DashboardCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd>
              <div className="text-lg font-medium text-gray-900">{value}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 px-5 py-3">
      <div className="text-sm">
        <a href="#" className="font-medium text-blue-700 hover:text-blue-900">
          {description}
        </a>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const dashboardData = [
    { icon: Users, title: "Total Students", value: "1,234", description: "View all students" },
    { icon: Calendar, title: "Scheduled Lessons", value: "56", description: "View schedule" },
    { icon: CreditCard, title: "Revenue (This Month)", value: "$15,678", description: "View financial reports" },
    { icon: BarChart2, title: "Pass Rate", value: "87%", description: "View detailed statistics" },
    { icon: Book, title: "Active Courses", value: "8", description: "Manage courses" },
    { icon: Settings, title: "System Health", value: "98%", description: "View system status" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">Welcome to the DriveTech ERP admin dashboard. Here's an overview of your driving school's performance.</p>
        
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardData.map((item, index) => (
            <DashboardCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Activity</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {[
                "New student registration: John Doe",
                "Lesson completed: Sarah Smith with Instructor Mike",
                "Payment received: $150 from David Johnson",
                "Course update: Defensive Driving 101",
                "New instructor onboarded: Emily Brown"
              ].map((activity, index) => (
                <li key={index}>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <p className="text-sm text-gray-700">{activity}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;