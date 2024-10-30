import React from 'react';
import { Box, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={bgColor}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w="60"
    >
      <VStack spacing={4} align="stretch" mt={8}>
        <Button as={Link} to="/staff" variant="ghost">Dashboard</Button>
        <Button as={Link} to="/staff/schedule" variant="ghost">Schedule</Button>
        <Button as={Link} to="/staff/students" variant="ghost">Students</Button>
        <Button as={Link} to="/staff/reports" variant="ghost">Reports</Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
