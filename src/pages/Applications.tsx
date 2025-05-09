
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, applications } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Plus,
  Search,
  CheckCircle,
  Clock,
  FileText,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'draft':
      return <Badge variant="outline" className="border-gray-500 text-gray-500">Draft</Badge>;
    case 'submitted':
      return <Badge className="bg-blue-500">Submitted</Badge>;
    case 'approved':
      return <Badge className="bg-green-500">Approved</Badge>;
    case 'paid':
      return <Badge className="bg-primary">Paid</Badge>;
    default:
      return null;
  }
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredApplications = applications.filter(app => {
    const project = projects.find(p => p.id === app.projectId);
    if (!project) return false;
    
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `Application #${app.applicationNumber}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Applications for Payment</h1>
          <p className="text-muted-foreground">Manage payment applications for your projects</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Application
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Draft</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter(app => app.status === 'draft').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Submitted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter(app => app.status === 'submitted').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter(app => app.status === 'approved').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter(app => app.status === 'paid').length}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>All Applications</CardTitle>
              <CardDescription>View and manage all payment applications</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search applications..."
                className="pl-8 w-full sm:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Application</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Period</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Submission Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map(app => {
                const project = projects.find(p => p.id === app.projectId);
                if (!project) return null;
                
                return (
                  <TableRow key={app.id}>
                    <TableCell>
                      <div className="font-medium">Application #{app.applicationNumber}</div>
                    </TableCell>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>
                          {formatDate(app.periodStart)} - {formatDate(app.periodEnd)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{formatCurrency(app.totalDue)}</TableCell>
                    <TableCell>{getStatusBadge(app.status)}</TableCell>
                    <TableCell className="text-right">{formatDate(app.submissionDate)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/applications/${app.id}`}>
                          View <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
            <CardDescription>Latest payment applications submitted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications
                .filter(app => app.status === 'submitted')
                .sort((a, b) => b.submissionDate.getTime() - a.submissionDate.getTime())
                .slice(0, 3)
                .map(app => {
                  const project = projects.find(p => p.id === app.projectId);
                  if (!project) return null;
                  
                  return (
                    <div key={app.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium">Application #{app.applicationNumber}</p>
                          <p className="text-sm text-muted-foreground">{project.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(app.totalDue)}</p>
                        <p className="text-sm text-muted-foreground">{formatDate(app.submissionDate)}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Applications Status</CardTitle>
            <CardDescription>Overview of payment applications by status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-500/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">Draft</p>
                    <p className="text-sm text-muted-foreground">Applications in progress</p>
                  </div>
                </div>
                <div className="text-2xl font-bold">
                  {applications.filter(app => app.status === 'draft').length}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Submitted</p>
                    <p className="text-sm text-muted-foreground">Awaiting approval</p>
                  </div>
                </div>
                <div className="text-2xl font-bold">
                  {applications.filter(app => app.status === 'submitted').length}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Approved & Paid</p>
                    <p className="text-sm text-muted-foreground">Completed applications</p>
                  </div>
                </div>
                <div className="text-2xl font-bold">
                  {applications.filter(app => app.status === 'approved' || app.status === 'paid').length}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Applications;
