import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Edit, Minus, Expand, X } from 'lucide-react';

const clients = [
  { id: '1', name: 'Justin Anderson' },
  { id: '2', name: 'Sarah Johnson' },
  { id: '3', name: 'Michael Brown' },
];

const employees = [
  { id: '1', name: 'Melani Anderson' },
  { id: '2', name: 'John Smith' },
  { id: '3', name: 'Emily Davis' },
];

const serviceAuths = [
  { id: '1', code: '45332345 (T1019-) 03/06/2018-05/17/2018', usedHours: 23, remainingHours: 202 },
  { id: '2', code: '45332346 (T1020-) 04/01/2018-06/30/2018', usedHours: 15, remainingHours: 185 },
];

const serviceMethods = ['Ratio of Staff', 'Individual', 'Group'];
const staffRatios = ['1:1', '1:2', '1:3', '1:4'];
const carePlans = ['02/01/2018-02/28/2018', '03/01/2018-03/31/2018', '04/01/2018-04/30/2018'];
const frequencies = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly'];
const services = ['Dressing', 'Grooming', 'Bathing', 'Medication', 'Mobility', 'Meal Prep'];

export function ShiftAssignmentForm() {
  const [selectedClient, setSelectedClient] = useState('1');
  const [selectedEmployee, setSelectedEmployee] = useState('1');
  const [selectedServiceAuth, setSelectedServiceAuth] = useState('1');
  const [selectedServiceMethod, setSelectedServiceMethod] = useState('Ratio of Staff');
  const [selectedStaffRatio, setSelectedStaffRatio] = useState('1:1');
  const [selectedCarePlan, setSelectedCarePlan] = useState('02/01/2018-02/28/2018');
  const [selectedServices, setSelectedServices] = useState(['Dressing', 'Grooming', 'Bathing']);
  const [selectedFrequency, setSelectedFrequency] = useState('Daily');
  const [startDate, setStartDate] = useState('2018-04-01');
  const [startTime, setStartTime] = useState('15:00');
  const [endDate, setEndDate] = useState('2018-04-30');
  const [endTime, setEndTime] = useState('16:00');

  const currentAuth = serviceAuths.find(a => a.id === selectedServiceAuth);

  const removeService = (service: string) => {
    setSelectedServices(selectedServices.filter(s => s !== service));
  };

  const addService = (service: string) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <Card className="shadow-card h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Edit className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">Assign A Shift</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Minus className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Expand className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 overflow-y-auto max-h-[calc(100vh-280px)]">
        {/* Client Selection */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Client</Label>
          <Select value={selectedClient} onValueChange={setSelectedClient}>
            <SelectTrigger className="h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {clients.map(client => (
                <SelectItem key={client.id} value={client.id}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Service Auth */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Service Auth</Label>
          <Select value={selectedServiceAuth} onValueChange={setSelectedServiceAuth}>
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {serviceAuths.map(auth => (
                <SelectItem key={auth.id} value={auth.id} className="text-xs">
                  {auth.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {currentAuth && (
            <div className="flex gap-4 text-xs mt-1">
              <span className="text-destructive font-medium">Used Hours: {currentAuth.usedHours}:0</span>
              <span className="text-success font-medium">Remaining Hours: {currentAuth.remainingHours}:0</span>
            </div>
          )}
        </div>

        {/* Employee */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Employee</Label>
          <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
            <SelectTrigger className="h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {employees.map(emp => (
                <SelectItem key={emp.id} value={emp.id}>
                  {emp.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Range */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Date Range</Label>
          <div className="flex items-center gap-2">
            <div className="flex-1 flex gap-1">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-8 text-xs"
              />
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="h-8 text-xs w-24"
              />
            </div>
            <span className="text-xs text-muted-foreground">TO</span>
            <div className="flex-1 flex gap-1">
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-8 text-xs"
              />
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="h-8 text-xs w-24"
              />
            </div>
          </div>
        </div>

        {/* Service Method */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Service Method</Label>
          <Select value={selectedServiceMethod} onValueChange={setSelectedServiceMethod}>
            <SelectTrigger className="h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {serviceMethods.map(method => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Staff Ratio */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Staff Ratio</Label>
          <Select value={selectedStaffRatio} onValueChange={setSelectedStaffRatio}>
            <SelectTrigger className="h-8 w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {staffRatios.map(ratio => (
                <SelectItem key={ratio} value={ratio}>
                  {ratio}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Care Plan */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Care Plan</Label>
          <Select value={selectedCarePlan} onValueChange={setSelectedCarePlan}>
            <SelectTrigger className="h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {carePlans.map(plan => (
                <SelectItem key={plan} value={plan}>
                  {plan}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Services */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Services</Label>
          <div className="flex flex-wrap gap-1">
            {selectedServices.map(service => (
              <Badge key={service} variant="secondary" className="text-xs gap-1">
                {service}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeService(service)} />
              </Badge>
            ))}
          </div>
          <Select onValueChange={addService}>
            <SelectTrigger className="h-8">
              <SelectValue placeholder="Add service..." />
            </SelectTrigger>
            <SelectContent>
              {services.filter(s => !selectedServices.includes(s)).map(service => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Frequency */}
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">Frequency</Label>
          <Select value={selectedFrequency} onValueChange={setSelectedFrequency}>
            <SelectTrigger className="h-8 w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {frequencies.map(freq => (
                <SelectItem key={freq} value={freq}>
                  {freq}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full mt-4">Finish Schedule</Button>
      </CardContent>
    </Card>
  );
}
