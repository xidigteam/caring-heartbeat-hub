export type AppRole = 'admin' | 'supervisor' | 'caregiver' | 'patient' | 'family';
export type UserStatus = 'pending' | 'active' | 'suspended' | 'inactive';
export type ServiceType = 'home_health' | 'adult_day_care' | 'private_duty' | 'mental_health';

export interface Agency {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  logo_url: string | null;
  service_types: ServiceType[];
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  agency_id: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  avatar_url: string | null;
  status: UserStatus;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

export interface UserWithProfile extends Profile {
  roles: AppRole[];
}
