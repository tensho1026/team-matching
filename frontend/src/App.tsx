import { AppShell } from '@/components/app/app-shell'
import {
  ProtectedRoute,
  PublicOnlyRoute,
} from '@/components/app/protected-route'
import { AuthProvider } from '@/contexts/auth-provider'
import { ApplicationsPage } from '@/pages/applications-page'
import { HomePage } from '@/pages/home-page'
import { LoginPage } from '@/pages/login-page'
import { MatchingPage } from '@/pages/matching-page'
import { MessagesPage } from '@/pages/messages-page'
import { NotificationsPage } from '@/pages/notifications-page'
import { ProfilePage } from '@/pages/profile-page'
import { RecruitmentCreatePage } from '@/pages/recruitment-create-page'
import { RecruitmentListPage } from '@/pages/recruitment-list-page'
import { ReviewsPage } from '@/pages/reviews-page'
import { SignupPage } from '@/pages/signup-page'
import { TeamPage } from '@/pages/team-page'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicOnlyRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<AppShell />}>
              <Route index element={<HomePage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="recruitments" element={<RecruitmentListPage />} />
              <Route
                path="recruitments/new"
                element={<RecruitmentCreatePage />}
              />
              <Route path="applications" element={<ApplicationsPage />} />
              <Route path="matching" element={<MatchingPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
