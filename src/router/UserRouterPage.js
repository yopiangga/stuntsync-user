import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "src/layouts/user";
import { EducationPage } from "src/pages/education";
import { DetailArticlePage } from "src/pages/article/detail-article";
import { DetailVideoPage } from "src/pages/video/detail-video";
import { DashboardPage } from "src/pages/dashboard";
import { MonitoringPage } from "src/pages/monitoring";
import { ProfilePage } from "src/pages/profile";
import { ChangePasswordPage } from "src/pages/profile/change-password";
import { EditProfilePage } from "src/pages/profile/edit-profile";
import { MonitoringFormPage } from "src/pages/monitoring-form";
import { VideoPage } from "src/pages/video";
import { ArticlePage } from "src/pages/article";
import { AddBabyPage } from "src/pages/add-baby";

export default function UserRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/monitoring" element={<MonitoringPage />} />

          <Route path="/education" element={<EducationPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/detail-article/:id" element={<DetailArticlePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/detail-video/:id" element={<DetailVideoPage />} />

          <Route path="/add-baby" element={<AddBabyPage />} />

          <Route path="/my-profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/monitoring-form" element={<MonitoringFormPage />} />

          {/* all path redirect to path "/" */}
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
