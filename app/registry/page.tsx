"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Search, ChevronRight } from "lucide-react"
import { offendersData } from "@/lib/data"

export default function RegistryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<"all" | "high-risk" | "violent">("all")

  const filtered = offendersData.filter((offender) => {
    const matchesSearch =
      offender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offender.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || offender.riskLevel === filterType

    return matchesSearch && matchesFilter
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SafeRegistry</h1>
          </Link>
          <Link href="/">
            <Button variant="outline">← Back Home</Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-foreground mb-2">Sex Offender Registry</h2>
        <p className="text-foreground/70 mb-8">
          Below is a database of convicted sex offenders. Information is updated regularly from official records.
        </p>

        {/* Search and Filters */}
        <div className="bg-muted p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Search by Name or Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Risk Level</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="w-full px-3 py-2 border border-border rounded-md"
              >
                <option value="all">All Offenders</option>
                <option value="high-risk">High Risk</option>
                <option value="violent">Violent Offenders</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-foreground/70">
            Showing {filtered.length} of {offendersData.length} offenders
          </p>
        </div>

        {/* Results */}
        <div className="grid gap-4">
          {filtered.length > 0 ? (
            filtered.map((offender) => (
              <Link key={offender.id} href={`/registry/${offender.id}`}>
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-primary/50 cursor-pointer bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{offender.name}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            offender.riskLevel === "high-risk"
                              ? "bg-accent/10 text-accent"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {offender.riskLevel === "high-risk" ? "⚠️ High Risk" : "Medium Risk"}
                        </span>
                      </div>
                      <p className="text-foreground/70 mb-3">{offender.crime}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-foreground/60">Location:</span>
                          <p className="font-medium text-foreground">{offender.location}</p>
                        </div>
                        <div>
                          <span className="text-foreground/60">Status:</span>
                          <p className="font-medium text-foreground">{offender.status}</p>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-foreground/30" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">No offenders found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
