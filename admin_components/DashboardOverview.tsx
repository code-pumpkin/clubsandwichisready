
import React from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
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
    <Box>
      <Heading as="h1" size="xl" mb={6}>Admin Dashboard Overview</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <Stat>
          <StatLabel>Total Students</StatLabel>
          <StatNumber>1,606</StatNumber>
          <Text>↑ 12% from last month</Text>
        </Stat>
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$26,104</StatNumber>
          <Text>↑ 8% from last month</Text>
        </Stat>
        <Stat>
          <StatLabel>Active Courses</StatLabel>
          <StatNumber>24</StatNumber>
          <Text>↑ 2 new courses this month</Text>
        </Stat>
      </SimpleGrid>
      <Box height="400px">
        <Heading as="h2" size="lg" mb={4}>Students and Revenue Trend</Heading>
        <ResponsiveContainer width="100%" height="100%">
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
    </Box>
  );
};

export default DashboardOverview;
