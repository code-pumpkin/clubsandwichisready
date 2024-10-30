import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const StaffDashboard: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>Staff Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Stat>
          <StatLabel>Total Students</StatLabel>
          <StatNumber>150</StatNumber>
          <StatHelpText>Active students</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Upcoming Classes</StatLabel>
          <StatNumber>12</StatNumber>
          <StatHelpText>Next 7 days</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Pending Reports</StatLabel>
          <StatNumber>5</StatNumber>
          <StatHelpText>Requires attention</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default StaffDashboard;
