
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  client: Client;
  contractAmount: number;
  startDate: Date;
  estimatedEndDate?: Date;
  status: 'planned' | 'active' | 'completed' | 'on-hold';
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Client {
  id: string;
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface ScheduleOfValue {
  id: string;
  projectId: string;
  lineItems: SOVLineItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SOVLineItem {
  id: string;
  sovId: string;
  itemNumber: string;
  description: string;
  value: number;
  completed: number;
  previouslyCompleted: number;
  materialsStored: number;
}

export interface Application {
  id: string;
  projectId: string;
  applicationNumber: number;
  periodStart: Date;
  periodEnd: Date;
  submissionDate: Date;
  status: 'draft' | 'submitted' | 'approved' | 'paid';
  lineItems: ApplicationLineItem[];
  retainagePercentage: number;
  totalEarned: number;
  totalPreviouslyEarned: number;
  totalDue: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApplicationLineItem {
  id: string;
  applicationId: string;
  sovLineItemId: string;
  description: string;
  scheduledValue: number;
  workCompleted: number;
  previouslyCompleted: number;
  materialsStored: number;
}

export interface BudgetItem {
  id: string;
  projectId: string;
  category: string;
  description: string;
  estimatedCost: number;
  actualCost: number;
  variance: number;
}

export interface ChangeOrder {
  id: string;
  projectId: string;
  number: string;
  description: string;
  amount: number;
  status: 'proposed' | 'approved' | 'rejected';
  date: Date;
}
