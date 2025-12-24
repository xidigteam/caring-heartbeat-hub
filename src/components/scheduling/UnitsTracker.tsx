import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Calendar, Users, RefreshCw } from 'lucide-react';

interface UnitStat {
  label: string;
  value: string;
  subValue?: string;
}

const stats: UnitStat[] = [
  { label: 'Units:', value: '1200.00', subValue: '(300.00 hrs)' },
  { label: 'Used:', value: '1.10', subValue: '(4.39 hrs)' },
  { label: 'Remaining:', value: '1182.44', subValue: '(295.61 hrs)' },
  { label: 'Per Day', value: '0.82' },
  { label: 'Per Week', value: '5.74' },
  { label: 'Per Month', value: '24.60' },
];

export function UnitsTracker() {
  return (
    <Card className="shadow-card">
      <CardContent className="py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Edit className="h-4 w-4 text-primary" />
            <span className="font-semibold">Scheduler</span>
          </div>
          
          <div className="flex items-center gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="font-semibold text-sm">
                  {stat.value}
                  {stat.subValue && (
                    <span className="text-muted-foreground font-normal">{stat.subValue}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              Scheduler Calendar
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <Users className="h-3 w-3 mr-1" />
              Employee Availability
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <RefreshCw className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
