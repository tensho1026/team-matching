import { LoginForm } from '@/components/app/login-form'
import { SectionHeading } from '@/components/app/section-heading'

export function LoginPage() {
  return (
    <div className="grid min-h-svh place-items-center bg-background px-3 py-8 sm:px-4 sm:py-10">
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
