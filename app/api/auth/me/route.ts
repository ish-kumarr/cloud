import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { getTokenCookie } from '@/lib/cookies'

export async function GET(req: Request) {
  try {
    const token = getTokenCookie(req)

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return NextResponse.json({ user: decoded }, { status: 200 })
  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 })
  }
}

