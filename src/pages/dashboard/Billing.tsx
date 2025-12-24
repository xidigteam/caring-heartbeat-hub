import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Plus, FileText, TrendingUp, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

const billingStats = [
  { label: 'Revenue MTD', value: '$127,450', change: '+8.3%', icon: DollarSign },
  { label: 'Outstanding', value: '$24,320', change: '-12%', icon: Clock },
  { label: 'Claims Pending', value: '18', change: null, icon: FileText },
  { label: 'Collection Rate', value: '94.2%', change: '+1.2%', icon: TrendingUp },
];

const recentInvoices = [
  { id: 'INV-001', patient: 'John Smith', amount: '$1,250.00', status: 'paid', date: 'Dec 20, 2024' },
  { id: 'INV-002', patient: 'Mary Brown', amount: '$890.00', status: 'pending', date: 'Dec 18, 2024' },
  { id: 'INV-003', patient: 'Robert Wilson', amount: '$2,100.00', status: 'paid', date: 'Dec 15, 2024' },
  { id: 'INV-004', patient: 'Alice Davis', amount: '$560.00', status: 'overdue', date: 'Dec 10, 2024' },
  { id: 'INV-005', patient: 'James Miller', amount: '$1,800.00', status: 'pending', date: 'Dec 8, 2024' },
];

export default function Billing() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Billing & Invoicing</h1>
          <p className="text-muted-foreground">Manage invoices, claims, and payments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {billingStats.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    {stat.change && (
                      <span className={`text-xs ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                        {stat.change}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>Latest billing activity</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInvoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    invoice.status === 'paid' ? 'bg-success/10' : 
                    invoice.status === 'overdue' ? 'bg-destructive/10' : 
                    'bg-warning/10'
                  }`}>
                    {invoice.status === 'paid' ? (
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    ) : invoice.status === 'overdue' ? (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    ) : (
                      <Clock className="h-4 w-4 text-warning" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-sm text-muted-foreground">{invoice.patient}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">{invoice.amount}</p>
                    <p className="text-xs text-muted-foreground">{invoice.date}</p>
                  </div>
                  <Badge variant={
                    invoice.status === 'paid' ? 'default' : 
                    invoice.status === 'overdue' ? 'destructive' : 
                    'secondary'
                  }>
                    {invoice.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
