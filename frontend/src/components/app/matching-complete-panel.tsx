import { CheckCircle2, GitBranch, MessageSquare } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MatchingCompletePanel() {
  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-success" />
            マッチング完了
          </CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">
            DevLink Board のフロントエンド枠で参加が確定した状態のUI
          </p>
        </div>
        <Badge variant="success">承認済み</Badge>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-md border border-border p-3">
            <p className="text-muted-foreground">ロール</p>
            <p className="font-medium">フロントエンド</p>
          </div>
          <div className="rounded-md border border-border p-3">
            <p className="text-muted-foreground">開始日</p>
            <p className="font-medium">2026/05/10</p>
          </div>
          <div className="rounded-md border border-border p-3">
            <p className="text-muted-foreground">連絡先</p>
            <p className="font-medium">Discord</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">
            <MessageSquare />
            チームチャット
          </Button>
          <Button size="sm" variant="outline">
            <GitBranch />
            リポジトリ
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
