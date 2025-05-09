
import { User, Project, Client, ScheduleOfValue, SOVLineItem, Application, ApplicationLineItem, BudgetItem } from "../types/models";

// Mock Users
export const users: User[] = [
  {
    id: "user1",
    name: "John Smith",
    email: "john@example.com",
    role: "admin",
  },
  {
    id: "user2",
    name: "Jane Doe",
    email: "jane@example.com",
    role: "manager",
  },
  {
    id: "user3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
  },
];

// Mock Clients
export const clients: Client[] = [
  {
    id: "client1",
    name: "Acme Corporation",
    contactName: "Tom Wilson",
    email: "tom@acme.com",
    phone: "555-123-4567",
    address: "123 Business Ave, City, ST 12345",
  },
  {
    id: "client2",
    name: "Global Enterprises",
    contactName: "Sarah Miller",
    email: "sarah@globalent.com",
    phone: "555-987-6543",
    address: "456 Corporate Blvd, Metro, ST 67890",
  },
  {
    id: "client3",
    name: "City of Riverdale",
    contactName: "Mayor Richards",
    email: "mayor@riverdale.gov",
    phone: "555-456-7890",
    address: "789 Government St, Riverdale, ST 54321",
  },
];

// Mock Projects
export const projects: Project[] = [
  {
    id: "project1",
    name: "Acme HQ Renovation",
    description: "Complete renovation of Acme Corporation headquarters",
    client: clients[0],
    contractAmount: 2500000,
    startDate: new Date("2023-01-15"),
    estimatedEndDate: new Date("2023-08-30"),
    status: "active",
    address: "123 Business Ave, City, ST 12345",
    createdAt: new Date("2022-11-10"),
    updatedAt: new Date("2023-02-20"),
  },
  {
    id: "project2",
    name: "Global Enterprises Data Center",
    description: "Construction of new data center facility",
    client: clients[1],
    contractAmount: 4750000,
    startDate: new Date("2023-03-01"),
    estimatedEndDate: new Date("2024-04-15"),
    status: "active",
    address: "456 Tech Park Dr, Metro, ST 67890",
    createdAt: new Date("2022-12-05"),
    updatedAt: new Date("2023-03-10"),
  },
  {
    id: "project3",
    name: "Riverdale Community Center",
    description: "New community center with recreation facilities",
    client: clients[2],
    contractAmount: 3250000,
    startDate: new Date("2023-02-15"),
    status: "planned",
    address: "789 Park Ave, Riverdale, ST 54321",
    createdAt: new Date("2023-01-20"),
    updatedAt: new Date("2023-01-20"),
  },
];

