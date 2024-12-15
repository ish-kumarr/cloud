import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json()

    const tokenRecord = await prisma.token.findFirst({
      where: {
        token,
        action: 'reset_password',
        used: false,
        expiresAt: { gt: new Date() }
      }
    })

    if (!tokenRecord) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email: tokenRecord.email } })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.user.update({
      where: { email: tokenRecord.email },
      data: { password: hashedPassword }
    })

    // Mark the token as used
    await prisma.token.update({
      where: { id: tokenRecord.id },
      data: { used: true }
    })

    return NextResponse.json({ message: 'Password reset successfully' }, { status: 200 })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json({ error: 'An error occurred while resetting the password' }, { status: 500 })
  }
}

