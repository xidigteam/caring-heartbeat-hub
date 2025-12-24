import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, Plus, Search, Phone, MapPin } from 'lucide-react';
const patients = [
  { id: 1, name: 'John Smith', status: 'active', phone: '(555) 123-4567', address: '123 Oak Street, City', service: 'Home Health' },
  { id: 2, name: 'Mary Brown', status: 'active', phone: '(555) 234-5678', address: '456 Maple Ave, City', service: 'Personal Care' },
  { id: 3, name: 'Robert Wilson', status: 'active', phone: '(555) 345-6789', address: '789 Pine Road, City', service: 'Skilled Nursing' },
  { id: 4, name: 'Alice Davis', status: 'inactive', phone: '(555) 456-7890', address: '321 Elm Street, City', service: 'Mental Health' },
  { id: 5, name: 'James Miller', status: 'active', phone: '(555) 567-8901', address: '654 Cedar Lane, City', service: 'Adult Day Care' },
];

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Patients</h1>
          <p className="text-muted-foreground">Manage patient records and care plans</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{patients.filter(p => p.status === 'active').length}</p>
                <p className="text-sm text-muted-foreground">Active Patients</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{patients.length}</p>
                <p className="text-sm text-muted-foreground">Total Patients</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/10">
                <Users className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">New This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>All Patients</CardTitle>
              <CardDescription>View and manage patient information</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {patient.phone}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{patient.service}</Badge>
                  <Badge variant={patient.status === 'active' ? 'default' : 'outline'}>
                    {patient.status}
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
