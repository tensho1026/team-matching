import { Link } from 'react-router-dom'
import { LockKeyhole, LogIn, Mail } from 'lucide-react'

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

export function LoginForm() {
  return (
    <Card id="login" className="overflow-hidden">
      <CardHeader className="border-b border-border bg-card">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>ログイン</CardTitle>
            <CardDescription>
              登録済みのメールアドレスとパスワードを入力してください。
            </CardDescription>
          </div>
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <LogIn className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="login-email">メールアドレス</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="login-email"
                type="email"
                autoComplete="email"
                className="pl-9"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="login-password">パスワード</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="login-password"
                type="password"
                autoComplete="current-password"
                className="pl-9"
                placeholder="password"
              />
            </div>
          </div>
          <Button className="mt-1 w-full justify-center">
            <LogIn />
            ログイン
          </Button>
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
