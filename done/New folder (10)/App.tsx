import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import UserManagement from './components/UserManagement';
import ScheduleManagement from './components/ScheduleManagement';
import FinancialManagement from './components/FinancialManagement';
import CourseManagement from './components/CourseManagement';
import VehicleManagement from './components/VehicleManagement';
import InstructorPerformance from './components/InstructorPerformance';
import StudentProgress from './components/StudentProgress';
import CommunicationHub from './components/CommunicationHub';
import ReportingAnalytics from './components/ReportingAnalytics';
import ComplianceSafety from './components/ComplianceSafety';
import MarketingLeads from './components/MarketingLeads';
import PartnerAffiliate from './components/PartnerAffiliate';
import MobileApp from './components/MobileApp';
import AIInsights from './components/AIInsights';
import DocumentManagement from './components/DocumentManagement';
import APIIntegration from './components/APIIntegration';
import SystemHealth from './components/SystemHealth';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <ChakraProvider>
      <Router>
        <Flex h="100vh">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Box flex={1} overflow="auto" ml={isSidebarOpen ? { base: 0, md: '240px' } : 0} transition="margin-left 0.3s">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/users/*" element={<UserManagement />} />
              <Route path="/schedule" element={<ScheduleManagement />} />
              <Route path="/finance" element={<FinancialManagement />} />
              <Route path="/courses" element={<CourseManagement />} />
              <Route path="/vehicles" element={<VehicleManagement />} />
              <Route path="/instructor-performance" element={<InstructorPerformance />} />
              <Route path="/student-progress" element={<StudentProgress />} />
              <Route path="/communication" element={<CommunicationHub />} />
              <Route path="/reporting" element={<ReportingAnalytics />} />
              <Route path="/compliance" element={<ComplianceSafety />} />
              <Route path="/marketing" element={<MarketingLeads />} />
              <Route path="/partners" element={<PartnerAffiliate />} />
              <Route path="/mobile-app" element={<MobileApp />} />
              <Route path="/ai-insights" element={<AIInsights />} />
              <Route path="/documents" element={<DocumentManagement />} />
              <Route path="/api-integration" element={<APIIntegration />} />
              <Route path="/system-health" element={<SystemHealth />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;