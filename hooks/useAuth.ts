'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
      if (token) {
        try {
          const response = await fetch('/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          if (response.ok) {
            const userData = await response.json()
            console.log('User data loaded:', userData)
            setUser(userData.user)
            setIsAuthenticated(true)
          } else {
            // If the token is invalid, clear it
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            setIsAuthenticated(false)
            setUser(null)
          }
        } catch (error) {
          console.error('Failed to fetch user data', error)
          setIsAuthenticated(false)
          setUser(null)
        }
      } else {
        setIsAuthenticated(false)
        setUser(null)
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      console.log('Attempting login...')
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to login')
      }

      const userData = await response.json()
      console.log('Login successful, user data:', userData)
      setUser(userData.user)
      setIsAuthenticated(true)
      setLoading(false)
      console.log('Authentication state updated:', { user: userData.user, isAuthenticated: true })
      return true
    } catch (error) {
      console.error('Login error:', error)
      setLoading(false)
      setIsAuthenticated(false)
      setUser(null)
      throw error
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
      setIsAuthenticated(false)
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  useEffect(() => {
    console.log('Auth state changed:', { user, isAuthenticated, loading })
  }, [user, isAuthenticated, loading])

  return { user, loading, isAuthenticated, login, logout }
}

