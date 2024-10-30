import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, User, Car } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to DriveMaster</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseCard
          title="Online Course"
          description="Access video lessons, content, quizzes, and tests."
          icon={<Monitor size={48} />}
          link="/online"
          bgColor="bg-green-100"
          textColor="text-green-800"
        />
        <CourseCard
          title="In-Class Course"
          description="View your scores and details reported by the instructor."
          icon={<User size={48} />}
          link="/in-class"
          bgColor="bg-blue-100"
          textColor="text-blue-800"
        />
        <CourseCard
          title="In-Car Course"
          description="Check your in-car performance and key aspects."
          icon={<Car size={48} />}
          link="/in-car"
          bgColor="bg-yellow-100"
          textColor="text-yellow-800"
        />
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  bgColor: string;
  textColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, link, bgColor, textColor }) => {
  return (
    <Link to={link} className={`block p-6 rounded-lg shadow-md ${bgColor} ${textColor} transition-transform hover:scale-105`}>
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold ml-4">{title}</h2>
      </div>
      <p className="text-lg">{description}</p>
    </Link>
  );
};

export default Dashboard;