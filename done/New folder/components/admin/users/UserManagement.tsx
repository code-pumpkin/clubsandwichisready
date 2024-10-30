import React from 'react';
// import Link from 'next/link';

const UserManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Link href="/admin/users/students">
          <a className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 transition">
            Manage Students
          </a>
        </Link>
        <Link href="/admin/users/instructors">
          <a className="bg-green-500 text-white p-4 rounded shadow hover:bg-green-600 transition">
            Manage Instructors
          </a>
        </Link>
      </div>
      {/* Add more user management features here */}
    </div>
  );
};

export default UserManagement;
