import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  AuthContext,
  type AuthContextValue,
  type AuthUser,
} from '@/contexts/auth-context'
import { API_BASE_URL, readApiErrorMessage } from '@/lib/api'

const AUTH_TOKEN_STORAGE_KEY = 'devlink_access_token'

type AuthResponse = {
  accessToken: string
  user: AuthUser
}

type MeResponse = {
  user: AuthUser
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isAuthUser(value: unknown): value is AuthUser {
  return (
    isRecord(value) &&
    typeof value.id === 'string' &&
    typeof value.email === 'string' &&
    typeof value.name === 'string'
  )
}

function isAuthResponse(value: unknown): value is AuthResponse {
  return (
    isRecord(value) &&
    typeof value.accessToken === 'string' &&
    isAuthUser(value.user)
  )
}

function isMeResponse(value: unknown): value is MeResponse {
  return isRecord(value) && isAuthUser(value.user)
}

function saveAuthToken(token: string) {
  localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
}

function clearAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
}

async function fetchCurrentUser(token: string) {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error(await readApiErrorMessage(response))
  }

  const data: unknown = await response.json()

  if (!isMeResponse(data)) {
    throw new Error('ログイン情報の形式が不正です')
  }

  return data.user
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),
  )
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadUser() {
      if (!token) {
        setUser(null)
        setIsLoading(false)
        return
      }

      setIsLoading(true)

      try {
        const currentUser = await fetchCurrentUser(token)

        if (isMounted) {
          setUser(currentUser)
        }
      } catch {
        if (isMounted) {
          clearAuthToken()
          setToken(null)
          setUser(null)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadUser()

    return () => {
      isMounted = false
    }
  }, [token])

  const login = useCallback(async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      throw new Error(await readApiErrorMessage(response))
    }

    const data: unknown = await response.json()

    if (!isAuthResponse(data)) {
      throw new Error('ログイン結果の形式が不正です')
    }

    saveAuthToken(data.accessToken)
    setToken(data.accessToken)
    setUser(data.user)
  }, [])

  const logout = useCallback(async () => {
    const currentToken = token

    clearAuthToken()
    setToken(null)
    setUser(null)

    if (!currentToken) {
      return
    }

    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    }).catch(() => undefined)
  }, [token])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(user && token),
      isLoading,
      login,
      logout,
    }),
    [isLoading, login, logout, token, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
