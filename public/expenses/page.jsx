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

const expenses = [
  {
    date: '2025-11-05',
    description: 'Electricity Bill - Barangay Hall',
    category: 'Utilities',
    amount: 5500,
    status: 'Approved',
  },
  {
    date: '2025-10-15',
    description: 'Office Supplies for Community Center',
    category: 'Office Supplies',
    amount: 1200,
    status: 'Approved',
  },
  {
    date: '2025-05-25',
    description: 'Salaries - Barangay Health Workers',
    category: 'Salaries',
    amount: 45000,
    status: 'Approved',
  },
  {
    date: '2025-10-09',
    description: 'Repair of Public Streetlights',
    category: 'Infrastructure',
    amount: 8750,
    status: 'Approved',
  },
  {
    date: '2025-08-20',
    description: 'Community Outreach Program Materials',
    category: 'Community Projects',
    amount: 2300,
    status: 'Pending',
  },
  {
    date: '2025-03-10',
    description: 'Water Bill - Multi-Purpose Hall',
    category: 'Utilities',
    amount: 1800,
    status: 'Pending',
  },
]

export default function ExpensesPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Expense Management</h1>
          <p className="text-muted-foreground">Track and categorize all barangay expenditures</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.map((expense, index) => (
                    <TableRow key={index}>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.description}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell>₱{expense.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          expense.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {expense.status}
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
