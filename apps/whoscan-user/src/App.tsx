import "./plugins/axios";
import "@whoscan/locales";
import { Routes, Route } from "react-router-dom";
import "@whoscan/css/index.min.css";
import "./App.css";
import uris from "./common/constants/uris.common";
import { Suspense } from "react";
import { PageLoading } from "./components/Loading";

import UserPage from "./pages/User/User";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword";
import ResetPasswordPage from "./pages/Auth/ResetPassword";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useGetUser from "./hooks/useGetUser";
import { CookieServices } from "./services";

function App() {
  if (CookieServices.getAccessToken()) {
    useGetUser({ retry: 0 });
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route
          path={uris.Home.DEFAULT}
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path={uris.Authentication.LOGIN} element={<LoginPage />} />
        <Route
          path={uris.Authentication.RESET_PASSWORD}
          element={<ResetPasswordPage />}
        />
        <Route
          path={uris.Authentication.FORGOT_PASSWORD}
          element={<ForgotPasswordPage />}
        />
        <Route path={uris.Authentication.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
