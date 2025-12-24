import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Phone, ChevronRight, Shield, Lock, Server, Eye, Key, RefreshCw, FileCheck, AlertTriangle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted with AES-256 at rest and TLS 1.3 in transit."
  },
  {
    icon: Key,
    title: "Multi-Factor Authentication",
    description: "Enforce MFA for all user accounts to prevent unauthorized access."
  },
  {
    icon: Server,
    title: "SOC 2 Type II Certified",
    description: "Annual third-party audits verify our security controls."
  },
  {
    icon: Eye,
    title: "24/7 Security Monitoring",
    description: "Continuous monitoring for threats and anomalous activity."
  },
  {
    icon: RefreshCw,
    title: "Regular Backups",
    description: "Automated daily backups with point-in-time recovery."
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Documented incident response procedures with rapid notification."
  }
];

export default function Security() {
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
            Enterprise-Grade <span className="text-primary">Security</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your data security is our top priority. CareFlow implements comprehensive security measures to protect your sensitive healthcare information.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Security Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
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

        {/* Detailed Security Info */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Infrastructure Security</h2>
            <p className="text-muted-foreground">
              CareFlow is hosted on enterprise-grade cloud infrastructure with multiple layers of security including firewalls, intrusion detection systems, and DDoS protection. Our infrastructure is designed for high availability with redundant systems across multiple availability zones.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Application Security</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Secure software development lifecycle (SDLC) with security reviews at each stage</li>
              <li>Regular vulnerability scanning and penetration testing</li>
              <li>Dependency scanning for third-party libraries</li>
              <li>Web application firewall (WAF) protection</li>
              <li>Content Security Policy (CSP) headers to prevent XSS attacks</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Access Control</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Role-based access control (RBAC) with principle of least privilege</li>
              <li>Multi-factor authentication (MFA) support</li>
              <li>Session timeout and automatic logout for inactive sessions</li>
              <li>IP allowlisting for enhanced access control</li>
              <li>Comprehensive audit logging of all user actions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>AES-256 encryption for all data at rest</li>
              <li>TLS 1.3 encryption for all data in transit</li>
              <li>Secure key management with regular key rotation</li>
              <li>Database encryption and field-level encryption for sensitive data</li>
              <li>Secure data disposal procedures</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Compliance & Certifications</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>HIPAA compliant with Business Associate Agreements</li>
              <li>SOC 2 Type II certified</li>
              <li>Regular third-party security audits</li>
              <li>Annual penetration testing by certified professionals</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-4">Report a Security Issue</h3>
            <p className="text-muted-foreground mb-4">
              If you discover a security vulnerability, please report it responsibly to our security team. We take all reports seriously and will investigate promptly.
            </p>
            <p className="text-muted-foreground">
              Email: security@careflow.com<br />
              We aim to respond to all reports within 24 hours.
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
