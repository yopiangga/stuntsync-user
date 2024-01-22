import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "src/layouts/user";
// import { ForgotPasswordPage } from "src/pages/forgot-password";
// import { ResetPasswordPage } from "src/pages/forgot-password/reset";
import { SignInPage } from "src/pages/sign-in";
import { SignUpPage } from "src/pages/sign-up";
// import { StartPage } from "src/pages/start";

export default function AuthRouterPage() {
  return (
    <UserLayout>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<StartPage />} /> */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/password-reset/:token"
            element={<ResetPasswordPage />}
          /> */}
          <Route path="*" element={<SignInPage />} exact />
        </Routes>
      </BrowserRouter>
    </UserLayout>
  );
}
