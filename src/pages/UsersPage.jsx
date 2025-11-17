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

const users = [
  {
    name: 'Rosario Jacinto',
    email: 'rosariojacinto@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
  {
    name: 'Lyka Isidro',
    email: 'lykaisidro@gmail.com',
    role: 'Treasurer',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
  {
    name: 'Domingo Samsona',
    email: 'dominggosamsona@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
  {
    name: 'Dante Esposo',
    email: 'dante.esposo@gmail.com',
    role: 'Viewer',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
  {
    name: 'Nestor Vicente',
    email: 'nestorvicente@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
  {
    name: 'Roalinda Ramos',
    email: 'roalindarmos@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
  {
    name: 'Luis Jaoud',
    email: 'luisjaoud@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActivity: '2024-07-28 10:30 AM',
  },
]

export default function UsersPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage user accounts, assign roles, and track activity</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Activity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {user.role}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-800">
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>{user.lastActivity}</TableCell>
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
