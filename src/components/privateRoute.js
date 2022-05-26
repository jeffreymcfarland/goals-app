import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, isBrowser } from "../services/auth";

const PrivateRoute = ({ location, component: Component, ...rest }) => {
  if (!isBrowser()) {
    return null;
  } else if (!isLoggedIn() && location.pathname !== `/login`) {
    navigate("/login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
