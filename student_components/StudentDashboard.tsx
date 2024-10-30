import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const StudentDashboard: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>Student Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Stat>
          <StatLabel>Next Lesson</StatLabel>
          <StatNumber>Tomorrow</StatNumber>
          <StatHelpText>10:00 AM</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Completed Lessons</StatLabel>
          <StatNumber>8</StatNumber>
          <StatHelpText>Out of 12</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Overall Progress</StatLabel>
          <StatNumber>67%</StatNumber>
          <StatHelpText>Keep it up!</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default StudentDashboard;
