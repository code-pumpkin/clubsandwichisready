import React from 'react';
import { Link } from 'react-router-dom';
import { Box, VStack, Text, Flex, IconButton, Collapse } from '@chakra-ui/react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  subItems?: { name: string; path: string }[];
}

const menuItems: MenuItem[] = [
  { name: 'Dashboard', path: '/', icon: <Menu size={20} /> },
  {
    name: 'User Management',
    path: '/users',
    icon: <Menu size={20} />,
    subItems: [
      { name: 'Student Lookup', path: '/users/students' },
      { name: 'Instructor Management', path: '/users/instructors' },
      { name: 'Staff Directory', path: '/users/staff' },
    ],
  },
  { name: 'Schedule Management', path: '/schedule', icon: <Menu size={20} /> },
  { name: 'Financial Management', path: '/finance', icon: <Menu size={20} /> },
  { name: 'Course Management', path: '/courses', icon: <Menu size={20} /> },
  { name: 'Vehicle Management', path: '/vehicles', icon: <Menu size={20} /> },
  { name: 'Instructor Performance', path: '/instructor-performance', icon: <Menu size={20} /> },
  { name: 'Student Progress', path: '/student-progress', icon: <Menu size={20} /> },
  { name: 'Communication Hub', path: '/communication', icon: <Menu size={20} /> },
  { name: 'Reporting & Analytics', path: '/reporting', icon: <Menu size={20} /> },
  { name: 'Compliance & Safety', path: '/compliance', icon: <Menu size={20} /> },
  { name: 'Marketing & Leads', path: '/marketing', icon: <Menu size={20} /> },
  { name: 'Partner & Affiliate', path: '/partners', icon: <Menu size={20} /> },
  { name: 'Mobile App', path: '/mobile-app', icon: <Menu size={20} /> },
  { name: 'AI-Powered Insights', path: '/ai-insights', icon: <Menu size={20} /> },
  { name: 'Document Management', path: '/documents', icon: <Menu size={20} /> },
  { name: 'API & Integration', path: '/api-integration', icon: <Menu size={20} /> },
  { name: 'System Health', path: '/system-health', icon: <Menu size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="240px"
      top={0}
      h="100vh"
      bg="gray.800"
      color="white"
      overflowY="auto"
      transition="transform 0.3s"
      transform={{ base: isOpen ? 'translateX(0)' : 'translateX(-100%)', md: 'translateX(0)' }}
      zIndex={20}
    >
      <Flex justify="space-between" align="center" mb={5}>
        <Text fontSize="2xl" fontWeight="bold">
          Admin Dashboard
        </Text>
        <IconButton
          aria-label="Close menu"
          icon={<X size={24} />}
          onClick={toggleSidebar}
          variant="ghost"
          display={{ base: 'flex', md: 'none' }}
        />
      </Flex>
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
                <Collapse in={openSubMenu === item.name}>
                  <VStack align="stretch" pl={6} mt={1} spacing={1}>
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.name} to={subItem.path}>
                        <Text p={2} _hover={{ bg: 'gray.700' }}>
                          {subItem.name}
                        </Text>
                      </Link>
                    ))}
                  </VStack>
                </Collapse>
              </>
            ) : (
              <Link to={item.path}>
                <Flex align="center" p={2} _hover={{ bg: 'gray.700' }}>
                  {item.icon}
                  <Text ml={2}>{item.name}</Text>
                </Flex>
              </Link>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;