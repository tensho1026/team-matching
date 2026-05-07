import { Plus, UsersRound } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ChipList } from '@/components/app/chip-list'
import { FormField } from '@/components/app/form-field'
import { SectionHeading } from '@/components/app/section-heading'
import { recruitingRoles, techStacks } from '@/lib/mock-data'

export function RecruitmentPostPanel() {
  return (
    <section id="post" className="space-y-4">
      <SectionHeading
        title="募集投稿"
        description="プロジェクト内容、募集ロール、連絡方法の投稿UI"
        action={
          <Button size="sm">
            <Plus />
            下書き保存
          </Button>
        }
      />
      <Card>
        <CardHeader className="flex-row items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <UsersRound className="size-5" />
          </div>
          <CardTitle>新しい募集</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="プロジェクト名">
              <Input defaultValue="DevLink Board" />
            </FormField>
            <FormField label="募集人数">
              <Input defaultValue="3人" />
            </FormField>
          </div>
          <FormField label="概要">
            <Textarea defaultValue="チーム開発のメンバー募集と応募管理をできるWebサービスを作ります。" />
          </FormField>
          <FormField label="作りたいもの">
            <Textarea defaultValue="メール認証、プロフィール、募集検索、応募、DM、チーム管理までを備えたMVP。" />
          </FormField>
          <div className="grid gap-4 md:grid-cols-3">
            <FormField label="開発期間">
              <Input defaultValue="6週間" />
            </FormField>
            <FormField label="稼働目安">
              <Input defaultValue="週8時間" />
            </FormField>
            <FormField label="対象レベル">
              <Select defaultValue="beginner">
                <option value="beginner">初心者歓迎</option>
                <option value="middle">中級者向け</option>
                <option value="pro">実務経験者向け</option>
              </Select>
            </FormField>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">募集ロール</p>
              <div className="grid gap-2">
                {recruitingRoles.map((item) => (
                  <div
                    key={item.role}
                    className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm"
                  >
                    <span>{item.role}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">使用予定技術</p>
              <ChipList items={techStacks.slice(0, 6)} variant="secondary" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="GitHubリポジトリURL">
              <Input defaultValue="https://github.com/team/devlink-board" />
            </FormField>
            <FormField label="Discord / Slackなどの連絡方法">
              <Input defaultValue="Discord: devlink-team" />
            </FormField>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
