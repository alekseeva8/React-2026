import React from "react";
import LoginSuccessView from "../views/LoginSuccess/index";
import { Navigate, useLocation } from "react-router-dom";
import { loginStore } from "../app/mst_store";

const MSTSuccessContainer = () => {
  const location = useLocation();

  if (!location.state?.fromMSTLogin) {
    return <Navigate to="/login-mst" replace />;
  }

  const message = "Успешный вход с помощью MST!";
  const props = {
    loginData: loginStore.values,
    message: message,
  };

  return <LoginSuccessView {...props} />;
};

export default MSTSuccessContainer;
