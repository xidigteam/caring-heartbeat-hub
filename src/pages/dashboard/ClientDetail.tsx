import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Edit,
  Upload,
  Plus,
  TrendingUp,
  Clock,
  AlertTriangle,
  User,
  Heart,
  FileText,
} from 'lucide-react';

// Mock client data
const clientData = {
  id: '1',
  name: 'Justin Anderson',
  photo: '',
  dateOfBirth: '04/16/1934',
  age: 84,
  gender: 'Male',
  phone: '0125171990',
  email: 'jcollings@gmail.com',
  address: '1615 S 4th St Minneapolis 55454',
  accountNumber: '1036250',
  clientId: '01965454',
  emergencyContact: '123456789',
  emergencyName: 'Hassan Abdullahi',
  eligibility: {
    status: 'Eligible For Medical Assistance (MA)',
    date: '15 Feb 2018',
  },
  stats: {
    units: '1200.00(300.00 hrs)',
    used: '17.56(4.39 hrs)',
    remaining: '1182.44(295.61 hrs)',
    banked: '540.20(135.05 hrs)',
    perDay: 0.82,
    perWeek: 5.74,
    perMonth: 24.60,
    usage: 'NA',
  },
  financials: {
    profits: 2447,
    allTime: 47171,
    monthlyEarning: [40, 60, 80, 55, 70],
    scheduledHours: [30, 45, 60, 50, 55],
    workedHours: [25, 40, 55, 45, 50],
    complaints: 45,
  },
  conditions: ['Hives', 'Sneezing'],
  careNeeds: ['Cane', 'Walter'],
  mobility: ['Walking Outsid'],
  behaviors: ['Agitated', 'Depressed', 'Forgetful'],
  orientation: ['Guarded', 'Poor'],
  equipment: ['Bedrest BRP', 'COMPLETE BEDREST', 'Crutches', 'UP AS TOLERATED', 'WHEELCHAIR'],
  limitations: ['Amputation', 'Endurance', 'Hearing', 'Legally Blind', 'paralysis', 'Speech'],
  precautions: ['Avoid Stairway'],
  diet: ['Light food'],
  diagnosis: {
    principal: '296.3',
    surgical: 'A77.41',
    other: '296.3, A04.6, B08.79',
  },
  bio: "Vietnam Vet. Speaks in 2 languages (english and spanish). His son leaves in Bloomington and he likes to visit him on weekends. His wife dies 8 years ago and likes to be independent as possible.",
  careTakers: [
    { id: '1', name: 'Care Taker 1', avatar: '' },
    { id: '2', name: 'Care Taker 2', avatar: '' },
    { id: '3', name: 'Care Taker 3', avatar: '' },
  ],
  relationship: { name: 'Family Member', icon: User },
};

const activities = [
  {
    id: '1',
    task: 'Justin Anderson changed insurance. Start paperwork',
    addedOn: 'Dec 11 2017 8:23PM',
    priority: 'HIGH',
    dueDate: 'Jan 16 2018 12:00AM',
    taskType: 'INSURANCE ELIGIBILITY (insEI)',
    taskStatus: 'PENDING',
  },
  {
    id: '2',
    task: 'New Service Auth. Schedule a QP visit',
    addedOn: 'Feb 21 2018 1:01PM',
    priority: 'HIGH',
    dueDate: 'Mar 7 2018 1:01PM',
    taskType: 'Service Auth (SA)',
    taskStatus: 'PENDING',
  },
  {
    id: '3',
    task: 'New Service Auth for Justin Anderson 04215432000 is missing SA attachments',
    addedOn: 'Feb 21 2018 1:01PM',
    priority: 'HIGH',
    dueDate: 'Mar 7 2018 1:01PM',
    taskType: 'Service Auth (SA)',
    taskStatus: 'PENDING',
  },
];

const notes = [
  {
    id: '1',
    type: 'GENERAL NOTE',
    date: '4 Months Ago',
    content: 'Client left hospital on 11/20/2017. Attached is the discharge paper that the client sent. We need to make sure this is accounted for billing. We MUST not bill (1/10 to 1/15) -HMA',
    attachment: 'CAREplan6364688117211104708.pdf',
    author: 'HASSAN',
  },
  {
    id: '2',
    type: 'GENERAL NOTE',
    date: '2 Months Ago',
    content: 'Case manager called. Asked about why the PCA was not performing "Deep Cleaning". Explained to him how the S5130 procedure code is for only "Light Cleaning" and not for deep cleaning. He finally agreed and he will inform the client',
    author: 'HASSANO',
  },
  {
    id: '3',
    type: 'GENERAL NOTE',
    date: '2 Weeks Ago',
    content: 'Client Called to inquire about his hours. Explained to him.',
    author: 'HASSANO',
  },
  {
    id: '4',
    type: 'Client Record Review',
    date: '3 Days Ago',
    content: "We're missing a signed copy of Client Electronic Signature.",
    author: 'HASSANO',
  },
];

