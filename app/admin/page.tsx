"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, LogOut, Plus, Trash2, Check, X } from "lucide-react"
import { offendersData } from "@/lib/data"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [offenders, setOffenders] = useState(offendersData)
  const [pendingOffenders, setPendingOffenders] = useState([
    {
      id: "pending-1",
      name: "John Smith",
      crime: "Sexual Assault",
      location: "Los Angeles, CA",
      submittedDate: "2024-03-15",
    },
    {
      id: "pending-2",
      name: "Michael Johnson",
      crime: "Child Exploitation",
      location: "Chicago, IL",
      submittedDate: "2024-03-14",
    },
  ])
  const [showNewForm, setShowNewForm] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Invalid password")
    }
  }

  const approvePending = (id: string) => {
    const pending = pendingOffenders.find((p) => p.id === id)
    if (pending) {
      setOffenders([
        ...offenders,
        {
          ...pending,
          riskLevel: "medium",
          status: "Registered",
          sentenceLength: "TBD",
          convictionDate: "Pending",
          supervision: "Community Supervision",
          restrictions: [],
          notes: "",
          physicalDescription: { height: "", weight: "", hair: "", eyes: "" },
          lastUpdated: new Date().toLocaleDateString(),
        } as any,
      ])
      setPendingOffenders(pendingOffenders.filter((p) => p.id !== id))
    }
  }

  const rejectPending = (id: string) => {
    setPendingOffenders(pendingOffenders.filter((p) => p.id !== id))
  }

  const removeOffender = (id: string) => {
    if (confirm("Are you sure you want to remove this offender from the registry?")) {
      setOffenders(offenders.filter((o) => o.id !== id))
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Admin Portal</h1>
            <p className="text-foreground/70 text-center mb-8">SafeRegistry Administration</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Login
              </Button>
            </form>
            <p className="text-xs text-foreground/60 text-center mt-4">Demo password: admin123</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-muted">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SafeRegistry Admin</h1>
          </div>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-foreground/60 text-sm font-medium">Total Registered</p>
            <p className="text-3xl font-bold text-primary">{offenders.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-foreground/60 text-sm font-medium">Pending Approval</p>
            <p className="text-3xl font-bold text-accent">{pendingOffenders.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-foreground/60 text-sm font-medium">High Risk</p>
            <p className="text-3xl font-bold text-accent">
              {offenders.filter((o) => o.riskLevel === "high-risk").length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-foreground/60 text-sm font-medium">Last Updated</p>
            <p className="text-sm font-medium text-primary">Today</p>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-lg border-2 border-accent/50 p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Plus className="w-6 h-6" />
            Pending Approvals ({pendingOffenders.length})
          </h2>

          {pendingOffenders.length > 0 ? (
            <div className="space-y-4">
              {pendingOffenders.map((pending) => (
                <div key={pending.id} className="border border-border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{pending.name}</h3>
                    <p className="text-foreground/70 text-sm">{pending.crime}</p>
                    <p className="text-foreground/60 text-xs mt-1">Submitted: {pending.submittedDate}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => approvePending(pending.id)}
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button onClick={() => rejectPending(pending.id)} size="sm" variant="outline">
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-foreground/70">No pending approvals</p>
          )}
        </div>

        {/* Registered Offenders */}
        <div className="bg-white rounded-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Registered Offenders</h2>

          <div className="space-y-4">
            {offenders.map((offender) => (
              <div key={offender.id} className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{offender.name}</h3>
                  <div className="flex gap-4 text-sm text-foreground/70 mt-1">
                    <span>{offender.crime}</span>
                    <span>{offender.location}</span>
                    <span>{offender.status}</span>
                  </div>
                </div>
                <Button
                  onClick={() => removeOffender(offender.id)}
                  size="sm"
                  variant="outline"
                  className="text-accent hover:bg-accent/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
