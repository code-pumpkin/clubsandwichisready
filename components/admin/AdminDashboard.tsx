import React, { useState } from 'react';
import DashboardLayout from './dashboard/DashboardLayout';
import UserManagement from './users/UserManagement';
import ClassManagement from './classes/ClassManagement';
import VehicleManagement from './vehicles/VehicleManagement';
import BillingOverview from './billing/BillingOverview';
import ReportsDashboard from './reports/ReportsDashboard';
import MessageCenter from './messaging/MessageCenter';
import GeneralSettings from './settings/GeneralSettings';

interface AdminDashboardProps {
  email: string;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ email, onLogout }) => {
  console.log('AdminDashboard rendered');
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    console.log('Rendering content for section:', activeSection);
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'classes':
        return <ClassManagement />;
      case 'vehicles':
        return <VehicleManagement />;
      case 'billing':
        return <BillingOverview />;
      case 'reports':
        return <ReportsDashboard />;
      case 'messaging':
        return <MessageCenter />;
      case 'settings':
        return <GeneralSettings />;
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>
            <p className="mb-4">Email: {email}</p>
            <p>Select a section from the sidebar to manage different aspects of the driving school.</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout onLogout={onLogout}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default AdminDashboard;
