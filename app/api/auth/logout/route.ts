import { NextResponse } from 'next/server'
import { setCookie } from '@/lib/cookies'

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out successfully' })
  
  setCookie(response, 'token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  })

  return response
}

