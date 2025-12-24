import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Minus, Expand } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScheduleEvent {
  id: string;
  clientName: string;
  time: string;
  services: string[];
  caregiver: string;
  color: 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'red' | 'teal';
}

const colorClasses = {
  orange: 'bg-orange-500 border-orange-600',
  yellow: 'bg-yellow-500 border-yellow-600',
  green: 'bg-green-500 border-green-600',
  blue: 'bg-blue-500 border-blue-600',
  purple: 'bg-purple-500 border-purple-600',
  red: 'bg-red-500 border-red-600',
  teal: 'bg-teal-500 border-teal-600',
};

const generateScheduleData = (): Record<number, ScheduleEvent[]> => {
  const data: Record<number, ScheduleEvent[]> = {};
  const colors: ScheduleEvent['color'][] = ['orange', 'yellow', 'green', 'blue', 'purple', 'red', 'teal'];
  
  for (let day = 1; day <= 31; day++) {
    const events: ScheduleEvent[] = [];
    
    // Generate 1-3 events per day
    const eventCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < eventCount; i++) {
      const colorIndex = (day + i) % colors.length;
      events.push({
        id: `${day}-${i}`,
        clientName: 'Justin m Anderson',
        time: i === 0 ? '3:00 PM-4:00 PM' : '7:00 AM-8:30 AM',
        services: ['Dressing', 'Grooming', 'Bathing'],
        caregiver: 'Melani Anderson',
        color: colors[colorIndex],
      });
    }
    
    data[day] = events;
  }
  
  return data;
};

const scheduleData = generateScheduleData();

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function ScheduleCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2018, 3, 1)); // April 2018
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  
  const generateCalendarDays = () => {
    const days = [];
    
    // Previous month empty cells
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  return (
    <Card className="shadow-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base">Schedule</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Showing</span>
            <Select value={view} onValueChange={(v) => setView(v as typeof view)}>
              <SelectTrigger className="h-7 w-24 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Minus className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Expand className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <h3 className="font-semibold">{monthName}</h3>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-auto p-2">
        {/* Week day headers */}
        <div className="grid grid-cols-7 gap-px bg-border rounded-t-lg overflow-hidden">
          {weekDays.map(day => (
            <div key={day} className="bg-muted px-2 py-1.5 text-center text-xs font-medium">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-px bg-border">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={cn(
                "min-h-[100px] bg-card p-1",
                !day && "bg-muted/50"
              )}
            >
              {day && (
                <>
                  <span className="text-xs font-medium text-muted-foreground">{day}</span>
                  <div className="space-y-1 mt-1">
                    {scheduleData[day]?.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={cn(
                          "rounded px-1 py-0.5 text-white text-[10px] leading-tight border-l-2 cursor-pointer hover:opacity-90 transition-opacity",
                          colorClasses[event.color]
                        )}
                      >
                        <div className="font-semibold truncate">{event.clientName}</div>
                        <div className="truncate opacity-90">{event.time}</div>
                        <div className="truncate opacity-80">{event.services.join(', ')}</div>
                        <div className="truncate opacity-70 italic">{event.caregiver}</div>
                      </div>
                    ))}
                    {scheduleData[day]?.length > 2 && (
                      <div className="text-[10px] text-muted-foreground text-center">
                        +{scheduleData[day].length - 2} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
