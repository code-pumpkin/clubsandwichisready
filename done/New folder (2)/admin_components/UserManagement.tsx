import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Input, Select, Flex, useBreakpointValue } from '@chakra-ui/react';

const UserManagement: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Heading mb={6}>User Management</Heading>
      
      <Flex direction={{ base: 'column', md: 'row' }} mb={4} gap={2}>
        <Input placeholder="Search users..." mb={{ base: 2, md: 0 }} />
        <Select placeholder="Filter by role" mb={{ base: 2, md: 0 }}>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="staff">Staff</option>
        </Select>
        <Button colorScheme="blue" width={{ base: '100%', md: 'auto' }}>Search</Button>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
              {!isMobile && <Th>Status</Th>}
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>John Doe</Td>
              <Td>Student</Td>
              {!isMobile && <Td>Active</Td>}
              <Td>
                <Button size="sm" mr={2}>Edit</Button>
                {!isMobile && <Button size="sm" colorScheme="red">Deactivate</Button>}
              </Td>
            </Tr>
            <Tr>
              <Td>Jane Smith</Td>
              <Td>Instructor</Td>
              {!isMobile && <Td>Active</Td>}
              <Td>
                <Button size="sm" mr={2}>Edit</Button>
                {!isMobile && <Button size="sm" colorScheme="red">Deactivate</Button>}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Flex justify="space-between" mt={4}>
        <Button>Previous</Button>
        <Button>Next</Button>
      </Flex>
    </Box>
  );
};

export default UserManagement;