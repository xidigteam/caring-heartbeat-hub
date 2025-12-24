import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, ClipboardList, CheckSquare, Activity, PenTool } from 'lucide-react';

const recentDocs = [
  { id: 1, patient: 'John Smith', type: 'Visit Note', caregiver: 'Maria Garcia', date: 'Today, 10:45 AM', status: 'complete' },
  { id: 2, patient: 'Mary Brown', type: 'Assessment', caregiver: 'Sarah Johnson', date: 'Today, 9:30 AM', status: 'complete' },
  { id: 3, patient: 'Robert Wilson', type: 'Care Plan', caregiver: 'David Lee', date: 'Yesterday', status: 'pending_signature' },
  { id: 4, patient: 'Alice Davis', type: 'Visit Note', caregiver: 'Emily Chen', date: 'Yesterday', status: 'draft' },
];

const docTypes = [
  { name: 'Visit Notes', count: 142, icon: FileText },
  { name: 'Assessments', count: 38, icon: ClipboardList },
  { name: 'Care Plans', count: 52, icon: CheckSquare },
  { name: 'Vital Signs', count: 286, icon: Activity },
];

export default function Documentation() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground">Clinical notes, assessments, and care plans</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {docTypes.map((doc) => (
          <Card key={doc.name} className="shadow-card cursor-pointer hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <doc.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{doc.count}</p>
                  <p className="text-sm text-muted-foreground">{doc.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>Latest clinical documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocs.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{doc.type}</p>
                      <p className="text-xs text-muted-foreground">{doc.patient} • {doc.caregiver}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      doc.status === 'complete' ? 'default' : 
                      doc.status === 'pending_signature' ? 'secondary' : 
                      'outline'
                    }>
                      {doc.status.replace('_', ' ')}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{doc.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common documentation tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="outline" className="justify-start h-auto py-4">
                <FileText className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Visit Note</div>
                  <div className="text-xs text-muted-foreground">Document a visit</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <ClipboardList className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Assessment</div>
                  <div className="text-xs text-muted-foreground">Patient assessment</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <Activity className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Vital Signs</div>
                  <div className="text-xs text-muted-foreground">Record vitals</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <PenTool className="mr-3 h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Signature</div>
                  <div className="text-xs text-muted-foreground">Sign documents</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
