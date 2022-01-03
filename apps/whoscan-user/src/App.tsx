import { Routes, Route, useLocation } from "react-router-dom";
import "@whoscan/css/index.min.css";
import "./App.css";
import uris from "./common/constants/uris.common";
import { Suspense, useEffect } from "react";
import { PageLoading } from "./components/Loading";

import UserPage from "./pages/User/User";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/SignUp";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword";
import ResetPasswordPage from "./pages/Auth/ResetPassword";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { CookieServices } from "./services";
import { Cookies } from "./common";
import { useAppDispatch, useAppSelector } from "./store";
import { selectAuth } from "./store/user/user.slice";
import useGetUser from "./hooks/useGetUser";

const routes = [
  {
    path: uris.Home.DEFAULT,
    private: true,
    main: () => <UserPage />,
  },
  {
    path: uris.Authentication.LOGIN,
    private: false,
    main: () => <LoginPage />,
  },
  {
    path: uris.Authentication.SIGNUP,
    private: false,
    main: () => <SignUpPage />,
  },
  {
    path: uris.Authentication.FORGOT_PASSWORD,
    private: false,
    main: () => <ForgotPasswordPage />,
  },
  {
    path: uris.Authentication.RESET_PASSWORD,
    private: false,
    main: () => <ResetPasswordPage />,
  },
];

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const auth = useAppSelector(selectAuth);
  const {} = useGetUser();

  useEffect(() => {
    if (CookieServices.getCookie(Cookies.ACCESS_TOKEN)) {
    }
  }, [auth, dispatch]);
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes location={location}>
        {routes
          .filter((route) => !route.private)
          .map((route, index) => (
            <Route key={index} path={route.path} children={<route.main />} />
          ))}
        {routes
          .filter((route) => route.private)
          .map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              children={<route.main />}
            />
          ))}
      </Routes>
    </Suspense>
  );
}

export default App;
