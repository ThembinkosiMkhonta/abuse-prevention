"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Check } from "lucide-react"

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    tip: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ tip: "", name: "", email: "", phone: "" })
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
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
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Thank You for Your Report</h2>
          <p className="text-foreground/70 mb-8">
            Your anonymous tip has been received and will be reviewed by our team. We appreciate your commitment to
            community safety.
          </p>
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Return Home</Button>
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
          <Link href="/">
            <Button variant="outline">← Back Home</Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-foreground mb-2">Submit an Anonymous Report</h2>
        <p className="text-foreground/70 mb-12">
          Your identity will remain completely confidential. All information is reviewed by authorized personnel only.
        </p>

        <form onSubmit={handleSubmit} className="bg-muted p-8 rounded-lg space-y-6">
          {/* Tip Details */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Report Details *</label>
            <textarea
              required
              value={formData.tip}
              onChange={(e) => setFormData({ ...formData, tip: e.target.value })}
              placeholder="Provide detailed information about your report. Include dates, times, locations, and any relevant details..."
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-32"
            />
            <p className="text-xs text-foreground/60 mt-2">Be as specific as possible to help us investigate</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Optional Contact Information</h3>
            <p className="text-sm text-foreground/70 mb-4">
              (Providing this information helps us follow up, but you can remain completely anonymous)
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name (Optional)</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email (Optional)</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone (Optional)</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-accent/10 border border-accent rounded-lg p-4">
            <p className="text-sm text-foreground/70">
              <strong>Important:</strong> For immediate emergencies, please call 911. This form is for non-emergency
              tips and information.
            </p>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Submit Anonymous Report
          </Button>
        </form>

        {/* Help Section */}
        <div className="mt-12 bg-white border-2 border-primary rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Need Immediate Help?</h3>
          <div className="space-y-3">
            <p className="text-foreground/70">
              <strong>Emergency:</strong> Call 911
            </p>
            <p className="text-foreground/70">
              <strong>Sexual Assault Hotline:</strong> 1-800-656-HOPE (4673)
            </p>
            <p className="text-foreground/70">
              <strong>Child Abuse:</strong> Childhelp Hotline 1-800-422-4453
            </p>
            <p className="text-foreground/70">
              <strong>Exploitation:</strong> CyberTipline.org
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
