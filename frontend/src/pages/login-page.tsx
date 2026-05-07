import { LoginPanel } from '@/components/app/login-panel'
import { SectionHeading } from '@/components/app/section-heading'

export function LoginPage() {
  return (
    <div className="grid max-w-xl gap-6">
      <SectionHeading
        title="ログイン / 新規登録"
        description="メールアドレスとパスワードで利用する認証フォーム"
      />
      <LoginPanel />
    </div>
  )
}
