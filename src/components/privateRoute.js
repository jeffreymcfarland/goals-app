import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";

const PrivateRoute = ({ location, component: Component, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/login`) {
    navigate("/login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
