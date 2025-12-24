import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Phone, ChevronRight, Menu } from 'lucide-react';

interface SolutionHeaderProps {
  showFullNav?: boolean;
}

export default function SolutionHeader({ showFullNav = false }: SolutionHeaderProps) {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-sidebar text-sidebar-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Tel: 1-800-CAREFLOW</span>
          </div>
          <Link to="/auth" className="hover:text-sidebar-primary transition-colors flex items-center gap-1">
            <span>Login</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary text-primary-foreground">
              <Heart className="h-6 w-6" />
            </div>
            <span className="font-bold text-2xl text-foreground">
              Care<span className="text-primary">Flow</span>
            </span>
          </Link>

          {showFullNav ? (
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Solutions
                  <ChevronRight className="h-4 w-4 rotate-90 group-hover:rotate-[270deg] transition-transform" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-background border border-border rounded-lg shadow-elevated p-4 min-w-[600px] grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Link to="/solutions/housing-stabilization" className="block text-sm hover:text-primary transition-colors">Housing Stabilization Services</Link>
                      <Link to="/solutions/interpreting-translation" className="block text-sm hover:text-primary transition-colors">Interpreting and Translation</Link>
                      <Link to="/solutions/evv" className="block text-sm hover:text-primary transition-colors">Electronic Visit Verification</Link>
                      <Link to="/solutions/automated-billing" className="block text-sm hover:text-primary transition-colors">Automated Billing</Link>
                    </div>
                    <div className="space-y-2">
                      <Link to="/solutions/mental-health-armhs" className="block text-sm hover:text-primary transition-colors">Mental Health Services (ARMHS)</Link>
                      <Link to="/solutions/eidbi" className="block text-sm hover:text-primary transition-colors">EIDBI</Link>
                      <Link to="/solutions/adult-day-care" className="block text-sm hover:text-primary transition-colors">Adult Day Care</Link>
                      <Link to="/solutions/private-duty-nursing" className="block text-sm hover:text-primary transition-colors">Private Duty Nursing</Link>
                    </div>
                    <div className="space-y-2">
                      <Link to="/solutions/group-home" className="block text-sm hover:text-primary transition-colors">Group Home Software</Link>
                      <Link to="/solutions/nemt" className="block text-sm hover:text-primary transition-colors">Non Emergency Medical Transportation</Link>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </nav>
          ) : null}

          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
            <Link to="/schedule-demo">
              <Button className="gradient-primary border-0">
                Schedule Demo
              </Button>
            </Link>
            {showFullNav && (
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
