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

  return <LoginSuccessView loginData={loginForm.values} message={message} />;
};

export default LoginSuccessContainer;
