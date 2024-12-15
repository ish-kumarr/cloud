import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { token, otp } = await req.json()

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

    const passwordReset = await prisma.passwordReset.findFirst({
      where: {
        email: tokenRecord.email,
        otp,
        used: false,
        expiry: { gt: new Date() }
      }
    })

    if (!passwordReset) {
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 })
    }

    // Mark the OTP as used
    await prisma.passwordReset.update({
      where: { id: passwordReset.id },
      data: { used: true }
    })

    return NextResponse.json({ message: 'OTP verified successfully' }, { status: 200 })
  } catch (error) {
    console.error('OTP verification error:', error)
    return NextResponse.json({ error: 'An error occurred while verifying the OTP' }, { status: 500 })
  }
}

