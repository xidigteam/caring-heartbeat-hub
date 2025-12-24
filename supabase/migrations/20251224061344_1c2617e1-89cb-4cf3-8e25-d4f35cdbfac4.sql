-- HIPAA Compliance Security Enhancement Migration

-- 1. Create audit log table for tracking all PHI access
CREATE TABLE public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    table_name TEXT NOT NULL,
    record_id UUID,
    old_data JSONB,
    new_data JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on audit logs - only admins can view
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view audit logs"
ON public.audit_logs
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- No one can modify audit logs (immutable)
CREATE POLICY "No one can insert audit logs directly"
ON public.audit_logs
FOR INSERT
WITH CHECK (false);

CREATE POLICY "No one can update audit logs"
ON public.audit_logs
FOR UPDATE
USING (false);

CREATE POLICY "No one can delete audit logs"
ON public.audit_logs
FOR DELETE
USING (false);

-- 2. Create security definer function for audit logging (bypasses RLS)
CREATE OR REPLACE FUNCTION public.log_audit_event(
    _action TEXT,
    _table_name TEXT,
    _record_id UUID DEFAULT NULL,
    _old_data JSONB DEFAULT NULL,
    _new_data JSONB DEFAULT NULL
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    _log_id UUID;
BEGIN
    INSERT INTO public.audit_logs (user_id, action, table_name, record_id, old_data, new_data)
    VALUES (auth.uid(), _action, _table_name, _record_id, _old_data, _new_data)
    RETURNING id INTO _log_id;
    
    RETURN _log_id;
END;
$$;

-- 3. Create session management table for tracking active sessions
CREATE TABLE public.user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    session_token TEXT NOT NULL,
    device_info TEXT,
    ip_address INET,
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own sessions"
ON public.user_sessions
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Users can manage their own sessions"
ON public.user_sessions
FOR ALL
USING (user_id = auth.uid());

-- 4. Create function to auto-expire sessions (HIPAA requires session timeout)
CREATE OR REPLACE FUNCTION public.cleanup_expired_sessions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    UPDATE public.user_sessions
    SET is_active = false
    WHERE expires_at < now() AND is_active = true;
END;
$$;

-- 5. Add audit triggers to profiles table
CREATE OR REPLACE FUNCTION public.audit_profile_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    IF TG_OP = 'UPDATE' THEN
        PERFORM public.log_audit_event(
            'UPDATE',
            'profiles',
            NEW.id,
            to_jsonb(OLD),
            to_jsonb(NEW)
        );
    ELSIF TG_OP = 'DELETE' THEN
        PERFORM public.log_audit_event(
            'DELETE',
            'profiles',
            OLD.id,
            to_jsonb(OLD),
            NULL
        );
    ELSIF TG_OP = 'INSERT' THEN
        PERFORM public.log_audit_event(
            'INSERT',
            'profiles',
            NEW.id,
            NULL,
            to_jsonb(NEW)
        );
    END IF;
    RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER audit_profiles_trigger
AFTER INSERT OR UPDATE OR DELETE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.audit_profile_changes();

-- 6. Create failed login attempts table (HIPAA account lockout requirement)
CREATE TABLE public.failed_login_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL,
    ip_address INET,
    attempt_time TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    user_agent TEXT
);

-- This table has no RLS - managed by security definer functions only
ALTER TABLE public.failed_login_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to failed login attempts"
ON public.failed_login_attempts
FOR ALL
USING (false);

-- 7. Create function to check if account should be locked
CREATE OR REPLACE FUNCTION public.check_account_lockout(_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    attempt_count INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO attempt_count
    FROM public.failed_login_attempts
    WHERE email = _email
    AND attempt_time > (now() - INTERVAL '15 minutes');
    
    -- Lock account after 5 failed attempts in 15 minutes
    RETURN attempt_count >= 5;
END;
$$;

-- 8. Create data access logging function for PHI
CREATE OR REPLACE FUNCTION public.log_phi_access(_table_name TEXT, _record_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    PERFORM public.log_audit_event('PHI_ACCESS', _table_name, _record_id, NULL, NULL);
END;
$$;

-- 9. Add index for audit log queries
CREATE INDEX idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON public.audit_logs(created_at);
CREATE INDEX idx_audit_logs_table_name ON public.audit_logs(table_name);
CREATE INDEX idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX idx_user_sessions_expires_at ON public.user_sessions(expires_at);
CREATE INDEX idx_failed_login_attempts_email ON public.failed_login_attempts(email);
CREATE INDEX idx_failed_login_attempts_time ON public.failed_login_attempts(attempt_time);