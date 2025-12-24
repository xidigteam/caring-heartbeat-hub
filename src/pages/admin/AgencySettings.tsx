import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Building2, Upload, MapPin, Phone, Mail } from 'lucide-react';

const serviceTypes = [
  { id: 'home_health', label: 'Home Health' },
  { id: 'adult_day_care', label: 'Adult Day Care' },
  { id: 'private_duty', label: 'Private Duty' },
  { id: 'mental_health', label: 'Mental Health' },
];

export default function AgencySettings() {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              Only administrators can access agency settings.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Agency Settings</h1>
        <p className="text-muted-foreground">Configure your organization details</p>
      </div>

      <div className="grid gap-6">
        {/* Agency Profile */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <CardTitle>Agency Profile</CardTitle>
                <CardDescription>Basic organization information</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <Button variant="outline" size="sm">Upload Logo</Button>
                <p className="text-xs text-muted-foreground mt-2">PNG, JPG up to 2MB</p>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label>Agency Name</Label>
                <Input defaultValue="CareFlow Home Health" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input defaultValue="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input defaultValue="info@careflow.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <CardTitle>Address</CardTitle>
                <CardDescription>Agency location details</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label>Street Address</Label>
                <Input placeholder="123 Main Street" />
              </div>
              <div className="space-y-2">
                <Label>City</Label>
                <Input placeholder="City" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input placeholder="State" />
                </div>
                <div className="space-y-2">
                  <Label>ZIP Code</Label>
                  <Input placeholder="12345" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Types */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Service Types</CardTitle>
            <CardDescription>Select the services your agency provides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceTypes.map((service) => (
                <div key={service.id} className="flex items-center space-x-3">
                  <Checkbox id={service.id} defaultChecked={service.id === 'home_health'} />
                  <Label htmlFor={service.id} className="font-normal cursor-pointer">
                    {service.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
