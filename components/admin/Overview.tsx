import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', students: 40, revenue: 2400 },
  { name: 'Feb', students: 30, revenue: 1398 },
  { name: 'Mar', students: 50, revenue: 9800 },
  { name: 'Apr', students: 40, revenue: 3908 },
  { name: 'May', students: 60, revenue: 4800 },
  { name: 'Jun', students: 70, revenue: 3800 },
];

const Overview: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Students</h3>
          <p className="text-3xl font-bold">250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Active Instructors</h3>
          <p className="text-3xl font-bold">15</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Classes Today</h3>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Students and Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="students" fill="#8884d8" name="Students" />
            <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;