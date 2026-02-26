import React from "react";
import * as styles from './styles';
import { Button } from '@progress/kendo-react-buttons';

type User = {
    email: string,
    password: string
}

type InputStatus = {
    valid: boolean,
    errorDisabled: boolean
}

export type LoginProps = {
    user: User,
    onEmailChanged: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPasswordChanged: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onLogin: (e: React.SubmitEvent<HTMLFormElement>) => void,
    emailStatus: InputStatus,
    passwordStatus: InputStatus,
}

const LoginView = ({ user, onEmailChanged, onPasswordChanged, onLogin, emailStatus, passwordStatus }: LoginProps) => {

    const isEmailErrorShown = !emailStatus.valid && !emailStatus.errorDisabled;
    const isPasswordErrorShown = !passwordStatus.valid && !passwordStatus.errorDisabled;
    const isFormValid = emailStatus.valid && passwordStatus.valid;

    return (
        <>
            <div style={styles.mainContainer}>
                <form onSubmit={onLogin}>
                    <div style={styles.inputContainer}>
                        <label htmlFor="email">Ваш email:</label>
                        <input type="email" id="email" onChange={onEmailChanged} />
                        <p style={styles.getErrorStyle(isEmailErrorShown)}>
                            Некорректный email
                        </p>
                    </div>
                    <div style={styles.inputContainer}>
                        <label htmlFor="password">Пароль:</label>
                        <input type="text" id="password" onChange={onPasswordChanged} />
                        <p style={styles.getErrorStyle(isPasswordErrorShown)}>
                            Минимум 6 символов
                        </p>
                    </div>
                    <Button
                        type="submit"
                        disabled={!isFormValid}
                        {...styles.getLoginButtonStyle(isFormValid)}>
                        Войти
                    </Button>
                </form>

                <p>
                    Почта: {user.email}
                </p>
                <p>
                    Пароль: {user.password}
                </p>
            </div>
        </>
    );
}

export default LoginView;