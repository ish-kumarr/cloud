'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface User {
  id: number
  username: string
  email: string
}

interface File {
  id: number
  filename: string
  filesize: number
  created_at: Date
}

interface DashboardClientProps {
  user: User
  files: File[]
}

export function DashboardClient({ user, files: initialFiles }: DashboardClientProps) {
  const [files, setFiles] = useState(initialFiles)
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-primary">Cloud-ish</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4">Welcome, {user.username}</span>
              <Button variant="ghost" onClick={handleLogout}>Log out</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-foreground mb-6">Dashboard</h1>
          
          <div className="mb-6">
            <Label htmlFor="file-upload" className="block text-sm font-medium text-foreground">
              Upload file
            </Label>
            <div className="mt-1 flex items-center">
              <Input id="file-upload" name="file-upload" type="file" className="sr-only" />
              <Button as="label" htmlFor="file-upload">
                Choose file
              </Button>
              <span className="ml-3 text-sm text-muted-foreground">No file chosen</span>
            </div>
          </div>

          <div className="bg-card shadow overflow-hidden sm:rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {files.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell>{file.filename}</TableCell>
                    <TableCell>{(file.filesize / 1024 / 1024).toFixed(2)} MB</TableCell>
                    <TableCell>{new Date(file.created_at).toLocaleString()}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Download</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}

