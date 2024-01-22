import { BrowserRouter, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom/dist";
import { UserLayout } from "src/layouts/user";
import { DashboardPage } from "src/pages/dashboard";

export default function UserRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          {/* all path redirect to path "/" */}
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
