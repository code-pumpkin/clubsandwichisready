import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Input, Select, Flex } from '@chakra-ui/react';

const UserManagement: React.FC = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>User Management</Heading>
      
      <Flex mb={4}>
        <Input placeholder="Search users..." mr={2} />
        <Select placeholder="Filter by role" mr={2}>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="staff">Staff</option>
        </Select>
        <Button colorScheme="blue">Search</Button>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John Doe</Td>
            <Td>Student</Td>
            <Td>Active</Td>
            <Td>
              <Button size="sm" mr={2}>Edit</Button>
              <Button size="sm" colorScheme="red">Deactivate</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Jane Smith</Td>
            <Td>Instructor</Td>
            <Td>Active</Td>
            <Td>
              <Button size="sm" mr={2}>Edit</Button>
              <Button size="sm" colorScheme="red">Deactivate</Button>
            </Td>
          </Tr>
          {/* Add more rows as needed */}
        </Tbody>
      </Table>

      <Flex justify="space-between" mt={4}>
        <Button>Previous</Button>
        <Button>Next</Button>
      </Flex>
    </Box>
  );
};

export default UserManagement;