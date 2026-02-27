import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import * as styles from "./styles";

const LoginSuccessView = () => {
  const loginForm = useAppSelector((state) => state.loginForm.value);

  useEffect(() => {
    console.log(`Email ${loginForm.values.email}; Password ${loginForm.values.password}`);
  }, []);

  return (
    <div style={styles.mainContainer}>
      <p style={styles.message}>Успешный вход с помощью redux!</p>
    </div>
  );
};

export default LoginSuccessView;
