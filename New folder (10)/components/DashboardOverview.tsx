import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text, Flex } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', students: 400, revenue: 2400 },
  { name: 'Feb', students: 300, revenue: 1398 },
  { name: 'Mar', students: 200, revenue: 9800 },
  { name: 'Apr', students: 278, revenue: 3908 },
  { name: 'May', students: 189, revenue: 4800 },
  { name: 'Jun', students: 239, revenue: 3800 },
];

const DashboardOverview: React.FC = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Dashboard Overview</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mb={8}>
        <Stat>
          <StatLabel>Active Students</StatLabel>
          <StatNumber>1,024</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$52,000</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Upcoming Lessons</StatLabel>
          <StatNumber>89</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Available Vehicles</StatLabel>
          <StatNumber>15</StatNumber>
        </Stat>
      </SimpleGrid>

      <Box mb={8}>
        <Heading size="md" mb={4}>Enrollment and Revenue Trends</Heading>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="students" stroke="#8884d8" />
            <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box width={{ base: '100%', md: '48%' }} mb={4}>
          <Heading size="md" mb={2}>Quick Actions</Heading>
          <Text>Add Student</Text>
          <Text>Schedule Lesson</Text>
          <Text>Generate Report</Text>
        </Box>
        <Box width={{ base: '100%', md: '48%' }} mb={4}>
          <Heading size="md" mb={2}>Recent Activities</Heading>
          <Text>New student registration</Text>
          <Text>Lesson completed</Text>
          <Text>Payment received</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardOverview;