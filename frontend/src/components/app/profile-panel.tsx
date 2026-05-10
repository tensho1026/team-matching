import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GitBranch, Link2, LogOut, UserRound } from 'lucide-react'

import { useAuth } from '@/contexts/auth-context'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ChipList } from '@/components/app/chip-list'
import { FormField } from '@/components/app/form-field'
import { SectionHeading } from '@/components/app/section-heading'
import {
  developmentStyles,
  focusAreas,
  techStacks,
} from '@/lib/mock-data'

export function ProfilePanel() {
  const navigate = useNavigate()
  const { logout, user } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  async function handleLogout() {
    setIsLoggingOut(true)
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <section id="profile" className="space-y-4">
      <SectionHeading
        title="プロフィール"
        description="ログイン中のアカウント情報とプロフィール設定"
      />
      <Card>
        <CardHeader className="flex flex-col items-start justify-between gap-3 !space-y-0 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <UserRound className="size-5" />
            </div>
            <div className="min-w-0">
              <CardTitle>{user?.name ?? 'ユーザー'}</CardTitle>
              <p className="break-all text-sm text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
            <Badge variant="success">参加可能</Badge>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut />
              {isLoggingOut ? 'ログアウト中' : 'ログアウト'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="名前">
              <Input defaultValue={user?.name ?? ''} />
            </FormField>
            <FormField label="メールアドレス">
              <Input type="email" defaultValue={user?.email ?? ''} readOnly />
            </FormField>
          </div>
          <FormField label="自己紹介">
            <Textarea defaultValue="React と NestJS を中心に、チームで使いやすいUIとAPI設計を作るのが好きです。" />
          </FormField>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="GitHub URL">
              <div className="relative">
                <GitBranch className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <Input className="pl-9" defaultValue="https://github.com/yuki" />
              </div>
            </FormField>
            <FormField label="X / ポートフォリオ URL">
              <div className="relative">
                <Link2 className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <Input className="pl-9" defaultValue="https://yuki.dev" />
              </div>
            </FormField>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <FormField label="経験年数">
              <Select defaultValue="2-3">
                <option value="0-1">1年未満</option>
                <option value="1-2">1-2年</option>
                <option value="2-3">2-3年</option>
                <option value="3+">3年以上</option>
              </Select>
            </FormField>
            <FormField label="参加可能時間">
              <Input defaultValue="週8-10時間 / 平日夜" />
            </FormField>
            <FormField label="得意領域">
              <Select defaultValue="frontend">
                <option value="frontend">フロントエンド</option>
                <option value="backend">バックエンド</option>
                <option value="infra">インフラ</option>
                <option value="design">デザイン</option>
                <option value="pm">PM</option>
                <option value="uiux">UI/UX</option>
              </Select>
            </FormField>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">技術スタック</p>
              <ChipList items={techStacks} />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">希望する開発スタイル</p>
              <ChipList items={developmentStyles} variant="outline" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">対応できる領域</p>
            <ChipList items={focusAreas} variant="info" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
