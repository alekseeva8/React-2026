import React from "react";
import LoginSuccessView from "../views/LoginSuccess/index";
import { Navigate, useLocation } from "react-router-dom";

const LoginSuccessContainer = () => {
  const location = useLocation();

  if (!location.state?.fromReduxLogin) {
    return <Navigate to="/login-redux" replace />;
  }

  return <LoginSuccessView />;
};

export default LoginSuccessContainer;
