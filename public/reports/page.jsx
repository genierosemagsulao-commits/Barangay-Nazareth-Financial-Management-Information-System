'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft, Download } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const monthlyData = [
  { month: 'Jan', income: 45000, expenses: 42000 },
  { month: 'Feb', income: 52000, expenses: 48000 },
  { month: 'Mar', income: 48000, expenses: 51000 },
  { month: 'Apr', income: 61000, expenses: 55000 },
  { month: 'May', income: 55000, expenses: 58000 },
  { month: 'Jun', income: 67000, expenses: 62000 },
]

const expenseCategories = [
  { name: 'Utilities', value: 18000, fill: 'var(--color-primary)' },
  { name: 'Salaries', value: 45000, fill: 'var(--color-secondary)' },
  { name: 'Infrastructure', value: 35000, fill: 'var(--color-accent)' },
  { name: 'Community Projects', value: 22000, fill: 'var(--color-chart-4)' },
  { name: 'Office Supplies', value: 12000, fill: 'var(--color-chart-5)' },
]

export default function ReportsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Financial Reports</h1>
          <p className="text-muted-foreground">Comprehensive financial reports and analytics</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Income & Expenses</CardTitle>
              <CardDescription>Trends over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="var(--color-primary)" />
                  <Line type="monotone" dataKey="expenses" stroke="var(--color-secondary)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Category Breakdown</CardTitle>
              <CardDescription>Distribution of current expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ₱${value.toLocaleString()}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₱${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Budget Performance Summary</CardTitle>
                <CardDescription>Overview of budget allocation vs actual spending</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Budget</p>
                  <p className="text-2xl font-bold text-primary">₱660,000</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold text-secondary">₱506,500</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Remaining</p>
                  <p className="text-2xl font-bold text-accent">₱153,500</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Budget Utilization</p>
                  <p className="text-2xl font-bold text-foreground">76.7%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
