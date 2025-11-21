"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, AlertTriangle, FileText, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SafeRegistry</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/registry" className="text-foreground hover:text-primary transition-colors">
              Public Registry
            </Link>
            <Link href="/information" className="text-foreground hover:text-primary transition-colors">
              Information
            </Link>
            <Link href="/report" className="text-foreground hover:text-primary transition-colors">
              Report
            </Link>
            <Link href="/admin">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Admin Portal</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Community Safety Through Transparency
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto text-balance">
            SafeRegistry provides transparent access to public sex offender information to help protect our communities.
            Knowledge is the first step toward prevention.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/registry">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Users className="w-5 h-5 mr-2" />
                View Registry
              </Button>
            </Link>
            <Link href="/information">
              <Button size="lg" variant="outline">
                <FileText className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Mission</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-semibold text-foreground mb-3">Protection</h4>
            <p className="text-foreground/70">
              Provide families and communities with accessible information to make informed safety decisions.
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
            <AlertTriangle className="w-12 h-12 text-accent mb-4" />
            <h4 className="text-xl font-semibold text-foreground mb-3">Awareness</h4>
            <p className="text-foreground/70">
              Educate the public about risks and prevention strategies to reduce instances of abuse.
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-semibold text-foreground mb-3">Community</h4>
            <p className="text-foreground/70">
              Foster community vigilance and support for survivors while promoting accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">128</p>
              <p className="text-foreground/70 text-lg">Registered Offenders</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">45</p>
              <p className="text-foreground/70 text-lg">Recent Tips</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">99%</p>
              <p className="text-foreground/70 text-lg">Data Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary/5 border-2 border-primary rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">Have Information to Share?</h3>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            If you have information about a sex offender or suspect criminal activity, please submit an anonymous
            report. All information is reviewed confidentially.
          </p>
          <Link href="/report">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Phone className="w-5 h-5 mr-2" />
              Submit Anonymous Report
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">SafeRegistry</h4>
              <p className="text-foreground/70 text-sm">Protecting communities through transparency and awareness.</p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="/information" className="hover:text-primary">
                    Safety Information
                  </Link>
                </li>
                <li>
                  <Link href="/registry" className="hover:text-primary">
                    Offender Registry
                  </Link>
                </li>
                <li>
                  <Link href="/report" className="hover:text-primary">
                    Report Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Helplines</h5>
              <p className="text-sm text-foreground/70 mb-2">
                <strong>National Hotline:</strong>
                <br />
                1-800-656-HOPE (4673)
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2025 SafeRegistry. Dedicated to child and women protection.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
