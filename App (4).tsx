// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ChakraProvider, Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
// import { Menu } from 'lucide-react';
// import Sidebar from './admin_components/Sidebar';
// import DashboardOverview from './admin_components/DashboardOverview';
// import UserManagement from './admin_components/UserManagement';
// import ScheduleManagement from './admin_components/ScheduleManagement';
// import FinancialManagement from './admin_components/FinancialManagement';
// import CourseManagement from './admin_components/CourseManagement';
// import VehicleManagement from './admin_components/VehicleManagement';
// import InstructorPerformance from './admin_components/InstructorPerformance';
// import StudentProgress from './admin_components/StudentProgress';
// import CommunicationHub from './admin_components/CommunicationHub';
// import ReportingAnalytics from './admin_components/ReportingAnalytics';
// import ComplianceSafety from './admin_components/ComplianceSafety';
// import MarketingLeads from './admin_components/MarketingLeads';
// import PartnerAffiliate from './admin_components/PartnerAffiliate';
// import MobileApp from './admin_components/MobileApp';
// import AIInsights from './admin_components/AIInsights';
// import DocumentManagement from './admin_components/DocumentManagement';
// import APIIntegration from './admin_components/APIIntegration';
// import SystemHealth from './admin_components/SystemHealth';

// const App: React.FC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <ChakraProvider>
//       <Router>
//         <Flex h="100vh">
//           <Sidebar isOpen={isOpen} onClose={onClose} />
//           <Box flex={1} overflow="auto">
//             <Flex
//               as="header"
//               align="center"
//               justify="space-between"
//               wrap="wrap"
//               padding="1.5rem"
//               bg="gray.100"
//               color="gray.500"
//             >
//               <IconButton
//                 display={{ base: 'flex', md: 'none' }}
//                 onClick={onOpen}
//                 variant="outline"
//                 aria-label="open menu"
//                 icon={<Menu />}
//               />
//             </Flex>
//             <Box p={4}>
//               <Routes>
//                 <Route path="/" element={<DashboardOverview />} />
//                 <Route path="/users/*" element={<UserManagement />} />
//                 <Route path="/schedule" element={<ScheduleManagement />} />
//                 <Route path="/finance" element={<FinancialManagement />} />
//                 <Route path="/courses" element={<CourseManagement />} />
//                 <Route path="/vehicles" element={<VehicleManagement />} />
//                 <Route path="/instructor-performance" element={<InstructorPerformance />} />
//                 <Route path="/student-progress" element={<StudentProgress />} />
//                 <Route path="/communication" element={<CommunicationHub />} />
//                 <Route path="/reporting" element={<ReportingAnalytics />} />
//                 <Route path="/compliance" element={<ComplianceSafety />} />
//                 <Route path="/marketing" element={<MarketingLeads />} />
//                 <Route path="/partners" element={<PartnerAffiliate />} />
//                 <Route path="/mobile-app" element={<MobileApp />} />
//                 <Route path="/ai-insights" element={<AIInsights />} />
//                 <Route path="/documents" element={<DocumentManagement />} />
//                 <Route path="/api-integration" element={<APIIntegration />} />
//                 <Route path="/system-health" element={<SystemHealth />} />
//               </Routes>
//             </Box>
//           </Box>
//         </Flex>
//       </Router>
//     </ChakraProvider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AdminLayout from './layouts/AdminLayout';
import InstructorLayout from './layouts/InstructorLayout';
import StaffLayout from './layouts/StaffLayout';
import Login from './components/Login';
import StudentLayout from './layouts/StudentLayout';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/instructor/*" element={<InstructorLayout />} />
          <Route path="/staff/*" element={<StaffLayout />} />
          <Route path="/student/*" element={<StudentLayout />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
