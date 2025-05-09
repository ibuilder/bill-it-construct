
import React, { useState } from 'react';
import { projects, scheduleOfValues, sovLineItems } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChevronDown,
  ChevronUp,
  Download,
  FileEdit,
  Plus,
  Printer,
  Search,
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const SOV = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  
  const selectedSOV = scheduleOfValues.find(sov => sov.projectId === selectedProject);
  const lineItems = selectedSOV ? selectedSOV.lineItems : [];
  
  const filteredLineItems = lineItems.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.itemNumber.includes(searchTerm)
  );
  
  const totalScheduledValue = lineItems.reduce((sum, item) => sum + item.value, 0);
  const totalCompleted = lineItems.reduce((sum, item) => sum + item.completed + item.materialsStored, 0);
  const percentComplete = totalScheduledValue > 0 ? (totalCompleted / totalScheduledValue) * 100 : 0;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule of Values</h1>
          <p className="text-muted-foreground">Manage project line items and values</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Line Item
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Project Schedule of Values</CardTitle>
              <CardDescription>Breakdown of contract values by work item</CardDescription>
            </div>
            <Select
              value={selectedProject}
              onValueChange={(value) => setSelectedProject(value)}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Projects</SelectLabel>
                  {projects.map(project => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 rounded-md p-2 text-center">
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-xl font-bold">{formatCurrency(totalScheduledValue)}</p>
              </div>
              <div className="bg-primary/10 rounded-md p-2 text-center">
                <p className="text-sm text-muted-foreground">% Complete</p>
                <p className="text-xl font-bold">{percentComplete.toFixed(1)}%</p>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items..."
                className="pl-8 w-full sm:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Item #</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Scheduled Value</TableHead>
                  <TableHead className="text-right">Completed</TableHead>
                  <TableHead className="text-right">Materials Stored</TableHead>
                  <TableHead className="text-right">% Complete</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLineItems.map(item => {
                  const itemCompleted = item.completed + item.materialsStored;
                  const itemPercentComplete = item.value > 0 ? (itemCompleted / item.value) * 100 : 0;
                  
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{item.itemNumber}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.value)}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.completed)}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.materialsStored)}</TableCell>
                      <TableCell className="text-right">{itemPercentComplete.toFixed(1)}%</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <FileEdit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow className="bg-muted/50 font-medium">
                  <TableCell colSpan={2}>Totals</TableCell>
                  <TableCell className="text-right">{formatCurrency(totalScheduledValue)}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(lineItems.reduce((sum, item) => sum + item.completed, 0))}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(lineItems.reduce((sum, item) => sum + item.materialsStored, 0))}
                  </TableCell>
                  <TableCell className="text-right">{percentComplete.toFixed(1)}%</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SOV;
