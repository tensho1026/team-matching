import { Kanban, MoreHorizontal, UsersRound } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select } from '@/components/ui/select'
import { SectionHeading } from '@/components/app/section-heading'
import { teamMembers } from '@/lib/mock-data'

export function TeamPanel() {
  return (
    <section id="team" className="space-y-4">
      <SectionHeading
        title="チーム管理"
        description="メンバー一覧、ロール管理、プロジェクトステータスのUI"
      />
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <UsersRound className="size-5" />
            </div>
            <CardTitle>DevLink Board Team</CardTitle>
          </div>
          <div className="w-36">
            <Select defaultValue="active">
              <option value="recruiting">募集中</option>
              <option value="active">開発中</option>
              <option value="done">完了</option>
              <option value="paused">中断</option>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="grid gap-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="grid gap-3 rounded-md border border-border p-3 sm:grid-cols-[1fr_auto]"
              >
                <div className="flex items-center gap-3">
                  <Avatar>{member.name.slice(0, 1)}</Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={member.status === '募集中' ? 'warning' : 'success'}
                  >
                    {member.status}
                  </Badge>
                  <Button size="icon" variant="ghost" aria-label="メンバー操作">
                    <MoreHorizontal />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-border p-4">
            <div className="mb-3 flex items-center gap-2 font-medium">
              <Kanban className="size-4" />
              ステータス
            </div>
            <div className="grid gap-2">
              {['募集中', '開発中', '完了', '中断'].map((status) => (
                <Button
                  key={status}
                  variant={status === '開発中' ? 'default' : 'outline'}
                  className="justify-start"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
