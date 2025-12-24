import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Plus,
  ClipboardList,
  CheckSquare,
  Activity,
  PenTool,
  Eye,
  UserCheck,
  Camera,
  Stethoscope,
  Users,
  Pill,
  FileCheck,
  Smartphone,
} from 'lucide-react';

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

const features = [
  {
    title: 'SUPERVISORY VISITS',
    description: 'Electronically document all skilled visits',
    icon: Eye,
    color: 'bg-primary',
  },
  {
    title: 'CAREGIVER EVALUATIONS',
    description: 'Evaluate, document and capture signatures and build workflow',
    icon: UserCheck,
    color: 'bg-success',
  },
  {
    title: 'IMAGE CAPTURE',
    description: "Easily capture paper documents and sync them to patients' charts",
    icon: Camera,
    color: 'bg-warning',
  },
  {
    title: 'SKILLED NURSING DOCUMENTATION',
    description: 'Improve documentation accuracy with built-in consistency checks',
    icon: Stethoscope,
    color: 'bg-destructive',
  },
  {
    title: 'PATIENT ONBOARDING',
    description: 'Complete all onboarding documentation and capture patient signatures. All intake data are auto-populated to reduce errors.',
    icon: Users,
    color: 'bg-primary',
  },
  {
    title: 'MEDICATION MANAGEMENT (EMAR)',
    description: 'View, edit and modify medication by searching the OpenFDA drug database and reduce manual data entries.',
    icon: Pill,
    color: 'bg-success',
  },
  {
    title: 'CLINICAL DOCUMENTATION',
    description: 'View, edit and generate any clinical documentation forms on the fly and capture the patient electronic signature with ease',
    icon: FileCheck,
    color: 'bg-warning',
  },
];

const documentList = [
  { name: 'DHS 5856 Responsible Party Agreement', date: '02/21/2019 10:56 AM' },
  { name: 'Service Agreement', date: '02/21/2019 10:57 AM' },
  { name: 'Authorization To Release Medical Information', date: '02/21/2019 10:57 AM' },
  { name: 'Client Admission Agreement', date: '02/21/2019 10:57 AM' },
  { name: 'DNR Request Form', date: '02/21/2019 10:57 AM' },
  { name: 'Client Responsibility Handout', date: '02/21/2019 10:57 AM' },
  { name: 'NUTRITION SCREENING FORM', date: '02/21/2019 10:57 AM' },
  { name: 'ASSESSMENT REQUEST', date: '02/21/2019 10:57 AM' },
  { name: 'PCA REFERRAL REQUEST', date: '02/21/2019 10:57 AM' },
  { name: 'Referral Process', date: '02/21/2019 10:57 AM' },
];

const patientRecordReview = [
  'Documentation of coordination (DCC)',
  'Emergency contacts (EMC)',
  'Grievance procedure (GrP)',
  'Health Care Directive (HcD)',
  'HHA care plan (CPL)',
  'Initial supervisory visit (ISV)',
  'Medical History (MdH)',
  'Medical service providers (MSP)',
  'Medication Profile (MeP)',
  'Medication/treatment orders (MOr)',
  'Notice of Privacy',
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

      {/* Features Section */}
      <Card className="shadow-card bg-gradient-to-br from-primary/90 to-primary text-primary-foreground overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Everything Qualified Professionals Need</CardTitle>
          <CardDescription className="text-center text-primary-foreground/80">
            Care coordination apps with Offline functionality for your skilled and licensed caregivers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Features */}
            <div className="space-y-6">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="text-right">
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-primary-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Center - Mobile Preview */}
            <div className="flex justify-center">
              <Card className="w-64 bg-background text-foreground shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>12:49 PM Mon Feb 18</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-center text-sm">Documents</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2 flex gap-2 text-xs mb-2">
                      <Badge variant="outline" className="text-[10px]">Current Visits</Badge>
                      <Badge variant="secondary" className="text-[10px]">Michelle Ronaldo</Badge>
                    </div>
                    <div className="text-[10px] font-medium">Documents</div>
                    <div className="text-[10px] font-medium">Patient Record Review</div>
                    <div className="space-y-1">
                      {documentList.slice(0, 5).map((doc, i) => (
                        <div key={i} className="bg-muted rounded p-1 text-[8px]">
                          <div className="font-medium truncate">{doc.name}</div>
                          <div className="text-muted-foreground">{doc.date}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {patientRecordReview.slice(0, 5).map((item, i) => (
                        <div key={i} className="flex items-center gap-1 text-[8px]">
                          <CheckSquare className="h-2 w-2" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Features */}
            <div className="space-y-6">
              {features.slice(4).map((feature) => (
                <div key={feature.title}>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-primary-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

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
              <Button variant="outline" className="justify-start h-auto py-4">
                <Pill className="mr-3 h-5 w-5 text-success" />
                <div className="text-left">
                  <div className="font-medium">EMAR</div>
                  <div className="text-xs text-muted-foreground">Medication management</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <Camera className="mr-3 h-5 w-5 text-warning" />
                <div className="text-left">
                  <div className="font-medium">Image Capture</div>
                  <div className="text-xs text-muted-foreground">Scan documents</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
