'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft, Download } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const documents = [
  {
    name: 'Q1 2024 Financial Report',
    type: 'PDF',
    size: '1.2 MB',
    uploadDate: '2024-03-15',
    status: 'Approved',
  },
  {
    name: 'February 2024 Bank Statement',
    type: 'PDF',
    size: '850 KB',
    uploadDate: '2024-03-10',
    status: 'Pending',
  },
  {
    name: 'January 2024 Expense Receipts',
    type: 'ZIP',
    size: '2.5 MB',
    uploadDate: '2024-03-01',
    status: 'Approved',
  },
  {
    name: 'Invoice',
    type: 'PDF',
    size: '300 KB',
    uploadDate: '2024-03-28',
    status: 'Draft',
  },
  {
    name: 'Audit Report 2023 Findings',
    type: 'DOCX',
    size: '1.5 MB',
    uploadDate: '2024-03-20',
    status: 'Rejected',
  },
  {
    name: 'Payroll List',
    type: 'XLSX',
    size: '720 KB',
    uploadDate: '2024-03-25',
    status: 'Approved',
  },
]

export default function DocumentsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Document Management</h1>
          <p className="text-muted-foreground">Store, manage, and track financial documents</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Financial Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((document, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{document.name}</TableCell>
                      <TableCell>{document.type}</TableCell>
                      <TableCell>{document.size}</TableCell>
                      <TableCell>{document.uploadDate}</TableCell>
                      <TableCell>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          document.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : document.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : document.status === 'Rejected'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {document.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Download className="w-4 h-4" />
                        </Button>
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
