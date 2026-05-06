import { LoginPanel } from '@/components/app/login-panel'
import { SectionHeading } from '@/components/app/section-heading'

export function LoginPage() {
  return (
    <div className="grid max-w-xl gap-6">
      <SectionHeading
        title="ログイン"
        description="GitHub認証を前提にしたログインフォームUI"
      />
      <LoginPanel />
    </div>
  )
}
