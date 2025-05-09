
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart2,
  Users,
  Settings,
  FolderKanban,
  Receipt,
  FileBarChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: 'Projects', path: '/projects', icon: <FolderKanban className="h-5 w-5" /> },
    { name: 'Schedule of Values', path: '/sov', icon: <FileText className="h-5 w-5" /> },
    { name: 'Applications', path: '/applications', icon: <Receipt className="h-5 w-5" /> },
    { name: 'Budget', path: '/budget', icon: <FileBarChart className="h-5 w-5" /> },
    { name: 'Reports', path: '/reports', icon: <BarChart2 className="h-5 w-5" /> },
    { name: 'Team', path: '/team', icon: <Users className="h-5 w-5" /> },
  ];

  const classes = {
    sidebar: cn(
      "fixed left-0 top-0 z-20 flex h-full w-64 flex-col border-r bg-background transition-transform md:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    ),
    navLink: "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:text-primary",
    activeNavLink: "bg-primary/10 text-primary",
  };

  return (
    <aside className={classes.sidebar}>
      <div className="h-16 border-b flex items-center justify-center">
        <h2 className="text-xl font-bold text-primary">GCBill</h2>
      </div>
      <nav className="flex-1 overflow-auto py-6 px-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn(classes.navLink, isActive && classes.activeNavLink)
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="border-t p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) => 
            cn(classes.navLink, isActive && classes.activeNavLink)
          }
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