export default function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('activities');
  const [noteType, setNoteType] = useState('GENERAL NOTE');
  const [newNote, setNewNote] = useState('');

  const client = clientData;

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard/patients')}>
          <ArrowLeft className="h-4 w-4 mr-1" />
          CRM
        </Button>
        <span className="text-muted-foreground">›</span>
        <span className="text-primary">Clients</span>
        <span className="text-muted-foreground">›</span>
        <span>Add Client</span>
      </div>

      {/* Header with stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-semibold">Client Info</h1>
          <span className="text-muted-foreground">› Profile</span>
        </div>
      </div>

      {/* Top Stats Bar */}
      <Card className="shadow-card">
        <CardContent className="py-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-xs text-muted-foreground">UNITS</div>
                <div className="font-semibold">{client.stats.units}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">USED</div>
                <div className="font-semibold">{client.stats.used}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">REMAINING</div>
                <div className="font-semibold">{client.stats.remaining}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">BANKED</div>
                <div className="font-semibold">{client.stats.banked}</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xs text-muted-foreground">PROFITS</div>
                <div className="font-semibold text-success">₮{client.financials.profits}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">ALL TIME</div>
                <div className="font-semibold">${client.financials.allTime.toLocaleString()}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">MONTHLY EARNING</div>
                <div className="flex items-end gap-0.5 h-6">
                  {client.financials.monthlyEarning.map((v, i) => (
                    <div key={i} className="w-1.5 bg-primary rounded-t" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">SCHEDULED HOURS</div>
                <div className="flex items-end gap-0.5 h-6">
                  {client.financials.scheduledHours.map((v, i) => (
                    <div key={i} className="w-1.5 bg-primary rounded-t" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">WORKED HOURS</div>
                <div className="flex items-end gap-0.5 h-6">
                  {client.financials.workedHours.map((v, i) => (
                    <div key={i} className="w-1.5 bg-primary rounded-t" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">COMPLAINTS</div>
                <div className="font-semibold text-warning">⬇ {client.financials.complaints}%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column - Client Profile */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="relative">
                {/* Header Image */}
                <div className="h-32 bg-gradient-to-r from-muted to-muted/50 relative">
                  <div className="absolute top-2 left-2 text-xs text-muted-foreground">
                    2/25/2018 12:00:00 AM
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge variant="secondary" className="bg-success text-success-foreground">✓ Active</Badge>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">⚡ Connect</Badge>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="p-4">
                  <div className="flex gap-4">
                    <Avatar className="h-24 w-24 -mt-12 border-4 border-background">
                      <AvatarImage src={client.photo} />
                      <AvatarFallback className="text-2xl bg-muted">{client.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Column 1: Personal Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-primary border-primary">
                            {client.eligibility.status} {client.eligibility.date}
                          </Badge>
                        </div>
                        <h2 className="text-xl font-semibold">{client.name}</h2>
                        <div className="text-sm space-y-1 text-muted-foreground">
                          <p>⋕ {client.accountNumber}</p>
                          <p># {client.clientId}</p>
                          <p>📅 {client.dateOfBirth} ( {client.age} years old )</p>
                          <p>♂ {client.gender}</p>
                        </div>
                        
                        <div className="pt-2 space-y-1 text-sm">
                          <p className="flex items-center gap-2">
                            <Phone className="h-3 w-3" /> {client.phone}
                          </p>
                          <p className="flex items-center gap-2 text-primary">
                            <Mail className="h-3 w-3" /> {client.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" /> {client.address}
                          </p>
                          <p>⚡ {client.emergencyContact}</p>
                          <p className="pl-5">{client.emergencyName}</p>
                        </div>

                        <div className="pt-2 text-sm space-y-1">
                          <p>☢ {client.conditions.join(', ')}</p>
                          <p>⚐ {client.careNeeds.join(', ')}</p>
                          <p>⚐ {client.mobility.join(', ')}</p>
                          <p>☹ {client.behaviors.join(', ')}</p>
                          <p>❤ {client.orientation.join(', ')}</p>
                          <p>⚕ {client.equipment.join(', ')}</p>
                          <p>⚠ {client.limitations.join(', ')}</p>
                          <p>⊘ {client.precautions.join(', ')}</p>
                          <p>♨ {client.diet.join(', ')}</p>
                        </div>
                      </div>

                      {/* Column 2: Stats */}
                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-primary">{client.stats.perDay}</div>
                          <div className="text-xs text-muted-foreground">Used</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-success">295.61</div>
                          <div className="text-xs text-muted-foreground">Remaining</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{client.stats.perDay}</div>
                          <div className="text-xs text-muted-foreground">Per Day</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{client.stats.perWeek}</div>
                          <div className="text-xs text-muted-foreground">Per Week</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{client.stats.perMonth}</div>
                          <div className="text-xs text-muted-foreground">Per Month</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{client.stats.usage}</div>
                          <div className="text-xs text-muted-foreground">USAGE</div>
                        </div>
                      </div>

                      {/* Column 3: Relationship, Care Taker, Diagnosis */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm text-muted-foreground mb-2">Relationship</h4>
                          <div className="flex items-center gap-2">
                            <User className="h-8 w-8 text-muted-foreground" />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm text-muted-foreground mb-2">Care Taker</h4>
                          <div className="flex -space-x-2">
                            {client.careTakers.map((ct) => (
                              <Avatar key={ct.id} className="h-8 w-8 border-2 border-background">
                                <AvatarFallback className="text-xs">{ct.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm text-muted-foreground mb-2">Diagnosis</h4>
                          <div className="space-y-1 text-sm">
                            <p><span className="text-success">Principal</span>: {client.diagnosis.principal}</p>
                            <p><span className="text-warning">Surgical</span>: {client.diagnosis.surgical}</p>
                            <p><span className="text-muted-foreground">Other</span>: {client.diagnosis.other}</p>
                          </div>
                        </div>

                        <Button variant="ghost" size="icon">
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium italic mb-2">A little about me...</h4>
                    <p className="text-sm text-muted-foreground">{client.bio}</p>
                    <Button variant="outline" size="sm" className="mt-3">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit Client Info.
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Notes */}
        <div className="space-y-4">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <Tabs defaultValue="notes">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="communications">Client Communications</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Note Form */}
              <div className="space-y-3">
                <Select value={noteType} onValueChange={setNoteType}>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Document Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GENERAL NOTE">GENERAL NOTE</SelectItem>
                    <SelectItem value="Client Record Review">Client Record Review</SelectItem>
                    <SelectItem value="Clinical Note">Clinical Note</SelectItem>
                  </SelectContent>
                </Select>

                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Click or Drop files to upload</p>
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Client Notes"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="sm">Save</Button>
                </div>
              </div>

              {/* Notes List */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {notes.map((note) => (
                  <div key={note.id} className="flex gap-3">
                    <div className="text-xs text-muted-foreground w-16 shrink-0">{note.date}</div>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-[10px] bg-primary text-primary-foreground">
                        {note.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary">{note.type}</p>
                      <p className="text-xs text-muted-foreground">{note.content}</p>
                      {note.attachment && (
                        <a href="#" className="text-xs text-primary hover:underline">{note.attachment}</a>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{note.author}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Tabs with Activities */}
      <Card className="shadow-card">
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              {['Activities', 'Medications', 'Contacts', 'Care Plan', 'Clinical', 'Incidents', 'Do not bill', 'Document', 'Client Care Taker', 'SA Hours'].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase().replace(/ /g, '-')}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="activities" className="p-4">
              <div className="flex gap-2 mb-4">
                {['Search', 'Search', 'Search', 'Search', 'Search', 'Search'].map((_, i) => (
                  <Input key={i} placeholder="Search" className="h-8" />
                ))}
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>AddedOn</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>DueDate</TableHead>
                    <TableHead>TaskType</TableHead>
                    <TableHead>TaskStatus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="font-medium">{activity.task}</TableCell>
                      <TableCell>{activity.addedOn}</TableCell>
                      <TableCell>
                        <Badge variant={activity.priority === 'HIGH' ? 'destructive' : 'secondary'}>
                          {activity.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{activity.dueDate}</TableCell>
                      <TableCell>{activity.taskType}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{activity.taskStatus}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {['medications', 'contacts', 'care-plan', 'clinical', 'incidents', 'do-not-bill', 'document', 'client-care-taker', 'sa-hours'].map((tab) => (
              <TabsContent key={tab} value={tab} className="p-4">
                <div className="flex items-center justify-center h-32 text-muted-foreground">
                  {tab.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} content coming soon
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
