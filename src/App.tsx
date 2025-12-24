import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import HousingStabilization from "./pages/solutions/HousingStabilization";
import InterpretingTranslation from "./pages/solutions/InterpretingTranslation";
import ElectronicVisitVerification from "./pages/solutions/ElectronicVisitVerification";
import AutomatedBilling from "./pages/solutions/AutomatedBilling";
import MentalHealthARMHS from "./pages/solutions/MentalHealthARMHS";
import EIDBI from "./pages/solutions/EIDBI";
import AdultDayCare from "./pages/solutions/AdultDayCare";
import PrivateDutyNursing from "./pages/solutions/PrivateDutyNursing";
import GroupHome from "./pages/solutions/GroupHome";
import NEMT from "./pages/solutions/NEMT";
import ScheduleDemo from "./pages/ScheduleDemo";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import HIPAACompliance from "./pages/legal/HIPAACompliance";
import Security from "./pages/legal/Security";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/dashboard/Schedule";
import EVV from "./pages/dashboard/EVV";
import Patients from "./pages/dashboard/Patients";
import Caregivers from "./pages/dashboard/Caregivers";
import Documentation from "./pages/dashboard/Documentation";
import Billing from "./pages/dashboard/Billing";
import Messages from "./pages/dashboard/Messages";
import Reports from "./pages/dashboard/Reports";
import Settings from "./pages/dashboard/Settings";
import UserManagement from "./pages/admin/UserManagement";
import AgencySettings from "./pages/admin/AgencySettings";
import ClientDetail from "./pages/dashboard/ClientDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/solutions/housing-stabilization" element={<HousingStabilization />} />
            <Route path="/solutions/interpreting-translation" element={<InterpretingTranslation />} />
            <Route path="/solutions/evv" element={<ElectronicVisitVerification />} />
            <Route path="/solutions/automated-billing" element={<AutomatedBilling />} />
            <Route path="/solutions/mental-health-armhs" element={<MentalHealthARMHS />} />
            <Route path="/solutions/eidbi" element={<EIDBI />} />
            <Route path="/solutions/adult-day-care" element={<AdultDayCare />} />
            <Route path="/solutions/private-duty-nursing" element={<PrivateDutyNursing />} />
            <Route path="/solutions/group-home" element={<GroupHome />} />
            <Route path="/solutions/nemt" element={<NEMT />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/hipaa-compliance" element={<HIPAACompliance />} />
            <Route path="/security" element={<Security />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="evv" element={<EVV />} />
              <Route path="patients" element={<Patients />} />
              <Route path="patients/:id" element={<ClientDetail />} />
              <Route path="caregivers" element={<Caregivers />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="billing" element={<Billing />} />
              <Route path="messages" element={<Messages />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route path="admin/users" element={<UserManagement />} />
              <Route path="admin/agency" element={<AgencySettings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
