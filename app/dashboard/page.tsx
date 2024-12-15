import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyAuth } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { DashboardClient } from './dashboard-client'

export default async function DashboardPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('/login')
  }

  try {
    const { userId } = await verifyAuth(token.value)
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: { id: true, username: true, email: true }
    })

    if (!user) {
      redirect('/login')
    }

    const files = await prisma.file.findMany({
      where: { user_id: user.id },
      select: { id: true, filename: true, filesize: true, created_at: true }
    })

    return <DashboardClient user={user} files={files} />
  } catch (error) {
    console.error('Dashboard error:', error)
    redirect('/login')
  }
}

