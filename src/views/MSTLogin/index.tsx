import React from "react";
import { observer } from "mobx-react-lite";
import * as styles from "../Login/styles";
import { Button } from "@progress/kendo-react-buttons";
import { MSTLoginProps } from "../../containers/MSTLoginContainer";

const ObservableLoginView = observer((props: MSTLoginProps) => (
  <>
    <div style={styles.mainContainer}>
      <form onSubmit={props.onLogin}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Ваш email:</label>
          <input
            type="email"
            id="email"
            value={props.loginStore.values.email}
            onChange={props.onEmailChanged}
          />
          <p style={styles.getErrorStyle(props.loginStore.isEmailErrorShown)}>Некорректный email</p>
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="text"
            id="password"
            value={props.loginStore.values.password}
            onChange={props.onPasswordChanged}
          />
          <p style={styles.getErrorStyle(props.loginStore.isPasswordErrorShown)}>
            Минимум 6 символов
          </p>
        </div>
        <Button
          type="submit"
          disabled={!props.loginStore.isFormValid}
          {...styles.getLoginButtonStyle(props.loginStore.isFormValid)}
        >
          Войти
        </Button>
      </form>

      <p>Почта: {props.loginStore.values.email}</p>
      <p>Пароль: {props.loginStore.values.password}</p>
    </div>
  </>
));

export default ObservableLoginView;
