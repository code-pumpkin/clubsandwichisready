import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Plus, Search } from 'lucide-react';

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for vehicles
  const vehicles = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2022, plate: 'ABC123', status: 'Active' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021, plate: 'XYZ789', status: 'Maintenance' },
    // Add more mock data as needed
  ];

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.plate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Vehicles</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Vehicle
        </Button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search vehicles..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Make</TableHeader>
            <TableHeader>Model</TableHeader>
            <TableHeader>Year</TableHeader>
            <TableHeader>Plate</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredVehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>{vehicle.plate}</TableCell>
              <TableCell>{vehicle.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
                <Button variant="outline" size="sm" className="ml-2">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Vehicles;