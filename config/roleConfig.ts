import React from 'react';

export interface MenuItem {
  name: string;
  icon: string;
  path: string;
  subItems?: { name: string; path: string }[];
}

export interface RoleConfig {
  roleName: string;
  dashboardTitle: string;
  menuItems: MenuItem[];
  stats: Array<{
    title: string;
    value: string;
    icon: string;
    color: string;
  }>;
}

const adminConfig: RoleConfig = {
  roleName: 'Admin',
  dashboardTitle: 'Admin Dashboard',
  menuItems: [
    { name: 'Dashboard', icon: 'Menu', path: '/admin' },
    { 
      name: 'Students', 
      icon: 'Users', 
      path: '/admin/students',
      subItems: [
        { name: 'Student Lookup', path: '/admin/students/lookup' },
        { name: 'Student Performance', path: '/admin/students/performance' },
        { name: 'Enrollment', path: '/admin/students/enrollment' },
      ]
    },
    { name: 'Schedule', icon: 'Calendar', path: '/admin/schedule' },
    { name: 'Finances', icon: 'DollarSign', path: '/admin/finances' },
    { name: 'Courses', icon: 'BookOpen', path: '/admin/courses' },
    { name: 'Reports', icon: 'TrendingUp', path: '/admin/reports' },
    { name: 'Settings', icon: 'Settings', path: '/admin/settings' },
    { name: 'Help', icon: 'HelpCircle', path: '/admin/help' },
  ],
  stats: [
    { title: 'Total Students', value: '1,234', icon: 'Users', color: 'bg-blue-500' },
    { title: 'Scheduled Lessons', value: '56', icon: 'Calendar', color: 'bg-green-500' },
    { title: 'Revenue This Month', value: '$12,345', icon: 'DollarSign', color: 'bg-yellow-500' },
    { title: 'Active Courses', value: '8', icon: 'BookOpen', color: 'bg-purple-500' },
  ],
};

const instructorConfig: RoleConfig = {
  roleName: 'Instructor',
  dashboardTitle: 'Instructor Dashboard',
  menuItems: [
    { name: 'Dashboard', icon: 'Menu', path: '/instructor' },
    { name: 'My Students', icon: 'Users', path: '/instructor/students' },
    { name: 'My Schedule', icon: 'Calendar', path: '/instructor/schedule' },
    { name: 'Courses', icon: 'BookOpen', path: '/instructor/courses' },
    { name: 'Performance', icon: 'TrendingUp', path: '/instructor/performance' },
    { name: 'Help', icon: 'HelpCircle', path: '/instructor/help' },
  ],
  stats: [
    { title: 'My Students', value: '45', icon: 'Users', color: 'bg-blue-500' },
    { title: 'Upcoming Lessons', value: '12', icon: 'Calendar', color: 'bg-green-500' },
    { title: 'Average Rating', value: '4.8', icon: 'UserCheck', color: 'bg-yellow-500' },
    { title: 'Active Courses', value: '3', icon: 'BookOpen', color: 'bg-purple-500' },
  ],
};

const studentConfig: RoleConfig = {
  roleName: 'Student',
  dashboardTitle: 'Student Dashboard',
  menuItems: [
    { name: 'Dashboard', icon: 'Menu', path: '/student' },
    { name: 'My Schedule', icon: 'Calendar', path: '/student/schedule' },
    { name: 'My Courses', icon: 'BookOpen', path: '/student/courses' },
    { name: 'My Progress', icon: 'TrendingUp', path: '/student/progress' },
    { name: 'Messages', icon: 'MessageSquare', path: '/student/messages' },
    { name: 'Help', icon: 'HelpCircle', path: '/student/help' },
  ],
  stats: [
    { title: 'Completed Lessons', value: '15', icon: 'Calendar', color: 'bg-blue-500' },
    { title: 'Upcoming Lessons', value: '3', icon: 'Calendar', color: 'bg-green-500' },
    { title: 'Current Course', value: 'Intermediate', icon: 'BookOpen', color: 'bg-yellow-500' },
    { title: 'Overall Progress', value: '65%', icon: 'TrendingUp', color: 'bg-purple-500' },
  ],
};

export const roleConfigs: Record<string, RoleConfig> = {
  admin: adminConfig,
  instructor: instructorConfig,
  student: studentConfig,
};

export const getCurrentUserRole = (): string => {
  // This function should be implemented to return the current user's role
  // For now, we'll return a default role
  return 'admin';
};