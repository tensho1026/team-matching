import { GitPullRequest, ShieldCheck } from 'lucide-react'

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
  return (
    <Card id="login" className="overflow-hidden">
      <CardHeader className="border-b border-border bg-card">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>GitHubでログイン</CardTitle>
            <CardDescription>
              チーム開発の募集、応募、DMを同じプロフィールで扱います。
            </CardDescription>
          </div>
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <ShieldCheck className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 pt-5">
        <Button className="w-full justify-center bg-[#24292f] text-white hover:bg-[#1f2328]">
          <GitPullRequest />
          GitHubで続ける
        </Button>
        <div className="grid gap-2">
          <Label htmlFor="github-handle">GitHubユーザー名</Label>
          <Input id="github-handle" placeholder="octocat" />
        </div>
        <div className="rounded-md border border-border bg-muted px-3 py-2 text-xs leading-5 text-muted-foreground">
          認証後にプロフィール、募集投稿、応募状況が紐づく想定のUIです。
        </div>
      </CardContent>
    </Card>
  )
}
