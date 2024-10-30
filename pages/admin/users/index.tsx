// import { NextPage } from 'next';
import DashboardLayout from '../../../components/admin/dashboard/DashboardLayout';
import UserManagement from '../../../components/admin/users/UserManagement';

const UsersPage: gh() => {
  return (
    <DashboardLayout onLogout={() => console.log('Logout clicked')}>
      <UserManagement />
    </DashboardLayout>
  );
};

export default UsersPage;
