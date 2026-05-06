import { Activity, CheckCircle2, GitBranch, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { SectionHeading } from '@/components/app/section-heading'
import { matchingSignals } from '@/lib/mock-data'

export function MatchingPanel() {
  return (
    <section id="matching" className="space-y-4">
      <SectionHeading
        title="マッチング補助"
        description="技術、ロール、活動時間、GitHub活動量の見え方"
      />
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Sparkles className="size-5" />
            </div>
            <CardTitle>DevLink Board との相性</CardTitle>
          </div>
          <Badge variant="success">初心者歓迎</Badge>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {matchingSignals.map((signal) => (
              <div key={signal.label} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">{signal.label}</p>
                    <p className="text-muted-foreground">{signal.detail}</p>
                  </div>
                  <span className="font-semibold">{signal.value}%</span>
                </div>
                <Progress value={signal.value} />
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            <div className="rounded-md border border-border p-3">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="size-4 text-success" />
                希望ロール一致
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                募集側のフロントエンド枠とプロフィールの得意領域が一致しています。
              </p>
            </div>
            <div className="rounded-md border border-border p-3">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Activity className="size-4 text-info" />
                活動時間
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                平日夜と土曜の稼働目安が近いメンバー構成です。
              </p>
            </div>
            <div className="rounded-md border border-border p-3">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <GitBranch className="size-4 text-warning" />
                GitHub活動量
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                直近30日のcontributionをプロフィールに表示する想定です。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
