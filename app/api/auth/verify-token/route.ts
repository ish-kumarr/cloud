import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { token } = await req.json()

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

    return NextResponse.json({ message: 'Token verified successfully' }, { status: 200 })
  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json({ error: 'An error occurred while verifying the token' }, { status: 500 })
  }
}

