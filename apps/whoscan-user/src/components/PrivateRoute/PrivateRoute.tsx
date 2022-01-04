import { Navigate, useLocation } from "react-router-dom";
import { CookieServices } from "../../services";
import { CookiesName } from "../../common";
import uris from "../../common/constants/uris.common";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();
  if (CookieServices.getCookie(CookiesName.ACCESS_TOKEN)) {
    return children;
  } else {
    return (
      <Navigate
        to={uris.Authentication.LOGIN}
        state={{ from: location }}
        replace
      />
    );
  }
};

export default PrivateRoute;
