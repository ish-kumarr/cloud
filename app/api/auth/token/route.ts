import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const { email, action } = await req.json()

    if (!email || !action) {
      return NextResponse.json({ error: 'Email and action are required' }, { status: 400 })
    }

    const token = uuidv4()
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes from now

    await prisma.token.create({
      data: {
        email,
        token,
        action,
        expiresAt
      }
    })

    return NextResponse.json({ token }, { status: 201 })
  } catch (error) {
    console.error('Token generation error:', error)
    return NextResponse.json({ error: 'An error occurred while generating the token' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get('token')
    const action = searchParams.get('action')

    if (!token || !action) {
      return NextResponse.json({ error: 'Token and action are required' }, { status: 400 })
    }

    const tokenRecord = await prisma.token.findFirst({
      where: {
        token,
        action,
        used: false,
        expiresAt: { gt: new Date() }
      }
    })

    if (!tokenRecord) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    return NextResponse.json({ email: tokenRecord.email }, { status: 200 })
  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json({ error: 'An error occurred while verifying the token' }, { status: 500 })
  }
}

