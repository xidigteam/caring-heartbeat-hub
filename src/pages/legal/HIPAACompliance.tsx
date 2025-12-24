import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Phone, ChevronRight, Shield, Lock, FileCheck, Users, Server, Eye } from 'lucide-react';

const complianceFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3."
  },
  {
    icon: Users,
    title: "Access Controls",
    description: "Role-based access controls ensure users only access information necessary for their job functions."
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Comprehensive audit trails track all access to protected health information."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "HIPAA-compliant cloud infrastructure with regular security assessments and penetration testing."
  },
  {
    icon: Eye,
    title: "PHI Monitoring",
    description: "Real-time monitoring and alerting for any unusual access patterns to protected health information."
  },
  {
    icon: Shield,
    title: "Business Associate Agreements",
    description: "We execute BAAs with all covered entities and maintain agreements with our subcontractors."
  }
];

export default function HIPAACompliance() {
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

          <Link to="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="h-20 w-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HIPAA <span className="text-primary">Compliance</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CareFlow is designed to help healthcare organizations maintain HIPAA compliance while delivering efficient care management solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Compliance Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our HIPAA Security Measures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, i) => (
              <Card key={i} className="shadow-card">
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
        </section>

        {/* HIPAA Rules Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Privacy Rule Compliance</h2>
            <p className="text-muted-foreground">
              CareFlow implements administrative, physical, and technical safeguards to protect the privacy of protected health information (PHI). Our platform ensures that PHI is only accessible to authorized personnel and is used only for permitted purposes including treatment, payment, and healthcare operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Security Rule Compliance</h2>
            <p className="text-muted-foreground">
              We maintain a comprehensive security program that addresses all requirements of the HIPAA Security Rule, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
              <li>Administrative safeguards including security management, workforce training, and access management</li>
              <li>Physical safeguards for our data centers and facilities</li>
              <li>Technical safeguards including access controls, audit controls, integrity controls, and transmission security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Breach Notification</h2>
            <p className="text-muted-foreground">
              In the unlikely event of a data breach, CareFlow has established procedures to notify affected covered entities promptly, allowing them to meet their breach notification obligations under HIPAA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Business Associate Agreement</h2>
            <p className="text-muted-foreground">
              CareFlow executes Business Associate Agreements (BAAs) with all covered entities before processing any PHI. Our BAA outlines our responsibilities for safeguarding PHI and our commitment to HIPAA compliance.
            </p>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-4">Request a BAA</h3>
            <p className="text-muted-foreground mb-4">
              To request a Business Associate Agreement or for questions about our HIPAA compliance program, please contact our compliance team.
            </p>
            <p className="text-muted-foreground">
              Email: compliance@careflow.com<br />
              Phone: 1-800-CAREFLOW
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-8 border-t border-sidebar-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sidebar-foreground/70">
            © 2026 CareFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
