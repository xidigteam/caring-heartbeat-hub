import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import {
  initializeSessionMonitoring,
  logSecurityEvent,
  getSessionTimeRemaining,
  formatSessionTimeRemaining
} from '@/lib/security';

/**
 * Hook for HIPAA-compliant session security
 * 
 * Features:
 * - Auto-logout after 15 minutes of inactivity
 * - Session timeout warning
 * - Audit logging
 */
export function useSessionSecurity() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');

  const handleSessionTimeout = useCallback(async () => {
    logSecurityEvent('SESSION_TIMEOUT', { userId: user?.id });
    toast.error('Session expired due to inactivity. Please log in again.');
    await signOut();
    navigate('/auth');
  }, [user?.id, signOut, navigate]);

  useEffect(() => {
    if (!user) return;

    // Initialize session monitoring
    const cleanup = initializeSessionMonitoring(handleSessionTimeout);

    // Check for timeout warning every 30 seconds
    const warningInterval = setInterval(() => {
      const remaining = getSessionTimeRemaining();
      
      // Show warning when 2 minutes or less remaining
      if (remaining <= 2 * 60 * 1000 && remaining > 0) {
        setShowTimeoutWarning(true);
        setTimeRemaining(formatSessionTimeRemaining());
      } else {
        setShowTimeoutWarning(false);
      }
    }, 30000);

    // Log successful login
    logSecurityEvent('LOGIN', { userId: user.id });

    return () => {
      cleanup();
      clearInterval(warningInterval);
    };
  }, [user, handleSessionTimeout]);

  const extendSession = useCallback(() => {
    // Trigger activity to reset timer
    document.dispatchEvent(new MouseEvent('mousemove'));
    setShowTimeoutWarning(false);
    toast.success('Session extended');
  }, []);

  return {
    showTimeoutWarning,
    timeRemaining,
    extendSession
  };
}