// Mock SOV Line Items
export const sovLineItems: Record<string, SOVLineItem[]> = {
  "sov1": [
    {
      id: "sovItem1",
      sovId: "sov1",
      itemNumber: "01-100",
      description: "General Requirements",
      value: 125000,
      completed: 50000,
      previouslyCompleted: 30000,
      materialsStored: 0,
    },
    {
      id: "sovItem2",
      sovId: "sov1",
      itemNumber: "02-200",
      description: "Site Work",
      value: 175000,
      completed: 150000,
      previouslyCompleted: 120000,
      materialsStored: 0,
    },
    {
      id: "sovItem3",
      sovId: "sov1",
      itemNumber: "03-300",
      description: "Concrete",
      value: 320000,
      completed: 280000,
      previouslyCompleted: 250000,
      materialsStored: 0,
    },
    {
      id: "sovItem4",
      sovId: "sov1",
      itemNumber: "04-400",
      description: "Masonry",
      value: 210000,
      completed: 150000,
      previouslyCompleted: 100000,
      materialsStored: 10000,
    },
    {
      id: "sovItem5",
      sovId: "sov1",
      itemNumber: "05-500",
      description: "Metals",
      value: 430000,
      completed: 215000,
      previouslyCompleted: 200000,
      materialsStored: 50000,
    },
    {
      id: "sovItem6",
      sovId: "sov1",
      itemNumber: "06-600",
      description: "Wood and Plastics",
      value: 175000,
      completed: 50000,
      previouslyCompleted: 25000,
      materialsStored: 25000,
    },
    {
      id: "sovItem7",
      sovId: "sov1",
      itemNumber: "07-700",
      description: "Thermal and Moisture Protection",
      value: 215000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 75000,
    },
    {
      id: "sovItem8",
      sovId: "sov1",
      itemNumber: "08-800",
      description: "Doors and Windows",
      value: 185000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 0,
    },
    {
      id: "sovItem9",
      sovId: "sov1",
      itemNumber: "09-900",
      description: "Finishes",
      value: 250000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 0,
    },
    {
      id: "sovItem10",
      sovId: "sov1",
      itemNumber: "15-100",
      description: "Mechanical Systems",
      value: 415000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 0,
    },
  ],
  "sov2": [
    {
      id: "sovItem11",
      sovId: "sov2",
      itemNumber: "01-100",
      description: "General Requirements",
      value: 250000,
      completed: 100000,
      previouslyCompleted: 50000,
      materialsStored: 0,
    },
    {
      id: "sovItem12",
      sovId: "sov2",
      itemNumber: "02-200",
      description: "Site Work",
      value: 350000,
      completed: 325000,
      previouslyCompleted: 300000,
      materialsStored: 0,
    },
    {
      id: "sovItem13",
      sovId: "sov2",
      itemNumber: "03-300",
      description: "Concrete",
      value: 675000,
      completed: 600000,
      previouslyCompleted: 550000,
      materialsStored: 0,
    },
    {
      id: "sovItem14",
      sovId: "sov2",
      itemNumber: "04-400",
      description: "Masonry",
      value: 425000,
      completed: 100000,
      previouslyCompleted: 0,
      materialsStored: 75000,
    },
    {
      id: "sovItem15",
      sovId: "sov2",
      itemNumber: "05-500",
      description: "Metals",
      value: 875000,
      completed: 200000,
      previouslyCompleted: 100000,
      materialsStored: 300000,
    },
    {
      id: "sovItem16",
      sovId: "sov2",
      itemNumber: "13-100",
      description: "Special Construction",
      value: 950000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 250000,
    },
    {
      id: "sovItem17",
      sovId: "sov2",
      itemNumber: "15-100",
      description: "Mechanical Systems",
      value: 725000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 0,
    },
    {
      id: "sovItem18",
      sovId: "sov2",
      itemNumber: "16-100",
      description: "Electrical Systems",
      value: 500000,
      completed: 0,
      previouslyCompleted: 0,
      materialsStored: 0,
    },
  ],
};

// Mock Schedule of Values
export const scheduleOfValues: ScheduleOfValue[] = [
  {
    id: "sov1",
    projectId: "project1",
    lineItems: sovLineItems["sov1"],
    createdAt: new Date("2023-01-20"),
    updatedAt: new Date("2023-02-15"),
  },
  {
    id: "sov2",
    projectId: "project2",
    lineItems: sovLineItems["sov2"],
    createdAt: new Date("2023-03-05"),
    updatedAt: new Date("2023-03-05"),
  },
];

// Mock Application Line Items
const appLineItems1: ApplicationLineItem[] = sovLineItems["sov1"].map(item => ({
  id: `app-line-${item.id}`,
  applicationId: "app1",
  sovLineItemId: item.id,
  description: item.description,
  scheduledValue: item.value,
  workCompleted: item.completed,
  previouslyCompleted: item.previouslyCompleted,
  materialsStored: item.materialsStored,
}));

const appLineItems2: ApplicationLineItem[] = sovLineItems["sov2"].map(item => ({
  id: `app-line-${item.id}`,
  applicationId: "app2",
  sovLineItemId: item.id,
  description: item.description,
  scheduledValue: item.value,
  workCompleted: item.completed,
  previouslyCompleted: item.previouslyCompleted,
  materialsStored: item.materialsStored,
}));

