import { LoginForm } from '@/components/app/login-form'
import { SectionHeading } from '@/components/app/section-heading'

export function LoginPage() {
  return (
    <div className="grid max-w-xl gap-6">
      <SectionHeading
        title="ログイン"
        description="メールアドレスとパスワードで利用するログインフォーム"
      />
      <LoginForm />
    </div>
  )
}
