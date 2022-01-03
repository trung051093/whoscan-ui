import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { CookieServices } from "../../services";
import PageLoading from "../Loading/PageLoading";
import { Cookies } from "../../common";
import { selectUserProfile } from "../../store/user/user.slice";
import uris from "../../common/constants/uris.common";
import { useAppSelector } from "../../store";

interface Props {
  path: string;
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children, path }) => {
  const userProfile = useAppSelector(selectUserProfile);
  let location = useLocation();

  if (CookieServices.getCookie(Cookies.ACCESS_TOKEN) && userProfile) {
    return <Route path={path} element={children} />;
  } else {
    if (!CookieServices.getCookie(Cookies.ACCESS_TOKEN) || !userProfile) {
      return (
        <Navigate
          to={uris.Authentication.LOGIN}
          state={{ from: location }}
          replace
        />
      );
    } else {
      return <Route path={path} element={<PageLoading />} />;
    }
  }
};

export default PrivateRoute;
