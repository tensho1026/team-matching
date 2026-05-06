import { BellRing, CheckCircle2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/app/section-heading'
import { notifications } from '@/lib/mock-data'

export function NotificationsPanel() {
  return (
    <section id="notifications" className="space-y-4">
      <SectionHeading
        title="通知"
        description="応募通知、承認通知、メッセージ通知、募集締切通知のUI"
      />
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <BellRing className="size-5" />
            通知センター
          </CardTitle>
          <Button size="sm" variant="outline">
            すべて既読
          </Button>
        </CardHeader>
        <CardContent className="grid gap-3">
          {notifications.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-3 rounded-md border border-border p-3 sm:grid-cols-[1fr_auto]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.meta}</p>
                </div>
              </div>
              <Badge variant={index === 0 ? 'info' : 'outline'}>
                {index === 0 ? '未読' : '既読'}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
