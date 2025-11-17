'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const budgets = [
  {
    name: 'Monthly Operations',
    allocated: 150000,
    spent: 120500,
    remaining: 29500,
  },
  {
    name: 'Community Outreach Program',
    allocated: 80000,
    spent: 75000,
    remaining: 5000,
  },
  {
    name: 'Road Infrastructure Project',
    allocated: 250000,
    spent: 180000,
    remaining: 70000,
  },
  {
    name: 'Emergency Response Fund',
    allocated: 50000,
    spent: 15500,
    remaining: 34500,
  },
  {
    name: 'Youth Development Programs',
    allocated: 30000,
    spent: 25500,
    remaining: 4500,
  },
  {
    name: 'Barangay Health Services',
    allocated: 100000,
    spent: 90000,
    remaining: 10000,
  },
]

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Budget Management</h1>
          <p className="text-muted-foreground">Monitor allocated budgets and actual spending across programs</p>
        </div>

        <div className="grid gap-6">
          {budgets.map((budget, index) => {
            const percentage = (budget.spent / budget.allocated) * 100
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{budget.name}</CardTitle>
                      <CardDescription>
                        Allocated: ₱{budget.allocated.toLocaleString()} | Spent: ₱{budget.spent.toLocaleString()} | Remaining: ₱{budget.remaining.toLocaleString()}
                      </CardDescription>
                    </div>
                    <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={percentage} className="h-2" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
