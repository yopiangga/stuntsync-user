import { BrowserRouter, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom/dist";
import { UserLayout } from "src/layouts/user";
import { ArticlePage } from "src/pages/article";
import { DashboardPage } from "src/pages/dashboard";
import { MonitoringPage } from "src/pages/monitoring";
import { ProfilePage } from "src/pages/profile";
import { ChangePasswordPage } from "src/pages/profile/change-password";
import { EditProfilePage } from "src/pages/profile/edit-profile";

export default function UserRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/my-profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />

          {/* all path redirect to path "/" */}
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