// Mock Applications
export const applications: Application[] = [
  {
    id: "app1",
    projectId: "project1",
    applicationNumber: 3,
    periodStart: new Date("2023-03-01"),
    periodEnd: new Date("2023-03-31"),
    submissionDate: new Date("2023-04-05"),
    status: "submitted",
    lineItems: appLineItems1,
    retainagePercentage: 10,
    totalEarned: appLineItems1.reduce((sum, item) => sum + item.workCompleted + item.materialsStored, 0),
    totalPreviouslyEarned: appLineItems1.reduce((sum, item) => sum + item.previouslyCompleted, 0),
    totalDue: appLineItems1.reduce((sum, item) => 
      sum + (item.workCompleted + item.materialsStored - item.previouslyCompleted), 0) * 0.9, // Accounting for retainage
    createdAt: new Date("2023-04-03"),
    updatedAt: new Date("2023-04-05"),
  },
  {
    id: "app2",
    projectId: "project2",
    applicationNumber: 2,
    periodStart: new Date("2023-04-01"),
    periodEnd: new Date("2023-04-30"),
    submissionDate: new Date("2023-05-03"),
    status: "draft",
    lineItems: appLineItems2,
    retainagePercentage: 5,
    totalEarned: appLineItems2.reduce((sum, item) => sum + item.workCompleted + item.materialsStored, 0),
    totalPreviouslyEarned: appLineItems2.reduce((sum, item) => sum + item.previouslyCompleted, 0),
    totalDue: appLineItems2.reduce((sum, item) => 
      sum + (item.workCompleted + item.materialsStored - item.previouslyCompleted), 0) * 0.95, // Accounting for retainage
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-01"),
  },
];

// Mock Budget Items
export const budgetItems: Record<string, BudgetItem[]> = {
  "project1": [
    {
      id: "budget1",
      projectId: "project1",
      category: "Labor",
      description: "Concrete Workers",
      estimatedCost: 185000,
      actualCost: 192000,
      variance: -7000,
    },
    {
      id: "budget2",
      projectId: "project1",
      category: "Materials",
      description: "Structural Steel",
      estimatedCost: 320000,
      actualCost: 305000,
      variance: 15000,
    },
    {
      id: "budget3",
      projectId: "project1",
      category: "Equipment",
      description: "Crane Rental",
      estimatedCost: 75000,
      actualCost: 82000,
      variance: -7000,
    },
    {
      id: "budget4",
      projectId: "project1",
      category: "Subcontractors",
      description: "Electrical Contractor",
      estimatedCost: 230000,
      actualCost: 230000,
      variance: 0,
    },
    {
      id: "budget5",
      projectId: "project1",
      category: "General Conditions",
      description: "Project Management",
      estimatedCost: 120000,
      actualCost: 125000,
      variance: -5000,
    },
  ],
  "project2": [
    {
      id: "budget6",
      projectId: "project2",
      category: "Labor",
      description: "Foundation Workers",
      estimatedCost: 275000,
      actualCost: 268000,
      variance: 7000,
    },
    {
      id: "budget7",
      projectId: "project2",
      category: "Materials",
      description: "Concrete",
      estimatedCost: 450000,
      actualCost: 462000,
      variance: -12000,
    },
    {
      id: "budget8",
      projectId: "project2",
      category: "Materials",
      description: "Server Room Equipment",
      estimatedCost: 850000,
      actualCost: 850000,
      variance: 0,
    },
    {
      id: "budget9",
      projectId: "project2",
      category: "Subcontractors",
      description: "HVAC Contractor",
      estimatedCost: 375000,
      actualCost: 375000,
      variance: 0,
    },
    {
      id: "budget10",
      projectId: "project2",
      category: "General Conditions",
      description: "Site Security",
      estimatedCost: 85000,
      actualCost: 90000,
      variance: -5000,
    },
  ],
};

// Helper to get total amounts for a project
export const getProjectTotals = (projectId: string) => {
  const sov = scheduleOfValues.find(sov => sov.projectId === projectId);
  const application = applications.find(app => app.projectId === projectId);
  
  if (!sov) {
    return {
      totalContractSum: 0,
      totalCompleted: 0,
      totalRemaining: 0,
      percentComplete: 0,
    };
  }
  
  const totalContractSum = sov.lineItems.reduce((sum, item) => sum + item.value, 0);
  const totalCompleted = application ? application.totalEarned : 0;
  const totalRemaining = totalContractSum - totalCompleted;
  const percentComplete = totalContractSum > 0 ? (totalCompleted / totalContractSum) * 100 : 0;
  
  return {
    totalContractSum,
    totalCompleted,
    totalRemaining,
    percentComplete,
  };
};
