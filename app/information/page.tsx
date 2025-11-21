"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Book, AlertCircle, Users } from "lucide-react"

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SafeRegistry</h1>
          </Link>
          <Link href="/">
            <Button variant="outline">← Back Home</Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-foreground mb-6">Safety Information & Resources</h2>

        {/* Section 1 */}
        <section className="mb-12">
          <div className="flex gap-4 mb-4">
            <AlertCircle className="w-8 h-8 text-accent flex-shrink-0" />
            <h3 className="text-2xl font-bold text-foreground">Signs to Recognize Predatory Behavior</h3>
          </div>
          <div className="bg-muted p-6 rounded-lg space-y-3">
            <p className="text-foreground/70">
              <strong>Grooming Behaviors:</strong> Seeking alone time, gift-giving, special attention, and boundary
              testing
            </p>
            <p className="text-foreground/70">
              <strong>Isolation Tactics:</strong> Trying to separate children from parents or friends
            </p>
            <p className="text-foreground/70">
              <strong>Inappropriate Conversations:</strong> Discussing sexual topics or requesting explicit images
            </p>
            <p className="text-foreground/70">
              <strong>Privacy Violations:</strong> Asking children to keep secrets or delete conversations
            </p>
            <p className="text-foreground/70">
              <strong>Increasing Physical Contact:</strong> Progressively inappropriate touching
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <div className="flex gap-4 mb-4">
            <Book className="w-8 h-8 text-primary flex-shrink-0" />
            <h3 className="text-2xl font-bold text-foreground">Prevention Tips for Parents & Guardians</h3>
          </div>
          <div className="bg-muted p-6 rounded-lg space-y-3">
            <div>
              <p className="font-semibold text-foreground mb-1">🛡️ Open Communication</p>
              <p className="text-foreground/70">
                Maintain open dialogue with your children about uncomfortable situations and trusted adults
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">📱 Monitor Online Activity</p>
              <p className="text-foreground/70">
                Know who your children interact with online and review their social media regularly
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">🤝 Teach Body Autonomy</p>
              <p className="text-foreground/70">
                Teach children proper names for body parts and that nobody should touch them inappropriately
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">🔒 Establish Rules</p>
              <p className="text-foreground/70">
                Set clear boundaries about meeting strangers online and never going alone with unfamiliar adults
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">👥 Know Their Circle</p>
              <p className="text-foreground/70">
                Know your children's friends and their parents. Be present in their lives
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <div className="flex gap-4 mb-4">
            <Users className="w-8 h-8 text-primary flex-shrink-0" />
            <h3 className="text-2xl font-bold text-foreground">Support for Survivors</h3>
          </div>
          <div className="bg-muted p-6 rounded-lg space-y-4">
            <p className="text-foreground/70">
              If you or someone you know has been a victim of sexual abuse, know that help is available. Survivors
              should know that:
            </p>
            <ul className="space-y-2">
              <li className="text-foreground/70">✓ The abuse was NOT their fault</li>
              <li className="text-foreground/70">✓ They deserve support and healing</li>
              <li className="text-foreground/70">✓ Professional counseling can help</li>
              <li className="text-foreground/70">✓ Reporting can help protect others</li>
            </ul>
            <div className="bg-white border-2 border-primary p-4 mt-4 rounded-lg">
              <p className="font-semibold text-primary mb-2">📞 National Sexual Assault Hotline</p>
              <p className="text-foreground">1-800-656-HOPE (4673) • Available 24/7 • Confidential & Free</p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-primary/5 border-2 border-primary rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Additional Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Organizations</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• RAINN (Rape, Abuse & Incest National Network)</li>
                <li>• National Center for Missing & Exploited Children</li>
                <li>• Childhelp National Child Abuse Hotline</li>
                <li>• Internet Crimes Against Children Task Force</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Reporting</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Local Law Enforcement</li>
                <li>• FBI Tip Line: tips.fbi.gov</li>
                <li>• CyberTipline: CyberTipline.org</li>
                <li>• National Hotline: 1-800-656-HOPE</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
