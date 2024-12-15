import { serialize, parse } from 'cookie'
import { NextResponse } from 'next/server'

export const MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export function setCookie(res: NextResponse, name: string, value: string, options: any = {}) {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }

  res.headers.set('Set-Cookie', serialize(name, stringValue, options))
}

export function parseCookies(req) {
  return parse(req.headers.cookie || '')
}

export function getTokenCookie(req) {
  const cookies = parseCookies(req)
  return cookies.token
}

