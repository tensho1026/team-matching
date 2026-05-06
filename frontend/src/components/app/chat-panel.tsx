import { Bell, MessageSquare, Send } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { SectionHeading } from '@/components/app/section-heading'
import { chatThreads } from '@/lib/mock-data'

export function ChatPanel() {
  return (
    <section id="messages" className="space-y-4">
      <SectionHeading
        title="DM・チャット"
        description="応募者と投稿者、チーム内チャット、通知のUI"
      />
      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="size-5" />
              スレッド
            </CardTitle>
            <Badge variant="info">3</Badge>
          </CardHeader>
          <CardContent className="grid gap-2">
            {chatThreads.map((thread) => (
              <div
                key={thread.name}
                className="grid grid-cols-[40px_1fr] gap-3 rounded-md border border-border p-3"
              >
                <Avatar>{thread.name.slice(0, 1)}</Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{thread.name}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {thread.message}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between gap-4">
            <div>
              <CardTitle>DevLink Board</CardTitle>
              <p className="text-sm text-muted-foreground">チーム内チャット</p>
            </div>
            <Button size="icon" variant="outline" aria-label="通知">
              <Bell />
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-3">
              <div className="max-w-[80%] rounded-md border border-border bg-muted p-3 text-sm leading-6">
                応募ありがとうございます。Reactの画面担当で進められそうです。
              </div>
              <div className="ml-auto max-w-[80%] rounded-md bg-primary p-3 text-sm leading-6 text-primary-foreground">
                ありがとうございます。平日夜にIssueを確認します。
              </div>
              <div className="max-w-[80%] rounded-md border border-border bg-muted p-3 text-sm leading-6">
                Discordの招待リンクを共有しました。
              </div>
            </div>
            <Separator />
            <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
              <Input placeholder="メッセージを入力" />
              <Button>
                <Send />
                送信
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
