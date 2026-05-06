import type { LucideIcon } from 'lucide-react'
import {
  Bell,
  BriefcaseBusiness,
  CheckSquare,
  GitPullRequest,
  MessageSquare,
  Search,
  Send,
  Sparkles,
  Star,
  UserRound,
  UsersRound,
} from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type NavItem = {
  label: string
  path: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { label: 'ダッシュボード', path: '/', icon: BriefcaseBusiness },
  { label: 'ログイン', path: '/login', icon: GitPullRequest },
  { label: 'プロフィール', path: '/profile', icon: UserRound },
  { label: '募集一覧', path: '/recruitments', icon: Search },
  { label: '募集投稿', path: '/recruitments/new', icon: Send },
  { label: '応募管理', path: '/applications', icon: CheckSquare },
  { label: 'マッチング', path: '/matching', icon: Sparkles },
  { label: 'DM', path: '/messages', icon: MessageSquare },
  { label: '実績', path: '/reviews', icon: Star },
  { label: 'チーム', path: '/team', icon: UsersRound },
  { label: '通知', path: '/notifications', icon: Bell },
]

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-border bg-card lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-3 border-b border-border px-5">
        <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <BriefcaseBusiness className="size-5" />
        </div>
        <div>
          <p className="font-semibold leading-none">DevLink</p>
          <p className="text-xs text-muted-foreground">Team Matching</p>
        </div>
      </div>
      <nav className="grid gap-1 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              cn(
                'flex h-10 items-center gap-3 rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                isActive && 'bg-muted font-medium text-foreground',
              )
            }
          >
            <item.icon className="size-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto border-t border-border p-4">
        <div className="rounded-md border border-border p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium">MVP UI</p>
            <Badge variant="outline">静的</Badge>
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            API、認証、状態管理なしの画面モックです。
          </p>
        </div>
      </div>
    </aside>
  )
}

function MobileNav() {
  return (
    <div className="flex gap-2 overflow-x-auto border-b border-border bg-card px-4 py-2 lg:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            cn(
              'inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-border px-3 text-sm text-muted-foreground',
              isActive && 'bg-muted font-medium text-foreground',
            )
          }
        >
          <item.icon className="size-4" />
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
          <div className="flex min-h-16 flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground lg:hidden">
                <BriefcaseBusiness className="size-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-semibold leading-tight">
                    チーム開発マッチング
                  </h1>
                  <Badge variant="success">UI Prototype</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  募集、検索、応募、DM、実績、チーム管理をページ別に分けた静的UI
                </p>
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-[260px_auto_auto]">
              <div className="relative">
                <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="募集やメンバーを検索" />
              </div>
              <Button variant="outline" size="icon" aria-label="通知">
                <Bell />
              </Button>
              <Avatar>Y</Avatar>
            </div>
          </div>
          <MobileNav />
        </header>
        <main className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
