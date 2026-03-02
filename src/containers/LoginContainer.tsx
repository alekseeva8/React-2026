import React, { useState } from "react";
import LoginView, { LoginProps } from "../views/Login/index";
import * as constants from "../shared/constants/index";

const LoginContainer = () => {
  const [loginForm, setLoginForm] = useState(constants.formInitialState);

  const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...loginForm.values, email: e.target.value };
    const newTouched = { ...loginForm.touched, email: true };
    setLoginForm({ values: newValues, touched: newTouched });
  };

  const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...loginForm.values, password: e.target.value };
    const newTouched = { ...loginForm.touched, password: true };
    setLoginForm({ values: newValues, touched: newTouched });
  };

  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email ${loginForm.values.email}; Password ${loginForm.values.password}`);
    setLoginForm(constants.formInitialState);
  };

  const props: LoginProps = {
    loginForm: loginForm,
    onEmailChanged: handleEmailChanged,
    onPasswordChanged: handlePasswordChanged,
    onLogin: handleLogin,
  };

  return <LoginView {...props} />;
};

export default LoginContainer;
