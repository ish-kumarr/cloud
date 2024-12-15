import { jwtVerify, SignJWT } from 'jose'

interface UserJwtPayload {
  jti: string
  iat: number
  userId: string
}

export async function verifyAuth(token: string) {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return verified.payload as UserJwtPayload
  } catch (err) {
    throw new Error('Your token has expired.')
  }
}

export async function createToken(userId: string) {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(crypto.randomUUID())
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET))

  return token
}

