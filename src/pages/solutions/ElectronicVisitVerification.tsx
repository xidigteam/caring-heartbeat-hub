import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Heart, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone,
  Clock,
  Shield,
  ChevronRight
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "GPS Verification",
    description: "Accurate location tracking to verify caregiver presence at client locations during visits."
  },
  {
    icon: Smartphone,
    title: "Mobile App Check-In",
    description: "Easy-to-use mobile app for caregivers to clock in/out with multiple verification methods."
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Monitor visits in real-time with instant alerts for missed or late check-ins."
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Meet all state and federal EVV mandates with our compliant verification system."
  }
];

const benefits = [
  "GPS, telephony, QR code, and NFC verification",
  "21st Century Cures Act compliant",
  "Real-time visit monitoring dashboard",
  "Automated exception reporting",
  "Seamless billing integration"
];

export default function ElectronicVisitVerification() {
  return (
    <div className="min-h-screen bg-background">
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

          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
            <Button className="gradient-primary border-0">
              Schedule Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              EVV Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Electronic Visit Verification</span> Made Simple
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay compliant with the 21st Century Cures Act while streamlining your visit verification process with our comprehensive EVV solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary border-0">
                Schedule A Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/auth">
                <Button size="lg" variant="outline">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Complete <span className="text-primary">EVV Compliance</span> Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Why CareFlow for <span className="text-primary">EVV?</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="gradient-primary border-0">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
              <MapPin className="h-24 w-24 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Achieve 100% EVV Compliance</h2>
          <p className="text-sidebar-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of agencies using CareFlow for seamless EVV compliance.
          </p>
          <Button size="lg" variant="secondary">
            Schedule A Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-8 border-t border-sidebar-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sidebar-foreground/70">
            © 2024 CareFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
