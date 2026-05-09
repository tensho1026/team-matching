import { LoginForm } from '@/components/app/login-form'
import { SectionHeading } from '@/components/app/section-heading'

export function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-4 py-10">
      <div className="grid w-full max-w-xl gap-6">
        <SectionHeading
          title="ログイン"
          description="メールアドレスとパスワードで利用するログインフォーム"
        />
        <LoginForm />
      </div>
    </div>
  )
}
