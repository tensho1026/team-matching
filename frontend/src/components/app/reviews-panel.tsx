import { ExternalLink, GitBranch, Star } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SectionHeading } from '@/components/app/section-heading'
import { reviewItems } from '@/lib/mock-data'

export function ReviewsPanel() {
  return (
    <section id="reviews" className="space-y-4">
      <SectionHeading
        title="レビュー・実績"
        description="評価、完了プロジェクト、参加履歴、成果物URLのUI"
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {reviewItems.map((item) => (
          <Card key={item.project}>
            <CardHeader>
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
                <div className="min-w-0">
                  <CardTitle>{item.project}</CardTitle>
                  <CardDescription>レビュー by {item.reviewer}</CardDescription>
                </div>
                <Badge variant="warning">
                  <Star className="mr-1 size-3" />
                  {item.score}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <p className="text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex min-w-0 items-center gap-2 rounded-md border border-border px-3 py-2">
                  <GitBranch className="size-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 break-all">
                    github.com/team/devlink-board
                  </span>
                </div>
                <div className="flex min-w-0 items-center gap-2 rounded-md border border-border px-3 py-2">
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                  <span className="min-w-0 break-all">
                    https://devlink.example.com
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  参加履歴
                </Button>
                <Button size="sm" variant="outline">
                  完了プロジェクト
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
