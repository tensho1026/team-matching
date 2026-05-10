import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LockKeyhole, LogIn, Mail } from 'lucide-react'

import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type LoginLocationState = {
  from?: {
    pathname?: string
    search?: string
  }
}

export function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const locationState = location.state as LoginLocationState | null
  const redirectTo = `${locationState?.from?.pathname ?? '/'}${
    locationState?.from?.search ?? ''
  }`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      await login(email, password)
      navigate(redirectTo, { replace: true })
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'ログインに失敗しました。入力内容を確認してください。',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card id="login" className="overflow-hidden">
      <CardHeader className="border-b border-border bg-card">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 space-y-1.5">
            <CardTitle>ログイン</CardTitle>
            <CardDescription>
              登録済みのメールアドレスとパスワードを入力してください。
            </CardDescription>
          </div>
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <LogIn className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="login-email">メールアドレス</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                className="pl-9"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="login-password">パスワード</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="pl-9"
                placeholder="password"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-1 w-full justify-center"
            disabled={isSubmitting}
          >
            <LogIn />
            {isSubmitting ? 'ログイン中' : 'ログイン'}
          </Button>
          {errorMessage && (
            <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {errorMessage}
            </p>
          )}
          <p className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
            アカウントをお持ちでない方は
            <Link
              to="/signup"
              className="ml-1 font-medium text-primary hover:text-primary/80"
            >
              新規登録はこちら
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
