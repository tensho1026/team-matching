import { GitBranch, Link2, UserRound } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
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
  return (
    <section id="profile" className="space-y-4">
      <SectionHeading
        title="プロフィール"
        description="名前、技術スタック、参加可能時間、希望スタイルの入力UI"
      />
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <UserRound className="size-5" />
            </div>
            <div>
              <CardTitle>Yuki Tanaka</CardTitle>
              <p className="text-sm text-muted-foreground">@yuki-dev</p>
            </div>
          </div>
          <Badge variant="success">参加可能</Badge>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="名前">
              <Input defaultValue="田中 優希" />
            </FormField>
            <FormField label="表示名">
              <Input defaultValue="Yuki" />
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
