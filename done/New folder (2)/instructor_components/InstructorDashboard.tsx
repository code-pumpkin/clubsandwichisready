import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const InstructorDashboard: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>Instructor Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Stat>
          <StatLabel>Today's Classes</StatLabel>
          <StatNumber>4</StatNumber>
          <StatHelpText>Scheduled for today</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total Students</StatLabel>
          <StatNumber>25</StatNumber>
          <StatHelpText>Currently assigned</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Performance Rating</StatLabel>
          <StatNumber>4.8</StatNumber>
          <StatHelpText>Out of 5</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default InstructorDashboard;
