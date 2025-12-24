import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from '@/components/NavLink';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Heart,
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardCheck,
  FileText,
  DollarSign,
  MessageSquare,
  BarChart3,
  Settings,
  Building2,
  UserPlus,
  Shield,
  ChevronRight,
  PieChart,
  FileBarChart,
  Calculator,
  Receipt,
  AlertCircle,
  FileX,
  Wallet,
  UserCircle,
  Stethoscope,
  Truck,
  MoreHorizontal,
} from 'lucide-react';

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  roles?: string[];
  children?: NavItem[];
}

const schedulingItems: NavItem[] = [
  { title: 'Scheduler', url: '/dashboard/schedule', icon: Calendar },
];

const billingItems: NavItem[] = [
  { title: 'Claims Metric Dashboard', url: '/dashboard/billing', icon: PieChart },
  { title: 'Generate Bill', url: '/dashboard/billing/generate', icon: Receipt },
  { title: 'Claim Status', url: '/dashboard/billing/claim-status', icon: FileText },
  { title: 'Claim Detail Report', url: '/dashboard/billing/claim-detail', icon: FileBarChart },
  { title: 'Claim Rejection Report', url: '/dashboard/billing/rejections', icon: FileX },
  { title: 'ERA Report', url: '/dashboard/billing/era', icon: Calculator },
  { title: 'Financial Summary Report', url: '/dashboard/billing/financial-summary', icon: Wallet },
  { title: 'Balance and Aging Report', url: '/dashboard/billing/aging', icon: BarChart3 },
  { title: 'Patients By Insurance', url: '/dashboard/billing/patients-insurance', icon: Users },
  { title: 'Procedure Productivity', url: '/dashboard/billing/productivity', icon: Calculator },
  { title: 'Denial Analysis Report', url: '/dashboard/billing/denials', icon: AlertCircle },
  { title: 'Claims with Issues', url: '/dashboard/billing/issues', icon: AlertCircle },
];

const crmItems: NavItem[] = [
  { title: 'Patients', url: '/dashboard/patients', icon: Users },
  { title: 'Caregivers', url: '/dashboard/caregivers', icon: UserPlus },
  { title: 'Contacts', url: '/dashboard/contacts', icon: UserCircle },
];

const clinicalItems: NavItem[] = [
  { title: 'Documentation', url: '/dashboard/documentation', icon: FileText },
  { title: 'EVV', url: '/dashboard/evv', icon: ClipboardCheck },
  { title: 'Care Plans', url: '/dashboard/care-plans', icon: Stethoscope },
];

const operationItems: NavItem[] = [
  { title: 'Fleet Management', url: '/dashboard/fleet', icon: Truck },
  { title: 'Messages', url: '/dashboard/messages', icon: MessageSquare },
];

const reportsItems: NavItem[] = [
  { title: 'All Reports', url: '/dashboard/reports', icon: BarChart3 },
  { title: 'Custom Reports', url: '/dashboard/reports/custom', icon: FileBarChart },
];

const dashboardItems: NavItem[] = [
  { title: 'Overview', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Analytics', url: '/dashboard/analytics', icon: PieChart },
];

const adminNavItems: NavItem[] = [
  { title: 'User Management', url: '/dashboard/admin/users', icon: Shield, roles: ['admin'] },
  { title: 'Agency Settings', url: '/dashboard/admin/agency', icon: Building2, roles: ['admin'] },
  { title: 'Settings', url: '/dashboard/settings', icon: Settings },
];

interface CollapsibleMenuProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NavItem[];
  collapsed: boolean;
  isActive: (path: string) => boolean;
  defaultOpen?: boolean;
}

function CollapsibleMenu({ title, icon: Icon, items, collapsed, isActive, defaultOpen = false }: CollapsibleMenuProps) {
  const hasActiveItem = items.some(item => isActive(item.url));
  const [isOpen, setIsOpen] = useState(defaultOpen || hasActiveItem);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={title}
            className="w-full justify-between"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              {!collapsed && <span>{title}</span>}
            </div>
            {!collapsed && (
              <ChevronRight
                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
              />
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        {!collapsed && (
          <CollapsibleContent>
            <SidebarMenuSub>
              {items.map((item) => (
                <SidebarMenuSubItem key={item.title}>
                  <SidebarMenuSubButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-3 w-3" />
                      <span className="text-xs">{item.title}</span>
                    </NavLink>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
}

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { roles, isAdmin, isSupervisor } = useAuth();
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const filterByRole = (items: NavItem[]) => {
    return items.filter(item => {
      if (!item.roles) return true;
      return item.roles.some(role => roles.includes(role as any));
    });
  };

  const visibleAdminItems = filterByRole(adminNavItems);

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Heart className="h-5 w-5" />
          </div>
          {!collapsed && (
            <span className="font-bold text-lg text-sidebar-foreground">CareFlow</span>
          )}
        </NavLink>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Scheduling */}
              <CollapsibleMenu
                title="Scheduling"
                icon={Calendar}
                items={schedulingItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* Billing */}
              <CollapsibleMenu
                title="Billing"
                icon={DollarSign}
                items={billingItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* CRM */}
              <CollapsibleMenu
                title="CRM"
                icon={Users}
                items={crmItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* Clinical */}
              <CollapsibleMenu
                title="Clinical"
                icon={Stethoscope}
                items={clinicalItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* Operation */}
              <CollapsibleMenu
                title="Operation"
                icon={Truck}
                items={operationItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* Reports */}
              <CollapsibleMenu
                title="Reports"
                icon={BarChart3}
                items={reportsItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* Dashboards */}
              <CollapsibleMenu
                title="Dashboards"
                icon={LayoutDashboard}
                items={dashboardItems}
                collapsed={collapsed}
                isActive={isActive}
              />

              {/* More */}
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="More">
                  <MoreHorizontal className="h-4 w-4" />
                  {!collapsed && <span>More</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {(isAdmin || isSupervisor) && (
          <SidebarGroup>
            <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
              Administration
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {visibleAdminItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url)}
                      tooltip={item.title}
                    >
                      <NavLink
                        to={item.url}
                        className="flex items-center gap-3"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/60">
            <p>CareFlow v1.0</p>
            <p className="mt-1">© 2026 CareFlow</p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
