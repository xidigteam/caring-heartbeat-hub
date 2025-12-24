import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Calendar,
  ClipboardCheck,
  DollarSign,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const stats = [
  {
    title: 'Active Patients',
    value: '248',
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    title: "Today's Visits",
    value: '42',
    subtext: '38 completed',
    icon: Calendar,
  },
  {
    title: 'EVV Compliance',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
    icon: ClipboardCheck,
  },
  {
    title: 'Revenue (MTD)',
    value: '$127,450',
    change: '+8.3%',
    trend: 'up',
    icon: DollarSign,
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'visit_completed',
    message: 'Maria Garcia completed visit with John Smith',
    time: '5 min ago',
    status: 'success',
  },
  {
    id: 2,
    type: 'clock_in',
    message: 'Sarah Johnson clocked in at 123 Oak Street',
    time: '12 min ago',
    status: 'info',
  },
  {
    id: 3,
    type: 'alert',
    message: 'Missing EVV verification for visit #4521',
    time: '25 min ago',
    status: 'warning',
  },
  {
    id: 4,
    type: 'visit_completed',
    message: 'David Lee completed visit with Mary Brown',
    time: '32 min ago',
    status: 'success',
  },
  {
    id: 5,
    type: 'new_patient',
    message: 'New patient referral: Robert Wilson',
    time: '1 hour ago',
    status: 'info',
  },
];

const upcomingVisits = [
  {
    id: 1,
    patient: 'Alice Johnson',
    caregiver: 'Maria Garcia',
    time: '2:00 PM - 4:00 PM',
    service: 'Personal Care',
    status: 'scheduled',
  },
  {
    id: 2,
    patient: 'Bob Williams',
    caregiver: 'Sarah Johnson',
    time: '2:30 PM - 4:30 PM',
    service: 'Skilled Nursing',
    status: 'en_route',
  },
  {
    id: 3,
    patient: 'Carol Davis',
    caregiver: 'David Lee',
    time: '3:00 PM - 5:00 PM',
    service: 'Physical Therapy',
    status: 'scheduled',
  },
];

export default function Dashboard() {
  const { profile, roles, isAdmin, isSupervisor } = useAuth();

  const isPending = profile?.status === 'pending';

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="rounded-full bg-warning/10 p-6 mb-6">
          <Clock className="h-12 w-12 text-warning" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Account Pending Approval</h1>
        <p className="text-muted-foreground max-w-md">
          Your account is currently awaiting approval from an administrator. 
          You'll receive access to the dashboard once your account is activated.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back, {profile?.first_name || 'User'}
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your agency today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 mt-1">
                {stat.change && (
                  <span className={`text-xs flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </span>
                )}
                {stat.subtext && (
                  <span className="text-xs text-muted-foreground">{stat.subtext}</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-primary">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0"
                >
                  <div className={`mt-0.5 rounded-full p-1.5 ${
                    activity.status === 'success' ? 'bg-success/10 text-success' :
                    activity.status === 'warning' ? 'bg-warning/10 text-warning' :
                    'bg-info/10 text-info'
                  }`}>
                    {activity.status === 'success' ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : activity.status === 'warning' ? (
                      <AlertTriangle className="h-3.5 w-3.5" />
                    ) : (
                      <Clock className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Visits */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Visits</CardTitle>
                <CardDescription>Scheduled for today</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-primary">
                View schedule <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingVisits.map((visit) => (
                <div
                  key={visit.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{visit.patient}</p>
                      <Badge
                        variant={visit.status === 'en_route' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {visit.status === 'en_route' ? 'En Route' : 'Scheduled'}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {visit.caregiver} • {visit.service}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{visit.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Quick Actions */}
      {(isAdmin || isSupervisor) && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="justify-start h-auto py-4">
                <Users className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Add Patient</div>
                  <div className="text-xs text-muted-foreground">New referral</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <Calendar className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Schedule Visit</div>
                  <div className="text-xs text-muted-foreground">Create appointment</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <ClipboardCheck className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">EVV Review</div>
                  <div className="text-xs text-muted-foreground">3 pending</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <DollarSign className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Generate Invoice</div>
                  <div className="text-xs text-muted-foreground">Create billing</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
