import { AlertTriangle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface SessionTimeoutWarningProps {
  isOpen: boolean;
  timeRemaining: string;
  onExtend: () => void;
  onLogout: () => void;
}

export function SessionTimeoutWarning({
  isOpen,
  timeRemaining,
  onExtend,
  onLogout
}: SessionTimeoutWarningProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/10">
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <AlertDialogTitle>Session Expiring Soon</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="pt-2">
            For your security, your session will expire in{' '}
            <span className="font-semibold text-foreground">{timeRemaining}</span>{' '}
            due to inactivity.
            <br />
            <br />
            This is required for HIPAA compliance to protect patient information.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onLogout}>
            Log Out Now
          </AlertDialogCancel>
          <AlertDialogAction onClick={onExtend}>
            Stay Logged In
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
