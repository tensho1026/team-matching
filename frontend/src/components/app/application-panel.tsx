import { Check, Clock3, Send, X } from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/app/form-field'
import { SectionHeading } from '@/components/app/section-heading'
import { applicants } from '@/lib/mock-data'

export function ApplicationPanel() {
  return (
    <section id="applications" className="space-y-4">
      <SectionHeading
        title="応募・参加申請"
        description="応募メッセージ、希望ロール、承認・拒否、応募状況のUI"
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Send className="size-5" />
            </div>
            <CardTitle>募集に応募</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField label="希望ロール">
              <Select defaultValue="frontend">
                <option value="frontend">フロントエンド</option>
                <option value="backend">バックエンド</option>
                <option value="designer">デザイナー</option>
                <option value="pm">PM</option>
              </Select>
            </FormField>
            <FormField label="応募時のメッセージ">
              <Textarea defaultValue="React の画面実装とコンポーネント設計で参加したいです。平日夜と土曜に稼働できます。" />
            </FormField>
            <div className="flex flex-wrap gap-2">
              <Button>
                <Send />
                応募を送信
              </Button>
              <Button variant="outline">下書き</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Clock3 className="size-5" />
            </div>
            <CardTitle>応募状況確認</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {applicants.map((applicant) => (
              <div
                key={applicant.name}
                className="grid gap-3 rounded-md border border-border p-3 sm:grid-cols-[1fr_auto]"
              >
                <div className="flex gap-3">
                  <Avatar>{applicant.name.slice(0, 1)}</Avatar>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">{applicant.name}</p>
                      <Badge variant="outline">{applicant.role}</Badge>
                      <Badge
                        variant={
                          applicant.status === '承認済み' ? 'success' : 'warning'
                        }
                      >
                        {applicant.status}
                      </Badge>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {applicant.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 sm:items-start">
                  <Button size="sm" variant="outline">
                    <Check />
                    承認
                  </Button>
                  <Button size="sm" variant="ghost">
                    <X />
                    拒否
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
