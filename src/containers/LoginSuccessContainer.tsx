import React from "react";
import LoginSuccessView from "../views/LoginSuccess/index";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const LoginSuccessContainer = () => {
  const location = useLocation();

  if (!location.state?.fromReduxLogin) {
    return <Navigate to="/login-redux" replace />;
  }

  const loginForm = useAppSelector((state) => state.loginForm.value);
  const message = "Успешный вход с помощью redux!";
  const props = {
    loginData: loginForm.values,
    message: message,
  };

  return <LoginSuccessView {...props} />;
};

export default LoginSuccessContainer;
