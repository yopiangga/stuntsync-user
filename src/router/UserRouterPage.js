import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "src/layouts/user";
import { DashboardPage } from "src/pages/dashboard";

export default function UserRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          <Route path="*" element={<DashboardPage />} exact />
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
