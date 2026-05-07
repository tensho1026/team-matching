import { useState } from 'react'
import { LockKeyhole, LogIn, Mail, UserPlus, UserRound } from 'lucide-react'

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

export function LoginPanel() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const isLogin = mode === 'login'

  return (
    <Card id="login" className="overflow-hidden">
      <CardHeader className="border-b border-border bg-card">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>{isLogin ? 'ログイン' : '新規登録'}</CardTitle>
            <CardDescription>
              {isLogin
                ? 'メールアドレスとパスワードを入力してください。'
                : '名前、メールアドレス、パスワードを入力してください。'}
            </CardDescription>
          </div>
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            {isLogin ? (
              <LogIn className="size-5" />
            ) : (
              <UserPlus className="size-5" />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <form className="grid gap-4">
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="signup-name">名前</Label>
              <div className="relative">
                <UserRound className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <Input
                  id="signup-name"
                  autoComplete="name"
                  className="pl-9"
                  placeholder="田中 優希"
                />
              </div>
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor={isLogin ? 'login-email' : 'signup-email'}>
              メールアドレス
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id={isLogin ? 'login-email' : 'signup-email'}
                type="email"
                autoComplete="email"
                className="pl-9"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor={isLogin ? 'login-password' : 'signup-password'}>
              パスワード
            </Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id={isLogin ? 'login-password' : 'signup-password'}
                type="password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                className="pl-9"
                placeholder="password"
              />
            </div>
          </div>
          <Button className="mt-1 w-full justify-center">
            {isLogin ? (
              <>
                <LogIn />
                ログイン
              </>
            ) : (
              <>
                <UserPlus />
                新規登録
              </>
            )}
          </Button>
          <p className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
            {isLogin ? 'アカウントをお持ちでない方は' : 'アカウントをお持ちの方は'}
            <Button
              variant="ghost"
              className="ml-1 h-auto px-1 py-0 font-medium text-primary hover:bg-transparent hover:text-primary/80"
              onClick={() => setMode(isLogin ? 'signup' : 'login')}
            >
              {isLogin ? '新規登録はこちら' : 'ログインはこちら'}
            </Button>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
