import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  VStack,
  Text,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue
} from '@chakra-ui/react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  subItems?: { name: string; path: string }[];
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', path: '/admin', icon: <Menu size={20} /> },
  {
    name: 'User Management',
    path: '/admin/users',
    icon: <Menu size={20} />,
    subItems: [
      { name: 'Student Lookup', path: '/admin/users/students' },
      { name: 'Instructor Management', path: '/admin/users/instructors' },
      { name: 'Staff Directory', path: '/admin/users/staff' },
    ],
  },
  { name: 'Schedule Management', path: '/admin/schedule', icon: <Menu size={20} /> },
  { name: 'Financial Management', path: '/admin/finance', icon: <Menu size={20} /> },
  { name: 'Course Management', path: '/admin/courses', icon: <Menu size={20} /> },
  { name: 'Vehicle Management', path: '/admin/vehicles', icon: <Menu size={20} /> },
  { name: 'Instructor Performance', path: '/admin/instructor-performance', icon: <Menu size={20} /> },
  { name: 'Student Progress', path: '/admin/student-progress', icon: <Menu size={20} /> },
  { name: 'Communication Hub', path: '/admin/communication', icon: <Menu size={20} /> },
  { name: 'Reporting & Analytics', path: '/admin/reporting', icon: <Menu size={20} /> },
  { name: 'Compliance & Safety', path: '/admin/compliance', icon: <Menu size={20} /> },
  { name: 'Marketing & Leads', path: '/admin/marketing', icon: <Menu size={20} /> },
  { name: 'Partner & Affiliate', path: '/admin/partners', icon: <Menu size={20} /> },
  { name: 'Mobile App', path: '/admin/mobile-app', icon: <Menu size={20} /> },
  { name: 'AI-Powered Insights', path: '/admin/ai-insights', icon: <Menu size={20} /> },
  { name: 'Document Management', path: '/admin/documents', icon: <Menu size={20} /> },
  { name: 'API & Integration', path: '/admin/api-integration', icon: <Menu size={20} /> },
  { name: 'System Health', path: '/admin/system-health', icon: <Menu size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const location = useLocation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const SidebarContent = () => (
    <VStack align="stretch" spacing={1}>
      {menuItems.map((item) => (
        <Box key={item.name}>
          {item.subItems ? (
            <>
              <Flex
                align="center"
                p={2}
                cursor="pointer"
                _hover={{ bg: 'gray.700' }}
                onClick={() => toggleSubMenu(item.name)}
              >
                {item.icon}
                <Text ml={2}>{item.name}</Text>
                <Box ml="auto">
                  {openSubMenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Box>
              </Flex>
              {openSubMenu === item.name && (
                <VStack align="stretch" pl={6} mt={1} spacing={1}>
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.name} to={subItem.path} onClick={onClose}>
                      <Text p={2} _hover={{ bg: 'gray.700' }} bg={location.pathname === subItem.path ? 'gray.700' : 'transparent'}>
                        {subItem.name}
                      </Text>
                    </Link>
                  ))}
                </VStack>
              )}
            </>
          ) : (
            <Link to={item.path} onClick={onClose}>
              <Flex align="center" p={2} _hover={{ bg: 'gray.700' }} bg={location.pathname === item.path ? 'gray.700' : 'transparent'}>
                {item.icon}
                <Text ml={2}>{item.name}</Text>
              </Flex>
            </Link>
          )}
        </Box>
      ))}
    </VStack>
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Admin Dashboard</DrawerHeader>
            <DrawerBody>
              <SidebarContent />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      bg="gray.800"
      color="white"
      w="250px"
      h="100vh"
      overflowY="auto"
      display={{ base: 'none', md: 'block' }}
    >
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold" mb={6}>Admin Dashboard</Text>
        <SidebarContent />
      </Box>
    </Box>
  );
};

export default Sidebar;
