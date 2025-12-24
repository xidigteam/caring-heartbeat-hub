import { Link } from 'react-router-dom';
import { Heart, Shield, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl">CareFlow</span>
            </Link>
            <p className="text-sidebar-foreground/70">
              The complete home healthcare management platform trusted by thousands of agencies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sidebar-foreground/70">
              <li><Link to="/#features" className="hover:text-sidebar-foreground transition-colors">Features</Link></li>
              <li><Link to="/schedule-demo" className="hover:text-sidebar-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/solutions/evv" className="hover:text-sidebar-foreground transition-colors">EVV Solution</Link></li>
              <li><Link to="/solutions/automated-billing" className="hover:text-sidebar-foreground transition-colors">Billing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sidebar-foreground/70">
              <li><Link to="/schedule-demo" className="hover:text-sidebar-foreground transition-colors">About Us</Link></li>
              <li><Link to="/schedule-demo" className="hover:text-sidebar-foreground transition-colors">Careers</Link></li>
              <li><Link to="/schedule-demo" className="hover:text-sidebar-foreground transition-colors">Contact</Link></li>
              <li><Link to="/schedule-demo" className="hover:text-sidebar-foreground transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sidebar-foreground/70">
              <li><Link to="/privacy-policy" className="hover:text-sidebar-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-sidebar-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/hipaa-compliance" className="hover:text-sidebar-foreground transition-colors">HIPAA Compliance</Link></li>
              <li><Link to="/security" className="hover:text-sidebar-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/60 text-sm">
            © 2026 CareFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-sidebar-border text-sidebar-foreground/70">
              <Shield className="h-3 w-3 mr-1" />
              HIPAA Compliant
            </Badge>
            <Badge variant="outline" className="border-sidebar-border text-sidebar-foreground/70">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              SOC 2 Certified
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
