import { UnitsTracker } from '@/components/scheduling/UnitsTracker';
import { ShiftAssignmentForm } from '@/components/scheduling/ShiftAssignmentForm';
import { ScheduleCalendar } from '@/components/scheduling/ScheduleCalendar';

export default function Schedule() {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        <span className="text-primary font-medium">SCHEDULING</span>
        <span className="mx-2">›</span>
        <span>SCHEDULING</span>
      </div>
      
      {/* Units Tracker */}
      <UnitsTracker />
      
      {/* Main Content - Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-220px)]">
        {/* Shift Assignment Form */}
        <div className="lg:col-span-1">
          <ShiftAssignmentForm />
        </div>
        
        {/* Schedule Calendar */}
        <div className="lg:col-span-2">
          <ScheduleCalendar />
        </div>
      </div>
    </div>
  );
}
