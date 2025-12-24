import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClipboardCheck, MapPin, Phone, QrCode, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

const evvStats = [
  { label: 'Verified Today', value: '38', icon: CheckCircle2, color: 'text-success' },
  { label: 'Pending Review', value: '4', icon: Clock, color: 'text-warning' },
  { label: 'Exceptions', value: '2', icon: AlertTriangle, color: 'text-destructive' },
];

const recentVerifications = [
  { caregiver: 'Maria Garcia', patient: 'John Smith', type: 'GPS', time: '10:45 AM', status: 'verified' },
  { caregiver: 'Sarah Johnson', patient: 'Mary Brown', type: 'Phone', time: '10:30 AM', status: 'verified' },
  { caregiver: 'David Lee', patient: 'Robert Wilson', type: 'QR Code', time: '10:15 AM', status: 'pending' },
  { caregiver: 'Emily Chen', patient: 'Alice Davis', type: 'Manual', time: '9:45 AM', status: 'exception' },
];

export default function EVV() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Electronic Visit Verification</h1>
          <p className="text-muted-foreground">Track and verify caregiver visits</p>
        </div>
        <Button>
          <ClipboardCheck className="mr-2 h-4 w-4" />
          Review Pending
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {evvStats.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Verification Methods</CardTitle>
            <CardDescription>Supported EVV check-in options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GPS Location</p>
                  <p className="text-sm text-muted-foreground">Auto-verify via mobile</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Telephony</p>
                  <p className="text-sm text-muted-foreground">Phone check-in/out</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">QR / NFC</p>
                  <p className="text-sm text-muted-foreground">Scan to verify</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Manual Entry</p>
                  <p className="text-sm text-muted-foreground">With approval</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Verifications</CardTitle>
            <CardDescription>Latest EVV activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVerifications.map((v, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm">{v.caregiver}</p>
                    <p className="text-xs text-muted-foreground">with {v.patient}</p>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{v.time}</span>
                    <Badge variant={v.status === 'verified' ? 'default' : v.status === 'pending' ? 'secondary' : 'destructive'}>
                      {v.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
