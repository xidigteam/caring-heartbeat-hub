/**
 * HIPAA Security Utilities
 * 
 * Implements:
 * - Auto-logout after inactivity (HIPAA requires session timeout)
 * - Session monitoring
 * - Security event logging
 */

// Session timeout: 15 minutes of inactivity (HIPAA requirement)
const SESSION_TIMEOUT_MS = 15 * 60 * 1000;

let inactivityTimer: ReturnType<typeof setTimeout> | null = null;
let lastActivity: number = Date.now();

type LogoutCallback = () => void;

/**
 * Initialize session monitoring for HIPAA compliance
 * Automatically logs out user after inactivity period
 */
export function initializeSessionMonitoring(onLogout: LogoutCallback): () => void {
  const resetTimer = () => {
    lastActivity = Date.now();
    
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    
    inactivityTimer = setTimeout(() => {
      console.warn('[HIPAA Security] Session timeout due to inactivity');
      onLogout();
    }, SESSION_TIMEOUT_MS);
  };

  // Activity events to monitor
  const activityEvents = [
    'mousedown',
    'mousemove',
    'keydown',
    'scroll',
    'touchstart',
    'click'
  ];

  // Throttle activity updates to prevent performance issues
  let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
  const handleActivity = () => {
    if (throttleTimeout) return;
    
    throttleTimeout = setTimeout(() => {
      throttleTimeout = null;
      resetTimer();
    }, 1000);
  };

  // Add event listeners
  activityEvents.forEach(event => {
    document.addEventListener(event, handleActivity, { passive: true });
  });

  // Handle visibility change (tab switching)
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      // Check if session should have expired while tab was hidden
      const inactiveTime = Date.now() - lastActivity;
      if (inactiveTime >= SESSION_TIMEOUT_MS) {
        console.warn('[HIPAA Security] Session expired while tab was inactive');
        onLogout();
      } else {
        resetTimer();
      }
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Handle page unload
  const handleBeforeUnload = () => {
    // Log session end
    console.info('[HIPAA Security] Session ended - page unload');
  };
  window.addEventListener('beforeunload', handleBeforeUnload);

  // Start initial timer
  resetTimer();

  // Return cleanup function
  return () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    if (throttleTimeout) {
      clearTimeout(throttleTimeout);
    }
    activityEvents.forEach(event => {
      document.removeEventListener(event, handleActivity);
    });
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}

/**
 * Log security events for HIPAA audit trail
 */
export function logSecurityEvent(
  eventType: 'LOGIN' | 'LOGOUT' | 'SESSION_TIMEOUT' | 'PHI_ACCESS' | 'FAILED_LOGIN' | 'PERMISSION_DENIED',
  details?: Record<string, unknown>
): void {
  const event = {
    timestamp: new Date().toISOString(),
    type: eventType,
    details,
    userAgent: navigator.userAgent,
  };
  
  // In production, this would send to the audit log table via edge function
  console.info('[HIPAA Audit]', event);
}

/**
 * Sanitize PHI data before logging (remove sensitive fields)
 */
export function sanitizeForLogging<T extends Record<string, unknown>>(
  data: T,
  sensitiveFields: string[] = ['ssn', 'password', 'creditCard', 'pin']
): Partial<T> {
  const sanitized = { ...data };
  
  sensitiveFields.forEach(field => {
    if (field in sanitized) {
      (sanitized as Record<string, unknown>)[field] = '[REDACTED]';
    }
  });
  
  return sanitized;
}

/**
 * Check if current session is valid
 */
export function isSessionValid(): boolean {
  const inactiveTime = Date.now() - lastActivity;
  return inactiveTime < SESSION_TIMEOUT_MS;
}

/**
 * Get remaining session time in milliseconds
 */
export function getSessionTimeRemaining(): number {
  const inactiveTime = Date.now() - lastActivity;
  return Math.max(0, SESSION_TIMEOUT_MS - inactiveTime);
}

/**
 * Format remaining session time for display
 */
export function formatSessionTimeRemaining(): string {
  const remaining = getSessionTimeRemaining();
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
