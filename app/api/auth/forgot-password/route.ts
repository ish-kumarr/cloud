import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendPasswordResetEmail } from '@/lib/email'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      // Don't reveal that the user doesn't exist
      return NextResponse.json({ message: 'If an account exists for this email, a reset link has been sent.' }, { status: 200 })
    }

    const token = uuidv4()
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes from now

    await prisma.token.create({
      data: {
        email,
        token,
        action: 'reset_password',
        expiresAt
      }
    })

    const resetLink = `https://cloud.ishkumar.com/verify-otp?token=${token}`
    await sendPasswordResetEmail(email, resetLink)

    return NextResponse.json({ message: 'If an account exists for this email, a reset link has been sent.' }, { status: 200 })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json({ error: 'An error occurred while processing your request. Please try again later.' }, { status: 500 })
  }
}

