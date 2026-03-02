import React, { useEffect } from "react";
import * as styles from "./styles";
import { LoginData } from "../../features/login-redux/formikSlice";

export type LoginSuccessProps = {
  loginData: LoginData;
  message: string;
};

const LoginSuccessView = ({ loginData, message }: LoginSuccessProps) => {
  useEffect(() => {
    console.log(`Email ${loginData.email}; Password ${loginData.password}`);
  }, []);

  return (
    <div style={styles.mainContainer}>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

export default LoginSuccessView;
