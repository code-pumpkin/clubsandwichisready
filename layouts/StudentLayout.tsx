import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import Sidebar from '../student_components/Sidebar';
import StudentDashboard from '../student_components/StudentDashboard';

const StudentLayout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex h="100vh">
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Box flex={1} overflow="auto">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg="gray.100"
          color="gray.500"
        >
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<Menu />}
          />
        </Flex>
        <Box p={4}>
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            {/* Add other student routes here */}
          </Routes>
        </Box>
      </Box>
    </Flex>
  );
};

export default StudentLayout;
