import { ArrowRight, LayoutDashboard, Send, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeading } from '@/components/app/section-heading'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const stats = [
  { label: '募集中', value: '12' },
  { label: '応募中', value: '5' },
  { label: '参加中', value: '3' },
]

const pageCards = [
  {
    title: '募集を探す',
    description: '技術スタック、ロール、レベル、募集状態で絞り込む画面。',
    to: '/recruitments',
  },
  {
    title: '募集を作成',
    description: 'プロジェクト名、概要、募集ロール、連絡方法を入力する画面。',
    to: '/recruitments/new',
  },
  {
    title: '応募を確認',
    description: '参加申請のメッセージ、希望ロール、承認状態を見る画面。',
    to: '/applications',
  },
]

const linkButtonClass =
  'inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 [&_svg]:size-4'

const outlineLinkButtonClass =
  'inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted [&_svg]:size-4'

export function HomePage() {
  return (
    <div className="grid gap-6">
      <SectionHeading
        title="ダッシュボード"
        description="各機能ページへの入口と、サービス全体の概況UI"
        action={<Badge variant="outline">UI only</Badge>}
      />
      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <LayoutDashboard className="size-5" />
            </div>
            <CardTitle>プロジェクト概況</CardTitle>
            <CardDescription>募集、応募、参加中プロジェクトのサマリー</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-border p-4">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Sparkles className="size-5" />
            </div>
            <CardTitle>検索・応募型マッチング</CardTitle>
            <CardDescription>
              完全自動ではなく、検索、応募、投稿者承認を中心にした画面構成です。
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link to="/recruitments" className={linkButtonClass}>
              募集を見る
              <ArrowRight />
            </Link>
            <Link to="/recruitments/new" className={outlineLinkButtonClass}>
              <Send />
              募集する
            </Link>
          </CardContent>
        </Card>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {pageCards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to={card.to} className={`${outlineLinkButtonClass} w-full`}>
                開く
                <ArrowRight />
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
