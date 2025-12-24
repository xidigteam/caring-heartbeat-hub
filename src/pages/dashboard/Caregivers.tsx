import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserPlus, Plus, Search, Phone, Star, Clock } from 'lucide-react';

const caregivers = [
  { id: 1, name: 'Maria Garcia', status: 'available', phone: '(555) 111-2222', specialty: 'Personal Care', rating: 4.9, patientsAssigned: 5 },
  { id: 2, name: 'Sarah Johnson', status: 'on_visit', phone: '(555) 222-3333', specialty: 'Skilled Nursing', rating: 4.8, patientsAssigned: 4 },
  { id: 3, name: 'David Lee', status: 'available', phone: '(555) 333-4444', specialty: 'Physical Therapy', rating: 4.7, patientsAssigned: 6 },
  { id: 4, name: 'Emily Chen', status: 'off_duty', phone: '(555) 444-5555', specialty: 'Mental Health', rating: 4.9, patientsAssigned: 3 },
  { id: 5, name: 'Michael Brown', status: 'available', phone: '(555) 555-6666', specialty: 'Home Health', rating: 4.6, patientsAssigned: 7 },
];

const statusConfig = {
  available: { label: 'Available', className: 'bg-success/10 text-success' },
  on_visit: { label: 'On Visit', className: 'bg-primary/10 text-primary' },
  off_duty: { label: 'Off Duty', className: 'bg-muted text-muted-foreground' },
};

export default function Caregivers() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCaregivers = caregivers.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Caregivers</h1>
          <p className="text-muted-foreground">Manage caregiver profiles and assignments</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Caregiver
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <UserPlus className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{caregivers.length}</p>
                <p className="text-sm text-muted-foreground">Total Caregivers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/10">
                <UserPlus className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">{caregivers.filter(c => c.status === 'available').length}</p>
                <p className="text-sm text-muted-foreground">Available Now</p>
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
                <p className="text-2xl font-bold">{caregivers.filter(c => c.status === 'on_visit').length}</p>
                <p className="text-sm text-muted-foreground">On Visit</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/10">
                <Star className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>All Caregivers</CardTitle>
              <CardDescription>View and manage caregiver information</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search caregivers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCaregivers.map((caregiver) => (
              <div key={caregiver.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-accent/10 text-accent">
                      {caregiver.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{caregiver.name}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {caregiver.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-warning text-warning" /> {caregiver.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{caregiver.specialty}</Badge>
                  <Badge className={statusConfig[caregiver.status as keyof typeof statusConfig].className}>
                    {statusConfig[caregiver.status as keyof typeof statusConfig].label}
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
