import React from "react";
import * as styles from "./styles";
import { Button } from "@progress/kendo-react-buttons";
import * as functions from "../../shared/functions/index";

export type LoginForm = {
  values: { email: string; password: string };
  touched: { email: boolean; password: boolean };
};

export type LoginProps = {
  loginForm: LoginForm;
  onEmailChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

const LoginView = ({ loginForm, onEmailChanged, onPasswordChanged, onLogin }: LoginProps) => {
  const isValidEmail = functions.isValidEmail(loginForm.values.email);
  const isValidPassword = functions.isValidPassword(loginForm.values.password);
  const isFormValid = isValidEmail && isValidPassword;
  const isEmailErrorShown = !isValidEmail && loginForm.touched.email;
  const isPasswordErrorShown = !isValidPassword && loginForm.touched.password;

  return (
    <>
      <div style={styles.mainContainer}>
        <form onSubmit={onLogin}>
          <div style={styles.inputContainer}>
            <label htmlFor="email">Ваш email:</label>
            <input
              type="email"
              id="email"
              value={loginForm.values.email}
              onChange={onEmailChanged}
            />
            <p style={styles.getErrorStyle(isEmailErrorShown)}>Некорректный email</p>
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password">Пароль:</label>
            <input
              type="text"
              id="password"
              value={loginForm.values.password}
              onChange={onPasswordChanged}
            />
            <p style={styles.getErrorStyle(isPasswordErrorShown)}>Минимум 6 символов</p>
          </div>
          <Button
            type="submit"
            disabled={!isFormValid}
            {...styles.getLoginButtonStyle(isFormValid)}
          >
            Войти
          </Button>
        </form>

        <p>Почта: {loginForm.values.email}</p>
        <p>Пароль: {loginForm.values.password}</p>
      </div>
    </>
  );
};

export default LoginView;
