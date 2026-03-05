import React from "react";
import { loginStore, LoginStoreType } from "../app/mst_store";
import { useNavigate } from "react-router-dom";
import ObservableLoginView from "../views/MSTLogin/index";

export type MSTLoginProps = {
  loginStore: LoginStoreType;
  onEmailChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

const MSTLoginContainer = () => {
  const navigate = useNavigate();

  const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginStore.setEmail(e.target.value);
  };

  const handlePasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginStore.setPassword(e.target.value);
  };

  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login-mst/success", { state: { fromMSTLogin: true } });
  };

  const props: MSTLoginProps = {
    loginStore: loginStore,
    onEmailChanged: handleEmailChanged,
    onPasswordChanged: handlePasswordChanged,
    onLogin: handleLogin,
  };

  return <ObservableLoginView {...props} />;
};

export default MSTLoginContainer;
