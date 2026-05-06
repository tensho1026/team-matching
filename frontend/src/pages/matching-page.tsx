import { MatchingCompletePanel } from '@/components/app/matching-complete-panel'
import { MatchingPanel } from '@/components/app/matching-panel'

export function MatchingPage() {
  return (
    <div className="grid gap-6">
      <MatchingPanel />
      <MatchingCompletePanel />
    </div>
  )
}
