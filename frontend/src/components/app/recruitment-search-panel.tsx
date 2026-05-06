import { Search, SlidersHorizontal } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { ChipList } from '@/components/app/chip-list'
import { FormField } from '@/components/app/form-field'
import { SectionHeading } from '@/components/app/section-heading'
import { recruitments } from '@/lib/mock-data'

export function RecruitmentSearchPanel() {
  return (
    <section id="recruitments" className="space-y-4">
      <SectionHeading
        title="募集一覧・検索"
        description="キーワード、技術スタック、ロール、レベル、募集状態の検索UI"
      />
      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SlidersHorizontal className="size-5" />
              フィルター
            </CardTitle>
            <CardDescription>検索条件の入力UI</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="キーワード検索" />
            </div>
            <FormField label="技術スタック">
              <Select defaultValue="react">
                <option value="react">React</option>
                <option value="nestjs">NestJS</option>
                <option value="next">Next.js</option>
                <option value="figma">Figma</option>
              </Select>
            </FormField>
            <FormField label="ロール">
              <Select defaultValue="frontend">
                <option value="frontend">フロントエンド</option>
                <option value="backend">バックエンド</option>
                <option value="designer">デザイナー</option>
                <option value="pm">PM</option>
              </Select>
            </FormField>
            <FormField label="レベル">
              <Select defaultValue="beginner">
                <option value="beginner">初心者歓迎</option>
                <option value="middle">中級者向け</option>
                <option value="pro">実務経験者向け</option>
              </Select>
            </FormField>
            <FormField label="募集状態">
              <Select defaultValue="open">
                <option value="open">募集中</option>
                <option value="closed">締切済み</option>
                <option value="active">開発中</option>
              </Select>
            </FormField>
            <Button variant="outline" className="w-full">
              条件を反映
            </Button>
          </CardContent>
        </Card>
        <div className="grid gap-4">
          {recruitments.map((item) => (
            <Card key={item.title}>
              <CardHeader className="gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.summary}</CardDescription>
                  </div>
                  <Badge
                    variant={
                      item.status === '募集中'
                        ? 'success'
                        : item.status === '開発中'
                          ? 'info'
                          : 'outline'
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
                <ChipList items={item.stacks} variant="secondary" />
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-3 text-sm sm:grid-cols-4">
                  <div>
                    <p className="text-muted-foreground">対象レベル</p>
                    <p className="font-medium">{item.level}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">開発期間</p>
                    <p className="font-medium">{item.period}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">稼働目安</p>
                    <p className="font-medium">{item.activity}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">募集ロール</p>
                    <p className="font-medium">{item.roles.join(' / ')}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">一致率</span>
                    <span className="font-medium">{item.matchRate}%</span>
                  </div>
                  <Progress value={item.matchRate} />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">応募する</Button>
                  <Button size="sm" variant="outline">
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
