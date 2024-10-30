import React from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Driving School Management System</Heading>
        <Button colorScheme="blue" size="lg" onClick={() => navigate('/login')}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default LandingPage;
