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
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
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
} from 'lucide-react';

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  roles?: string[];
}

const mainNavItems: NavItem[] = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Schedule', url: '/dashboard/schedule', icon: Calendar },
  { title: 'EVV', url: '/dashboard/evv', icon: ClipboardCheck },
  { title: 'Patients', url: '/dashboard/patients', icon: Users },
  { title: 'Caregivers', url: '/dashboard/caregivers', icon: UserPlus },
  { title: 'Documentation', url: '/dashboard/documentation', icon: FileText },
  { title: 'Billing', url: '/dashboard/billing', icon: DollarSign, roles: ['admin', 'supervisor'] },
  { title: 'Messages', url: '/dashboard/messages', icon: MessageSquare },
  { title: 'Reports', url: '/dashboard/reports', icon: BarChart3, roles: ['admin', 'supervisor'] },
];

const adminNavItems: NavItem[] = [
  { title: 'User Management', url: '/dashboard/admin/users', icon: Shield, roles: ['admin'] },
  { title: 'Agency Settings', url: '/dashboard/admin/agency', icon: Building2, roles: ['admin'] },
  { title: 'Settings', url: '/dashboard/settings', icon: Settings },
];

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

  const visibleMainItems = filterByRole(mainNavItems);
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

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {visibleMainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <NavLink
                      to={item.url}
                      end={item.url === '/dashboard'}
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
            <p className="mt-1">© 2024 Healthcare Platform</p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
