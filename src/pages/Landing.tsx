import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  Phone,
  Menu,
  ChevronRight,
  Star,
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Clock,
  Shield,
  Calendar,
  ClipboardCheck,
  MessageSquare,
  BarChart3,
  Play,
  ArrowRight,
} from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "America's Fastest",
    label: "Growing Private Companies",
    sublabel: "Productivity",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "28,000+",
    label: "Caregiver Users",
    sublabel: "CRM",
    color: "text-accent",
  },
  {
    icon: DollarSign,
    value: "$460M+",
    label: "Claims Processed",
    sublabel: "Payment",
    color: "text-success",
  },
];

const features = [
  {
    icon: ClipboardCheck,
    title: "Electronic Visit Verification",
    description: "GPS, telephony, QR code, and NFC verification options to ensure compliance with state and federal EVV mandates.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Drag-and-drop scheduling with conflict detection, recurring visits, and real-time caregiver availability tracking.",
  },
  {
    icon: Users,
    title: "Patient & Caregiver Management",
    description: "Comprehensive profiles with care plans, qualifications, certifications, and skill-based matching.",
  },
  {
    icon: DollarSign,
    title: "Billing & Invoicing",
    description: "Automated invoice generation from verified visits, claims tracking, and multi-payer support.",
  },
  {
    icon: MessageSquare,
    title: "Secure Messaging",
    description: "HIPAA-compliant team communication with instant notifications and care coordination tools.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Real-time dashboards with KPIs, compliance reports, and actionable business insights.",
  },
];

const testimonials = [
  {
    quote: "CareFlow transformed how we manage our home health agency. EVV compliance went from a headache to a breeze.",
    author: "Sarah Mitchell",
    role: "Administrator, Sunrise Home Care",
    rating: 5,
  },
  {
    quote: "The scheduling feature alone saved us 10 hours per week. Our caregivers love the mobile app.",
    author: "Michael Chen",
    role: "Director, Pacific Care Services",
    rating: 5,
  },
  {
    quote: "Best investment we've made. Billing accuracy improved by 40% and our revenue cycle is much faster now.",
    author: "Jennifer Adams",
    role: "Owner, Comfort Care Solutions",
    rating: 5,
  },
];

export default function Landing() {
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

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
            </Link>
            <Button className="gradient-primary border-0">
              Schedule Demo
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🏆 Rated #1 Home Care Software 2024
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The <span className="text-primary relative">
                  #1 Software
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--warning))" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                <span className="text-accent">Home Care Agencies</span>
                <br />
                Trust to Run Efficiently
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Unlock your productivity potential with our intuitive and powerful platform. 
                Manage scheduling, EVV compliance, billing, and care coordination—all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary border-0 text-lg px-8 py-6">
                  Schedule A Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>

              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 text-success" />
                We promise to never sell your email address or phone number.
              </p>
            </div>

            <div className="relative animate-slide-in hidden lg:block">
              {/* Hero Image Placeholder with Rating Badge */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border shadow-elevated overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="h-24 w-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <Heart className="h-12 w-12 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Compassionate Care, Powered by Technology
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-elevated p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-sm font-medium">JM</div>
                      <div className="h-10 w-10 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-sm font-medium">SK</div>
                      <div className="h-10 w-10 rounded-full bg-success/20 border-2 border-background flex items-center justify-center text-sm font-medium">AR</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                        ))}
                      </div>
                      <p className="text-2xl font-bold">4.9</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -top-6 -left-6 bg-card rounded-xl shadow-elevated p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-success/10">
                      <TrendingUp className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">EVV Compliance</p>
                      <p className="text-xl font-bold">98.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Grow Faster with CareFlow – <span className="text-primary">Trusted by Growing Home Care Companies</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <Card key={i} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-muted">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="font-medium">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Run Your Agency</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A complete suite of tools designed specifically for home healthcare agencies of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 group">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section id="testimonials" className="py-20 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-sidebar-accent text-sidebar-accent-foreground mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="text-sidebar-primary">Home Care Professionals</span>
            </h2>
            <p className="text-sidebar-foreground/70 text-lg">
              See what agency owners and administrators are saying about CareFlow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-sidebar-accent border-sidebar-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-sidebar-foreground italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-sidebar-foreground">{testimonial.author}</p>
                    <p className="text-sm text-sidebar-foreground/70">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden gradient-primary p-12 md:p-16 text-center">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to Transform Your Home Care Agency?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Join thousands of agencies who trust CareFlow to streamline operations and improve care delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Schedule A Demo
                </Button>
                <Link to="/auth">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sidebar-foreground/70">
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sidebar-foreground/70">
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">HIPAA Compliance</a></li>
                <li><a href="#" className="hover:text-sidebar-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sidebar-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sidebar-foreground/60 text-sm">
              © 2024 CareFlow. All rights reserved.
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
    </div>
  );
}
