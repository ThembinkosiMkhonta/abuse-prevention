"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft, AlertTriangle } from "lucide-react"
import { offendersData } from "@/lib/data"
import { useParams } from "next/navigation"

export default function OffenderDetailPage() {
  const params = useParams()
  const offender = offendersData.find((o) => o.id === params.id)

  if (!offender) {
    return (
      <main className="min-h-screen bg-white">
        <nav className="border-b border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">SafeRegistry</h1>
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-foreground/70">Offender not found.</p>
          <Link href="/registry">
            <Button className="mt-4">Back to Registry</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SafeRegistry</h1>
          </Link>
          <Link href="/registry">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Registry
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Warning Box */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-foreground mb-2">Safety Alert</h3>
              <p className="text-foreground/70 text-sm">
                This person is registered as a sex offender. If you suspect illegal activity, contact local law
                enforcement immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Offender Profile */}
        <div className="bg-white border-2 border-border rounded-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">{offender.name}</h2>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  offender.riskLevel === "high-risk" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}
              >
                {offender.riskLevel === "high-risk" ? "⚠️ HIGH RISK OFFENDER" : "MEDIUM RISK OFFENDER"}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Physical Description</h4>
                <div className="space-y-2">
                  <p>
                    <span className="text-foreground/60">Height:</span>{" "}
                    <span className="font-medium text-foreground">{offender.physicalDescription.height}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Weight:</span>{" "}
                    <span className="font-medium text-foreground">{offender.physicalDescription.weight}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Hair Color:</span>{" "}
                    <span className="font-medium text-foreground">{offender.physicalDescription.hair}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Eye Color:</span>{" "}
                    <span className="font-medium text-foreground">{offender.physicalDescription.eyes}</span>
                  </p>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Offense Details</h4>
                <div className="space-y-2">
                  <p>
                    <span className="text-foreground/60">Crime:</span>{" "}
                    <span className="font-medium text-foreground">{offender.crime}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Conviction Date:</span>{" "}
                    <span className="font-medium text-foreground">{offender.convictionDate}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Sentence Length:</span>{" "}
                    <span className="font-medium text-foreground">{offender.sentenceLength}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Current Status</h4>
                <div className="space-y-2">
                  <p>
                    <span className="text-foreground/60">Status:</span>{" "}
                    <span className="font-medium text-foreground">{offender.status}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Location:</span>{" "}
                    <span className="font-medium text-foreground">{offender.location}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Supervision:</span>{" "}
                    <span className="font-medium text-foreground">{offender.supervision}</span>
                  </p>
                  <p>
                    <span className="text-foreground/60">Last Updated:</span>{" "}
                    <span className="font-medium text-foreground">{offender.lastUpdated}</span>
                  </p>
                </div>
              </div>

              <div className="border-b border-border pb-6">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase mb-2">Restrictions</h4>
                <ul className="space-y-1">
                  {offender.restrictions.map((restriction, idx) => (
                    <li key={idx} className="text-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-semibold text-foreground mb-3">Additional Information</h4>
            <p className="text-foreground/70 leading-relaxed">{offender.notes}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link href="/report" className="flex-1">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Report Information</Button>
          </Link>
          <Link href="/registry" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Back to List
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
