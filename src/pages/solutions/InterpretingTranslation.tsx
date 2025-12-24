import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Languages, 
  Heart, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Video,
  FileText,
  ChevronRight
} from 'lucide-react';

const features = [
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Schedule and manage interpreters for over 200 languages with real-time availability tracking."
  },
  {
    icon: Video,
    title: "Video Remote Interpreting",
    description: "Connect clients with interpreters instantly through our integrated video platform."
  },
  {
    icon: FileText,
    title: "Document Translation",
    description: "Track and manage document translation requests with quality assurance workflows."
  },
  {
    icon: Users,
    title: "Interpreter Management",
    description: "Maintain interpreter profiles, certifications, and specializations in one place."
  }
];

const benefits = [
  "HIPAA-compliant video interpreting",
  "Automated scheduling and reminders",
  "Certification tracking and compliance",
  "Integrated billing for language services",
  "Real-time interpreter availability"
];

export default function InterpretingTranslation() {
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
              Language Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">Interpreting & Translation</span> Services Management
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect your clients with qualified interpreters and manage translation services seamlessly with our comprehensive language services platform.
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
            Complete <span className="text-primary">Language Services</span> Solution
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
                Break Down <span className="text-primary">Language Barriers</span>
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
              <Languages className="h-24 w-24 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect Clients with Language Services</h2>
          <p className="text-sidebar-foreground/70 mb-8 max-w-2xl mx-auto">
            Provide equitable care with professional interpreting and translation services.
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
