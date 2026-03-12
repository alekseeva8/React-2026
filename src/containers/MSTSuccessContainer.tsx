import React from "react";
import LoginSuccessView from "../views/LoginSuccess/index";
import { Navigate, useLocation } from "react-router-dom";
import { loginStore } from "../features/mst/mst_login_store";

const MSTSuccessContainer = () => {
  const location = useLocation();

  if (!location.state?.fromMSTLogin) {
    return <Navigate to="/login-mst" replace />;
  }

  const message = "Успешный вход с помощью MST!";

  return <LoginSuccessView loginData={loginStore.values} message={message} />;
};

export default MSTSuccessContainer;
