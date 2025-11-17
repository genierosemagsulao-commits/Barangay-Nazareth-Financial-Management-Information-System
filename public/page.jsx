'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const incomes = [
  {
    date: '2024-10-02',
    source: 'Community Fundraiser',
    category: 'Donation',
    description: 'Annual barrio fiesta collection',
    amount: 15000,
    status: 'Received',
  },
  {
    date: '2024-10-20',
    source: 'Government Grant',
    category: 'Grant',
    description: 'Q3 Road Project allocation',
    amount: 75000,
    status: 'Received',
  },
  {
    date: '2024-10-25',
    source: 'Business Permit Fees',
    category: 'Fee',
    description: 'Quarterly collection from local businesses',
    amount: 22000,
    status: 'Received',
  },
  {
    date: '2024-10-30',
    source: 'Government Grant',
    category: 'Grant',
    description: 'Environment protection program fund',
    amount: 30000,
    status: 'Pending',
  },
  {
    date: '2024-10-22',
    source: 'Local Market Stalls Rent',
    category: 'Fee',
    description: 'Monthly rent from market vendors',
    amount: 12000,
    status: 'Received',
  },
]

export default function IncomePage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Income Management</h1>
          <p className="text-muted-foreground">Monitor income from various community sources</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Income This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">₱125,000.00</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Top Income Source</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">Government Grant</div>
              <p className="text-sm text-muted-foreground mt-1">₱75,000.00</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Income Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{incomes.length}</div>
              <p className="text-sm text-muted-foreground mt-1">Total transactions</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Income Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incomes.map((income, index) => (
                    <TableRow key={index}>
                      <TableCell>{income.date}</TableCell>
                      <TableCell>{income.source}</TableCell>
                      <TableCell>{income.category}</TableCell>
                      <TableCell>{income.description}</TableCell>
                      <TableCell>₱{income.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          income.status === 'Received'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {income.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
