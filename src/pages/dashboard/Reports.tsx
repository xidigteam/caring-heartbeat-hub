import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, FileText, TrendingUp, Users, Clock, DollarSign, ClipboardCheck } from 'lucide-react';

const reportCategories = [
  { 
    name: 'Operations', 
    icon: BarChart3,
    reports: ['Visit Summary', 'Caregiver Utilization', 'Patient Census', 'Service Distribution']
  },
  { 
    name: 'Compliance', 
    icon: ClipboardCheck,
    reports: ['EVV Compliance', 'Missing Documentation', 'Audit Trail', 'Regulatory Reports']
  },
  { 
    name: 'Financial', 
    icon: DollarSign,
    reports: ['Revenue Report', 'Accounts Receivable', 'Payer Mix', 'Payroll Summary']
  },
  { 
    name: 'Quality', 
    icon: TrendingUp,
    reports: ['Patient Outcomes', 'Caregiver Performance', 'Incident Reports', 'Satisfaction Scores']
  },
];

const recentReports = [
  { name: 'Weekly EVV Compliance', date: 'Dec 23, 2024', type: 'Compliance' },
  { name: 'Monthly Revenue Summary', date: 'Dec 20, 2024', type: 'Financial' },
  { name: 'Caregiver Utilization Q4', date: 'Dec 15, 2024', type: 'Operations' },
  { name: 'Patient Census Report', date: 'Dec 10, 2024', type: 'Operations' },
];

export default function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate insights and compliance reports</p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Custom Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">248</p>
                <p className="text-sm text-muted-foreground">Active Patients</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/10">
                <ClipboardCheck className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">94.2%</p>
                <p className="text-sm text-muted-foreground">EVV Compliance</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-info/10">
                <Clock className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,248</p>
                <p className="text-sm text-muted-foreground">Visits MTD</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/10">
                <DollarSign className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">$127K</p>
                <p className="text-sm text-muted-foreground">Revenue MTD</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Report Categories */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Report Categories</h2>
          <div className="grid gap-4">
            {reportCategories.map((category) => (
              <Card key={category.name} className="shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.reports.map((report) => (
                      <Button key={report} variant="outline" size="sm" className="text-xs">
                        {report}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <Card className="shadow-card h-fit">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Previously generated reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{report.name}</p>
                      <p className="text-xs text-muted-foreground">{report.type} • {report.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
