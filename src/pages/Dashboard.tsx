
import React from 'react';
import { Bar, Doughnut } from 'recharts';
import { projects, getProjectTotals, applications, budgetItems } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, LineChart } from '@/components/ui/chart';
import { Building2, FileText, CreditCard, AlertCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const Dashboard = () => {
  // Format project data for charts
  const projectProgressData = projects.map(project => {
    const totals = getProjectTotals(project.id);
    return {
      name: project.name,
      complete: parseFloat(totals.percentComplete.toFixed(1)),
      remaining: 100 - parseFloat(totals.percentComplete.toFixed(1)),
    };
  });

  const projectFinancialData = projects.map(project => {
    const totals = getProjectTotals(project.id);
    return {
      name: project.name,
      contracted: totals.totalContractSum / 1000, // Display in thousands
      billed: totals.totalCompleted / 1000, // Display in thousands
      remaining: totals.totalRemaining / 1000, // Display in thousands
    };
  });

  const pendingApplications = applications.filter(app => app.status === 'submitted').length;
  const activeProjects = projects.filter(project => project.status === 'active').length;
  
  // Calculate total contract value across all projects
  const totalContractValue = projects.reduce((sum, project) => sum + project.contractAmount, 0);
  
  // Calculate total billed amount
  const totalBilled = applications.reduce((sum, app) => sum + app.totalEarned, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to GCBill, your construction billing platform.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              {projects.length} total projects
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingApplications}</div>
            <p className="text-xs text-muted-foreground">
              {applications.length} total applications
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contract Value</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalContractValue)}</div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(totalBilled)} billed to date
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Variance</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-$14,000</div>
            <p className="text-xs text-muted-foreground">
              Based on current expenditures
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Contract value vs. billed amount (in thousands)</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BarChart
              data={projectFinancialData}
              index="name"
              categories={['contracted', 'billed', 'remaining']}
              colors={['blue', 'green', 'gray']}
              valueFormatter={(value) => `$${value}K`}
              className="h-80"
            />
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
            <CardDescription>Completion percentage by project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map(project => {
                const totals = getProjectTotals(project.id);
                return (
                  <div key={project.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">{project.name}</div>
                      <div>{totals.percentComplete.toFixed(1)}%</div>
                    </div>
                    <Progress value={totals.percentComplete} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Application #3 submitted</p>
                  <p className="text-xs text-muted-foreground">Acme HQ Renovation • Apr 5, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New project created</p>
                  <p className="text-xs text-muted-foreground">Global Enterprises Data Center • Mar 1, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment received</p>
                  <p className="text-xs text-muted-foreground">Acme HQ Renovation • Feb 28, 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
